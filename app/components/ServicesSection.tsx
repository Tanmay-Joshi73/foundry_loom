'use client';

import { SERVICES } from '@/app/lib/data';
import Icon from './Icon';
import Kicker from './Kicker';

export default function ServicesSection() {
  return (
    <section id="services" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head-row">
          <div>
            <Kicker>What we do</Kicker>
            <h2>Six services, one narrative</h2>
          </div>
          <p className="lede" style={{ margin: 0, maxWidth: '44ch' }}>
            LinkedIn is the core of most engagements. The other channels extend the same voice to where each audience actually spends time.
          </p>
        </div>
        <div className="services">
          {SERVICES.map(([iconName, name, body]) => (
            <article className="svc" key={name}>
              <div className="ic">
                <Icon name={iconName} />
              </div>
              <h3>{name}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
