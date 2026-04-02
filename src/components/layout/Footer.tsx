'use client';

import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Container, Grid, IconButton, Link as MuiLink, Stack, Tooltip, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

import { TeamX10Logo } from '@/components/svg/TeamX10Logo';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { CONTACT_EMAIL, TELEGRAM_URL } from '@/constants/contacts';
import { NAV_ITEMS } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/lib/i18n/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

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
        <Grid spacing={3} container>
          <Grid size={{ md: 4, xs: 12 }}>
            <Link href={ROUTES.HOME} style={{ display: 'inline-flex', textDecoration: 'none' }}>
              <TeamX10Logo color="orange" width={160} />
            </Link>
            <Typography color="text.secondary" sx={{ mt: 1 }} variant="body2">
              {t('consulting')}
            </Typography>
          </Grid>

          <Grid size={{ md: 4, xs: 12 }}>
            <Stack spacing={0.5}>
              {NAV_ITEMS.map(item => (
                <MuiLink
                  color="text.secondary"
                  component={Link}
                  href={item.href}
                  key={item.href}
                  underline="hover"
                  variant="body2"
                >
                  {tNav(item.labelKey.replace('nav.', ''))}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ md: 4, xs: 12 }}>
            <Stack alignItems={{ md: 'flex-end', xs: 'flex-start' }} spacing={1}>
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
              <LanguageSwitcher />
              <Stack direction="row" spacing={1}>
                <MuiLink
                  color="text.secondary"
                  component={Link}
                  href={ROUTES.LEGAL.PRIVACY}
                  underline="hover"
                  variant="body2"
                >
                  {t('privacyPolicy')}
                </MuiLink>
                <MuiLink
                  color="text.secondary"
                  component={Link}
                  href={ROUTES.LEGAL.TERMS}
                  underline="hover"
                  variant="body2"
                >
                  {t('termsOfUse')}
                </MuiLink>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Typography color="text.secondary" sx={{ mt: 3, textAlign: 'center' }} variant="body2">
          {`© ${currentYear} TeamX10. ${t('copyright')} 💛💙`}
        </Typography>
      </Container>
    </Box>
  );
}
