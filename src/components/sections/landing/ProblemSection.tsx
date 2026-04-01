import { Box, Container, Stack, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';

export async function ProblemSection() {
  const t = await getTranslations('landing');

  const items = [t('problem.item1'), t('problem.item2'), t('problem.item3')];

  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="md">
        <Typography align="center" variant="h4" gutterBottom>
          {t('problem.title')}
        </Typography>
        <Stack spacing={2} sx={{ mt: 4 }}>
          {items.map(item => (
            <Stack alignItems="flex-start" direction="row" key={item} spacing={2}>
              <Typography fontSize={24} lineHeight={1.4}>
                ❌
              </Typography>
              <Typography variant="body1">{item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
