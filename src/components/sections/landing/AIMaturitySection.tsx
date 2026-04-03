'use client';

import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import { useLocale, useTranslations } from 'next-intl';

import type { Locale } from '@/types/i18n';

import { CTAButton } from '@/components/ui/CTAButton';
import { AI_MATURITY_LEVELS } from '@/constants/ai-maturity';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { AIMaturityCard } from './AIMaturityCard';

export function AIMaturitySection() {
  const t = useTranslations('landing');
  const locale = useLocale() as Locale;
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const prefersReduced = useMediaQuery('(prefers-reduced-motion: reduce)', { noSsr: true });

  const animated = isIntersecting || prefersReduced;

  return (
    <Box ref={ref} sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography align="center" variant="h4" gutterBottom>
          {t('maturity.title')}
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 6 }} variant="body1">
          {t('maturity.subtitle')}
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              bgcolor: 'divider',
              bottom: 0,
              display: { md: 'block', xs: 'none' },
              left: '50%',
              position: 'absolute',
              top: 0,
              width: 2
            }}
          />
          <Stack spacing={2}>
            {AI_MATURITY_LEVELS.map((level, index) => (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { md: index % 2 === 0 ? 'row' : 'row-reverse', xs: 'column' },
                  opacity: animated ? 1 : 0,
                  transform: animated ? 'none' : 'translateY(20px)',
                  transition: prefersReduced
                    ? 'none'
                    : `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`,
                  width: { md: '50%', xs: '100%' }
                }}
                key={level.level}
              >
                <AIMaturityCard ctaLabel={t('maturity.thisIsMyLevel')} level={level} locale={locale} />
              </Box>
            ))}
          </Stack>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <CTAButton label={t('maturity.cta')} size="large" />
        </Box>
      </Container>
    </Box>
  );
}
