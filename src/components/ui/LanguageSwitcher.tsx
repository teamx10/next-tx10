'use client';

import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useLocale } from '@/hooks/useLocale';
import { usePathname, useRouter } from '@/lib/i18n/navigation';

const LOCALE_LABELS: Record<string, string> = {
  en: 'EN',
  uk: 'UA'
};

export function LanguageSwitcher() {
  const theme = useTheme();
  const { availableLocales, locale: currentLocale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSwitch = (locale: string) => {
    router.push(pathname, { locale });
  };

  return (
    <Box sx={{ alignItems: 'center', display: 'flex' }}>
      {availableLocales.map((locale, index) => (
        <Box key={locale} sx={{ alignItems: 'center', display: 'flex' }}>
          <Button
            sx={{
              color: locale === currentLocale ? theme.palette.primary.main : theme.palette.text.secondary,
              fontWeight: locale === currentLocale ? 700 : 400,
              minWidth: 'auto',
              px: 0.5
            }}
            onClick={() => handleSwitch(locale)}
          >
            {LOCALE_LABELS[locale]}
          </Button>
          {index < availableLocales.length - 1 && (
            <Box component="span" sx={{ color: theme.palette.text.disabled }}>
              |
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
}
