import type { Metadata } from 'next';

import { ThemeProviderWrapper } from '@/components/layout/ThemeProviderWrapper';

import './globals.css';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

const seoConfig = {
  description:
    'TeamX10 — AI consulting for Ukrainian and international companies. We help teams adopt AI in software development.',
  keywords: ['AI consulting', 'TeamX10', 'artificial intelligence', 'software development', 'Ukraine'],
  title: 'TeamX10 - AI Consulting',
  url: '/'
};

export const metadata: Metadata = generateSEOMetadata(seoConfig);
export const dynamic = 'force-dynamic';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </head>
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
