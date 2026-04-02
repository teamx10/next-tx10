import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import { LandingPageContent } from '@/components/pages/LandingPageContent';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: 'seo' });

  return generateSEOMetadata({
    description: tSeo('home.description'),
    keywords: tSeo('home.keywords')
      .split(',')
      .map(k => k.trim())
      .filter(Boolean),
    locale,
    path: '/',
    title: tSeo('home.title')
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <LandingPageContent />;
}
