import { Box, Container, Grid, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';

export async function ProofBar() {
  const t = await getTranslations('landing');

  const stats = [
    { label: t('proof.yearsLabel'), value: t('proof.years') },
    { label: t('proof.productivityLabel'), value: t('proof.productivity') },
    { label: t('proof.projectsLabel'), value: t('proof.projects') },
    { label: t('proof.commitsLabel'), value: t('proof.commits') }
  ];

  return (
    <Box sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider', borderTop: 1, py: 4 }}>
      <Container maxWidth="lg">
        <Grid columns={{ sm: 4, xs: 2 }} spacing={3} container>
          {stats.map(stat => (
            <Grid key={stat.label} size={1} sx={{ textAlign: 'center' }}>
              <Typography color="primary" fontWeight={700} variant="h3">
                {stat.value}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
