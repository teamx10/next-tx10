import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import type { Locale } from '@/lib/i18n/config';

import { ServiceDetailContent } from '@/components/pages/ServiceDetailContent';
import { CASE_STUDIES } from '@/constants/case-studies';
import { getServiceBySlug, SERVICES } from '@/constants/services';

interface ServiceDetailPageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    description: service.description[locale],
    title: service.title[locale]
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const tServices = await getTranslations({ locale, namespace: 'services' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const relatedCases = CASE_STUDIES.slice(0, 2);

  return (
    <main>
      <ServiceDetailContent
        t={{
          bookCall: tCommon('bookCall'),
          cta: tServices('cta'),
          deliverable: tServices('deliverable'),
          features: tServices('features'),
          phase: tServices('phase'),
          relatedCases: tServices('relatedCases')
        }}
        cases={relatedCases}
        locale={locale}
        service={service}
      />
    </main>
  );
}
