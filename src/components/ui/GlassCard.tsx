'use client';

import { Card, CardProps } from '@mui/material';

interface GlassCardProps extends CardProps {
  children: React.ReactNode;
}

export function GlassCard({ children, sx, ...props }: GlassCardProps) {
  return (
    <Card
      sx={{
        p: 3,
        ...sx
      }}
      {...props}
    >
      {children}
    </Card>
  );
}
