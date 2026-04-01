export const defaultLocale = 'uk' as const;

export const locales = ['en', 'uk'] as const;

export type Locale = (typeof locales)[number];
