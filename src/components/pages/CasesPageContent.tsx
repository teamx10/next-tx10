import { Box, Container, Grid, Typography } from '@mui/material';

import type { Locale } from '@/lib/i18n/config';

import { CaseStudyCard } from '@/components/sections/cases/CaseStudyCard';
import { CTAButton } from '@/components/ui/CTAButton';
import { CASE_STUDIES } from '@/constants/case-studies';

interface CasesPageContentProps {
  locale: Locale;
  t: {
    cta: string;
    subtitle: string;
    title: string;
    viewCase: string;
  };
}

export function CasesPageContent({ locale, t }: CasesPageContentProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          {t.title}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 640, mx: 'auto' }} variant="h6">
          {t.subtitle}
        </Typography>
      </Box>

      <Grid spacing={3} container>
        {CASE_STUDIES.map(caseStudy => (
          <Grid key={caseStudy.slug} size={{ md: 6, sm: 6, xs: 12 }}>
            <CaseStudyCard caseStudy={caseStudy} locale={locale} viewCase={t.viewCase} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <CTAButton label={t.cta} size="large" />
      </Box>
    </Container>
  );
}
