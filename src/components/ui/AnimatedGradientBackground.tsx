'use client';

import { Box, BoxProps } from '@mui/material';

interface AnimatedGradientBackgroundProps extends BoxProps {
  children?: React.ReactNode;
}

export function AnimatedGradientBackground({ children, className, sx, ...props }: AnimatedGradientBackgroundProps) {
  return (
    <Box
      sx={{
        animation: 'gradientDrift 20s ease infinite',
        background:
          'linear-gradient(-45deg, #6366F1 0%, #8B5CF6 15%, #06B6D4 30%, #818CF8 50%, #A78BFA 65%, #6366F1 80%, #8B5CF6 100%)',
        backgroundSize: '600% 600%',
        overflow: 'hidden',
        position: 'relative',
        ...sx
      }}
      className={`animated-gradient${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </Box>
  );
}
