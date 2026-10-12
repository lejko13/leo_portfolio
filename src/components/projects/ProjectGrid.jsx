import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import ProjectCard from '../apple/ProjectCard';

export default function ProjectGrid({ projects }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={!isMobile ? { opacity: 0, y: 20 } : false}
          animate={!isMobile ? { opacity: 1, y: 0 } : undefined}
          transition={!isMobile ? { delay: i * 0.04, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } : undefined}
          className="flex"
        >
          <ProjectCard project={project} className="w-full" />
        </motion.div>
      ))}
    </div>
  );
}
