'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import type { Event } from '@/app/lib/types';
import StickyNav from './StickyNav';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WhoSection from './WhoSection';
import ServicesSection from './ServicesSection';
import WorkSection from './WorkSection';
import RoomsSection from './RoomsSection';
import ProcessSection from './ProcessSection';
import EventsSection from './EventsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import RsvpModal from './RsvpModal';

type Theme = 'light' | 'dark' | null;

export default function FoundryLoom() {
  const [theme, setTheme] = useState<Theme>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [stickyOn, setStickyOn] = useState(false);
  const [rsvpFor, setRsvpFor] = useState<Event | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  // Restore theme from localStorage on mount
  useEffect(() => {
    try {
      const t = localStorage.getItem('tfl-theme') as Theme;
      if (t) setTheme(t);
    } catch {
      // localStorage may be unavailable in some environments
    }
  }, []);

  // IntersectionObserver for sticky nav
  useEffect(() => {
    if (!heroRef.current || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => setStickyOn(!entry.isIntersecting),
      { threshold: 0.05 },
    );
    io.observe(heroRef.current);
    return () => io.disconnect();
  }, []);

  const toggleTheme = useCallback(() => {
    const dark = theme
      ? theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next: Theme = dark ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('tfl-theme', next); } catch { /* ignore */ }
  }, [theme]);

  const openRsvp = useCallback((ev: Event) => {
    setRsvpFor(ev);
  }, []);

  const closeRsvp = useCallback(() => {
    setRsvpFor(null);
  }, []);

  return (
    <div className="tfl" data-theme={theme ?? undefined}>
      <StickyNav show={stickyOn} />

      <HeroSection
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((o) => !o)}
        onMenuClose={() => setMenuOpen(false)}
        heroRef={heroRef}
      />

      <main>
        <AboutSection />
        <WhoSection />
        <ServicesSection />
        <WorkSection tab={tab} onTabChange={setTab} />
        <RoomsSection />
        <ProcessSection />
        <EventsSection onRsvp={openRsvp} />
        <ContactSection />
      </main>

      <Footer onToggleTheme={toggleTheme} />

      <RsvpModal event={rsvpFor} onClose={closeRsvp} />
    </div>
  );
}
