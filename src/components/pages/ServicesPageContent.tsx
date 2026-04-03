import { Box, Container, Grid, Typography } from '@mui/material';

import type { Locale } from '@/lib/i18n/config';

import { ServiceCard } from '@/components/sections/services/ServiceCard';
import { ServicesStepper } from '@/components/sections/services/ServicesStepper';
import { CTAButton } from '@/components/ui/CTAButton';
import { SERVICES } from '@/constants/services';

interface ServicesPageContentProps {
  locale: Locale;
  t: {
    cta: string;
    learnMore: string;
    phases: string;
    subtitle: string;
    title: string;
  };
}

export function ServicesPageContent({ locale, t }: ServicesPageContentProps) {
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

      <Typography fontWeight={600} sx={{ mb: 3, textAlign: 'center' }} variant="h5" gutterBottom>
        {t.phases}
      </Typography>

      <ServicesStepper locale={locale} services={SERVICES} />

      <Grid spacing={3} container>
        {SERVICES.map(service => (
          <Grid key={service.slug} size={{ md: 4, sm: 6, xs: 12 }}>
            <ServiceCard learnMore={t.learnMore} locale={locale} service={service} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <CTAButton label={t.cta} size="large" />
      </Box>
    </Container>
  );
}
