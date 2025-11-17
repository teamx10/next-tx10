'use client';

import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Stack } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

const APP_VERSION = 'v1.1.3';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <Box>
            <Typography variant="body2" color="text.secondary">
              {currentYear} © Developed by TeamX10 in Ukraine{' '}
              <span role="img" aria-label="yellow heart">💛</span>
              <span role="img" aria-label="blue heart">💙</span>
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <MuiLink
                component={Link}
                href={ROUTES.LEGAL.TERMS}
                color="text.secondary"
                underline="hover"
                variant="body2"
              >
                Terms of Use
              </MuiLink>
              <MuiLink
                component={Link}
                href={ROUTES.LEGAL.PRIVACY}
                color="text.secondary"
                underline="hover"
                variant="body2"
              >
                Privacy Policy
              </MuiLink>
              <MuiLink
                component={Link}
                href={ROUTES.FAQ}
                color="text.secondary"
                underline="hover"
                variant="body2"
              >
                FAQ
              </MuiLink>
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ThumbUpIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {APP_VERSION}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

