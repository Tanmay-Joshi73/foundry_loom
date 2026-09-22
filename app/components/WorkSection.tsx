'use client';

import { useRef } from 'react';
import { CASES } from '@/app/lib/data';
import Kicker from './Kicker';

interface WorkSectionProps {
  tab: number;
  onTabChange: (i: number) => void;
}

export default function WorkSection({ tab, onTabChange }: WorkSectionProps) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectTab = (i: number) => {
    onTabChange(i);
    tabRefs.current[i]?.focus();
  };

  return (
    <section id="work" className="work">
      <div className="wrap">
        <Kicker>Our work</Kicker>
        <h2>Four clients, four kinds of result</h2>
        <p className="lede" style={{ marginTop: 18 }}>
          Client names are kept private. Every figure comes from the client&apos;s own LinkedIn analytics for the period shown.
        </p>
        <div className="tabs" role="tablist" aria-label="Case studies">
          {CASES.map((c, i) => (
            <button
              key={c.tab}
              ref={(el) => { tabRefs.current[i] = el; }}
              className="tab"
              role="tab"
              id={`tfl-t${i}`}
              aria-controls={`tfl-c${i}`}
              aria-selected={tab === i}
              tabIndex={tab === i ? 0 : -1}
              onClick={() => onTabChange(i)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') selectTab((i + 1) % CASES.length);
                if (e.key === 'ArrowLeft') selectTab((i - 1 + CASES.length) % CASES.length);
              }}
            >
              {c.tab}
            </button>
          ))}
        </div>
        {CASES.map((c, i) => (
          <div
            key={c.tab}
            className="case"
            role="tabpanel"
            id={`tfl-c${i}`}
            aria-labelledby={`tfl-t${i}`}
            hidden={tab !== i}
          >
            <div>
              <p className="meta">{c.meta}</p>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
            <div className="metrics">
              {c.m.map(([value, label]) => (
                <div className="metric" key={label}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
              <div className="metric wide">
                <b>{c.wide[0]}</b>
                <span>{c.wide[1]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
