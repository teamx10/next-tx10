import type { SvgIconComponent } from '@mui/icons-material';

import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BookIcon from '@mui/icons-material/Book';
import DescriptionIcon from '@mui/icons-material/Description';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HubIcon from '@mui/icons-material/Hub';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import ListIcon from '@mui/icons-material/List';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import NightlightIcon from '@mui/icons-material/Nightlight';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Box, Chip, Container, Divider, Grid, Stack, Typography } from '@mui/material';

import type { Locale } from '@/lib/i18n/config';
import type { CaseStudy } from '@/types/case-study';
import type { Service } from '@/types/service';

import { CTAButton } from '@/components/ui/CTAButton';
import { GlassCard } from '@/components/ui/GlassCard';

const FEATURE_ICONS: Record<string, SvgIconComponent | undefined> = {
  account_tree: AccountTreeIcon,
  analytics: AnalyticsIcon,
  auto_fix_high: AutoFixHighIcon,
  book: BookIcon,
  description: DescriptionIcon,
  handshake: HandshakeIcon,
  hub: HubIcon,
  integration_instructions: IntegrationInstructionsIcon,
  list: ListIcon,
  monitor_heart: MonitorHeartIcon,
  nightlight: NightlightIcon,
  people: PeopleIcon,
  school: SchoolIcon,
  search: SearchIcon,
  trending_up: TrendingUpIcon
};

interface ServiceDetailContentProps {
  cases: CaseStudy[];
  locale: Locale;
  service: Service;
  t: {
    bookCall: string;
    cta: string;
    deliverable: string;
    features: string;
    phase: string;
    relatedCases: string;
  };
}

export function ServiceDetailContent({ cases, locale, service, t }: ServiceDetailContentProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Chip
          label={`${t.phase} ${service.phase}`}
          sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', mb: 2 }}
        />
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
            {service.features.map(feature => {
              const FeatureIcon = FEATURE_ICONS[feature.icon];

              return (
                <GlassCard key={feature.title[locale]} sx={{ p: 2 }}>
                  <Box sx={{ alignItems: 'center', display: 'flex', gap: 1, mb: 0.5 }}>
                    {FeatureIcon && <FeatureIcon color="primary" fontSize="small" />}
                    <Typography fontWeight={600} variant="body1">
                      {feature.title[locale]}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" variant="body2">
                    {feature.description[locale]}
                  </Typography>
                </GlassCard>
              );
            })}
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

          <CTAButton label={t.cta} size="large" fullWidth />
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
