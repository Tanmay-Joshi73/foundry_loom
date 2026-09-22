'use client';

import { STEPS } from '@/app/lib/data';
import Kicker from './Kicker';

export default function ProcessSection() {
  return (
    <section id="process" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head-row">
          <div>
            <Kicker>How we work</Kicker>
            <h2>From raw expertise to finished fabric</h2>
          </div>
        </div>
        <div className="steps">
          {STEPS.map(([name, body], i) => (
            <article
              className={`step${i === STEPS.length - 1 ? ' last' : ''}`}
              key={name}
            >
              <span className="n">{i + 1}</span>
              <h3>{name}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
