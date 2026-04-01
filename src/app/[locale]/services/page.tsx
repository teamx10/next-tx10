import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/lib/i18n/config';

import { ServicesPageContent } from '@/components/pages/ServicesPageContent';

interface ServicesPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    description: t('subtitle'),
    title: t('title')
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const tServices = await getTranslations({ locale, namespace: 'services' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <main>
      <ServicesPageContent
        t={{
          cta: tServices('cta'),
          learnMore: tCommon('learnMore'),
          phases: tServices('phases'),
          subtitle: tServices('subtitle'),
          title: tServices('title')
        }}
        locale={locale}
      />
    </main>
  );
}
