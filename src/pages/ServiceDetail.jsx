import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Plus } from 'lucide-react';
import { sc, openMail } from '../lib/utils';
import Carousel from '../components/apple/Carousel';
import ProjectCard from '../components/apple/ProjectCard';
import FilterBar from '../components/apple/FilterBar';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { getServiceById } from '../lib/servicesData';
import { getProjects } from '../lib/projectsData';
import { useLang } from '../lib/LangContext';

import { useNavigate } from 'react-router-dom';

export default function ServiceDetail() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLang();
  const sd = t.serviceDetail;
  const service = getServiceById(id, t);
  const allProjects = getProjects(t);

  const FILTERS = t.projects.filters;

  const serviceTagMap = {
    'web-dizajn': 'Web',
    'brand-identita': 'Branding',
    'video-reklamy': null,
    seo: 'SEO',
    reklamy: null,
    'social-media': null,
  };

  const preselectedTag = serviceTagMap[id] || null;

  const initialFilter = preselectedTag
    ? FILTERS.find((f) => f === preselectedTag) || FILTERS[0]
    : FILTERS[0];

  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const isAll = activeFilter === FILTERS[0];

  const filteredProjects = isAll
    ? allProjects
    : allProjects.filter((p) => p.tags.includes(activeFilter));

  useEffect(() => {
    const newPreselected = serviceTagMap[id] || null;

    const newInitial = newPreselected
      ? FILTERS.find((f) => f === newPreselected) || FILTERS[0]
      : FILTERS[0];

    setActiveFilter(newInitial);
  }, [t, id]);

  const handleKontaktClick = () => openMail({ subject: `Služba: ${service?.title || ''}`.trim() });

  
  const ease = [0.25, 0.1, 0.25, 1];
  const reveal = (delay = 0) =>
    !isMobile
      ? { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-40px' }, transition: { duration: 0.7, delay, ease } }
      : {};

  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <div className="font-heading font-semibold text-[96px] leading-none tracking-[-0.04em] text-ink-3/40 mb-4">404</div>
          <h1 className="font-heading font-semibold text-[28px] tracking-[-0.02em] text-ink mb-4">{sd.notFound}</h1>
          <Link to="/" className="link-more">
            <ChevronLeft className="w-4 h-4" /> {sc(sd.back)}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-[84px] md:pt-[100px] pb-16 md:pb-24 bg-white">
        <div className="wrap">
          <Link to="/" className="link-more text-[14px] mb-10 md:mb-14">
            <ChevronLeft className="w-4 h-4" /> {sc(sd.back)}
          </Link>

          <motion.div
            initial={!isMobile ? { opacity: 0, y: 24 } : false}
            animate={!isMobile ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease }}
            className="text-center max-w-[900px] mx-auto"
          >
            <div className="text-[15px] md:text-[17px] font-semibold text-ink-2 mb-3">
              {sd.serviceLabel} {service.num}
            </div>
            <h1 className="h-display">{service.title}</h1>
            <p className="mt-6 text-[19px] md:text-[21px] leading-[1.4] text-ink-2 max-w-[680px] mx-auto">{service.overview}</p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={handleKontaktClick} className="btn-primary">{sc(sd.ctaBtn)}</button>
              <a href="#projekty-sluzby" className="link-more text-[17px]">
                {t.projects.heading1} <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="text-[14px] px-4 py-2 rounded-full bg-canvas-2 text-ink">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-canvas-2 pt-20 md:pt-28 pb-14 md:pb-20">
        <div className="wrap mb-8 md:mb-10">
          <div className="text-[17px] font-semibold text-ink-2 mb-2">{sd.processBadge}</div>
          <h2 className="h-section">{sd.processHeading}</h2>
        </div>

        <Carousel itemsClassName="gap-4 md:gap-5" step={320}>
          {(service.process || []).map((step) => (
            <div
              key={step.step}
              className="snap-start shrink-0 w-[260px] md:w-[300px] min-h-[300px] md:min-h-[340px] bg-white rounded-[28px] p-7 md:p-8 flex flex-col"
            >
              <div className="font-heading font-semibold text-[56px] leading-none tracking-[-0.04em] bg-gradient-to-b from-[#1d1d1f] to-[#86868b] bg-clip-text text-transparent">
                {step.step}
              </div>
              <h3 className="mt-auto pt-10 font-heading font-semibold text-[21px] leading-[1.2] tracking-[-0.015em] text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.45] text-ink-2">{step.desc}</p>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Benefits */}
      <section className="wrap py-20 md:py-28">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start">
          <motion.div {...reveal()}>
            <div className="text-[17px] font-semibold text-ink-2 mb-2">{sd.benefitsBadge}</div>
            <h2 className="h-section mb-8">{sd.benefitsHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {(service.benefits || []).map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 bg-canvas-2 rounded-[18px] px-5 py-4">
                  <span className="w-5 h-5 rounded-full bg-[#000000] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[16px] text-ink">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...reveal(0.1)} className="bg-black text-white rounded-[28px] p-8 md:p-10 lg:sticky lg:top-20">
            <div className="text-[12px] font-semibold text-white/60 mb-6">
              {service.num} · {service.tags.slice(0, 2).join(' · ')}
            </div>
            <h3 className="font-heading font-semibold text-[28px] leading-[1.12] tracking-[-0.02em]">{service.heroTagline}</h3>
            <p className="mt-3 text-[16px] leading-[1.45] text-white/60 mb-8">{service.tagline}</p>
            <button onClick={handleKontaktClick} className="btn-primary w-full">
              {sc(sd.quoteBtn)}
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="wrap pb-20 md:pb-28">
          <div className="grid lg:grid-cols-[360px_1fr] gap-8 lg:gap-20">
            <div>
              <div className="text-[17px] font-semibold text-ink-2 mb-2">{sd.faqBadge}</div>
              <h2 className="h-section">{sd.faqHeading}</h2>
            </div>
            <div className="border-t border-line">
              {service.faq.map((item, i) => {
                const open = openFaq === i;
                return (
                  <div key={i} className="border-b border-line">
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    >
                      <span className="font-heading font-semibold text-[19px] md:text-[21px] leading-[1.3] tracking-[-0.015em] text-ink group-hover:text-[#000000] transition-colors">
                        {item.q}
                      </span>
                      <Plus className={`w-6 h-6 shrink-0 text-ink-2 transition-transform duration-300 ${open ? 'rotate-45' : ''}`} strokeWidth={1.6} />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                      transition={{ duration: 0.32, ease }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-10 text-[17px] leading-[1.5] text-ink-2">{item.a}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Projects */}
      <section id="projekty-sluzby" className="bg-canvas-2 pt-20 md:pt-28 pb-14 md:pb-20 scroll-mt-12">
        <div className="wrap mb-7">
          <h2 className="h-section">
            {t.projects.heading1} <span className="text-ink-3">{t.projects.heading2}</span>
          </h2>
        </div>
        <div className="wrap mb-7">
          <FilterBar filters={FILTERS} active={activeFilter} onChange={setActiveFilter} />
        </div>

        <Carousel resetKey={activeFilter} itemsClassName="gap-4 md:gap-5" step={420}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id + activeFilter}
              project={project}
              className="snap-start shrink-0 w-[300px] md:w-[400px]"
            />
          ))}
        </Carousel>
      </section>

      <Footer />
    </div>
  );
}
