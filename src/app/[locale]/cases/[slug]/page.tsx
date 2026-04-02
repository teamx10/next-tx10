import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import type { Locale } from '@/lib/i18n/config';

import { CaseStudyContent } from '@/components/pages/CaseStudyContent';
import { CASE_STUDIES, getCaseStudyBySlug } from '@/constants/case-studies';
import { ROUTES } from '@/constants/routes';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

interface CaseStudyPageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) return {};

  const tSeo = await getTranslations({ locale, namespace: 'seo' });
  const seoKey = `cases_${slug}`;

  return generateSEOMetadata({
    description: tSeo(`${seoKey}.description` as never),
    locale,
    path: `${ROUTES.CASES}/${slug}`,
    title: tSeo(`${seoKey}.title` as never)
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) notFound();

  const tCases = await getTranslations({ locale, namespace: 'cases' });

  return (
    <main>
      <CaseStudyContent
        t={{
          challenge: tCases('challenge'),
          cta: tCases('cta'),
          insight: tCases('insight'),
          metrics: tCases('metrics'),
          relatedServices: tCases('relatedServices'),
          results: tCases('results'),
          solution: tCases('solution')
        }}
        caseStudy={caseStudy}
        locale={locale}
      />
    </main>
  );
}
