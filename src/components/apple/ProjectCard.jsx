import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLang } from '../../lib/LangContext';
import { ui, isTallVideo, isWideVideo } from '../../lib/utils';
import { StatusDot } from './StatusDot';
import AutoVideo from './AutoVideo';

/** Apple "Zubehör" style tile: light card, title block on top, image below. */
export default function ProjectCard({ project, tone = 'white', className = '' }) {
  const { lang } = useLang();
  const bg = tone === 'white' ? 'bg-white' : 'bg-canvas-2';
  const wide = (project.gallery || []).find(isWideVideo);
  const videos = wide ? [] : (project.gallery || []).filter(isTallVideo).slice(0, 3);
  return (
    <Link
      to={`/${project.id}`}
      draggable={false}
      className={`group card card-lift flex flex-col ${bg} ${className}`}
    >
      <div className="px-7 pt-7 pb-5">
        <div className="flex flex-wrap items-center gap-x-2 text-[12px] font-semibold text-ink-2 mb-2">
          <StatusDot status={project.status} className="mr-0.5" />
          <span>{project.year}</span>
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="before:content-['·'] before:mr-2">{tag}</span>
          ))}
        </div>
        <h3 className="font-heading font-semibold text-[24px] leading-[1.15] tracking-[-0.02em] text-ink">
          {project.name}
        </h3>
        <p className="mt-2 text-[14px] leading-[1.45] text-ink-2 line-clamp-2">{project.desc}</p>
        <span className="link-more mt-3 text-[14px]">
          {ui(lang, 'viewProject')} <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>
      <div className="mt-auto px-5 pb-5">
        {wide ? (
          <div className="rounded-[18px] overflow-hidden aspect-[16/10] bg-[#e8e8ed] flex items-center justify-center">
            <AutoVideo
              src={wide}
              className="h-[80%] aspect-video object-cover rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        ) : videos.length > 0 ? (
          <div className="rounded-[18px] overflow-hidden aspect-[16/10] bg-[#e8e8ed] flex items-center justify-center gap-[3%]">
            {videos.map((v) => (
              <AutoVideo
                key={v}
                src={v}
                className="h-[80%] aspect-[9/16] object-cover rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[18px] overflow-hidden aspect-[16/10] bg-[#e8e8ed]">
            <img
              src={project.image}
              alt={project.name}
              draggable={false}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
