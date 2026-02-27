import { Box, Typography } from '@mui/material';

import { TeamX10Logo } from '@/components/svg/TeamX10Logo';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description: 'TeamX10 is under construction. Check back soon.',
  title: 'TeamX10 - Under Construction',
  url: '/'
});

export default function HomePage() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: '#121212',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        justifyContent: 'center',
        minHeight: '100vh'
      }}
    >
      <TeamX10Logo color="orange" width={500} />
      <Typography color="#9e9e9e" variant="body1">
        Under construction
      </Typography>
    </Box>
  );
}
