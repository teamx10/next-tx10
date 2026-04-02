'use client';

import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Container, IconButton, Link as MuiLink, Stack, Tooltip, Typography } from '@mui/material';

import { TeamX10Logo } from '@/components/svg/TeamX10Logo';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/lib/i18n/navigation';

const CONTACT_EMAIL = 'hello@teamx10.com';
const TELEGRAM_URL = 'https://t.me/teamx10';

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
            <Link href={ROUTES.HOME} style={{ display: 'inline-flex', textDecoration: 'none' }}>
              <TeamX10Logo color="orange" width={160} />
            </Link>
            <Typography color="text.secondary" sx={{ mt: 1 }} variant="body2">
              AI Consulting. Developed in Ukraine.
            </Typography>
          </Box>

          <Stack alignItems={{ sm: 'flex-end', xs: 'flex-start' }} spacing={1}>
            <Stack direction="row" spacing={1}>
              <MuiLink
                color="text.secondary"
                component={Link}
                href={ROUTES.LEGAL.PRIVACY}
                underline="hover"
                variant="body2"
              >
                Privacy Policy
              </MuiLink>
              <MuiLink
                color="text.secondary"
                component={Link}
                href={ROUTES.LEGAL.TERMS}
                underline="hover"
                variant="body2"
              >
                Terms of Use
              </MuiLink>
            </Stack>

            <Stack alignItems="center" direction="row" spacing={0.5}>
              <Tooltip title="Telegram">
                <IconButton
                  aria-label="Telegram"
                  component="a"
                  href={TELEGRAM_URL}
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ color: 'text.secondary' }}
                  target="_blank"
                >
                  <TelegramIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <MuiLink color="text.secondary" href={`mailto:${CONTACT_EMAIL}`} underline="hover" variant="body2">
                {CONTACT_EMAIL}
              </MuiLink>
            </Stack>
          </Stack>
        </Stack>

        <Typography color="text.secondary" sx={{ mt: 3, textAlign: 'center' }} variant="body2">
          {`© ${currentYear} TeamX10. Developed in Ukraine. 💛💙`}
        </Typography>
      </Container>
    </Box>
  );
}
