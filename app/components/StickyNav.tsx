'use client';

import Image from 'next/image';
import { NAV } from '@/app/lib/data';

interface StickyNavProps {
  show: boolean;
}

export default function StickyNav({ show }: StickyNavProps) {
  return (
    <div
      className={`sticky${show ? ' show' : ''}`}
      aria-hidden={!show}
    >
      <a className="brand" href="#top" tabIndex={show ? 0 : -1}>
        <Image src="/logo-dark.png" alt="" width={38} height={38} />
        <span>The Foundry Loom</span>
      </a>
      <ul>
        {NAV.slice(0, 5).map(([href, label]) => (
          <li key={href}>
            <a href={href} tabIndex={show ? 0 : -1}>{label}</a>
          </li>
        ))}
      </ul>
      <a
        className="btn btn-primary"
        href="#contact"
        tabIndex={show ? 0 : -1}
        style={{ padding: '10px 20px' }}
      >
        Book a call
      </a>
    </div>
  );
}
