import { Box, Button, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';

import type { Locale } from '@/lib/i18n/config';
import type { CaseStudy } from '@/types/case-study';
import type { Service } from '@/types/service';

import { GlassCard } from '@/components/ui/GlassCard';
import { ROUTES } from '@/constants/routes';

interface ServiceDetailContentProps {
  cases: CaseStudy[];
  locale: Locale;
  service: Service;
  t: {
    bookCall: string;
    cta: string;
    deliverable: string;
    features: string;
    relatedCases: string;
  };
}

export function ServiceDetailContent({ cases, locale, service, t }: ServiceDetailContentProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Chip label={`Phase ${service.phase}`} sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', mb: 2 }} />
        <Typography variant="h2" gutterBottom>
          {service.title[locale]}
        </Typography>
        <Typography color="text.secondary" variant="h6">
          {service.description[locale]}
        </Typography>
      </Box>

      <Grid spacing={4} container>
        <Grid size={{ md: 8, xs: 12 }}>
          <Typography fontWeight={600} variant="h5" gutterBottom>
            {t.features}
          </Typography>
          <Stack spacing={2}>
            {service.features.map(feature => (
              <GlassCard key={feature.title[locale]} sx={{ p: 2 }}>
                <Typography fontWeight={600} variant="body1" gutterBottom>
                  {feature.title[locale]}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {feature.description[locale]}
                </Typography>
              </GlassCard>
            ))}
          </Stack>
        </Grid>

        <Grid size={{ md: 4, xs: 12 }}>
          <GlassCard
            sx={{
              borderColor: 'primary.main',
              borderLeft: '4px solid',
              mb: 4
            }}
          >
            <Typography fontWeight={600} variant="h6" gutterBottom>
              {t.deliverable}
            </Typography>
            <Typography color="primary" fontWeight={700} variant="body1">
              {service.deliverable[locale]}
            </Typography>
          </GlassCard>

          <Button component={Link} href={ROUTES.CONTACTS} size="large" variant="contained" fullWidth>
            {t.cta}
          </Button>
        </Grid>
      </Grid>

      {cases.length > 0 && (
        <>
          <Divider sx={{ my: 6 }} />
          <Typography fontWeight={600} variant="h5" gutterBottom>
            {t.relatedCases}
          </Typography>
          <Grid spacing={3} container>
            {cases.map(caseStudy => (
              <Grid key={caseStudy.slug} size={{ md: 6, xs: 12 }}>
                <GlassCard>
                  <Typography fontWeight={600} variant="h6" gutterBottom>
                    {caseStudy.title[locale]}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {caseStudy.description[locale]}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                    {caseStudy.tags.map(tag => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Box>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}
