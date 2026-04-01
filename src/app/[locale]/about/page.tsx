import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/lib/i18n/config';

import { AboutPageContent } from '@/components/pages/AboutPageContent';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    description: t('subtitle'),
    title: t('title')
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const tAbout = await getTranslations({ locale, namespace: 'about' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <main>
      <AboutPageContent
        t={{
          approach: tAbout('approach'),
          bookCall: tCommon('bookCall'),
          ctaTitle: tAbout('ctaTitle'),
          story: tAbout('story'),
          subtitle: tAbout('subtitle'),
          title: tAbout('title'),
          values: tAbout('values')
        }}
      />
    </main>
  );
}
