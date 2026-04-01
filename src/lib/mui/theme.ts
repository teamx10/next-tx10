import { createTheme, PaletteMode, ThemeOptions } from '@mui/material/styles';

// Light mode color palette
const lightPalette = {
  background: {
    default: '#F8FAFC',
    paper: '#FFFFFF'
  },
  error: {
    dark: '#D32F2F',
    light: '#E57373',
    main: '#F44336'
  },
  info: {
    dark: '#1976D2',
    light: '#64B5F6',
    main: '#2196F3'
  },
  mode: 'light' as PaletteMode,
  primary: {
    contrastText: '#FFFFFF',
    dark: '#4F46E5',
    light: '#A5B4FC',
    main: '#6366F1' // Indigo-500
  },
  secondary: {
    contrastText: '#FFFFFF',
    dark: '#7C3AED',
    light: '#C4B5FD',
    main: '#8B5CF6' // Violet-500
  },
  success: {
    dark: '#388E3C',
    light: '#81C784',
    main: '#4CAF50'
  },
  text: {
    primary: '#1E293B',
    secondary: '#64748B'
  },
  warning: {
    dark: '#F57C00',
    light: '#FFB74D',
    main: '#FF9800'
  }
};

// Dark mode color palette
const darkPalette = {
  background: {
    default: '#0F172A',
    paper: '#1E293B'
  },
  error: {
    dark: '#D32F2F',
    light: '#E57373',
    main: '#F44336'
  },
  info: {
    dark: '#1976D2',
    light: '#64B5F6',
    main: '#2196F3'
  },
  mode: 'dark' as PaletteMode,
  primary: {
    contrastText: '#FFFFFF',
    dark: '#6366F1',
    light: '#C7D2FE',
    main: '#818CF8' // Indigo-400
  },
  secondary: {
    contrastText: '#FFFFFF',
    dark: '#8B5CF6',
    light: '#DDD6FE',
    main: '#A78BFA' // Violet-400
  },
  success: {
    dark: '#388E3C',
    light: '#A5D6A7',
    main: '#66BB6A'
  },
  text: {
    primary: '#F1F5F9',
    secondary: '#94A3B8'
  },
  warning: {
    dark: '#F57C00',
    light: '#FFB74D',
    main: '#FF9800'
  }
};

const getThemeOptions = (mode: 'dark' | 'light'): ThemeOptions => ({
  breakpoints: {
    values: {
      lg: 1280,
      md: 960,
      sm: 600,
      xl: 1920,
      xs: 0
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: mode === 'dark' ? '0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          '&:hover': {
            boxShadow: mode === 'dark' ? '0 4px 8px rgba(0,0,0,0.4)' : '0 4px 8px rgba(0,0,0,0.15)'
          },
          boxShadow: mode === 'dark' ? '0 2px 4px rgba(0,0,0,0.3)' : '0 2px 4px rgba(0,0,0,0.1)'
        },
        root: {
          borderRadius: 8,
          fontSize: '1rem',
          padding: '10px 24px'
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(var(--glass-blur, 12px))',
          background:
            mode === 'dark'
              ? 'var(--glass-bg-dark, rgba(30, 41, 59, 0.7))'
              : 'var(--glass-bg-light, rgba(255, 255, 255, 0.7))',
          border:
            mode === 'dark'
              ? '1px solid var(--glass-border-dark, rgba(255, 255, 255, 0.08))'
              : '1px solid var(--glass-border-light, rgba(99, 102, 241, 0.15))',
          borderRadius: 12,
          boxShadow: mode === 'dark' ? '0 4px 24px rgba(0,0,0,0.4)' : '0 4px 24px rgba(99, 102, 241, 0.08)'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8
          }
        }
      }
    }
  },
  palette: mode === 'dark' ? darkPalette : lightPalette,
  shape: {
    borderRadius: 8
  },
  typography: {
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6
    },
    button: {
      fontWeight: 600,
      textTransform: 'none'
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5
    }
  }
});

// Export theme creator function
export const createAppTheme = (mode: 'dark' | 'light') => createTheme(getThemeOptions(mode));

// Gradient utilities that adapt to theme mode
export const getGradients = (mode: 'dark' | 'light') => ({
  background:
    mode === 'dark'
      ? 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)'
      : 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 100%)',
  glass:
    mode === 'dark'
      ? 'linear-gradient(135deg, rgba(129, 140, 248, 0.12) 0%, rgba(167, 139, 250, 0.12) 100%)'
      : 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
  primary:
    mode === 'dark'
      ? 'linear-gradient(135deg, #818CF8 0%, #A78BFA 100%)'
      : 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
  secondary:
    mode === 'dark'
      ? 'linear-gradient(135deg, #A78BFA 0%, #C4B5FD 100%)'
      : 'linear-gradient(135deg, #8B5CF6 0%, #A5B4FC 100%)'
});
