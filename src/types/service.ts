import type { Locale } from './i18n';

interface ServiceFeature {
  description: Record<Locale, string>;
  icon: string;
  title: Record<Locale, string>;
}

export interface Service {
  deliverable: Record<Locale, string>;
  description: Record<Locale, string>;
  features: ServiceFeature[];
  icon: string;
  phase: number;
  slug: string;
  title: Record<Locale, string>;
}
