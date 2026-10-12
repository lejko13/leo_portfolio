import React, { forwardRef, useEffect, useRef, useState } from 'react';

const posterOf = (src) => src.replace(/\.(mp4|webm|mov)$/i, '.jpg');

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Muted, looping preview video that only downloads once it nears the viewport
 * and only plays while it is actually visible (paused off-screen / in hidden tabs).
 * Keeps the page smooth even with many video tiles on it.
 */
const AutoVideo = forwardRef(function AutoVideo({ src, poster, className = '', ...rest }, outerRef) {
  const ref = useRef(null);
  const [load, setLoad] = useState(false);

  const setRefs = (el) => {
    ref.current = el;
    if (typeof outerRef === 'function') outerRef(el);
    else if (outerRef) outerRef.current = el;
  };

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (typeof IntersectionObserver === 'undefined') {
      setLoad(true);
      return;
    }
    let visible = false;
    const tryPlay = () => {
      if (!visible || document.hidden || reduceMotion()) return;
      const p = v.play?.();
      if (p && p.catch) p.catch(() => {});
    };
    // Start fetching a bit before the video scrolls in
    const near = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLoad(true);
          near.disconnect();
        }
      },
      { rootMargin: '300px 0px' }
    );
    // Play only while (mostly) on screen
    const seen = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) tryPlay();
        else v.pause?.();
      },
      { threshold: 0.15 }
    );
    const onVis = () => (document.hidden ? v.pause?.() : tryPlay());
    v.addEventListener('loadeddata', tryPlay);
    document.addEventListener('visibilitychange', onVis);
    near.observe(v);
    seen.observe(v);
    return () => {
      near.disconnect();
      seen.disconnect();
      v.removeEventListener('loadeddata', tryPlay);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [src]);

  return (
    <video
      ref={setRefs}
      src={load ? src : undefined}
      poster={poster || posterOf(src)}
      muted
      loop
      playsInline
      preload={load ? 'auto' : 'none'}
      disablePictureInPicture
      className={className}
      {...rest}
    />
  );
});

export default AutoVideo;
