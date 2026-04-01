import { Box, Container, Grid, Typography } from '@mui/material';

import { CTAButton } from '@/components/ui/CTAButton';
import { GlassCard } from '@/components/ui/GlassCard';

interface AboutPageContentProps {
  t: {
    approach: string;
    bookCall: string;
    ctaTitle: string;
    story: string;
    subtitle: string;
    title: string;
    values: string;
  };
}

const APPROACH_PRINCIPLES = [
  {
    description:
      'We use AI to surface insights, automate repetitive work, and accelerate delivery — with humans validating every critical decision.',
    title: 'Structure + AI'
  },
  {
    description:
      'Every AI output passes through human review gates before reaching production. Speed without blind trust.',
    title: 'Human Gates'
  },
  {
    description: 'Every engagement is scoped to a measurable business outcome — productivity, cost, or revenue.',
    title: 'Measurable ROI'
  }
] as const;

const VALUES = [
  {
    description: 'We show our work — you always know what AI is doing and why.',
    title: 'Transparency'
  },
  {
    description: 'AI is a force multiplier for your team, not a replacement for judgment.',
    title: 'Human-first'
  },
  {
    description: 'We move fast, but not at the expense of quality or security.',
    title: 'Pragmatism'
  },
  {
    description: 'Every solution is designed to grow with your business.',
    title: 'Scalability'
  }
] as const;

export function AboutPageContent({ t }: AboutPageContentProps) {
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
          TeamX10 was founded by Artem — a software engineer who spent years watching teams struggle to adopt AI tools
          effectively. The bottleneck was never the technology. It was the process: how teams integrate AI into existing
          workflows, how they validate outputs, and how they measure impact.
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }} variant="body1">
          We built TeamX10 to close that gap. Our approach combines battle-tested engineering practices with AI-native
          workflows — giving teams the speed of automation without losing control over quality.
        </Typography>
        <Typography color="text.secondary" variant="body1">
          Today we work with startups and scale-ups across Europe, delivering 200-400% productivity gains in
          engineering, content, and operations.
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography sx={{ mb: 3 }} variant="h4" gutterBottom>
          {t.approach}
        </Typography>
        <Grid spacing={3} container>
          {APPROACH_PRINCIPLES.map(principle => (
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
          {VALUES.map(value => (
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
