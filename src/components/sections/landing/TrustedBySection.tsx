import { Box, Container, Stack, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';

const COMPANIES = ['Grid Dynamics', 'Grammarly', 'Deutsche Bank', 'Zeta Alpha'];

export async function TrustedBySection() {
  const t = await getTranslations('landing');

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography align="center" variant="h5" gutterBottom>
          {t('trustedBy.title')}
        </Typography>
        <Stack
          alignItems="center"
          direction={{ sm: 'row', xs: 'column' }}
          justifyContent="center"
          spacing={4}
          sx={{ mt: 3 }}
        >
          {COMPANIES.map(company => (
            <Typography color="text.secondary" fontWeight={600} key={company} sx={{ opacity: 0.7 }} variant="h6">
              {company}
            </Typography>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
