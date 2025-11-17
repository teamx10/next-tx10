import { Container, Typography, Box, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import { ProductList } from '@/components/products/ProductList';
import { PRODUCTS } from '@/constants/products';
import { ROUTES } from '@/constants/routes';
import { generateMetadata } from '@/utils/seo';
import Link from 'next/link';
import { gradients } from '@/lib/mui/theme';

export const metadata = generateMetadata({
  title: 'TeamX10 - Poker Training & Games',
  description: 'Master poker with our comprehensive guides, training programs, and games. Learn poker strategies, combinations, and improve your skills.',
  url: '/',
});

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.isActive).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: gradients.background,
          py: { xs: 6, md: 10 },
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              Master Poker with TeamX10
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4 }}
            >
              Comprehensive poker training products and games designed to help you improve your skills and become a better player.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href={ROUTES.PRODUCTS}
                variant="contained"
                size="large"
              >
                Browse Products
              </Button>
              <Button
                component={Link}
                href={ROUTES.FAQ}
                variant="outlined"
                size="large"
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Featured Products */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Featured Products
        </Typography>
        <ProductList products={featuredProducts} />
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            component={Link}
            href={ROUTES.PRODUCTS}
            variant="outlined"
            size="large"
          >
            View All Products
          </Button>
        </Box>
      </Container>

      {/* Features Section */}
      <Box
        sx={{
          background: 'background.paper',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
            Why Choose TeamX10?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Comprehensive Training
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our products cover everything from basic poker rules to advanced strategies, suitable for players of all skill levels.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Interactive Learning
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Learn through interactive exercises, practice quizzes, and hands-on training that makes learning poker fun and engaging.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Mobile-First Design
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Access your training materials anywhere, anytime. Our mobile-first design ensures a great experience on all devices.
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
