import type { Metadata } from 'next';

export interface OrganizationStructuredData {
  '@context': string;
  '@type': string;
  description: string;
  name: string;
  url: string;
}

export interface SEOConfig {
  description: string;
  image?: string;
  keywords?: string[];
  locale?: string;
  noindex?: boolean;
  path?: string;
  title: string;
  type?: 'article' | 'website';
  url?: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://teamx10.com';

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    description,
    image,
    keywords = [],
    locale = 'uk',
    noindex = false,
    path,
    title,
    type = 'website',
    url
  } = config;

  const fullTitle = title.includes('TeamX10') ? title : `${title} | TeamX10`;
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const ogImage = image || `${SITE_URL}/images/tx10-logo-256.png`;
  const rawPath = path || url || '/';
  // Strip /en prefix if caller passes a locale-prefixed path — we always work with locale-agnostic paths
  const canonicalPath = rawPath.startsWith('/en/') ? rawPath.slice(3) : rawPath === '/en' ? '/' : rawPath;
  const enPath = `/en${canonicalPath === '/' ? '' : canonicalPath}`;

  return {
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: {
        en: `${SITE_URL}${enPath}`,
        uk: `${SITE_URL}${canonicalPath}`,
        'x-default': `${SITE_URL}${canonicalPath}`
      }
    },
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    openGraph: {
      description,
      images: [
        {
          alt: title,
          height: 630,
          url: ogImage,
          width: 1200
        }
      ],
      locale,
      siteName: 'TeamX10',
      title: fullTitle,
      type,
      url: fullUrl
    },
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    title: fullTitle,
    twitter: {
      card: 'summary_large_image',
      description,
      images: [ogImage],
      title: fullTitle
    }
  };
}

export function generateOrganizationStructuredData(description?: string): OrganizationStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    description:
      description ||
      'TeamX10 — AI consulting for Ukrainian and international companies. We help teams adopt AI in software development.',
    name: 'TeamX10',
    url: SITE_URL
  };
}
