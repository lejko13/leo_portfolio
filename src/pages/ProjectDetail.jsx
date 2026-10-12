import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Check, Volume2, VolumeX, Info } from "lucide-react";
import { sc, isVideo, isWideVideo, ui, openMail } from "../lib/utils";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { getProjectById, getAdjacentProjects } from "../lib/projectsData";
import { useLang } from "../lib/LangContext";
import ProjectLightbox from "../components/ui/owerlap";
import { useMediaQuery } from "react-responsive";

import { useNavigate } from 'react-router-dom';
import AutoVideo from '../components/apple/AutoVideo';
import { StatusDot } from '../components/apple/StatusDot';

// Portrait tiles stay 3:4; landscape images (vouchers, business cards) are shown whole
// as a card on a grey tile spanning more columns.
// Autoplay loop inside a gallery tile (starts muted – browsers block autoplay with sound).
// The speaker button turns the sound on right in the tile; the lightbox plays with sound.
function TileVideo({ src }) {
  const ref = React.useRef(null);
  const [muted, setMuted] = useState(true);
  const toggle = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const v = ref.current;
    if (!v) return;
    v.muted = !muted;
    if (muted) v.play?.();
    setMuted(!muted);
  };
  return (
    <>
      <AutoVideo
        ref={ref}
        src={src}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <span className="absolute left-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white">
        <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[7px] border-l-white" /> Video
      </span>
      <span
        role="button"
        tabIndex={0}
        aria-label={muted ? 'Zapnúť zvuk' : 'Vypnúť zvuk'}
        onClick={toggle}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle(e)}
        className="absolute right-3 bottom-3 w-8 h-8 rounded-full bg-black/55 backdrop-blur flex items-center justify-center text-white hover:bg-black/75 transition-colors"
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </span>
    </>
  );
}

function GalleryTile({ src, onClick }) {
  const [wide, setWide] = useState(false);
  if (isVideo(src)) {
    return (
      <button onClick={onClick} className={`group relative rounded-[18px] overflow-hidden bg-canvas-2 ${isWideVideo(src) ? 'col-span-2 md:col-span-6 aspect-video' : 'aspect-[9/16]'}`}>
        <TileVideo src={src} />
      </button>
    );
  }
  const onLoad = (e) => {
    const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
    if (w > h * 1.15) setWide(true);
  };
  if (wide) {
    return (
      <button onClick={onClick} className="group col-span-2 md:col-span-3 rounded-[18px] bg-canvas-2 flex items-center justify-center p-5 md:p-8">
        <img loading="lazy" decoding="async"
          src={src}
          alt=""
          className="w-full h-auto rounded-[10px] shadow-[0_14px_36px_rgba(0,0,0,0.14)] transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </button>
    );
  }
  return (
    <button onClick={onClick} className="group rounded-[18px] overflow-hidden aspect-[3/4] bg-canvas-2">
      <img loading="lazy" decoding="async" src={src} alt="" onLoad={onLoad} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
    </button>
  );
}

