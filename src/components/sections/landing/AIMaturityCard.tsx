import { Box, Chip, Stack, Typography } from '@mui/material';

import type { AIMaturityLevel } from '@/types/ai-maturity';
import type { Locale } from '@/types/i18n';

import { CTAButton } from '@/components/ui/CTAButton';
import { GlassCard } from '@/components/ui/GlassCard';

interface AIMaturityCardProps {
  ctaLabel: string;
  level: AIMaturityLevel;
  locale: Locale;
}

export function AIMaturityCard({ ctaLabel, level, locale }: AIMaturityCardProps) {
  return (
    <GlassCard sx={{ flex: 1 }}>
      <Stack direction="row" spacing={2}>
        <Box sx={{ alignItems: 'center', display: 'flex', flexShrink: 0, width: 32 }}>
          <Typography color="primary" fontWeight={700} variant="h5">
            {`L${level.level}`}
          </Typography>
        </Box>
        <Stack flex={1} spacing={0.5}>
          <Stack alignItems="center" direction="row" spacing={1}>
            <Typography fontWeight={600} variant="body1">
              {level.title[locale]}
            </Typography>
            {level.socialMarker && <Chip color="secondary" label={level.socialMarker[locale]} size="small" />}
          </Stack>
          <Typography color="text.secondary" variant="body2">
            {level.description[locale]}
          </Typography>
        </Stack>
        <Stack alignItems="flex-end" justifyContent="space-between" spacing={1}>
          <Chip color="primary" label={level.multiplier} size="small" variant="outlined" />
          <CTAButton label={ctaLabel} size="small" />
        </Stack>
      </Stack>
    </GlassCard>
  );
}
