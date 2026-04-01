import type { Locale } from './i18n';

export interface CaseStudyMetric {
  label: Record<Locale, string>;
  value: string;
}

export interface CaseStudy {
  challenge: Record<Locale, string>;
  client: string;
  description: Record<Locale, string>;
  insight: Record<Locale, string>;
  metrics: CaseStudyMetric[];
  results: Record<Locale, string>;
  slug: string;
  solution: Record<Locale, string>;
  tags: string[];
  title: Record<Locale, string>;
}
