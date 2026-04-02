import { Box, Container, Typography } from '@mui/material';

import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description: 'Terms of Use for TeamX10 services and products',
  noindex: true,
  title: 'Terms of Use',
  url: '/terms'
});

export default function TermsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography component="h1" variant="h3" gutterBottom>
        Terms of Use
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }} variant="body2">
        Last updated: {new Date().toLocaleDateString()}
      </Typography>

      <Box sx={{ '& > *': { mb: 3 } }}>
        <section>
          <Typography variant="h5" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing and using the TeamX10 website and services, you accept and agree to be bound by the terms and
            provision of this agreement.
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            2. Use License
          </Typography>
          <Typography variant="body1" paragraph>
            Permission is granted to temporarily download one copy of the materials on TeamX10&apos;s website for
            personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title,
            and under this license you may not:
          </Typography>
          <Typography component="ul" sx={{ pl: 3 }} variant="body1">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose or for any public display;</li>
            <li>attempt to decompile or reverse engineer any software contained on TeamX10&apos;s website;</li>
            <li>remove any copyright or other proprietary notations from the materials.</li>
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            3. Products and Services
          </Typography>
          <Typography variant="body1" paragraph>
            TeamX10 offers AI consulting and development acceleration services. All purchases are final unless otherwise
            stated. Refunds may be available under certain circumstances as outlined in our refund policy.
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            4. User Accounts
          </Typography>
          <Typography variant="body1" paragraph>
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept
            responsibility for all activities that occur under your account.
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            5. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            In no event shall TeamX10 or its suppliers be liable for any damages (including, without limitation, damages
            for loss of data or profit, or due to business interruption) arising out of the use or inability to use the
            materials on TeamX10&apos;s website.
          </Typography>
        </section>

        <section>
          <Typography variant="h5" gutterBottom>
            6. Revisions
          </Typography>
          <Typography variant="body1" paragraph>
            TeamX10 may revise these terms of service at any time without notice. By using this website you are agreeing
            to be bound by the then current version of these terms of service.
          </Typography>
        </section>
      </Box>
    </Container>
  );
}
