import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Apple-style horizontal shelf: native scroll + snap, drag-to-scroll on desktop,
 * small grey round arrows under the shelf on the right.
 * `resetKey` – when it changes, the shelf scrolls back to the start.
 */
export default function Carousel({ children, resetKey, step = 380, className = '', itemsClassName = 'gap-5' }) {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const dragged = useRef(false);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 2);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update, children]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
    update();
  }, [resetKey, update]);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    const el = scrollRef.current;
    if (!el) return;
    const startX = e.pageX;
    const start = el.scrollLeft;
    dragged.current = false;
    el.style.scrollSnapType = 'none';
    el.style.cursor = 'grabbing';

    const onMove = (me) => {
      const dx = me.pageX - startX;
      if (Math.abs(dx) > 4) dragged.current = true;
      el.scrollLeft = start - dx;
    };
    const onUp = () => {
      el.style.cursor = '';
      el.style.scrollSnapType = '';
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  // swallow the click that ends a drag so cards don't navigate
  const onClickCapture = (e) => {
    if (dragged.current) {
      e.preventDefault();
      e.stopPropagation();
      dragged.current = false;
    }
  };

  return (
    <div className={className}>
      <div
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onClickCapture={onClickCapture}
        className="no-scrollbar overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab select-none"
        style={{ WebkitOverflowScrolling: 'touch', scrollPaddingLeft: 'var(--shelf-pad)' }}
      >
        <div
          className={`flex w-max pb-6 pt-1 ${itemsClassName}`}
          style={{ paddingLeft: 'var(--shelf-pad)', paddingRight: 'var(--shelf-pad)' }}
        >
          {children}
        </div>
      </div>

      {(canLeft || canRight) && (
        <div className="wrap flex justify-end gap-3.5 mt-2">
          <button aria-label="Späť" onClick={() => scroll(-1)} disabled={!canLeft} className="nav-dot">
            <ChevronLeft className="w-[18px] h-[18px]" strokeWidth={2.2} />
          </button>
          <button aria-label="Ďalej" onClick={() => scroll(1)} disabled={!canRight} className="nav-dot">
            <ChevronRight className="w-[18px] h-[18px]" strokeWidth={2.2} />
          </button>
        </div>
      )}
    </div>
  );
}
