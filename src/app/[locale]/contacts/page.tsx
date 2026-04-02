import type { Metadata } from 'next';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import type { Locale } from '@/lib/i18n/config';

import { ContactsPageContent } from '@/components/pages/ContactsPageContent';

interface ContactsPageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: ContactsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contacts' });

  return {
    description: t('subtitle'),
    title: t('title')
  };
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
