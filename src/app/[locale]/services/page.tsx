import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/lib/i18n/config';

import { ServicesPageContent } from '@/components/pages/ServicesPageContent';
import { ROUTES } from '@/constants/routes';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

interface ServicesPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: 'seo' });

  return generateSEOMetadata({
    description: tSeo('services.description'),
    keywords: tSeo('services.keywords').split(', '),
    locale,
    path: ROUTES.SERVICES,
    title: tSeo('services.title')
  });
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
