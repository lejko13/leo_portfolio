import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Check } from 'lucide-react';
import { useLang } from '../../lib/LangContext';
import { useMediaQuery } from 'react-responsive';
import SectionHead from '../apple/SectionHead';
import { mailtoHref } from '../../lib/utils';

const ease = [0.25, 0.1, 0.25, 1];

export default function Process() {
  const { t } = useLang();
  const p = t.process;
  const steps = t.processSteps || [];
  const [activeStep, setActiveStep] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 1023 });
  const current = steps[activeStep];

  return (
    <section id="proces" className="bg-white pt-20 md:pt-28 pb-20 md:pb-28 scroll-mt-12">
      <SectionHead eyebrow={p.badge} a={p.heading1} b={p.heading2} className="mb-8 md:mb-10" />

      <div className="wrap">
        <div className="bg-canvas-2 rounded-[28px] p-6 md:p-10 lg:p-14 grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16 items-center">
          {/* Accordion */}
          <div className="divide-y divide-line">
            {steps.map((step, i) => {
              const open = activeStep === i;
              return (
                <div key={step.num} className="py-1">
                  <button
                    onClick={() => setActiveStep(i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 py-4 text-left group"
                  >
                    <div>
                      <div className={`font-heading font-semibold text-[17px] md:text-[19px] tracking-[-0.01em] transition-colors ${open ? 'text-ink' : 'text-ink/70 group-hover:text-ink'}`}>
                        {step.title}
                      </div>
                      {!open && <div className="text-[13px] text-ink-3 mt-0.5">{step.duration}</div>}
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-ink-2 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      strokeWidth={1.8}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5">
                          <div className="text-[13px] font-semibold text-[#0071e3] mb-2">{step.duration}</div>
                          <p className="text-[15px] leading-[1.5] text-ink-2">{step.desc}</p>

                          {/* outputs inline on mobile/tablet */}
                          {isMobile && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {step.outputs.map((o) => (
                                <span key={o} className="text-[13px] bg-white text-ink rounded-full px-3 py-1.5">{o}</span>
                              ))}
                            </div>
                          )}

                          <a href={mailtoHref()} className="link-more mt-4 text-[15px]">
                            {p.cta} <ChevronRight className="w-4 h-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Visual panel (desktop) */}
          {!isMobile && current && (
            <div className="relative h-[440px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.45, ease }}
                  className="absolute inset-0 bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-10 flex flex-col"
                >
                  <div className="flex items-start justify-between">
                    <div className="font-heading font-semibold text-[120px] leading-[0.8] tracking-[-0.05em] bg-gradient-to-b from-[#1d1d1f] to-[#86868b] bg-clip-text text-transparent">
                      {current.num}
                    </div>
                    <div className="text-[12px] font-semibold text-ink-2 bg-canvas-2 rounded-full px-3 py-1.5">
                      {current.duration}
                    </div>
                  </div>
                  <h3 className="mt-8 font-heading font-semibold text-[32px] leading-[1.1] tracking-[-0.025em] text-ink">
                    {current.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.5] text-ink-2 max-w-[460px] line-clamp-3">{current.desc}</p>
                  <div className="mt-auto">
                    <div className="text-[12px] font-semibold text-ink-2 mb-3">{p.outputs}</div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                      {current.outputs.map((output) => (
                        <div key={output} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#0071e3] flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </span>
                          <span className="text-[15px] text-ink">{output}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
