'use client';

import { useLocale as useNextIntlLocale } from 'next-intl';

import type { Locale } from '@/lib/i18n/config';

import { locales } from '@/lib/i18n/config';

interface UseLocaleReturn {
  availableLocales: typeof locales;
  locale: Locale;
}

export function useLocale(): UseLocaleReturn {
  const locale = useNextIntlLocale() as Locale;

  return { availableLocales: locales, locale };
}
