'use client';

import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { ThemeContextProvider, useThemeMode } from '@/contexts/ThemeContext';
import { createAppTheme } from '@/lib/mui/theme';

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

const ThemeContent = ({ children }: ThemeProviderWrapperProps) => {
  const { mode } = useThemeMode();
  const theme = createAppTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {
  return (
    <ThemeContextProvider>
      <ThemeContent>{children}</ThemeContent>
    </ThemeContextProvider>
  );
}
