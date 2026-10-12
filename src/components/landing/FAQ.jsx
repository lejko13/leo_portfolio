import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronRight } from 'lucide-react';
import { useLang } from '../../lib/LangContext';
import { useMediaQuery } from 'react-responsive';
import { mailtoHref } from '../../lib/utils';

export default function FAQ() {
  const { t } = useLang();
  const f = t.faq;
  const faqs = t.faqItems || [];
  const [openIndex, setOpenIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section id="faq" className="bg-white py-20 md:py-28 scroll-mt-12">
      <div className="wrap grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-20">
        <motion.div
          initial={!isMobile ? { opacity: 0, y: 20 } : false}
          whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:sticky lg:top-24 self-start"
        >
          <h2 className="h-section">
            {f.heading1} <span className="text-ink-3">{f.heading2}</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.47] text-ink-2">{f.subtext}</p>
          <a href={mailtoHref()} className="link-more mt-5 text-[17px]">
            {f.contactLink} <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="border-t border-line">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.num} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-heading font-semibold text-[19px] md:text-[21px] leading-[1.3] tracking-[-0.015em] text-ink group-hover:text-[#000000] transition-colors">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-6 h-6 shrink-0 text-ink-2 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                    strokeWidth={1.6}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-10 text-[17px] leading-[1.5] text-ink-2">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
