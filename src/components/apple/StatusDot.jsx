import React from 'react';
import { useLang } from '../../lib/LangContext';
import { ui } from '../../lib/utils';

const COLORS = { active: '#30d158', concept: '#ff3b30' };

export function StatusDot({ status = 'concept', className = '' }) {
  const { lang } = useLang();
  const label = ui(lang, status === 'active' ? 'statusActive' : 'statusConcept');
  return (
    <span
      title={label}
      aria-label={label}
      className={`inline-block w-2 h-2 rounded-full shrink-0 ${className}`}
      style={{ backgroundColor: COLORS[status] || COLORS.concept, boxShadow: `0 0 0 3px ${(COLORS[status] || COLORS.concept)}22` }}
    />
  );
}

export function StatusLegend({ className = '' }) {
  const { lang } = useLang();
  return (
    <div className={`inline-flex items-center gap-5 text-[13px] text-ink-2 ${className}`}>
      <span className="inline-flex items-center gap-2"><StatusDot status="active" />{ui(lang, 'statusActive')}</span>
      <span className="inline-flex items-center gap-2"><StatusDot status="concept" />{ui(lang, 'statusConcept')}</span>
    </div>
  );
}
