import { Box, Chip, Typography } from '@mui/material';
import Link from 'next/link';

import type { Locale } from '@/lib/i18n/config';
import type { Service } from '@/types/service';

import { GlassCard } from '@/components/ui/GlassCard';
import { ROUTES } from '@/constants/routes';

interface ServiceCardProps {
  learnMore: string;
  locale: Locale;
  service: Service;
}

export function ServiceCard({ learnMore, locale, service }: ServiceCardProps) {
  return (
    <Link href={`${ROUTES.SERVICES}/${service.slug}`} style={{ height: '100%', textDecoration: 'none' }}>
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
        <Box sx={{ alignItems: 'center', display: 'flex', gap: 1.5 }}>
          <Chip
            sx={{
              bgcolor: 'primary.main',
              borderRadius: '50%',
              color: 'primary.contrastText',
              flexShrink: 0,
              fontSize: '0.85rem',
              fontWeight: 700,
              height: 32,
              width: 32
            }}
            label={service.phase}
            size="small"
          />
          <Typography fontWeight={600} variant="h6">
            {service.title[locale]}
          </Typography>
        </Box>

        <Typography color="text.secondary" sx={{ flexGrow: 1 }} variant="body2">
          {service.description[locale]}
        </Typography>

        <Box
          sx={{
            borderColor: 'primary.main',
            borderLeft: '3px solid',
            mt: 'auto',
            pl: 1.5
          }}
        >
          <Typography color="text.secondary" variant="caption">
            {service.deliverable[locale]}
          </Typography>
        </Box>

        <Typography color="primary" sx={{ fontWeight: 500 }} variant="body2">
          {learnMore} →
        </Typography>
      </GlassCard>
    </Link>
  );
}
