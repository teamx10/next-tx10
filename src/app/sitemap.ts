import { MetadataRoute } from 'next';

import { ROUTES } from '@/constants/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teamx10.com';

  return [
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 1,
      url: baseUrl
    },
    {
      changeFrequency: 'yearly',
      lastModified: new Date(),
      priority: 0.3,
      url: `${baseUrl}${ROUTES.LEGAL.TERMS}`
    },
    {
      changeFrequency: 'yearly',
      lastModified: new Date(),
      priority: 0.3,
      url: `${baseUrl}${ROUTES.LEGAL.PRIVACY}`
    }
  ];
}
