import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import type { Locale } from '@/lib/i18n/config';

import { ServiceDetailContent } from '@/components/pages/ServiceDetailContent';
import { CASE_STUDIES } from '@/constants/case-studies';
import { ROUTES } from '@/constants/routes';
import { getServiceBySlug, SERVICES } from '@/constants/services';
import { generateMetadata as generateSEOMetadata, generateServiceStructuredData } from '@/utils/seo';

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

  const tSeo = await getTranslations({ locale, namespace: 'seo' });
  const seoKey = `services_${slug}`;

  return generateSEOMetadata({
    description: tSeo(`${seoKey}.description` as never),
    keywords: tSeo(`${seoKey}.keywords` as never).split(', '),
    locale,
    path: `${ROUTES.SERVICES}/${slug}`,
    title: tSeo(`${seoKey}.title` as never)
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const tServices = await getTranslations({ locale, namespace: 'services' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  const relatedCases = CASE_STUDIES.slice(0, 2);
  const jsonLd = generateServiceStructuredData({
    description: service.description[locale],
    locale,
    name: service.title[locale],
    slug: service.slug
  });

  return (
    <main>
      {/* JSON-LD for Service schema — content is static/trusted, not user input */}
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} type="application/ld+json" />
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
