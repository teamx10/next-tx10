'use client';

import { Box, CircularProgress, Typography } from '@mui/material';

interface LoadingSpinnerProps {
  message?: string;
  size?: number;
}

export function LoadingSpinner({ message, size = 40 }: LoadingSpinnerProps) {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
        py: 4
      }}
    >
      <CircularProgress size={size} />
      {message && (
        <Typography color="text.secondary" variant="body2">
          {message}
        </Typography>
      )}
    </Box>
  );
}
