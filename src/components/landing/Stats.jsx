import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { useLang } from '../../lib/LangContext';
import { useMediaQuery } from 'react-responsive';

// Counts up from 0 to `to` when the number scrolls into view
function CountUp({ to, suffix = '', duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setVal(to); return; }
    const c = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => c.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLang();
  const s = t.stats;
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const stats = [
    { to: 3, suffix: '', label: s.clients, sub: s.clientsSub },
    { to: 2, suffix: '+', label: s.years, sub: s.yearsSub },
    { to: 4, suffix: '+', label: s.projects, sub: s.projectsSub },
  ];

  return (
    <section className="bg-canvas-2 py-16 md:py-20">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label + i}
              initial={!isMobile ? { opacity: 0, y: 20 } : false}
              whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className={`bg-white rounded-[24px] px-6 py-7 md:px-8 md:py-9 ${i === stats.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="font-heading font-semibold text-[44px] md:text-[64px] leading-none tracking-[-0.04em] text-ink">
                <CountUp to={stat.to} suffix={stat.suffix} duration={1.2 + i * 0.15} />
              </div>
              <div className="mt-4 text-[15px] md:text-[17px] font-semibold text-ink leading-snug">{stat.label}</div>
              <div className="text-[14px] md:text-[15px] text-ink-2">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
