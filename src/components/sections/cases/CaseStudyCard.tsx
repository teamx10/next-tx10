import { Box, Chip, Typography } from '@mui/material';

import type { Locale } from '@/lib/i18n/config';
import type { CaseStudy } from '@/types/case-study';

import { GlassCard } from '@/components/ui/GlassCard';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/lib/i18n/navigation';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  locale: Locale;
  viewCase: string;
}

export function CaseStudyCard({ caseStudy, locale, viewCase }: CaseStudyCardProps) {
  return (
    <Link href={`${ROUTES.CASES}/${caseStudy.slug}`} style={{ height: '100%', textDecoration: 'none' }}>
      <GlassCard
        sx={{
          '&:hover': { transform: 'translateY(-4px)' },
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          height: '100%',
          transition: 'transform 0.2s ease'
        }}
      >
        <Box>
          <Typography color="text.secondary" variant="caption">
            {caseStudy.client}
          </Typography>
          <Typography fontWeight={600} variant="h6">
            {caseStudy.title[locale]}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {caseStudy.metrics.slice(0, 3).map(metric => (
            <Chip
              key={metric.label[locale]}
              label={`${metric.value} ${metric.label[locale]}`}
              size="small"
              sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', fontWeight: 600 }}
            />
          ))}
        </Box>

        <Typography
          sx={{
            display: '-webkit-box',
            flexGrow: 1,
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2
          }}
          color="text.secondary"
          variant="body2"
        >
          {caseStudy.description[locale]}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {caseStudy.tags.map(tag => (
            <Chip key={tag} label={tag} size="small" variant="outlined" />
          ))}
        </Box>

        <Typography color="primary" sx={{ fontWeight: 500 }} variant="body2">
          {viewCase} →
        </Typography>
      </GlassCard>
    </Link>
  );
}
