'use client';

import { ICONS } from '@/app/lib/data';

interface IconProps {
  name: string;
  size?: number;
}

export default function Icon({ name, size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={ICONS[name]} fillRule="evenodd" />
    </svg>
  );
}
