import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ChevronRight } from 'lucide-react';
import { sc, openMail } from '../../lib/utils';
import emailjs from '@emailjs/browser';
import { useLang } from '../../lib/LangContext';
import { useMediaQuery } from 'react-responsive';

function Field({ label, children }) {
  return (
  <label className="block">
    <span className="block text-[13px] font-semibold text-ink mb-1.5">{sc(label)}</span>
    {children}
  </label>
)
}

export default function CTASection() {
  const { t } = useLang();
  const c = t.contact;
  const f = c.form;

  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [sending, setSending] = useState(false);

  // Fallback: open the visitor's e-mail app with everything pre-filled
  const openMailFallback = () => {
    const lines = [
      form.message,
      '',
      '—',
      `${f.name.replace(' *', '')}: ${form.name}`,
      form.company && `${f.company}: ${form.company}`,
      `${f.email.replace(' *', '')}: ${form.email}`,
      form.phone && `${f.phone}: ${form.phone}`,
    ].filter((l) => typeof l === 'string');
    openMail({
      subject: `Správa z portfólia – ${form.name}${form.company ? ' (' + form.company + ')' : ''}`,
      body: lines.join('\n'),
    });
  };

  // Sends the message straight to my inbox via EmailJS (no e-mail app needed).
  // If sending fails for any reason, the visitor's e-mail app opens instead.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      await emailjs.send(
        'service_leofudaly',
        'template_580pmn3',
        {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          message: form.message,
          reply_to: form.email,
        },
        { publicKey: 'hSOlixX9PjPehxkpU' }
      );
      setSubmitted(true);
      setForm({ name: '', company: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS error', error?.status, error?.text || error);
      openMailFallback();
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="kontakt" className="bg-canvas-2 py-20 md:py-28 scroll-mt-12">
      <div className="wrap grid lg:grid-cols-[400px_1fr] gap-10 lg:gap-16 items-start">
        <motion.div
          initial={!isMobile ? { opacity: 0, y: 20 } : false}
          whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="h-section">
            {c.heading1} <span className="text-ink-3">{c.heading2}</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.47] text-ink-2 max-w-sm">{c.subtext}</p>

          <div className="mt-10 bg-white rounded-[24px] divide-y divide-line overflow-hidden">
            <a href="mailto:leo.fudaly@gmail.com" className="group flex items-center gap-4 px-6 py-5 hover:bg-black/[0.02] transition-colors">
              <span className="w-10 h-10 rounded-full bg-canvas-2 flex items-center justify-center text-ink">
                <Mail className="w-[18px] h-[18px]" strokeWidth={1.8} />
              </span>
              <span className="flex-1">
                <span className="block text-[12px] text-ink-2">E-mail</span>
                <span className="block text-[17px] text-ink">leo.fudaly@gmail.com</span>
              </span>
              <ChevronRight className="w-4 h-4 text-ink-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-2 mt-6 text-[14px] text-ink-2">
            <span className="w-2 h-2 rounded-full bg-[#30d158]" />
            {c.responseTime}
          </div>
        </motion.div>

        <motion.div
          initial={!isMobile ? { opacity: 0, y: 20 } : false}
          whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-12"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <CheckCircle2 className="w-14 h-14 text-[#30d158]" strokeWidth={1.6} />
              <h3 className="font-heading font-semibold text-[28px] tracking-[-0.02em] text-ink">{f.successTitle}</h3>
              <p className="text-[17px] text-ink-2 max-w-xs">{f.successSub}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={f.name}>
                  <input type="text" placeholder={f.namePlaceholder} required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })} className="field" />
                </Field>
                <Field label={f.company}>
                  <input type="text" placeholder={f.companyPlaceholder} value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })} className="field" />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label={f.email}>
                  <input type="email" placeholder={f.emailPlaceholder} required value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} className="field" />
                </Field>
                <Field label={f.phone}>
                  <input type="tel" placeholder={f.phonePlaceholder} value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })} className="field" />
                </Field>
              </div>

              <Field label={f.message}>
                <textarea rows={5} placeholder={f.messagePlaceholder} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })} className="field resize-none" />
              </Field>

              <p className="text-[12px] leading-[1.5] text-ink-2">
                {f.gdpr} <a href="#" className="text-link hover:underline">{f.gdprLink}</a>.
              </p>

              <button type="submit" disabled={sending} className="btn-primary w-full py-3.5 text-[17px] disabled:opacity-60">
                {sending ? '…' : sc(f.submit)}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
