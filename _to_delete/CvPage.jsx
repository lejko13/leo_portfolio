import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Download } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const EMAIL = 'leo.fudaly@gmail.com';

const SERVICES = [
  { t: 'Tvorba webov & e-shopov', d: 'Dizajn, UX/UI a vývoj v Reacte. Platobné brány, doprava, správa produktov.' },
  { t: 'Videá & Ad kreatívy', d: 'Reklamné videá, Reels a AI video pre sociálne siete a kampane.' },
  { t: 'Social Media Management', d: 'Instagram posty, vizuály, obsahová stratégia a grafika pre značky.' },
  { t: 'Firemné systémy', d: 'Rezervačné systémy, CRM a admin dashboardy na mieru.' },
];

const PROJECTS = [
  { y: '2026', n: 'ciaoCASA', c: 'Web pre štúdio interiérového dizajnu', link: '/ciaocasa', live: true },
  { y: '2026', n: 'Leo Fudaly – E-shop', c: 'Vlastný e-shop s platobnou bránou a Packeta API', link: '/leofudaly-eshop', live: true },
  { y: '2026', n: 'Leni Hončárová', c: 'Osobný portfólio web', link: '/leni-honcarova', live: true },
  { y: '2026', n: 'Leo Fudaly – Instagram Reels', c: 'Vlastný obsah – natáčanie a strih', link: '/leofudaly-reels', live: true },
  { y: '2026', n: 'Hotel Lomnica *****', c: 'Videá, Reels a Instagram posty', link: '/hotel-lomnica' },
  { y: '2026', n: 'Ladomer – Premium Auto Detailing', c: 'Logo, sociálne siete a videá', link: '/ladomer-detailing' },
  { y: '2026', n: 'Hrajko & Belanské stavebniny', c: 'Video reklamy', link: '/hrajko-reklamy' },
  { y: '2026', n: 'Rezervo & SkillFind', c: 'Rezervačný systém a CRM (React, TypeScript, Supabase)', link: '/rezervo' },
];

const SKILLS = [
  { t: 'Vývoj', i: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Supabase', 'Vercel'] },
  { t: 'Dizajn', i: ['Figma', 'Photoshop', 'Illustrator', 'Canva', 'UX/UI', 'Branding'] },
  { t: 'Video', i: ['Premiere Pro', 'After Effects', 'CapCut', 'AI video', '3D modely'] },
];

function Head({ children }) {
  return (
    <h2 className="font-heading font-semibold text-[13px] tracking-[0.08em] uppercase text-ink-2 mb-4 md:mb-5 print:mb-3">
      {children}
    </h2>
  );
}

export default function CvPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="print:hidden"><Navbar /></div>

      <main className="wrap pt-[120px] md:pt-[150px] pb-20 md:pb-28 print:p-0">
        <div className="max-w-[880px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 print:flex-row print:items-end">
            <div>
              <h1 className="font-heading font-semibold text-[48px] md:text-[72px] leading-[1] tracking-[-0.04em] text-ink print:text-[52px]">
                Leo Fudaly
              </h1>
              <p className="mt-3 text-[19px] md:text-[23px] font-semibold tracking-[-0.01em] bg-gradient-to-r from-[#000000] via-[#333333] to-[#555555] bg-clip-text text-transparent print:text-[18px]">
                Web dizajnér & tvorca digitálneho obsahu
              </p>
            </div>
            <div className="flex flex-col gap-2 text-[15px] text-ink print:text-[12px]">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:underline">
                <Mail className="w-4 h-4 text-ink-2" /> {EMAIL}
              </a>
              <a href="https://portfolio.leofudaly.com" className="inline-flex items-center gap-2 hover:underline">
                <Globe className="w-4 h-4 text-ink-2" /> portfolio.leofudaly.com
              </a>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="btn-primary mt-8 inline-flex items-center gap-2 print:hidden"
          >
            <Download className="w-4 h-4" /> Stiahnuť PDF
          </button>

          {/* Profile */}
          <section className="mt-12 md:mt-16 print:mt-8">
            <Head>Profil</Head>
            <p className="text-[17px] md:text-[19px] leading-[1.55] text-ink print:text-[13px]">
              Navrhujem, vyvíjam a spúšťam digitálne produkty – od webov a e-shopov cez video reklamy až po firemné systémy.
              <span className="text-ink-2"> Všetko robím sám, takže klient komunikuje priamo so mnou. Zameriavam sa na rýchlosť,
              čistý dizajn a výsledky, ktoré sa dajú zmerať. Web viem spustiť do 7 dní.</span>
            </p>
          </section>

          {/* Services – black cards */}
          <section className="mt-12 md:mt-16 print:mt-8">
            <Head>Čo robím</Head>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 print:grid-cols-2 print:gap-2">
              {SERVICES.map((s, i) => (
                <div key={s.t} className="bg-black text-white rounded-[24px] p-6 md:p-7 print:rounded-[14px] print:p-4 print:[-webkit-print-color-adjust:exact] print:[print-color-adjust:exact]">
                  <div className="text-[12px] font-semibold text-white/60 mb-2 print:text-[10px]">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="font-heading font-semibold text-[21px] md:text-[23px] leading-[1.15] tracking-[-0.02em] print:text-[15px]">{s.t}</h3>
                  <p className="mt-2 text-[14px] leading-[1.45] text-white/60 print:text-[11px]">{s.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mt-12 md:mt-16 print:mt-8 print:break-inside-avoid">
            <Head>Vybrané projekty</Head>
            <div className="divide-y divide-line border-y border-line">
              {PROJECTS.map((p) => (
                <Link key={p.n} to={p.link} className="group flex items-baseline gap-4 md:gap-8 py-4 print:py-2">
                  <span className="w-12 shrink-0 text-[14px] text-ink-3 tabular-nums print:text-[11px]">{p.y}</span>
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center gap-2">
                      <span className="text-[17px] font-semibold text-ink group-hover:underline print:text-[13px]">{p.n}</span>
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full print:text-[9px] ${p.live ? 'bg-[#30d158]/15 text-[#1a7f37]' : 'bg-canvas-2 text-ink-2'}`}>
                        {p.live ? 'Spustené' : 'Návrh'}
                      </span>
                    </span>
                    <span className="block text-[15px] text-ink-2 print:text-[11px]">{p.c}</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mt-12 md:mt-16 print:mt-8 print:break-inside-avoid">
            <Head>Nástroje & technológie</Head>
            <div className="grid md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
              {SKILLS.map((g) => (
                <div key={g.t}>
                  <div className="text-[15px] font-semibold text-ink mb-3 print:text-[12px] print:mb-2">{g.t}</div>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    {g.i.map((x) => (
                      <span key={x} className="text-[14px] px-3.5 py-1.5 rounded-full bg-canvas-2 text-ink print:text-[10px] print:px-2 print:py-0.5 print:[-webkit-print-color-adjust:exact] print:[print-color-adjust:exact]">{x}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <div className="print:hidden"><Footer /></div>
    </div>
  );
}
