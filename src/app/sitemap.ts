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
      changeFrequency: 'weekly',
      lastModified: new Date(),
      priority: 0.8,
      url: `${baseUrl}${ROUTES.PRODUCTS}`
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.7,
      url: `${baseUrl}${ROUTES.PRODUCT_POKER_GUIDE}`
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.7,
      url: `${baseUrl}${ROUTES.PRODUCT_POKER_COMBINATIONS}`
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.7,
      url: `${baseUrl}${ROUTES.PRODUCT_POKER_STRATEGY}`
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.7,
      url: `${baseUrl}${ROUTES.PRODUCT_SOLITAIRE}`
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: 0.6,
      url: `${baseUrl}${ROUTES.FAQ}`
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
