import { Box, Button, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material';

import type { Locale } from '@/lib/i18n/config';
import type { CaseStudy } from '@/types/case-study';

import { InsightQuote } from '@/components/sections/cases/InsightQuote';
import { MetricCounter } from '@/components/sections/cases/MetricCounter';
import { ROUTES } from '@/constants/routes';
import { SERVICES } from '@/constants/services';
import { Link } from '@/lib/i18n/navigation';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
  locale: Locale;
  t: {
    challenge: string;
    cta: string;
    insight: string;
    metrics: string;
    relatedServices: string;
    results: string;
    solution: string;
  };
}

export function CaseStudyContent({ caseStudy, locale, t }: CaseStudyContentProps) {
  const relatedServices = SERVICES.slice(0, 2);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Typography color="text.secondary" variant="body1">
          {caseStudy.client}
        </Typography>
        <Typography variant="h2" gutterBottom>
          {caseStudy.title[locale]}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
          {caseStudy.tags.map(tag => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography fontWeight={600} sx={{ mb: 3 }} variant="h5">
          {t.metrics}
        </Typography>
        <Grid spacing={3} container>
          {caseStudy.metrics.map(metric => (
            <Grid key={metric.label[locale]} size={{ md: 4, sm: 4, xs: 12 }}>
              <MetricCounter label={metric.label[locale]} value={metric.value} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Stack spacing={4} sx={{ mb: 4 }}>
        <Box>
          <Typography fontWeight={600} variant="h5" gutterBottom>
            {t.challenge}
          </Typography>
          <Typography color="text.secondary" variant="body1">
            {caseStudy.challenge[locale]}
          </Typography>
        </Box>

        <Box>
          <Typography fontWeight={600} variant="h5" gutterBottom>
            {t.solution}
          </Typography>
          <Typography color="text.secondary" variant="body1">
            {caseStudy.solution[locale]}
          </Typography>
        </Box>

        <Box>
          <Typography fontWeight={600} variant="h5" gutterBottom>
            {t.results}
          </Typography>
          <Typography color="text.secondary" variant="body1">
            {caseStudy.results[locale]}
          </Typography>
        </Box>
      </Stack>

      <InsightQuote quote={caseStudy.insight[locale]} title={t.insight} />

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mb: 6 }}>
        <Typography fontWeight={600} sx={{ mb: 3 }} variant="h5">
          {t.relatedServices}
        </Typography>
        <Grid spacing={3} container>
          {relatedServices.map(service => (
            <Grid key={service.slug} size={{ md: 6, xs: 12 }}>
              <Link href={`${ROUTES.SERVICES}/${service.slug}`} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    '&:hover': { borderColor: 'primary.main' },
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    p: 2,
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <Typography fontWeight={600} variant="body1">
                    {service.title[locale]}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {service.description[locale]}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Button component={Link} href={ROUTES.CONTACTS} size="large" variant="contained">
          {t.cta}
        </Button>
      </Box>
    </Container>
  );
}
