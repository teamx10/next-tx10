'use client';

import { Box, Container, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const BARS = [
  { aiWidth: 100, label: 'Code generation', traditionalWidth: 30 },
  { aiWidth: 90, label: 'Code review', traditionalWidth: 40 },
  { aiWidth: 95, label: 'Test writing', traditionalWidth: 25 },
  { aiWidth: 85, label: 'Documentation', traditionalWidth: 45 },
  { aiWidth: 80, label: 'Bug fixing', traditionalWidth: 50 }
];

export function SpeedComparison() {
  const t = useTranslations('landing');
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>();
  const [prefersReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const animated = isIntersecting || prefersReduced;

  return (
    <Box ref={ref} sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography align="center" variant="h4" gutterBottom>
          {t('speed.title')}
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={4} sx={{ mb: 4, mt: 2 }}>
          <Stack alignItems="center" direction="row" spacing={1}>
            <Box sx={{ bgcolor: 'primary.main', borderRadius: 1, height: 12, width: 24 }} />
            <Typography variant="body2">{t('speed.aiLabel')}</Typography>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={1}>
            <Box sx={{ bgcolor: 'divider', borderRadius: 1, height: 12, width: 24 }} />
            <Typography variant="body2">{t('speed.traditionalLabel')}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={3}>
          {BARS.map(bar => (
            <Box key={bar.label}>
              <Typography variant="body2" gutterBottom>
                {bar.label}
              </Typography>
              <Stack spacing={1}>
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    borderRadius: 1,
                    height: 12,
                    transition: prefersReduced ? 'none' : 'width 1.5s ease',
                    width: animated ? `${bar.aiWidth}%` : '0%'
                  }}
                />
                <Box
                  sx={{
                    bgcolor: 'action.hover',
                    borderRadius: 1,
                    height: 12,
                    transition: prefersReduced ? 'none' : 'width 1.5s ease',
                    width: animated ? `${bar.traditionalWidth}%` : '0%'
                  }}
                />
              </Stack>
            </Box>
          ))}
        </Stack>
        <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
          <Typography color="text.secondary" variant="caption">
            {t('speed.traditionalCaption')}
          </Typography>
          <Typography color="primary" variant="caption">
            {t('speed.aiCaption')}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
