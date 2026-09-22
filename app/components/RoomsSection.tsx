'use client';

import { LADDER } from '@/app/lib/data';
import Kicker from './Kicker';

export default function RoomsSection() {
  return (
    <section id="rooms">
      <div className="wrap rooms">
        <div>
          <Kicker>Beyond the feed</Kicker>
          <h2>Visibility that reaches the right rooms</h2>
          <p className="lede" style={{ marginTop: 20 }}>
            Impressions are where we start reporting, not where we stop. Every monthly report leads with who is reading and what it has led to.
          </p>
        </div>
        <ol className="ladder">
          {LADDER.map(([name, body]) => (
            <li key={name}>
              <h3>{name}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