export default function ProjectDetail() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);



    const navigate = useNavigate();

  const { id } = useParams();
  const { t, lang } = useLang();

  const pd = t.projectDetail;
  const project = getProjectById(id, t);
  const { prev, next } = getAdjacentProjects(id, t);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const desktopHover = !isMobile ? "hover:text-white transition-colors" : "";
  const desktopGroup = !isMobile ? "group" : "";
  const desktopImgHover = !isMobile
    ? "hover:scale-105 transition-transform duration-700 cursor-pointer"
    : "cursor-pointer";

  const desktopGroupHoverText = !isMobile
    ? "group-hover:text-[#0066cc] transition-colors"
    : "";





     const handleKontaktClick = () => openMail({ subject: `Projekt: ${project?.name || ''}`.trim() });

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">
          <div className="font-heading font-semibold text-[96px] leading-none tracking-[-0.04em] text-ink-3/40 mb-4">404</div>
          <h1 className="font-heading font-semibold text-[28px] tracking-[-0.02em] text-ink mb-4">Projekt nenájdený</h1>
          <button onClick={handleKontaktClick} className="link-more">
            <ChevronLeft className="w-4 h-4" /> {sc(pd.back)}
          </button>
        </div>
      </div>
    );
  }

  const kontrola = project.tags;
  const ease = [0.25, 0.1, 0.25, 1];
  const reveal = (delay = 0) =>
    !isMobile
      ? { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-40px" }, transition: { duration: 0.7, delay, ease } }
      : {};

  const openAt = (i) => {
    setLightboxOpen(true);
    setActiveIndex(i);
  };

  const meta = [
    { label: pd.meta.client, value: project.client },
    { label: pd.meta.year, value: project.year },
    { label: pd.meta.duration, value: project.duration },
    { label: pd.meta.category, value: project.category },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {lightboxOpen && (
        <ProjectLightbox
          projects={project.gallery}
          activeIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setActiveIndex}
        />
      )}

      <Navbar />

      {/* Hero */}
      <section className="pt-[84px] md:pt-[100px] pb-12 md:pb-16 bg-white">
        <div className="wrap">
          <Link to="/" className="link-more text-[14px] mb-10 md:mb-14">
            <ChevronLeft className="w-4 h-4" /> {sc(pd.back)}
          </Link>

          <motion.div
            initial={!isMobile ? { opacity: 0, y: 24 } : false}
            animate={!isMobile ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, ease }}
            className="text-center max-w-[880px] mx-auto"
          >
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-canvas-2 px-3.5 py-1.5 text-[13px] md:text-[14px] font-semibold text-ink">
                <StatusDot status={project.status} />
                {ui(lang, project.status === 'active' ? 'statusActiveLong' : 'statusConceptLong')}
              </span>
            </div>
            <div className="text-[15px] md:text-[17px] font-semibold text-ink-2 mb-3">
              {project.tags.join(" · ")} · {project.year}
            </div>
            <h1 className="h-display">{project.name}</h1>
            <p className="mt-6 text-[19px] md:text-[21px] leading-[1.4] text-ink-2 max-w-[640px] mx-auto">{project.desc}</p>

            <div className="mt-8 flex justify-center">
              {project.preklik === "nic" ? (
                <span className="text-[17px] text-ink-2">Pozrieť si náhľad</span>
              ) : project.preklik ? (
                <a href={project.preklik} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <ExternalLink className="w-4 h-4" />
                  {!kontrola?.includes("Sociálne siete")
                    ? project.url.replace("https://", "").replace("http://", "")
                    : "Otvoriť sociálne siete"}
                </a>
              ) : (
                <span className="text-[17px] text-ink-2">Pozrieť si náhľad</span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key visual */}
      <motion.section
        initial={!isMobile ? { opacity: 0, y: 30 } : false}
        animate={!isMobile ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.9, delay: 0.15, ease }}
        className="wrap mb-6 md:mb-8"
      >
        {project.preklik ? (
          <button onClick={() => openAt(0)} className="block w-full bg-canvas-2 rounded-[28px] overflow-hidden p-4 md:p-10">
            <img decoding="async" src={project.gallery[0]} alt={project.name} className="w-full h-auto rounded-[14px] shadow-[0_24px_60px_rgba(0,0,0,0.16)]" />
          </button>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-start">
            {project.gallery.slice(0, 4).map((img, i) => (
              <button key={i} onClick={() => openAt(i)} className={`group relative rounded-[20px] overflow-hidden bg-canvas-2 ${isWideVideo(img) ? "col-span-2 md:col-span-3 aspect-video" : isVideo(img) ? "aspect-[9/16]" : "aspect-[3/4]"}`}>
                {isVideo(img) ? (
                  <TileVideo src={img} />
                ) : (
                  <img loading="lazy" decoding="async" src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                )}
              </button>
            ))}
          </div>
        )}
      </motion.section>

      {/* Sample / concept note */}
      {project.note && (
        <section className="wrap mb-6 md:mb-8">
          <div className="rounded-[24px] bg-[#0071e3]/[0.06] ring-1 ring-[#0071e3]/15 px-6 py-5 md:px-8 md:py-6 flex gap-4 items-start">
            <span className="mt-0.5 shrink-0 w-8 h-8 rounded-full bg-[#0071e3] text-white flex items-center justify-center">
              <Info className="w-4 h-4" />
            </span>
            <div>
              <div className="text-[15px] font-semibold text-ink mb-1">{ui(lang, 'sampleProject')}</div>
              <p className="text-[15px] md:text-[17px] leading-[1.5] text-ink-2">{project.note}</p>
            </div>
          </div>
        </section>
      )}

      {/* Meta tiles */}
      <section className="wrap mb-20 md:mb-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {meta.map((item) => (
            <div key={item.label} className="bg-canvas-2 rounded-[20px] px-6 py-5">
              <div className="text-[12px] text-ink-2 mb-1">{sc(item.label)}</div>
              <div className="font-heading font-semibold text-[17px] text-ink">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="wrap mb-20 md:mb-28">
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {[
            { k: pd.challenge, h: pd.challengeHeading, txt: project.challenge },
            { k: pd.solution, h: pd.solutionHeading, txt: project.solution },
          ].map((b, i) => (
            <motion.div key={b.k} {...reveal(i * 0.08)} className="bg-canvas-2 rounded-[28px] p-8 md:p-12">
              <div className="text-[14px] font-semibold text-[#0071e3] mb-3">{b.k}</div>
              <h2 className="font-heading font-semibold text-[28px] md:text-[32px] leading-[1.12] tracking-[-0.025em] text-ink mb-4">{b.h}</h2>
              <p className="text-[17px] leading-[1.5] text-ink-2">{b.txt}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="wrap mb-20 md:mb-28">
        {project.preklik ? (
          <div className="columns-1 md:columns-2 gap-4 md:gap-5 [&>*]:mb-4 md:[&>*]:mb-5">
            {project.gallery.map((img, i) => (
              <motion.button
                key={i}
                onClick={() => openAt(i)}
                {...reveal(Math.min(i, 4) * 0.05)}
                className="group block w-full break-inside-avoid bg-canvas-2 rounded-[24px] overflow-hidden p-3 md:p-5"
              >
                <img loading="lazy" decoding="async" src={img} alt="" className="w-full h-auto rounded-[12px] transition-transform duration-700 group-hover:scale-[1.015]" />
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
            {project.gallery.slice(4).map((img, i) => (
              <GalleryTile key={img + i} src={img} onClick={() => openAt(i + 4)} />
            ))}
          </div>
        )}
      </section>

      {/* Process / Results */}
      <section className="bg-canvas-2 py-20 md:py-28">
        <div className="wrap grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div {...reveal()}>
            <div className="text-[17px] font-semibold text-ink-2 mb-2">{pd.process}</div>
            <h2 className="h-section mb-8">{pd.processHeading}</h2>
            <ol className="bg-white rounded-[24px] divide-y divide-line overflow-hidden">
              {project.process.split(" → ").map((step, i) => (
                <li key={i} className="flex items-center gap-4 px-6 py-4">
                  <span className="w-7 h-7 rounded-full bg-canvas-2 flex items-center justify-center text-[12px] font-semibold text-ink shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-[17px] text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div {...reveal(0.1)}>
            <div className="text-[17px] font-semibold text-ink-2 mb-2">{pd.results}</div>
            <h2 className="h-section mb-8">{pd.resultsHeading}</h2>
            <ul className="space-y-3">
              {project.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3 bg-white rounded-[20px] px-6 py-5">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#0071e3] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[17px] font-semibold text-ink leading-snug">{result}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Services & Tech */}
      <section className="wrap py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <div className="text-[12px] font-semibold text-ink-2 mb-4">{pd.servicesUsed}</div>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span key={s} className="text-[14px] px-4 py-2 rounded-full bg-[#0071e3]/10 text-[#0066cc]">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[12px] font-semibold text-ink-2 mb-4">{pd.technologies}</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tt) => (
                <span key={tt} className="text-[14px] px-4 py-2 rounded-full bg-canvas-2 text-ink">{tt}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wrap mb-6">
        <div className="rounded-[28px] bg-black text-white px-8 py-16 md:py-24 text-center">
          <h2 className="font-heading font-semibold text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.03em]">
            {pd.ctaHeading1} <span className="text-white/50">{pd.ctaHeading2}</span>
          </h2>
          <p className="mt-4 text-[17px] md:text-[19px] text-white/60 max-w-md mx-auto">{pd.ctaSub}</p>
          <button onClick={handleKontaktClick} className="btn-primary mt-8">
            {sc(pd.ctaBtn)}
          </button>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="wrap mb-20 md:mb-24">
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {prev ? (
            <Link to={`/${prev.id}`} className={`${desktopGroup} card-lift bg-canvas-2 rounded-[24px] p-7 flex items-center gap-4`}>
              <ChevronLeft className="w-6 h-6 text-ink-2 shrink-0" strokeWidth={1.6} />
              <div>
                <div className="text-[12px] text-ink-2">{sc(pd.prev)}</div>
                <div className={`font-heading font-semibold text-[19px] text-ink ${desktopGroupHoverText}`}>{prev.name}</div>
                <div className="text-[13px] text-ink-2">{prev.category}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link to={`/${next.id}`} className={`${desktopGroup} card-lift bg-canvas-2 rounded-[24px] p-7 flex items-center justify-end gap-4 text-right`}>
              <div>
                <div className="text-[12px] text-ink-2">{sc(pd.next)}</div>
                <div className={`font-heading font-semibold text-[19px] text-ink ${desktopGroupHoverText}`}>{next.name}</div>
                <div className="text-[13px] text-ink-2">{next.category}</div>
              </div>
              <ChevronRight className="w-6 h-6 text-ink-2 shrink-0" strokeWidth={1.6} />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
