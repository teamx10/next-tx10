import { Box, Container, Grid, Typography } from '@mui/material';

import { CTAButton } from '@/components/ui/CTAButton';
import { GlassCard } from '@/components/ui/GlassCard';

interface AboutPageContentProps {
  t: {
    approach: string;
    approachHumanGatesDescription: string;
    approachHumanGatesTitle: string;
    approachMeasurableRoiDescription: string;
    approachMeasurableRoiTitle: string;
    approachStructureAiDescription: string;
    approachStructureAiTitle: string;
    bookCall: string;
    ctaTitle: string;
    story: string;
    storyParagraph1: string;
    storyParagraph2: string;
    storyParagraph3: string;
    subtitle: string;
    title: string;
    values: string;
    valuesHumanFirstDescription: string;
    valuesHumanFirstTitle: string;
    valuesPragmatismDescription: string;
    valuesPragmatismTitle: string;
    valuesScalabilityDescription: string;
    valuesScalabilityTitle: string;
    valuesTransparencyDescription: string;
    valuesTransparencyTitle: string;
  };
}

export function AboutPageContent({ t }: AboutPageContentProps) {
  const approachPrinciples = [
    { description: t.approachStructureAiDescription, title: t.approachStructureAiTitle },
    { description: t.approachHumanGatesDescription, title: t.approachHumanGatesTitle },
    { description: t.approachMeasurableRoiDescription, title: t.approachMeasurableRoiTitle }
  ];

  const values = [
    { description: t.valuesTransparencyDescription, title: t.valuesTransparencyTitle },
    { description: t.valuesHumanFirstDescription, title: t.valuesHumanFirstTitle },
    { description: t.valuesPragmatismDescription, title: t.valuesPragmatismTitle },
    { description: t.valuesScalabilityDescription, title: t.valuesScalabilityTitle }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          {t.title}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 640, mx: 'auto' }} variant="h6">
          {t.subtitle}
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          {t.story}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }} variant="body1">
          {t.storyParagraph1}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }} variant="body1">
          {t.storyParagraph2}
        </Typography>
        <Typography color="text.secondary" variant="body1">
          {t.storyParagraph3}
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography sx={{ mb: 3 }} variant="h4" gutterBottom>
          {t.approach}
        </Typography>
        <Grid spacing={3} container>
          {approachPrinciples.map(principle => (
            <Grid key={principle.title} size={{ md: 4, xs: 12 }}>
              <GlassCard>
                <Typography variant="h6" gutterBottom>
                  {principle.title}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {principle.description}
                </Typography>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography sx={{ mb: 3 }} variant="h4" gutterBottom>
          {t.values}
        </Typography>
        <Grid spacing={3} container>
          {values.map(value => (
            <Grid key={value.title} size={{ md: 3, sm: 6, xs: 12 }}>
              <GlassCard>
                <Typography variant="h6" gutterBottom>
                  {value.title}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {value.description}
                </Typography>
              </GlassCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          {t.ctaTitle}
        </Typography>
        <CTAButton label={t.bookCall} size="large" />
      </Box>
    </Container>
  );
}
