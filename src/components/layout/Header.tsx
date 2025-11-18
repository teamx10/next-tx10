'use client';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
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
import Link from 'next/link';
import { useState } from 'react';

import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { TeamX10Logo } from '@/components/svg/TeamX10Logo';
import { ROUTES } from '@/constants/routes';
import { useThemeMode } from '@/contexts/ThemeContext';
import { useAuth } from '@/hooks/useAuth';

export function Header() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  // Logo color based on theme mode
  const logoColor = mode === 'dark' ? '#eee' : '#333';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Products', path: ROUTES.PRODUCTS },
    { label: 'FAQ', path: ROUTES.FAQ }
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between', p: 2 }}>
        <TeamX10Logo color={logoColor} width={140} />
        <Box sx={{ alignItems: 'center', display: 'flex' }}>
          <ThemeToggle />
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <List>
        {navigationItems.map(item => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton component={Link} href={item.path} onClick={handleDrawerToggle}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        {isAuthenticated ? (
          <>
            <ListItem disablePadding>
              <ListItemButton component={Link} href={ROUTES.AUTH.SIGN_OUT} onClick={handleDrawerToggle}>
                <ListItemText primary="Sign Out" />
              </ListItemButton>
            </ListItem>
            {user?.email && (
              <ListItem disablePadding>
                <ListItemText primary={user.email} secondary="Signed in" sx={{ px: 2, py: 1 }} />
              </ListItem>
            )}
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton component={Link} href={ROUTES.AUTH.SIGN_IN} onClick={handleDrawerToggle}>
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href={ROUTES.AUTH.SIGN_UP} onClick={handleDrawerToggle}>
                <ListItemText primary="Sign Up" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
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
              <TeamX10Logo color={logoColor} width={200} />
            </Link>
          </Box>

          {!isMobile && (
            <Box sx={{ alignItems: 'center', display: 'flex', gap: 2 }}>
              {navigationItems.map(item => (
                <Button component={Link} href={item.path} key={item.path} sx={{ color: theme.palette.text.primary }}>
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
            {!isMobile && (
              <>
                {isAuthenticated ? (
                  <>
                    {user?.email && (
                      <Box
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: '0.875rem',
                          mr: 2
                        }}
                      >
                        {user.email}
                      </Box>
                    )}
                    <Button component={Link} href={ROUTES.AUTH.SIGN_OUT} size="small" variant="outlined">
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button component={Link} href={ROUTES.AUTH.SIGN_IN} size="small" variant="outlined">
                      Sign In
                    </Button>
                    <Button component={Link} href={ROUTES.AUTH.SIGN_UP} size="small" variant="contained">
                      Sign Up
                    </Button>
                  </>
                )}
              </>
            )}
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
