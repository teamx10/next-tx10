'use client';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { TeamX10Logo } from '@/components/svg/TeamX10Logo';
import { CTAButton } from '@/components/ui/CTAButton';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { NAV_ITEMS } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { Link, usePathname } from '@/lib/i18n/navigation';

export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');

  const isActive = (href: string) => (href === ROUTES.HOME ? pathname === '/' : pathname.startsWith(href));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <TeamX10Logo color="orange" width={140} />
        <Box sx={{ alignItems: 'center', display: 'flex' }}>
          <ThemeToggle />
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <List>
        {NAV_ITEMS.map(item => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              selected={isActive(item.href)}
            >
              <ListItemText primary={t(item.labelKey.replace('nav.', ''))} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <CTAButton label={tCommon('bookCall')} size="large" fullWidth />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ background: theme.palette.background.paper, boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ alignItems: 'center', display: 'flex', gap: 2 }}>
            {isMobile && (
              <IconButton edge="start" onClick={handleDrawerToggle} sx={{ mr: 1 }}>
                <MenuIcon />
              </IconButton>
            )}
            <Link href={ROUTES.HOME} style={{ alignItems: 'center', display: 'flex', textDecoration: 'none' }}>
              <TeamX10Logo color="orange" width={200} />
            </Link>
          </Box>

          {!isMobile && (
            <Box sx={{ alignItems: 'center', display: 'flex', gap: 2 }}>
              {NAV_ITEMS.map(item => (
                <Link
                  style={{
                    borderBottom: isActive(item.href)
                      ? `2px solid ${theme.palette.primary.main}`
                      : '2px solid transparent',
                    color: isActive(item.href) ? theme.palette.primary.main : theme.palette.text.primary,
                    fontWeight: isActive(item.href) ? 700 : 400,
                    paddingBottom: 4,
                    textDecoration: 'none'
                  }}
                  href={item.href}
                  key={item.href}
                >
                  {t(item.labelKey.replace('nav.', ''))}
                </Link>
              ))}
            </Box>
          )}

          <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
            {!isMobile && <CTAButton label={tCommon('bookCall')} size="small" />}
            <LanguageSwitcher />
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
          display: { md: 'none', xs: 'block' }
        }}
        onClose={handleDrawerToggle}
        open={mobileOpen}
        variant="temporary"
      >
        {drawer}
      </Drawer>
    </>
  );
}
