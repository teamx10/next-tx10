import { Metadata } from 'next';

export interface SEOConfig {
  description: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
  title: string;
  type?: 'article' | 'website';
  url?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const { description, image, keywords = [], noindex = false, title, type = 'website', url } = config;

  const fullTitle = title.includes('TeamX10') ? title : `${title} | TeamX10`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://teamx10.com';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const ogImage = image || `${siteUrl}/images/tx10-logo-256.png`;

  return {
    alternates: {
      canonical: fullUrl
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
