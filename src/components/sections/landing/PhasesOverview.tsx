import { Box, Container, Grid, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';

import { GlassCard } from '@/components/ui/GlassCard';
import { ROUTES } from '@/constants/routes';
import { SERVICES } from '@/constants/services';
import { Link } from '@/lib/i18n/navigation';

export async function PhasesOverview() {
  const t = await getTranslations('landing');

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography align="center" variant="h4" gutterBottom>
          {t('phases.title')}
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 5 }} variant="body1">
          {t('phases.subtitle')}
        </Typography>
        <Grid columns={{ md: 5, sm: 2, xs: 1 }} spacing={3} container>
          {SERVICES.map(service => (
            <Grid key={service.slug} size={1}>
              <Link
                href={`${ROUTES.SERVICES}/${service.slug}`}
                style={{ display: 'block', height: '100%', textDecoration: 'none' }}
              >
                <GlassCard sx={{ '&:hover': { boxShadow: 4 }, height: '100%' }}>
                  <Typography color="primary" fontWeight={700} variant="h3">
                    {service.phase}
                  </Typography>
                  <Typography fontWeight={600} variant="h6" gutterBottom>
                    {t(`phases.phase${service.phase}Title` as Parameters<typeof t>[0])}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {t(`phases.phase${service.phase}Desc` as Parameters<typeof t>[0])}
                  </Typography>
                  <Typography color="text.disabled" sx={{ mt: 1 }} variant="caption">
                    {t(`phases.phase${service.phase}Deliverable` as Parameters<typeof t>[0])}
                  </Typography>
                </GlassCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
