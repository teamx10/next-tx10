import type { ReactNode } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import { ThemeProviderWrapper } from '@/components/layout/ThemeProviderWrapper';
import { locales } from '@/lib/i18n/config';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <NextIntlClientProvider>
      <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
    </NextIntlClientProvider>
  );
}
