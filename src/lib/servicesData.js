// Static (non-translatable) service data — IDs, icons, related projects, tech tags
export const servicesMeta = [
  {
    id: 'web-dizajn',
    num: '01',
    icon: '🌐',
    tags: ['React', 'TailwindCSS', 'TypeScript', 'SEO'],
    relatedProjects: ['aardwark', 'sophistit', 'pharminfo'],
  },
  {
    id: 'video-reklamy',
    num: '02',
    icon: '▶',
    tags: ['Video Ads', 'Reels', 'Motion', 'AI'],
    relatedProjects: ['aardwark', 'begam'],
  },

  // {
  //   id: 'reklamy',
  //   num: '05',
  //   icon: '⚡',
  //   tags: ['Google Ads', 'Meta', 'PPC', 'Analytics'],
  //   relatedProjects: ['aardwark', 'amg-security', 'begam'],
  // },
  {
    id: 'social-media',
    num: '03',
    icon: '◈',
    tags: ['Meta', 'LinkedIn', 'TikTok', 'Strategy'],
    relatedProjects: ['panorama-golf', 'hotel-pod-lipou'],
  },

{
  id: 'firemne-systemy',
  num: '04',
  icon: '⚙️',
  tags: ['Rezervačné systémy', 'Admin panely', 'Dashboardy'],
  relatedProjects: ['barber-system', 'reservation-system', 'admin-dashboard'],
},
];

// Merge static meta with translated content from i18n
export function getServices(t) {
  const content = t.servicesContent || {};
  return servicesMeta.map(meta => ({
    ...meta,
    ...(content[meta.id] || {}),
  }));
}

export function getServiceById(id, t) {
  const services = getServices(t);
  return services.find(s => s.id === id) || null;
}

// Legacy list — only static fields, used for Navbar dropdown (now t-aware)
export const services = servicesMeta;