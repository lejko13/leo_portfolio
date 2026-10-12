import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { getProjects } from '../../lib/projectsData';
import { useLang } from '../../lib/LangContext';
import { ui, filterProjects } from '../../lib/utils';
import SectionHead from '../apple/SectionHead';
import Carousel from '../apple/Carousel';
import ProjectCard from '../apple/ProjectCard';
import FilterBar from '../apple/FilterBar';
import { StatusLegend } from '../apple/StatusDot';

export default function Projects() {
  const { t, lang } = useLang();
  const projects = getProjects(t);
  const FILTERS = t.projects.filters;

  const [activeIdx, setActiveIdx] = useState(0);
  const activeFilter = FILTERS[activeIdx] || FILTERS[0];
  const setActiveFilter = (f) => setActiveIdx(Math.max(0, FILTERS.indexOf(f)));
  const filtered = filterProjects(projects, activeIdx);

  return (
    <section id="projekty" className="bg-canvas-2 pt-20 md:pt-28 pb-14 md:pb-20 scroll-mt-12">
      <SectionHead
        a={t.projects.heading1}
        b={t.projects.heading2}
        aside={
          <Link to="/projects" className="link-more">
            {ui(lang, 'allProjects')} <ChevronRight className="w-4 h-4" />
          </Link>
        }
        className="mb-7"
      />

      <div className="wrap mb-7 flex flex-col sm:flex-row sm:items-center gap-4">
        <FilterBar filters={FILTERS} active={activeFilter} onChange={setActiveFilter} />
        <StatusLegend className="sm:ml-auto" />
      </div>

      {filtered.length > 0 ? (
        <Carousel resetKey={activeFilter} itemsClassName="gap-4 md:gap-5" step={420}>
          {filtered.map((project) => (
            <ProjectCard
              key={project.id + activeFilter}
              project={project}
              className="snap-start shrink-0 w-[300px] md:w-[400px]"
            />
          ))}
        </Carousel>
      ) : (
        <div className="wrap">
          <div className="bg-white rounded-[28px] py-20 text-center">
            <h3 className="font-heading font-semibold text-[24px] text-ink">{ui(lang, 'noProjects')}</h3>
            <p className="mt-2 text-[15px] text-ink-2">{ui(lang, 'noProjectsSub')}</p>
          </div>
        </div>
      )}
    </section>
  );
}
