import type { Locale } from './i18n';

export interface AIMaturityLevel {
  description: Record<Locale, string>;
  icon: string;
  level: number;
  multiplier: string;
  socialMarker?: Record<Locale, string>;
  title: Record<Locale, string>;
}
