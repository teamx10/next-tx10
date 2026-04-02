'use client';

import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

import { AnimatedGradientBackground } from '@/components/ui/AnimatedGradientBackground';
import { CTAButton } from '@/components/ui/CTAButton';
import { GlassCard } from '@/components/ui/GlassCard';

export function HeroSection() {
  const t = useTranslations('landing');

  return (
    <AnimatedGradientBackground
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        px: 2
      }}
    >
      <GlassCard sx={{ maxWidth: 700, textAlign: 'center' }}>
        <Typography component="h1" variant="h2" gutterBottom>
          {t('hero.title')}
        </Typography>
        <Typography color="text.secondary" variant="body1" gutterBottom>
          {t('hero.subtitle')}
        </Typography>
        <CTAButton label={t('hero.cta')} size="large" sx={{ mt: 2 }} />
      </GlassCard>
    </AnimatedGradientBackground>
  );
}
