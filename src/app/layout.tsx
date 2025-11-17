import type { Metadata } from 'next';

import { ThemeProviderWrapper } from '@/components/layout/ThemeProviderWrapper';

import './globals.css';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

const seoConfig = {
  description:
    'Master poker with our comprehensive guides, training programs, and games. Learn poker strategies, combinations, and improve your skills.',
  keywords: ['poker', 'poker training', 'poker guide', 'poker strategy', 'poker combinations', 'solitaire'],
  title: 'TeamX10 - Poker Training & Games',
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
