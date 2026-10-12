import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLang } from '../../lib/LangContext';
import { SUPPORTED_LANGS } from '../../lib/i18n';
import { getServices } from '../../lib/servicesData';
import { sc, ui, openMail } from '../../lib/utils';

const LANG_LABELS = {
  SK: 'Slovenčina', EN: 'English', CZ: 'Čeština', DE: 'Deutsch', PL: 'Polski',
};

export default function Navbar() {
  const { lang, switchLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const serviceLinks = getServices(t).map((s) => ({
    label: s.title,
    href: `/sluzby/${s.id}`,
    tag: s.tags.slice(0, 3).join(' · '),
  }));

  const navLinks = [
    { label: t.nav.services, href: '#sluzby', hasDropdown: true },
    { label: t.nav.projects, href: '/projects', isRoute: true },
    { label: t.nav.contact, isContact: true },
  ];

  const handleNavClick = (e, href) => {
    if (!href.includes('#')) return;
    e.preventDefault();
    const [path, hash] = href.split('#');

    if (location.pathname !== path) {
      navigate(path || '/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleKontaktClick = () => openMail();

  const linkCls = 'text-[12px] text-ink/80 hover:text-ink transition-colors duration-200';

  return (
    <>
      {/* Dim page behind flyout, like apple.com */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:block fixed inset-0 z-[105] bg-black/10 backdrop-blur-[18px]"
          />
        )}
      </AnimatePresence>

      <nav
        ref={dropdownRef}
        onMouseLeave={() => setServicesOpen(false)}
        className={`fixed top-0 left-0 right-0 z-[110] transition-colors duration-300 ${
          servicesOpen || mobileOpen
            ? 'bg-white'
            : 'bg-[rgba(250,250,252,0.8)] backdrop-blur-[20px] backdrop-saturate-[1.8]'
        }`}
      >
        <div className="wrap">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <a href="/" className="flex items-center z-10" onMouseEnter={() => setServicesOpen(false)}>
              <span className="font-heading font-semibold text-ink text-[17px] tracking-[-0.02em]">
                Leo Fudaly
              </span>
              <span className="ml-2 pl-2 border-l border-line text-[13px] font-medium text-ink-3">{ui(lang, 'portfolio')}</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setServicesOpen(true)}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={`flex items-center gap-1 ${linkCls}`}
                    >
                      {sc(link.label)}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : link.isContact ? (
                    <button onMouseEnter={() => setServicesOpen(false)} onClick={handleKontaktClick} className={linkCls}>
                      {sc(link.label)}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      onMouseEnter={() => setServicesOpen(false)}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={linkCls}
                    >
                      {sc(link.label)}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="relative">
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-40 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden p-1"
                    >
                      {SUPPORTED_LANGS.map((code) => (
                        <button
                          key={code}
                          onClick={() => { switchLang(code); setLangOpen(false); }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-[13px] transition-colors ${
                            lang === code ? 'text-[#000000] bg-[#000000]/10' : 'text-ink hover:bg-black/5'
                          }`}
                        >
                          <span className="font-semibold mr-2">{code}</span>
                          {LANG_LABELS[code]}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={handleKontaktClick}
                onMouseEnter={() => setServicesOpen(false)}
                className="rounded-full bg-[#000000] hover:bg-[#333333] text-white text-[12px] px-3.5 py-[5px] transition-colors"
              >
                {sc(t.nav.cta)}
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label="Menu"
              className="lg:hidden text-ink/80 hover:text-ink -mr-1 p-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]/40"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.6} /> : <Menu className="w-5 h-5" strokeWidth={1.6} />}
            </button>
          </div>
        </div>

        {/* Services flyout (apple.com style) */}
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.6, 1] }}
              className="hidden lg:block overflow-hidden bg-white"
            >
              <div className="wrap pt-8 pb-14">
                <div className="grid grid-cols-[1fr_auto] gap-16">
                  <div>
                    <div className="text-[12px] text-ink-2 mb-4">{sc(t.nav.services)}</div>
                    <div className="flex flex-col gap-2">
                      {serviceLinks.map((service, i) => (
                        <motion.div
                          key={service.href}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.04 * i + 0.08, duration: 0.25 }}
                        >
                          <Link
                            to={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="group inline-flex items-baseline gap-3"
                          >
                            <span className="font-heading font-semibold text-[24px] leading-[1.25] tracking-[-0.02em] text-ink group-hover:text-[#000000] transition-colors">
                              {service.label}
                            </span>
                            <span className="text-[12px] text-ink-3 opacity-0 group-hover:opacity-100 transition-opacity">
                              {service.tag}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="min-w-[200px]">
                    <div className="text-[12px] text-ink-2 mb-4">{ui(lang, 'more')}</div>
                    <div className="flex flex-col gap-2.5 text-[12px] font-semibold text-ink">
                      <Link to="/projects" onClick={() => setServicesOpen(false)} className="hover:text-[#000000]">
                        {sc(t.nav.projects)}
                      </Link>
                      <button onClick={() => { setServicesOpen(false); handleKontaktClick(); }} className="text-left hover:text-[#000000]">
                        {sc(t.nav.contact)}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu — full-screen sheet */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-x-0 top-12 bottom-0 bg-white overflow-y-auto"
            >
              <div className="min-h-full flex flex-col px-7 pt-3 pb-[max(20px,env(safe-area-inset-bottom))]">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * i + 0.05 }}
                  >
                    {link.isContact ? (
                      <button
                        onClick={() => {
                          setMobileOpen(false);
                          setTimeout(() => handleKontaktClick(), 250);
                        }}
                        className="block w-full text-left py-1.5 font-heading font-semibold text-[24px] leading-tight tracking-[-0.02em] text-ink"
                      >
                        {sc(link.label)}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (!link.href?.includes('#')) return;
                          e.preventDefault();
                          setMobileOpen(false);
                          setTimeout(() => handleNavClick(e, link.href), 250);
                        }}
                        className="block py-1.5 font-heading font-semibold text-[24px] leading-tight tracking-[-0.02em] text-ink"
                      >
                        {sc(link.label)}
                      </a>
                    )}
                  </motion.div>
                ))}

                <div className="mt-5 pt-4 border-t border-line">
                  <div className="text-[12px] text-ink-2 mb-1">{sc(t.nav.services)}</div>
                  <div className="flex flex-col">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-2 text-[15px] text-ink"
                      >
                        {service.label}
                        <ChevronRight className="w-4 h-4 text-ink-3" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex-1 min-h-5" />
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleKontaktClick();
                  }}
                  className="btn-primary w-full py-3 text-[16px]"
                >
                  {sc(t.nav.cta)}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
