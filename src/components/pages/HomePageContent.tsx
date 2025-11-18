'use client';

import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

import { ProductList } from '@/components/products/ProductList';
import { TeamX10Logo } from '@/components/svg/TeamX10Logo';
import { PRODUCTS } from '@/constants/products';
import { ROUTES } from '@/constants/routes';
import { gradients } from '@/lib/mui/theme';

export function HomePageContent() {
  const featuredProducts = PRODUCTS.filter(p => p.isActive).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: gradients.background,
          mb: 6,
          py: { md: 10, xs: 6 }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
            <Box sx={{ mb: 8 }}>
              <TeamX10Logo color="orange" width={500} />
            </Box>
            <Typography
              sx={{
                fontWeight: 700,
                mb: 3
              }}
              component="h1"
              variant="h2"
              gutterBottom
            >
              Master Poker with TeamX10
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }} variant="h5">
              Comprehensive poker training products and games designed to help you improve your skills and become a
              better player.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
              <Button component={Link} href={ROUTES.PRODUCTS} size="large" variant="contained">
                Browse Products
              </Button>
              <Button component={Link} href={ROUTES.FAQ} size="large" variant="outlined">
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Featured Products */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography component="h2" sx={{ mb: 4, textAlign: 'center' }} variant="h3" gutterBottom>
          Featured Products
        </Typography>
        <ProductList products={featuredProducts} />
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button component={Link} href={ROUTES.PRODUCTS} size="large" variant="outlined">
            View All Products
          </Button>
        </Box>
      </Container>
      {/* Features Section */}
      <Box
        sx={{
          background: 'background.paper',
          py: 6
        }}
      >
        <Container maxWidth="lg">
          <Typography component="h2" sx={{ mb: 4, textAlign: 'center' }} variant="h3" gutterBottom>
            Why Choose TeamX10?
          </Typography>
          <Grid spacing={4} container>
            <Grid
              size={{
                md: 4,
                xs: 12
              }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Comprehensive Training
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Our products cover everything from basic poker rules to advanced strategies, suitable for players of
                    all skill levels.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              size={{
                md: 4,
                xs: 12
              }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Interactive Learning
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Learn through interactive exercises, practice quizzes, and hands-on training that makes learning
                    poker fun and engaging.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              size={{
                md: 4,
                xs: 12
              }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Mobile-First Design
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    Access your training materials anywhere, anytime. Our mobile-first design ensures a great experience
                    on all devices.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
