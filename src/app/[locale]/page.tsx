import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import { LandingPageContent } from '@/components/pages/LandingPageContent';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'landing' });

  return generateSEOMetadata({
    description: t('hero.subtitle'),
    keywords: ['AI consulting', 'TeamX10', 'AI adoption', 'developer productivity'],
    title: t('hero.title'),
    url: locale === 'en' ? '/en' : '/'
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <LandingPageContent />;
}
