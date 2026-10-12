import React from 'react';

/** Apple-style segmented pill control; scrolls horizontally on small screens. */
export default function FilterBar({ filters, active, onChange, tone = 'white', trailing }) {
  const bg = tone === 'white' ? 'bg-white' : 'bg-canvas-2';
  return (
    <div className="flex items-center gap-4">
      <div className="no-scrollbar overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
        <div className={`inline-flex gap-1 p-1 rounded-full ${bg}`}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => onChange(f)}
              className={`chip whitespace-nowrap ${active === f ? 'chip-on' : 'chip-off'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      {trailing && <div className="ml-auto shrink-0 text-[14px] text-ink-2 hidden sm:block">{trailing}</div>}
    </div>
  );
}
