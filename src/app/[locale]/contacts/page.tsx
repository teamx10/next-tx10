import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/lib/i18n/config';

import { ContactsPageContent } from '@/components/pages/ContactsPageContent';
import { ROUTES } from '@/constants/routes';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';

interface ContactsPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: ContactsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const tSeo = await getTranslations({ locale, namespace: 'seo' });

  return generateSEOMetadata({
    description: tSeo('contacts.description'),
    keywords: tSeo('contacts.keywords').split(', '),
    locale,
    path: ROUTES.CONTACTS,
    title: tSeo('contacts.title')
  });
}

export default async function ContactsPage({ params }: ContactsPageProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  const tContacts = await getTranslations({ locale, namespace: 'contacts' });

  return (
    <main>
      <ContactsPageContent
        t={{
          calendlyAlt: tContacts('calendlyAlt'),
          email: tContacts('email'),
          subtitle: tContacts('subtitle'),
          telegram: tContacts('telegram'),
          title: tContacts('title')
        }}
      />
    </main>
  );
}
