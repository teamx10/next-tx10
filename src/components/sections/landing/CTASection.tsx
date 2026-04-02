'use client';

import { Button, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

import { AnimatedGradientBackground } from '@/components/ui/AnimatedGradientBackground';
import { GlassCard } from '@/components/ui/GlassCard';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/lib/i18n/navigation';

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
        <Button component={Link} href={ROUTES.CONTACTS} size="large" sx={{ mt: 2 }} variant="contained">
          {t('cta.button')}
        </Button>
      </GlassCard>
    </AnimatedGradientBackground>
  );
}
