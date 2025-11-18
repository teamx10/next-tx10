import { createTheme, PaletteMode, ThemeOptions } from '@mui/material/styles';

// Light mode color palette
const lightPalette = {
  background: {
    default: '#F5F5F5',
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
    dark: '#388E3C',
    light: '#81C784',
    main: '#4CAF50' // Light green
  },
  secondary: {
    contrastText: '#FFFFFF',
    dark: '#00796B',
    light: '#4DB6AC',
    main: '#009688' // Teal
  },
  success: {
    dark: '#388E3C',
    light: '#81C784',
    main: '#4CAF50'
  },
  text: {
    primary: '#212121',
    secondary: '#757575'
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
    default: '#121212',
    paper: '#1E1E1E'
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
    contrastText: '#000000',
    dark: '#388E3C',
    light: '#A5D6A7',
    main: '#66BB6A' // Lighter green for dark background
  },
  secondary: {
    contrastText: '#000000',
    dark: '#00796B',
    light: '#80DEEA',
    main: '#4DD0E1' // Lighter teal for dark background
  },
  success: {
    dark: '#388E3C',
    light: '#A5D6A7',
    main: '#66BB6A'
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0B0B0'
  },
  warning: {
    dark: '#F57C00',
    light: '#FFB74D',
    main: '#FF9800'
  }
};

const getThemeOptions = (mode: 'light' | 'dark'): ThemeOptions => ({
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
          boxShadow: mode === 'dark'
            ? '0 2px 4px rgba(0,0,0,0.3)'
            : '0 2px 4px rgba(0,0,0,0.1)'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          '&:hover': {
            boxShadow: mode === 'dark'
              ? '0 4px 8px rgba(0,0,0,0.4)'
              : '0 4px 8px rgba(0,0,0,0.15)'
          },
          boxShadow: mode === 'dark'
            ? '0 2px 4px rgba(0,0,0,0.3)'
            : '0 2px 4px rgba(0,0,0,0.1)'
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
          borderRadius: 12,
          boxShadow: mode === 'dark'
            ? '0 2px 8px rgba(0,0,0,0.4)'
            : '0 2px 8px rgba(0,0,0,0.1)'
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
export const createAppTheme = (mode: 'light' | 'dark') => createTheme(getThemeOptions(mode));

// Gradient utilities that adapt to theme mode
export const getGradients = (mode: 'light' | 'dark') => ({
  background: mode === 'dark'
    ? 'linear-gradient(135deg, #1E1E1E 0%, #2C2C2C 100%)'
    : 'linear-gradient(135deg, #E8F5E9 0%, #E0F2F1 100%)',
  primary: mode === 'dark'
    ? 'linear-gradient(135deg, #66BB6A 0%, #4DD0E1 100%)'
    : 'linear-gradient(135deg, #4CAF50 0%, #009688 100%)',
  secondary: mode === 'dark'
    ? 'linear-gradient(135deg, #A5D6A7 0%, #80DEEA 100%)'
    : 'linear-gradient(135deg, #81C784 0%, #4DB6AC 100%)'
});
