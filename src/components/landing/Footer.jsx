import React from 'react';
import { Mail } from 'lucide-react';
import { useLang } from '../../lib/LangContext';
import { getServices } from '../../lib/servicesData';
import { Link } from 'react-router-dom';
import { sc, ui, mailtoHref } from '../../lib/utils';

export default function Footer() {
  const { t, lang } = useLang();
  const f = t.footer;
  const serviceLinks = getServices(t);

  const colHead = 'text-[12px] font-semibold text-ink mb-2.5';
  const linkCls = 'text-[12px] text-ink-2 hover:text-ink hover:underline transition-colors';

  return (
    <footer className="bg-canvas-2 text-[12px] border-t border-line">
      <div className="wrap pt-10 pb-8">
        <p className="text-[12px] leading-[1.5] text-ink-3 pb-4 border-b border-line">{f.tagline}</p>

        <div className="pt-6 mb-6">
          <div className="font-heading font-semibold text-[21px] tracking-[-0.02em] text-ink mb-6">Leo Fudaly <span className="text-ink-3 font-medium">· {ui(lang, 'portfolio')}</span></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            <div>
              <h4 className={colHead}>{sc(f.servicesHeading)}</h4>
              <ul className="space-y-2">
                {serviceLinks.map((s) => (
                  <li key={s.id}>
                    <Link to={`/sluzby/${s.id}`} className={linkCls}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={colHead}>{ui(lang, 'more')}</h4>
              <ul className="space-y-2">
                <li><Link to="/projects" className={linkCls}>{sc(t.nav.projects)}</Link></li>
                <li><a href={mailtoHref()} className={linkCls}>{sc(t.nav.contact)}</a></li>
              </ul>
            </div>

            <div>
              <h4 className={colHead}>{sc(t.nav.contact)}</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:leo.fudaly@gmail.com" className={`${linkCls} inline-flex items-center gap-1.5`}>
                    <Mail className="w-3.5 h-3.5" /> Leo.fudaly@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className={colHead}>{sc(f.bookingHeading)}</h4>
              <p className="text-[12px] leading-[1.5] text-ink-2 mb-4">{f.bookingText}</p>
              <a href={mailtoHref()} className="btn-primary text-[13px] px-4 py-2">
                {sc(f.bookingCta)}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-ink-3">
          <span>© {new Date().getFullYear()} Leo Fudaly · {ui(lang, 'portfolio')}</span>
        </div>
      </div>
    </footer>
  );
}
