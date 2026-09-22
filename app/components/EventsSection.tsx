'use client';

import { EVENTS } from '@/app/lib/data';
import type { Event } from '@/app/lib/types';
import Kicker from './Kicker';

interface EventsSectionProps {
  onRsvp: (ev: Event) => void;
}

export default function EventsSection({ onRsvp }: EventsSectionProps) {
  return (
    <section id="events" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="head-row">
          <div>
            <Kicker>Upcoming events</Kicker>
            <h2>Workshops and masterclasses</h2>
          </div>
          <p className="lede" style={{ margin: 0, maxWidth: '40ch' }}>
            Free, small-group sessions for founders and leaders who want to start building their presence.
          </p>
        </div>
        <div className="events">
          {EVENTS.map((ev) => (
            <article className="event" key={ev.id}>
              <div className="date">
                <small>{ev.mon}</small>
                <b>{ev.day}</b>
                <span>{ev.year}</span>
              </div>
              <div className="ev-body">
                <h3>{ev.title}</h3>
                <p className="where">{ev.where}</p>
              </div>
              <div className="ev-side">
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={() => onRsvp(ev)}
                >
                  Save a seat
                </button>
                <span className="seats">{ev.seats} seats</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
