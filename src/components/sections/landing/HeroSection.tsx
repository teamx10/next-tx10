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
        <Typography
          sx={{
            animation: 'gradientTextShift 6s ease infinite',
            background: 'linear-gradient(90deg, #FFFFFF 0%, #C7D2FE 25%, #A78BFA 50%, #C7D2FE 75%, #FFFFFF 100%)',
            backgroundClip: 'text',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          className="gradient-text"
          component="h1"
          variant="h2"
          gutterBottom
        >
          {t('hero.title')}
        </Typography>
        <Typography color="text.secondary" variant="body1" gutterBottom>
          {t('hero.subtitle')}
        </Typography>
        <CTAButton
          className="cta-pulse"
          label={t('hero.cta')}
          size="large"
          sx={{ animation: 'ctaPulse 3s ease-in-out infinite', mt: 2 }}
        />
      </GlassCard>
    </AnimatedGradientBackground>
  );
}
