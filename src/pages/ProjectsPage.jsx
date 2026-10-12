import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FILTER_SLUGS, filterProjects } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import ProjectGrid from '../components/projects/ProjectGrid';
import FilterBar from '../components/apple/FilterBar';
import { StatusLegend } from '../components/apple/StatusDot';
import { getProjects } from '../lib/projectsData';
import { useLang } from '../lib/LangContext';
import { useMediaQuery } from 'react-responsive';

const ease = [0.25, 0.1, 0.25, 1];

export default function ProjectsPage() {
  const { t } = useLang();
  const pp = t.projectsPage;
  const projects = getProjects(t);
  const FILTERS = t.projects.filters;
  const [params, setParams] = useSearchParams();
  const idxFromUrl = Math.max(0, FILTER_SLUGS.indexOf(params.get('f') || ''));
  const [activeIdx, setActiveIdx] = useState(idxFromUrl);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Follow the ?f= param (e.g. clicking a service card)
  useEffect(() => {
    setActiveIdx(idxFromUrl);
  }, [idxFromUrl]);

  const activeFilter = FILTERS[activeIdx] || FILTERS[0];
  const setActiveFilter = (f) => {
    const i = Math.max(0, FILTERS.indexOf(f));
    setActiveIdx(i);
    setParams(i ? { f: FILTER_SLUGS[i] } : {}, { replace: true });
  };
  const filtered = filterProjects(projects, activeIdx);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="pt-[104px] md:pt-[140px] pb-14 md:pb-20 bg-white">
        <motion.div
          initial={!isMobile ? { opacity: 0, y: 24 } : false}
          animate={!isMobile ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease }}
          className="wrap text-center"
        >
          <div className="text-[17px] md:text-[21px] font-semibold text-ink-2 mb-3">{pp.badge}</div>
          <h1 className="h-display">
            {pp.heading1} <span className="text-ink-3">{pp.heading2}</span>
          </h1>
          <p className="mt-6 text-[19px] md:text-[21px] leading-[1.4] text-ink-2 max-w-[640px] mx-auto">{pp.subtext}</p>

          <div className="mt-9 flex justify-center">
            <StatusLegend />
          </div>
        </motion.div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-canvas-2 py-12 md:py-16">
        <div className="wrap">
          <div className="mb-8">
            <FilterBar
              filters={FILTERS}
              active={activeFilter}
              onChange={setActiveFilter}
              trailing={`${filtered.length} ${pp.resultsLabel || 'results'}`}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={!isMobile ? { opacity: 0, y: 10 } : false}
              animate={!isMobile ? { opacity: 1, y: 0 } : undefined}
              exit={!isMobile ? { opacity: 0 } : undefined}
              transition={{ duration: 0.3 }}
            >
              <ProjectGrid projects={filtered} />
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="bg-white rounded-[28px] text-center py-24">
              <p className="text-[17px] text-ink-2">{pp.emptyState || 'No projects found'}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
