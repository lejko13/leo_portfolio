import React from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

const EMAIL = 'leo.fudaly@gmail.com';

const SECTIONS = [
  {
    h: 'Kto spracúva vaše údaje',
    p: [
      `Prevádzkovateľom osobných údajov je Leo Fudaly (ďalej „ja“). V prípade akýchkoľvek otázok ma kontaktujte na e-maile ${EMAIL}.`,
    ],
  },
  {
    h: 'Aké údaje spracúvam',
    p: ['Cez kontaktný formulár spracúvam len údaje, ktoré mi sami pošlete:'],
    list: ['meno a priezvisko', 'názov firmy (nepovinné)', 'e-mailovú adresu', 'telefónne číslo (nepovinné)', 'obsah vašej správy'],
  },
  {
    h: 'Prečo ich spracúvam',
    p: [
      'Údaje používam výhradne na to, aby som vám mohol odpovedať na dopyt, pripraviť cenovú ponuku a komunikovať s vami o prípadnej spolupráci.',
      'Právnym základom je vykonanie opatrení pred uzavretím zmluvy na vašu žiadosť (čl. 6 ods. 1 písm. b) GDPR) a môj oprávnený záujem odpovedať na prijaté správy (čl. 6 ods. 1 písm. f) GDPR).',
    ],
  },
  {
    h: 'Ako dlho ich uchovávam',
    p: [
      'Údaje uchovávam len po dobu nevyhnutnú na vybavenie vášho dopytu, najdlhšie 2 roky od poslednej komunikácie. Ak spolu uzavrieme zmluvu, uchovávam ich po dobu, ktorú vyžadujú účtovné a daňové predpisy.',
    ],
  },
  {
    h: 'Komu ich poskytujem',
    p: [
      'Vaše údaje nepredávam ani neposkytujem tretím stranám na marketingové účely. Na technické zabezpečenie webu a odosielania správ využívam týchto sprostredkovateľov:',
    ],
    list: [
      'EmailJS – doručenie správy z kontaktného formulára na môj e-mail',
      'Google (Gmail) – správa e-mailovej komunikácie',
      'Vercel – hosting webovej stránky',
    ],
  },
  {
    h: 'Cookies a lokálne úložisko',
    p: [
      'Web nepoužíva analytické ani reklamné cookies. V prehliadači sa ukladá len zvolený jazyk stránky, aby ste ho nemuseli nastavovať znova.',
    ],
  },
  {
    h: 'Vaše práva',
    p: ['V súvislosti so spracúvaním osobných údajov máte právo:'],
    list: [
      'požadovať prístup k svojim údajom',
      'na opravu nesprávnych údajov',
      'na vymazanie údajov',
      'na obmedzenie spracúvania',
      'namietať proti spracúvaniu',
      'na prenosnosť údajov',
      'podať sťažnosť na Úrad na ochranu osobných údajov SR (dataprotection.gov.sk)',
    ],
    after: `Svoje práva uplatníte jednoducho e-mailom na ${EMAIL}. Odpoviem najneskôr do 30 dní.`,
  },
];

export default function GdprPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="wrap pt-[120px] md:pt-[150px] pb-20 md:pb-28">
        <div className="max-w-[760px]">
          <h1 className="font-heading font-semibold text-[40px] md:text-[56px] leading-[1.05] tracking-[-0.03em] text-ink">
            Ochrana osobných údajov
          </h1>
          <p className="mt-4 text-[17px] md:text-[19px] text-ink-2">
            Zásady spracúvania osobných údajov podľa nariadenia GDPR (EÚ) 2016/679.
          </p>

          <div className="mt-12 md:mt-16 space-y-10 md:space-y-12">
            {SECTIONS.map((s, i) => (
              <section key={s.h}>
                <h2 className="font-heading font-semibold text-[22px] md:text-[26px] tracking-[-0.02em] text-ink">
                  {String(i + 1).padStart(2, '0')} · {s.h}
                </h2>
                {s.p.map((t) => (
                  <p key={t} className="mt-3 text-[16px] md:text-[17px] leading-[1.6] text-ink-2">{t}</p>
                ))}
                {s.list && (
                  <ul className="mt-3 space-y-1.5 list-disc pl-5 text-[16px] md:text-[17px] leading-[1.6] text-ink-2">
                    {s.list.map((li) => <li key={li}>{li}</li>)}
                  </ul>
                )}
                {s.after && <p className="mt-3 text-[16px] md:text-[17px] leading-[1.6] text-ink-2">{s.after}</p>}
              </section>
            ))}
          </div>

          <p className="mt-14 text-[14px] text-ink-3">Posledná aktualizácia: 12. 10. 2026</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
