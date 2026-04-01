'use client';

import { Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

import { AnimatedGradientBackground } from '@/components/ui/AnimatedGradientBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/lib/i18n/navigation';

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
        <Button component={Link} href={ROUTES.CONTACTS} size="large" sx={{ mt: 2 }} variant="contained">
          {t('hero.cta')}
        </Button>
      </GlassCard>
    </AnimatedGradientBackground>
  );
}
