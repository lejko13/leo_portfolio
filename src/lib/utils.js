import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
} 


export const isIframe = window.self !== window.top;

// Converts ALL-CAPS UI labels from translations ("REZERVOVAŤ STRETNUTIE")
// into Apple-style sentence case ("Rezervovať stretnutie"). Short acronyms (FAQ, SEO) stay as-is.
export function sc(str) {
  if (!str || typeof str !== 'string') return str;
  const s = str.trim();
  if (s.length <= 4) return s;
  if (s !== s.toUpperCase()) return s;
  const lower = s.toLocaleLowerCase('sk');
  return lower.charAt(0).toLocaleUpperCase('sk') + lower.slice(1);
}

// Small UI micro-copy that has no key in i18n.js (added with the redesign)
const UI = {
  viewProject: { SK: 'Pozrieť projekt', EN: 'View project', CZ: 'Zobrazit projekt', DE: 'Projekt ansehen', PL: 'Zobacz projekt' },
  learnMore: { SK: 'Zistiť viac', EN: 'Learn more', CZ: 'Zjistit více', DE: 'Mehr erfahren', PL: 'Dowiedz się więcej' },
  allProjects: { SK: 'Všetky projekty', EN: 'All projects', CZ: 'Všechny projekty', DE: 'Alle Projekte', PL: 'Wszystkie projekty' },
  statusActive: { SK: 'Aktívne', EN: 'Live', CZ: 'Aktivní', DE: 'Live', PL: 'Aktywne' },
  statusConcept: { SK: 'Návrh', EN: 'Concept', CZ: 'Návrh', DE: 'Entwurf', PL: 'Projekt' },
  sampleProject: { SK: 'Ukážkový projekt', EN: 'Sample project', CZ: 'Ukázkový projekt', DE: 'Beispielprojekt', PL: 'Projekt przykładowy' },
  statusActiveLong: { SK: 'Aktívne – projekt je spustený', EN: 'Live – the project is launched', CZ: 'Aktivní – projekt je spuštěný', DE: 'Live – das Projekt ist online', PL: 'Aktywne – projekt jest uruchomiony' },
  statusConceptLong: { SK: 'Návrh – koncept, zatiaľ nespustený', EN: 'Concept – not launched yet', CZ: 'Návrh – koncept, zatím nespuštěný', DE: 'Entwurf – noch nicht veröffentlicht', PL: 'Projekt – koncepcja, jeszcze nieuruchomiona' },
  portfolio: { SK: 'Portfólio', EN: 'Portfolio', CZ: 'Portfolio', DE: 'Portfolio', PL: 'Portfolio' },
  more: { SK: 'Viac', EN: 'More', CZ: 'Více', DE: 'Mehr', PL: 'Więcej' },
  noProjects: { SK: 'Žiadne projekty', EN: 'No projects', CZ: 'Žádné projekty', DE: 'Keine Projekte', PL: 'Brak projektów' },
  noProjectsSub: {
    SK: 'V tejto kategórii zatiaľ nie sú dostupné žiadne projekty.',
    EN: 'There are no projects in this category yet.',
    CZ: 'V této kategorii zatím nejsou žádné projekty.',
    DE: 'In dieser Kategorie gibt es noch keine Projekte.',
    PL: 'W tej kategorii nie ma jeszcze projektów.',
  },
};
export const isVideo = (src) => typeof src === 'string' && /\.(mp4|webm|mov)(\?|$)/i.test(src);
// Landscape (16:9) videos are marked by '16x9' in the file name
export const isWideVideo = (src) => isVideo(src) && /16x9/i.test(src);
export const isTallVideo = (src) => isVideo(src) && !isWideVideo(src);

export function ui(lang, key) {
  const entry = UI[key];
  if (!entry) return key;
  return entry[lang] || entry.SK;
}

// Canonical (SK) project tags behind each filter index, plus URL slugs
export const FILTER_TAGS = [null, 'Web', 'Sociálne siete', 'Video', 'Systémy'];
export const FILTER_SLUGS = ['', 'web', 'socialne-siete', 'video', 'systemy'];
export const filterProjects = (projects, idx) =>
  !idx ? projects : projects.filter((p) => p.tags.includes(FILTER_TAGS[idx]));

// ---- Contact: every "write to me" opens the visitor's e-mail app ----
export const CONTACT_EMAIL = 'leo.fudaly@gmail.com';
export function mailtoHref({ subject = 'Správa z portfólia', body = '' } = {}) {
  const q = [];
  if (subject) q.push('subject=' + encodeURIComponent(subject));
  if (body) q.push('body=' + encodeURIComponent(body));
  return `mailto:${CONTACT_EMAIL}${q.length ? '?' + q.join('&') : ''}`;
}
export function openMail(opts) {
  window.location.href = mailtoHref(opts);
}
