'use client';

import { Box, Container, Link, Typography } from '@mui/material';

import { CalendlyEmbed } from '@/components/ui/CalendlyEmbed';

interface ContactsPageContentProps {
  t: {
    calendlyAlt: string;
    email: string;
    subtitle: string;
    telegram: string;
    title: string;
  };
}

export function ContactsPageContent({ t }: ContactsPageContentProps) {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          {t.title}
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 560, mx: 'auto' }} variant="h6">
          {t.subtitle}
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <CalendlyEmbed />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center' }}>
        <Typography color="text.secondary" variant="body2">
          {t.email}:{' '}
          <Link href="mailto:hello@teamx10.com" underline="hover">
            hello@teamx10.com
          </Link>
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {t.telegram}:{' '}
          <Link href="https://t.me/teamx10" rel="noopener noreferrer" target="_blank" underline="hover">
            @teamx10
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
