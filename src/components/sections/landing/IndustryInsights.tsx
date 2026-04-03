import { Box, Container, Grid, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';

import { GlassCard } from '@/components/ui/GlassCard';

export async function IndustryInsights() {
  const t = await getTranslations('landing');

  const metrics = [
    { key: 'metric1', label: t('industry.metric1Label'), value: t('industry.metric1Value') },
    { key: 'metric2', label: t('industry.metric2Label'), value: t('industry.metric2Value') },
    { key: 'metric3', label: t('industry.metric3Label'), value: t('industry.metric3Value') },
    { key: 'metric4', label: t('industry.metric4Label'), value: t('industry.metric4Value') }
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider', borderTop: 1, py: 8 }}>
      <Container maxWidth="lg">
        <Typography align="center" gutterBottom={true} variant="h4">
          {t('industry.title')}
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 6 }} variant="body1">
          {t('industry.subtitle')}
        </Typography>
        <Grid columns={{ sm: 2, xs: 1 }} spacing={3} container>
          {metrics.map(metric => (
            <Grid key={metric.key} size={1}>
              <GlassCard sx={{ height: '100%', textAlign: 'center' }}>
                <Typography color="primary" fontWeight={700} variant="h3">
                  {metric.value}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {metric.label}
                </Typography>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
        <Typography align="center" color="text.disabled" sx={{ mt: 4 }} variant="caption">
          {t('industry.source')}
        </Typography>
      </Container>
    </Box>
  );
}
