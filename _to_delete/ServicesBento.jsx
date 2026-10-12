import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../lib/LangContext';
import { getProjects } from '../../lib/projectsData';
import SectionHead from '../apple/SectionHead';

// Featured project (big tile) + 4 small tiles
const FEATURED = 'ciaocasa';
const SMALL = ['ladomer-detailing', 'hotel-lomnica-social', 'moj-booking', 'swappie-reklama'];

export default function ServicesBento() {
  const { t } = useLang();
  const projects = getProjects(t);
  const byId = (id) => projects.find((p) => p.id === id);
  const featured = byId(FEATURED);
  const small = SMALL.map(byId).filter(Boolean);

  return (
    <section id="sluzby" className="bg-white pt-20 md:pt-28 pb-14 md:pb-20 scroll-mt-12">
      <SectionHead a={t.services.heading1} b={t.services.heading2} aside={t.services.subtext} className="mb-8 md:mb-10" />

      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {featured && (
            <Link
              to={`/${featured.id}`}
              className="group col-span-2 lg:row-span-2 bg-canvas-2 rounded-[28px] flex items-center justify-center p-6 md:p-14 min-h-[280px] md:min-h-[520px]"
            >
              <img
                src={featured.image}
                alt={featured.name}
                draggable={false}
                className="w-full rounded-[14px] shadow-[0_24px_50px_rgba(0,0,0,0.18)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </Link>
          )}

          {small.map((p) => (
            <Link key={p.id} to={`/${p.id}`} className="group flex flex-col">
              <div className="bg-canvas-2 rounded-[28px] aspect-square flex items-center justify-center p-5 md:p-6 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  draggable={false}
                  className="max-w-full max-h-full object-contain rounded-[12px] shadow-[0_12px_28px_rgba(0,0,0,0.15)] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <span className="mt-3 text-[14px] md:text-[16px] text-ink leading-snug">{p.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
