'use client';

import Image from 'next/image';
import { STATS } from '@/app/lib/data';
import Arrow from './Arrow';
import Nav from './Nav';

interface HeroSectionProps {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onMenuClose: () => void;
  heroRef: React.RefObject<HTMLElement | null>;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function HeroSection({
  menuOpen,
  onMenuToggle,
  onMenuClose,
  heroRef,
  theme,
  onToggleTheme,
}: HeroSectionProps) {
  return (
    <div className="wrap hero-shell">
      <header className="hero" id="top" ref={heroRef}>
        <div className="weave" aria-hidden="true" />
        <svg className="thread" viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-20 600 C 180 640, 340 520, 520 470 S 820 380, 900 250 S 1040 60, 1220 90" />
        </svg>

        <Nav
          menuOpen={menuOpen}
          onMenuToggle={onMenuToggle}
          onMenuClose={onMenuClose}
          theme={theme}
          onToggleTheme={onToggleTheme}
        />

        <div className="hero-body">
          <div>
            <h1>
              Forged in substance.<em>Woven into influence.</em>
            </h1>
            <p className="intro">
              We build the personal brands of founders, investors and domain experts, so the people who matter know what you know.
            </p>
            <div className="hero-actions">
              <a className="btn btn-light" href="#contact">
                Book a call <span className="dot"><Arrow /></span>
              </a>
              <a className="btn btn-ghost" href="#work">See our work</a>
            </div>
          </div>
          <div className="hero-mark glass">
            <Image src="/logo-light.png" alt="The Foundry Loom monogram" width={360} height={360} />
          </div>
        </div>

        <div className="stats glass">
          {STATS.map(([value, label]) => (
            <div className="stat" key={label}>
              <b>{value}</b>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}
