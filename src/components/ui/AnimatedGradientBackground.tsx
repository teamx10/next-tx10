'use client';

import { Box, BoxProps } from '@mui/material';

interface AnimatedGradientBackgroundProps extends BoxProps {
  children?: React.ReactNode;
}

export function AnimatedGradientBackground({ children, className, sx, ...props }: AnimatedGradientBackgroundProps) {
  return (
    <Box
      sx={{
        animation: 'gradientDrift 25s ease infinite',
        background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #818CF8 75%, #A78BFA 100%)',
        backgroundSize: '400% 400%',
        ...sx
      }}
      className={`animated-gradient${className ? ` ${className}` : ''}`}
      {...props}
    >
      {children}
    </Box>
  );
}
