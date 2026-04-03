'use client';

import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

import { AnimatedGradientBackground } from '@/components/ui/AnimatedGradientBackground';
import { CTAButton } from '@/components/ui/CTAButton';
import { GlassCard } from '@/components/ui/GlassCard';

export function CTASection() {
  const t = useTranslations('landing');

  return (
    <AnimatedGradientBackground
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        py: 10
      }}
    >
      <GlassCard sx={{ maxWidth: 600, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          {t('cta.title')}
        </Typography>
        <Typography color="text.secondary" variant="body1" gutterBottom>
          {t('cta.subtitle')}
        </Typography>
        <CTAButton label={t('cta.button')} size="large" sx={{ mt: 2 }} />
      </GlassCard>
    </AnimatedGradientBackground>
  );
}
