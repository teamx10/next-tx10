import type { MetadataRoute } from 'next';

import { CASE_STUDIES } from '@/constants/case-studies';
import { ROUTES } from '@/constants/routes';
import { SERVICES } from '@/constants/services';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://teamx10.com';
const LAST_MODIFIED = new Date();

interface PageEntry {
  path: string;
  priority: number;
}

function buildEntries(pages: PageEntry[]): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority }) => [
    {
      changeFrequency: 'weekly' as const,
      lastModified: LAST_MODIFIED,
      priority,
      url: `${BASE_URL}${path}`
    },
    {
      changeFrequency: 'weekly' as const,
      lastModified: LAST_MODIFIED,
      priority,
      url: `${BASE_URL}/en${path === '/' ? '' : path}`
    }
  ]);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: PageEntry[] = [
    { path: ROUTES.HOME, priority: 1.0 },
    { path: ROUTES.SERVICES, priority: 0.9 },
    ...SERVICES.map(s => ({ path: `${ROUTES.SERVICES}/${s.slug}`, priority: 0.8 })),
    { path: ROUTES.CASES, priority: 0.9 },
    ...CASE_STUDIES.map(c => ({ path: `${ROUTES.CASES}/${c.slug}`, priority: 0.8 })),
    { path: ROUTES.ABOUT, priority: 0.7 },
    { path: ROUTES.CONTACTS, priority: 0.9 },
    { path: ROUTES.LEGAL.PRIVACY, priority: 0.3 },
    { path: ROUTES.LEGAL.TERMS, priority: 0.3 }
  ];

  return buildEntries(pages);
}
