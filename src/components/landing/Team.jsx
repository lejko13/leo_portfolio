import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Globe } from 'lucide-react';
import { useLang } from '../../lib/LangContext';
import SectionHead from '../apple/SectionHead';

const TEAM_AVATARS = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
];

export default function Team() {
  const { t } = useLang();
  const tm = t.team;
  const members = t.teamMembers || [];

  return (
    <section id="tim" className="bg-white py-20 md:py-28 scroll-mt-12">
      <SectionHead a={tm.heading1} b={tm.heading2} aside={tm.subtext} className="mb-10" />
      <div className="wrap grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {members.map((member, i) => (
          <motion.div key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
            className="group card card-lift bg-canvas-2">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={TEAM_AVATARS[i]} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-[19px] tracking-[-0.015em] text-ink">{member.name}</h3>
              <div className="text-[13px] text-ink-2 mt-0.5">{member.role}</div>
              <p className="text-[14px] leading-[1.45] text-ink-2 mt-3">{member.bio}</p>
              <div className="flex gap-3 mt-4">
                <button className="text-ink-3 hover:text-ink transition-colors"><Linkedin className="w-4 h-4" /></button>
                <button className="text-ink-3 hover:text-ink transition-colors"><Globe className="w-4 h-4" /></button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
