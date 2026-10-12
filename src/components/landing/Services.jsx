import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useLang } from '../../lib/LangContext';
import { getServices } from '../../lib/servicesData';
import { getProjects } from '../../lib/projectsData';
import SectionHead from '../apple/SectionHead';
import Carousel from '../apple/Carousel';
import AutoVideo from '../apple/AutoVideo';

// Which project tag illustrates which service card
const SERVICE_VISUAL_TAG = {
  'web-dizajn': 'Web',
  'video-reklamy': 'Video',
  'social-media': 'Sociálne siete',
  'firemne-systemy': 'Systémy',
};

// Fixed video visual for a service card (muted autoplay loop)
// Fixed image visual for a service card
const SERVICE_VISUAL_IMAGE = {
  'web-dizajn': '/project/sluzby/web-eshop.webp',
};

const SERVICE_VISUAL_VIDEO = {
  'video-reklamy': '/project/video/lomnica/izba-1-zvuk.mp4',
};

// Logo-type visuals: keep the whole image visible, centred
const SERVICE_VISUAL_CENTER = new Set(['social-media']);

// Specific project used as the visual (wins over the tag lookup)
const SERVICE_VISUAL_PROJECT = {
};

// Service card → projects grid with this group preselected
const SERVICE_FILTER = {
  'web-dizajn': 'web',
  'video-reklamy': 'video',
  'social-media': 'socialne-siete',
  'firemne-systemy': 'systemy',
};

// ---- Multi-project collage for each service card -------------------------------------
const COLLAGE = {
  'web-dizajn': { type: 'screens', ids: ['ciaocasa', 'leofudaly-eshop', 'cvic-sam'] },
  'video-reklamy': {
    type: 'videos',
    ids: ['swappie-reklama', 'hrajko-reklamy', 'ladomer-video', 'hotel-lomnica', 'belanske-stavebniny', 'leofudaly-reels'],
    // pick full-frame 9:16 clips (the Lomnica promo has black bars)
    videos: [
      '/project/video/swappie/reklama.mp4',
      '/project/video/ladomer/mercedes.mp4',
      '/project/video/lomnica/walkthrough.mp4',
      '/project/video/belanske/reklama-1.mp4',
      '/project/video/hrajko/reklama-basketbal.mp4',
      '/project/video/leofudaly/reel-3.mp4',
    ],
  },
  'social-media': { type: 'posts', ids: ['ladomer-detailing', 'hotel-lomnica-social', 'tatratea', 'nasacaffe'] },
  'firemne-systemy': { type: 'screens', ids: ['rezervo', 'skillfind', 'moj-booking'] },
};

const isVid = (src) => /\.(mp4|webm|mov)$/i.test(src || '');
const firstImage = (p) => (p.gallery || []).find((g) => !isVid(g)) || p.image;

const SCREEN_POS = [
  'top-[5%] left-[5%] z-[1]',
  'top-[35%] right-[5%] z-[2]',
  'bottom-[5%] left-[5%] z-[3]',
];

function ServiceCollage({ id, projects }) {
  const cfg = COLLAGE[id];
  if (!cfg) return null;
  const list = cfg.ids.map((pid) => projects.find((p) => p.id === pid)).filter(Boolean);
  const hover = 'transition-transform duration-700 ease-out';

  if (cfg.type === 'videos') {
    const vids = (cfg.videos || list.map((p) => (p.gallery || []).find(isVid))).filter(Boolean).slice(0, 6);
    return (
      <div className="absolute inset-0 flex items-center justify-center p-[6%]">
        <div className="grid grid-cols-3 gap-[4%] w-full">
          {vids.map((v, i) => (
            <AutoVideo
              key={v}
              src={v}
              className={`w-full aspect-[9/16] object-cover rounded-[9px] shadow-[0_10px_24px_rgba(0,0,0,0.45)] ${hover} ${i % 3 === 1 ? 'translate-y-[6%] group-hover:translate-y-[3%]' : 'group-hover:-translate-y-[3%]'}`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (cfg.type === 'posts') {
    const posts = list.map(firstImage).slice(0, 4);
    return (
      <div className="absolute inset-0 flex items-center justify-center p-[6%]">
        <div className="grid grid-cols-2 gap-[4%] w-full max-h-full" style={{ aspectRatio: '1 / 1.18' }}>
          {posts.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              draggable={false}
              loading="lazy"
              className={`w-full h-full object-cover rounded-[10px] shadow-[0_10px_24px_rgba(0,0,0,0.4)] ${hover} group-hover:scale-[1.03]`}
            />
          ))}
        </div>
      </div>
    );
  }

  // screens: staggered, overlapping website screenshots
  return (
    <div className="absolute inset-0">
      {list.slice(0, 3).map((p, i) => (
        <img
          key={p.id}
          src={p.image}
          alt={p.name}
          draggable={false}
          loading="lazy"
          className={`absolute w-[72%] aspect-[16/10] object-cover object-top rounded-[10px] ring-1 ring-white/10 shadow-[0_14px_34px_rgba(0,0,0,0.55)] ${SCREEN_POS[i]} ${hover} group-hover:-translate-y-1`}
        />
      ))}
    </div>
  );
}

export default function Services() {
  const { t } = useLang();
  const services = getServices(t).map((s) => ({ ...s, href: `/projects?f=${SERVICE_FILTER[s.id] || ''}` }));
  const projects = getProjects(t);

  const visualFor = (id) => {
    if (SERVICE_VISUAL_IMAGE[id]) return SERVICE_VISUAL_IMAGE[id];
    const byId = SERVICE_VISUAL_PROJECT[id] && projects.find((p) => p.id === SERVICE_VISUAL_PROJECT[id]);
    if (byId) return byId.image;
    const tag = SERVICE_VISUAL_TAG[id];
    return projects.find((p) => p.tags.includes(tag))?.image || null;
  };

  return (
    <section id="sluzby" className="bg-white pt-20 md:pt-28 pb-14 md:pb-20 scroll-mt-12">
      <SectionHead a={t.services.heading1} b={t.services.heading2} aside={t.services.subtext} className="mb-8 md:mb-10" />

      <Carousel itemsClassName="gap-4 md:gap-5" step={392}>
        {services.map((service) => {
          return (
            <Link
              key={service.id}
              to={service.href}
              draggable={false}
              className="group card card-lift relative snap-start shrink-0 w-[280px] h-[480px] md:w-[372px] md:h-[600px] bg-black text-white flex flex-col"
            >
              <div className="relative z-10 p-7 md:p-8">
                <div className="text-[12px] font-semibold text-white/80 mb-2">
                  {service.num} · {service.tags.slice(0, 2).join(' · ')}
                </div>
                <h3 className="font-heading font-semibold text-[24px] md:text-[28px] leading-[1.14] tracking-[-0.02em]">
                  {service.title}
                </h3>
                {service.tagline && (
                  <p className="mt-2 text-[15px] leading-[1.4] text-white/60 line-clamp-3">{service.tagline}</p>
                )}
              </div>

              <div className="relative flex-1 mx-5 mb-5 rounded-[20px] overflow-hidden bg-[#1c1c1e]">
                <ServiceCollage id={service.id} projects={projects} />
              </div>

              <span className="plus-btn absolute right-7 bottom-7 z-10 bg-white/90 text-black group-hover:rotate-90">
                <Plus className="w-[18px] h-[18px]" strokeWidth={2.4} />
              </span>
            </Link>
          );
        })}
      </Carousel>
    </section>
  );
}
