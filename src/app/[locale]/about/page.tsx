import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/lib/i18n/config';

import { AboutPageContent } from '@/components/pages/AboutPageContent';
import { ROUTES } from '@/constants/routes';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: 'seo' });

  return generateSEOMetadata({
    description: tSeo('about.description'),
    keywords: tSeo('about.keywords')
      .split(',')
      .map(k => k.trim())
      .filter(Boolean),
    locale,
    path: ROUTES.ABOUT,
    title: tSeo('about.title')
  });
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
          approachHumanGatesDescription: tAbout('approach_humanGates_description'),
          approachHumanGatesTitle: tAbout('approach_humanGates_title'),
          approachMeasurableRoiDescription: tAbout('approach_measurableRoi_description'),
          approachMeasurableRoiTitle: tAbout('approach_measurableRoi_title'),
          approachStructureAiDescription: tAbout('approach_structureAi_description'),
          approachStructureAiTitle: tAbout('approach_structureAi_title'),
          bookCall: tCommon('bookCall'),
          ctaTitle: tAbout('ctaTitle'),
          story: tAbout('story'),
          storyParagraph1: tAbout('storyParagraph1'),
          storyParagraph2: tAbout('storyParagraph2'),
          storyParagraph3: tAbout('storyParagraph3'),
          subtitle: tAbout('subtitle'),
          title: tAbout('title'),
          values: tAbout('values'),
          valuesHumanFirstDescription: tAbout('values_humanFirst_description'),
          valuesHumanFirstTitle: tAbout('values_humanFirst_title'),
          valuesPragmatismDescription: tAbout('values_pragmatism_description'),
          valuesPragmatismTitle: tAbout('values_pragmatism_title'),
          valuesScalabilityDescription: tAbout('values_scalability_description'),
          valuesScalabilityTitle: tAbout('values_scalability_title'),
          valuesTransparencyDescription: tAbout('values_transparency_description'),
          valuesTransparencyTitle: tAbout('values_transparency_title')
        }}
      />
    </main>
  );
}
