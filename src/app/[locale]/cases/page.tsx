import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/lib/i18n/config';

import { CasesPageContent } from '@/components/pages/CasesPageContent';
import { ROUTES } from '@/constants/routes';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

interface CasesPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: CasesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: 'seo' });

  return generateSEOMetadata({
    description: tSeo('cases.description'),
    keywords: tSeo('cases.keywords')
      .split(',')
      .map(k => k.trim())
      .filter(Boolean),
    locale,
    path: ROUTES.CASES,
    title: tSeo('cases.title')
  });
}

export default async function CasesPage({ params }: CasesPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const tCases = await getTranslations({ locale, namespace: 'cases' });

  return (
    <main>
      <CasesPageContent
        t={{
          cta: tCases('cta'),
          subtitle: tCases('subtitle'),
          title: tCases('title'),
          viewCase: tCases('viewCase')
        }}
        locale={locale}
      />
    </main>
  );
}
