import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

/**
 * Apple-style section headline: "Lern das iPhone kennen."
 * First part in ink, second part in grey (like apple.com "The latest. Take a look at what's new.")
 */
export default function SectionHead({ a, b, aside, eyebrow, className = '', as: Tag = 'h2' }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <motion.div
      initial={!isMobile ? { opacity: 0, y: 24 } : false}
      whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className={`wrap flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-10 ${className}`}
    >
      <div className="max-w-[780px]">
        {eyebrow && <div className="text-[17px] font-semibold text-ink-2 mb-2">{eyebrow}</div>}
        <Tag className="h-section">
          {a}
          {b && <span className="text-ink-3"> {b}</span>}
        </Tag>
      </div>
      {aside && <div className="md:max-w-[320px] md:text-right text-[15px] leading-[1.45] text-ink-2 shrink-0">{aside}</div>}
    </motion.div>
  );
}
