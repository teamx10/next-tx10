'use client';

import { createContext, useContext, useEffect, useState } from 'react';

import type { ReactNode } from 'react';
import type { ThemeContextValue, ThemeMode } from '@/types/theme';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'theme-mode';

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedMode = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (storedMode === 'light' || storedMode === 'dark') {
      setMode(storedMode);
    }
    setMounted(true);
  }, []);

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, mode);
    }
  }, [mode, mounted]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Prevent flash of wrong theme by rendering nothing until mounted
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeMode must be used within a ThemeContextProvider');
  }
  return context;
};
