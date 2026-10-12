import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLang } from '../../lib/LangContext';
import { useMediaQuery } from 'react-responsive';
import { getProjects } from '../../lib/projectsData';
import { sc, isTallVideo, mailtoHref } from '../../lib/utils';
import AutoVideo from '../apple/AutoVideo';

const ease = [0.25, 0.1, 0.25, 1];

// Pick one showcase project per discipline for the "Made for you" grid
function pickShowcase(projects) {
  const take = (pred, used) => projects.find((p) => pred(p) && !used.includes(p.id));
  const used = [];
  const rules = [
    (p) => p.id === 'ladomer-detailing',
    (p) => p.id === 'ciaocasa', // big featured tile
    (p) => p.id === 'hotel-lomnica-social',
    (p) => p.tags.includes('Systémy'),
    (p) => p.id === 'hrajko-reklamy',
  ];
  return rules
    .map((r) => {
      const p = take(r, used);
      if (p) used.push(p.id);
      return p;
    })
    .filter(Boolean);
}

// Hero-only image overrides (shown whole, like a screen/post on a card)
const HERO_IMAGE = {
  'hotel-lomnica-social': '/project/socialne/lomnica/hotel.webp',
  'ladomer-detailing': '/project/socialne/ladomer/ciste-auto-v2.webp',
};

// Hero-only video overrides: [videos], link and label for the tile
const HERO_VIDEOS = {
  'hrajko-reklamy': {
    videos: ['/project/video/hrajko/reklama-dlha.mp4', '/project/video/swappie/reklama.mp4'],
    href: '/projects?f=video',
    label: 'Hrajko & Swappie – Video reklamy',
  },
};

const isScreen = (p) => HERO_IMAGE[p.id] || p.tags.includes('Web') || p.tags.includes('Systémy') || p.tags.includes('Web App');

function Tile({ project, className = '', aspect = 'aspect-square', fill = false, delay = 0, animate }) {
  if (!project) return null;
  const screen = isScreen(project);
  const src = HERO_IMAGE[project.id] || project.image;
  const hv = HERO_VIDEOS[project.id];
  const videos = hv ? hv.videos : project.tags.includes('Video') ? (project.gallery || []).filter(isTallVideo).slice(0, 2) : [];
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 24 } : false}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.8, delay, ease }}
      className={`${fill ? 'flex flex-col' : ''} ${className}`}
    >
      <Link to={hv?.href || `/${project.id}`} className={`group ${fill ? 'flex flex-col flex-1' : 'block'}`}>
        <div className={`relative bg-canvas-2 overflow-hidden rounded-[18px] md:rounded-[24px] isolate ${fill ? 'flex-1 min-h-[240px]' : aspect}`}>
          {videos.length > 0 ? (
            <div className="absolute inset-0 flex items-center justify-center gap-[5%]">
              {videos.map((v) => (
                <AutoVideo
                  key={v}
                  src={v}
                  className="w-[36%] aspect-[9/16] object-cover rounded-[10px] shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                />
              ))}
            </div>
          ) : screen ? (
            <div className="absolute inset-0 flex items-center justify-center p-[7%]">
              <img decoding="async"
                src={src}
                alt={project.name}
                className="max-w-full max-h-full rounded-[10px] shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>
          ) : (
            <img decoding="async"
              src={src}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            />
          )}
        </div>
        <div className="mt-2.5 text-[12px] text-ink group-hover:text-[#d70015] transition-colors">
          {hv?.label || project.name}
        </div>
      </Link>
    </motion.div>
  );
}

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { t } = useLang();
  const h = t.hero;
  const show = pickShowcase(getProjects(t));
  const anim = !isMobile;

  return (
    <section className="relative bg-white pt-[88px] md:pt-[120px] pb-20 md:pb-28">
      <div className="wrap">
        <div className="max-w-[880px] mx-auto text-center">
          <motion.div
            initial={anim ? { opacity: 0, y: 12 } : false}
            animate={anim ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease }}
            className="text-[17px] md:text-[21px] font-semibold text-ink-2 mb-3"
          >
            {h.badge}
          </motion.div>

          <motion.h1
            initial={anim ? { opacity: 0, y: 24 } : false}
            animate={anim ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="h-display"
          >
            {h.h1a} {h.h1b}
            <br className="hidden sm:block" />{' '}
            <span className="bg-gradient-to-r from-[#e3000f] via-[#ff453a] to-[#24a1db] bg-clip-text text-transparent">
              {h.h1c}
            </span>
          </motion.h1>

          <motion.p
            initial={anim ? { opacity: 0, y: 16 } : false}
            animate={anim ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-6 text-[19px] md:text-[21px] leading-[1.4] text-ink-2 max-w-[640px] mx-auto"
          >
            {h.sub1} <span className="text-ink">{h.sub2}</span> {h.sub3}
          </motion.p>

          <motion.div
            initial={anim ? { opacity: 0, y: 16 } : false}
            animate={anim ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href={mailtoHref()} className="btn-primary">
              {sc(h.ctaPrimary)}
            </a>
            <Link to="/projects" className="link-more text-[17px]">
              {sc(h.ctaSecondary)} <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* "Made for you" product grid */}
        {show.length >= 5 && (
          <div className="mt-16 md:mt-24">
            {/* desktop */}
            <div className="hidden md:grid grid-cols-12 gap-4">
              <Tile project={show[1]} animate={anim} delay={0.35} fill className="col-span-7" />
              <div className="col-span-5 grid grid-cols-2 gap-x-4 gap-y-5">
                <Tile project={show[0]} animate={anim} delay={0.45} />
                <Tile project={show[2]} animate={anim} delay={0.5} />
                <Tile project={show[3]} animate={anim} delay={0.55} />
                <Tile project={show[4]} animate={anim} delay={0.6} />
              </div>
            </div>

            {/* mobile */}
            <div className="md:hidden grid grid-cols-2 gap-x-3 gap-y-5">
              <Tile project={show[1]} className="col-span-2" aspect="aspect-[4/3]" />
              <Tile project={show[0]} />
              <Tile project={show[2]} />
              <Tile project={show[3]} />
              <Tile project={show[4]} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
