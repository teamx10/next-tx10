'use client';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';

import { Tx10Logo } from '@/components/svg/Tx10Logo';
import { ROUTES } from '@/constants/routes';

const APP_VERSION = 'v1.1.3';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        borderColor: 'divider',
        borderTop: 1,
        mt: 'auto',
        py: 4
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Stack
          alignItems={{ sm: 'center', xs: 'flex-start' }}
          direction={{ sm: 'row', xs: 'column' }}
          justifyContent="space-between"
          spacing={2}
        >
          <Box>
            <Typography color="text.secondary" variant="body2">
              {currentYear} © Developed by TeamX10 in Ukraine{' '}
              <span aria-label="yellow heart" role="img">
                💛
              </span>
              <span aria-label="blue heart" role="img">
                💙
              </span>
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <MuiLink
                color="text.secondary"
                component={Link}
                href={ROUTES.LEGAL.TERMS}
                underline="hover"
                variant="body2"
              >
                Terms of Use
              </MuiLink>
              <MuiLink
                color="text.secondary"
                component={Link}
                href={ROUTES.LEGAL.PRIVACY}
                underline="hover"
                variant="body2"
              >
                Privacy Policy
              </MuiLink>
            </Stack>
          </Box>
          <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
            <ThumbUpIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
            <Typography color="text.secondary" variant="body2">
              {APP_VERSION}
            </Typography>
          </Box>
        </Stack>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Tx10Logo size={128} />
        </Box>
      </Container>
    </Box>
  );
}
