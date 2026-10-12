import React, { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { isVideo } from "../../lib/utils";

export default function ProjectLightbox({
  projects,
  activeIndex,
  onClose,
  onNavigate,
}) {
  const image = projects[activeIndex];
  const total = projects.length;

  const prev = useCallback(() => {
    onNavigate((activeIndex - 1 + total) % total);
  }, [activeIndex, total, onNavigate]);

  const next = useCallback(() => {
    onNavigate((activeIndex + 1) % total);
  }, [activeIndex, total, onNavigate]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [prev, next, onClose]);

  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  return (
    <motion.div
      initial={isDesktop ? { opacity: 0 } : false}
      animate={isDesktop ? { opacity: 1 } : {}}
      exit={isDesktop ? { opacity: 0 } : undefined}
      transition={isDesktop ? { duration: 0.25 } : undefined}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
      background: "rgba(0, 0, 0, 0.88)",
        backdropFilter: "blur(20px)",
      }}
      onClick={onClose}
    >

<button
  onClick={onClose}
  className="absolute top-5 right-5 z-10"
>
  <div className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer">
    <X className="w-4 h-4 text-white" strokeWidth={2.2} />
  </div>
</button>

<div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
  <div className="h-9 px-4 rounded-full bg-white/15 flex items-center justify-center">
    <span className="text-[13px] font-semibold tracking-normal text-white/90">
      {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
  </div>
</div>



 <motion.div
  key={activeIndex}
  initial={isDesktop ? { opacity: 0, scale: 0.96 } : false}
  animate={isDesktop ? { opacity: 1, scale: 1 } : {}}
  exit={isDesktop ? { opacity: 0, scale: 0.96 } : undefined}
  transition={isDesktop ? { duration: 0.3 } : undefined}
  className="relative w-full max-w-[80vw] mx-6 md:mx-16 flex items-center justify-center"
  onClick={(e) => e.stopPropagation()}
>
  {isVideo(image) ? (
    <video
      key={image}
      src={image}
      autoPlay
      loop
      controls
      playsInline
      className="max-w-full max-h-[76vh] w-auto h-auto object-contain rounded-[14px] bg-black"
    />
  ) : (
    <img
      src={image}
      alt=""
      className="max-w-full max-h-[76vh] w-auto h-auto object-contain rounded-[14px]"
    />
  )}
</motion.div> 

<button
  onClick={(e) => {
    e.stopPropagation();
    prev();
  }}
  className={`absolute z-10 ${
    isDesktop
      ? "left-4 top-1/2 -translate-y-1/2"
      : "bottom-20 left-[38%] -translate-x-1/2"
  }`}
>
  <div className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer">
    <ChevronLeft className="w-4 h-4 text-white" strokeWidth={2.2} />
  </div>
</button>

<button
  onClick={(e) => {
    e.stopPropagation();
    next();
  }}
  className={`absolute z-10 ${
    isDesktop
      ? "right-4 top-1/2 -translate-y-1/2"
      : "bottom-20 right-[38%] translate-x-1/2"
  }`}
>
  <div className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer">
    <ChevronRight className="w-4 h-4 text-white" strokeWidth={2.2} />
  </div>
</button>

   <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
 {isDesktop &&
  projects.map((_, i) => (
    <button
      key={i}
      onClick={(e) => {
        e.stopPropagation()
        onNavigate(i)
      }}
      className="cursor-pointer"
    >
      <div
        className={`
          h-2 rounded-full transition-all duration-300
          ${
            i === activeIndex
              ? "w-8 bg-white"
              : "w-2 bg-white/35 hover:bg-white/60"
          }
        `}
      />
    </button>
  ))}
</div>
    </motion.div>
  );
}