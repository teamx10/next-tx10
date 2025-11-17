import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teamx10.com';

  return {
    rules: [
      {
        allow: '/',
        disallow: ['/api/', '/sign-in/', '/sign-up/', '/payment/'],
        userAgent: '*'
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
