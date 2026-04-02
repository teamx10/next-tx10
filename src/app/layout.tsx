import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { getLocale } from 'next-intl/server';

import { generateOrganizationStructuredData, generateMetadata as generateSEOMetadata } from '@/utils/seo';

import './globals.css';

const seoConfig = {
  description:
    'TeamX10 — AI consulting for Ukrainian and international companies. We help teams adopt AI in software development.',
  keywords: ['AI consulting', 'TeamX10', 'artificial intelligence', 'software development', 'Ukraine'],
  title: 'TeamX10 - AI Consulting',
  url: '/'
};

export const metadata: Metadata = generateSEOMetadata(seoConfig);

const orgJsonLd = generateOrganizationStructuredData();

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
        {/* Organization JSON-LD — static trusted data, not user input */}
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} type="application/ld+json" />
      </head>
      <body>{children}</body>
    </html>
  );
}
