import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { getLocale, getTranslations } from 'next-intl/server';

import type { Locale } from '@/types/i18n';

import { GlassCard } from '@/components/ui/GlassCard';
import { CASE_STUDIES } from '@/constants/case-studies';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/lib/i18n/navigation';

export async function CaseStudiesPreview() {
  const [t, locale] = await Promise.all([getTranslations('landing'), getLocale()]);
  const featured = CASE_STUDIES.slice(0, 3);
  const l = locale as Locale;

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Stack alignItems="center" direction="row" justifyContent="space-between" sx={{ mb: 5 }}>
          <Typography variant="h4">{t('cases.title')}</Typography>
          <Typography
            color="primary"
            component={Link}
            href={ROUTES.CASES}
            sx={{ '&:hover': { textDecoration: 'underline' }, textDecoration: 'none' }}
            variant="body1"
          >
            {t('cases.viewAll')} →
          </Typography>
        </Stack>
        <Grid columns={{ md: 3, sm: 1, xs: 1 }} spacing={3} container>
          {featured.map(study => (
            <Grid key={study.slug} size={1}>
              <Link
                href={`${ROUTES.CASES}/${study.slug}`}
                style={{ display: 'block', height: '100%', textDecoration: 'none' }}
              >
                <GlassCard sx={{ '&:hover': { boxShadow: 4 }, height: '100%' }}>
                  <Typography color="primary" fontWeight={700} variant="h5">
                    {study.metrics[0]?.value}
                  </Typography>
                  <Typography fontWeight={600} variant="h6" gutterBottom>
                    {study.title[l]}
                  </Typography>
                  <Typography color="text.secondary" variant="caption" gutterBottom>
                    {study.client}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }} variant="body2">
                    {study.description[l]}
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
