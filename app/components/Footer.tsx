'use client';

import Image from 'next/image';
import { NAV, SITE } from '@/app/lib/data';
import Icon from './Icon';

interface FooterProps {
  onToggleTheme: () => void;
  theme?: 'light' | 'dark';
}

export default function Footer({ onToggleTheme, theme }: FooterProps) {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Image src="/logo-light.png" alt="The Foundry Loom" width={130} height={130} />
            <p className="tag">Forged in substance. Woven into influence.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {NAV.map(([href, label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Reach us</h4>
            <ul>
              <li><a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li>Bhandup West, Mumbai 400078</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} The Foundry Loom. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
