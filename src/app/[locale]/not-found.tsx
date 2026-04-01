import { Box, Typography } from '@mui/material';

import { TeamX10Logo } from '@/components/svg/TeamX10Logo';

export default function NotFound() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: '#121212',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <TeamX10Logo color="orange" width={300} />
      <Typography color="#9e9e9e" variant="h5">
        Page not found
      </Typography>
      <Typography color="#757575" variant="body2">
        404
      </Typography>
    </Box>
  );
}
