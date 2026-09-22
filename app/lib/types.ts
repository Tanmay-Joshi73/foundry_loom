export interface Event {
  id: string;
  mon: string;
  day: string;
  year: string;
  title: string;
  where: string;
  seats: number;
}

export interface Case {
  tab: string;
  meta: string;
  title: string;
  body: string;
  m: [string, string][];
  wide: [string, string];
}

export interface FormState {
  kind: 'idle' | 'sending' | 'ok' | 'err';
  msg: string;
}

export interface EnquiryPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  channels: string[];
  goal: string;
  website?: string | null; // honeypot
}

export interface RsvpPayload {
  event: string;
  name: string;
  email: string;
  website?: string | null; // honeypot
}

export interface ApiResponse {
  ok: boolean;
  errors?: Record<string, string>;
  error?: string;
  mailed?: boolean;
}
