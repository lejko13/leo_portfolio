import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '../../lib/LangContext';
import SectionHead from '../apple/SectionHead';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonials() {
  const { t } = useLang();
  const tm = t.testimonials;
  const testimonials = t.testimonialsData || [];
  const swiperRef = useRef(null);
  const [edge, setEdge] = useState({ start: false, end: false });

  const syncEdges = (s) => setEdge({ start: s.isBeginning, end: s.isEnd });

  return (
    <section className="bg-canvas-2 pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      <SectionHead a={tm.heading1} b={tm.heading2} className="mb-8 md:mb-10" />

      <div className="wrap">
        <Swiper
          modules={[Navigation, Mousewheel]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncEdges(swiper);
          }}
          onSlideChange={syncEdges}
          onResize={syncEdges}
          mousewheel={{ forceToAxis: true, sensitivity: 1 }}
          initialSlide={0}
          slidesPerView={1.08}
          spaceBetween={16}
          speed={700}
          grabCursor
          allowTouchMove
          simulateTouch
          watchSlidesProgress
          className="!overflow-visible"
          breakpoints={{
            768: { slidesPerView: Math.min(2, testimonials.length || 1), spaceBetween: 20 },
            1200: { slidesPerView: Math.min(3, testimonials.length || 1), spaceBetween: 20 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={item.name + i} className="!h-auto">
              <figure className="h-full bg-white rounded-[28px] p-8 flex flex-col">
                <div className="flex gap-0.5 text-[15px] text-ink" aria-label="5/5">
                  {'★★★★★'}
                </div>
                <blockquote className="mt-5 flex-1 font-heading text-[17px] md:text-[19px] leading-[1.45] tracking-[-0.015em] text-ink">
                  “{item.text}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <img loading="lazy" decoding="async" src={item.avatar} alt={item.name} className="w-11 h-11 rounded-full object-cover bg-canvas-2" />
                  <div>
                    <div className="text-[15px] font-semibold text-ink">{item.name}</div>
                    <div className="text-[13px] text-ink-2">{item.role}</div>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        {!(edge.start && edge.end) && (
        <div className="flex justify-end gap-3.5 mt-8">
          <button aria-label="Späť" disabled={edge.start} onClick={() => swiperRef.current?.slidePrev()} className="nav-dot">
            <ChevronLeft className="w-[18px] h-[18px]" strokeWidth={2.2} />
          </button>
          <button aria-label="Ďalej" disabled={edge.end} onClick={() => swiperRef.current?.slideNext()} className="nav-dot">
            <ChevronRight className="w-[18px] h-[18px]" strokeWidth={2.2} />
          </button>
        </div>
        )}
      </div>
    </section>
  );
}
