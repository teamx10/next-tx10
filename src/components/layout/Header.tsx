'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { TeamX10Logo } from '@/components/svg/TeamX10Logo';
import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'Products', path: ROUTES.PRODUCTS },
    { label: 'FAQ', path: ROUTES.FAQ },
  ];

  const drawer = (
    <Box sx={{ width: 250 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <TeamX10Logo />
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navigationItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        {isAuthenticated ? (
          <>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href={ROUTES.AUTH.SIGN_OUT}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Sign Out" />
              </ListItemButton>
            </ListItem>
            {user?.email && (
              <ListItem disablePadding>
                <ListItemText
                  primary={user.email}
                  secondary="Signed in"
                  sx={{ px: 2, py: 1 }}
                />
              </ListItem>
            )}
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href={ROUTES.AUTH.SIGN_IN}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href={ROUTES.AUTH.SIGN_UP}
                onClick={handleDrawerToggle}
              >
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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {isMobile && (
              <IconButton
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Link href={ROUTES.HOME} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <TeamX10Logo />
            </Link>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  href={item.path}
                  sx={{ color: theme.palette.text.primary }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <>
                {isAuthenticated ? (
                  <>
                    {user?.email && (
                      <Box sx={{ mr: 2, color: theme.palette.text.secondary, fontSize: '0.875rem' }}>
                        {user.email}
                      </Box>
                    )}
                    <Button
                      component={Link}
                      href={ROUTES.AUTH.SIGN_OUT}
                      variant="outlined"
                      size="small"
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      component={Link}
                      href={ROUTES.AUTH.SIGN_IN}
                      variant="outlined"
                      size="small"
                    >
                      Sign In
                    </Button>
                    <Button
                      component={Link}
                      href={ROUTES.AUTH.SIGN_UP}
                      variant="contained"
                      size="small"
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </>
            )}
            <Button
              variant="outlined"
              size="small"
              sx={{ ml: 1 }}
              onClick={() => {
                // TODO: Implement feedback functionality
                console.log('Feedback clicked');
              }}
            >
              FEEDBACK
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

