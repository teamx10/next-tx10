import { Container, Typography, Box } from '@mui/material';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for TeamX10 services and products',
  url: '/privacy',
});

export default function PrivacyPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ '& > *': { mb: 3 } }}>
        <section>
          <Typography variant="h5" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect information that you provide directly to us, including:
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
            <li>Name and email address when you create an account</li>
            <li>Payment information processed through Stripe</li>
            <li>Information about products you purchase</li>
            <li>Any other information you choose to provide</li>
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            2. How We Use Your Information
          </Typography>
          <Typography variant="body1" paragraph>
            We use the information we collect to:
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            3. Information Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell, trade, or otherwise transfer your personal information to third parties except:
          </Typography>
          <Typography variant="body1" component="ul" sx={{ pl: 3 }}>
            <li>To trusted service providers who assist us in operating our website and conducting our business</li>
            <li>When we believe release is appropriate to comply with the law</li>
            <li>To protect our rights, property, or safety</li>
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            5. Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies to enhance your experience on our site. You can choose to disable cookies through your browser settings, though this may affect site functionality.
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            6. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to access, update, or delete your personal information at any time by contacting us or through your account settings.
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            7. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            If you have any questions about this Privacy Policy, please contact us through our feedback form or support channels.
          </Typography>
        </section>
      </Box>
    </Container>
  );
}

