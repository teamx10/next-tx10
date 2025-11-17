import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';

import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  description: 'Find answers to common questions about TeamX10 products and services',
  keywords: ['FAQ', 'help', 'support', 'questions'],
  title: 'Frequently Asked Questions',
  url: '/faq'
});

const faqItems = [
  {
    answer:
      'TeamX10 offers a range of poker training products including Poker Guide, Poker Combinations Training, Poker Strategy guides, and a Solitaire game. Each product is designed to help you improve your poker skills.',
    question: 'What products does TeamX10 offer?'
  },
  {
    answer:
      'To purchase a product, sign up for an account, browse our products page, select the product you want, and proceed through our secure Stripe checkout process.',
    question: 'How do I purchase a product?'
  },
  {
    answer:
      'We accept all major credit and debit cards through our secure Stripe payment processor. All transactions are encrypted and secure.',
    question: 'What payment methods do you accept?'
  },
  {
    answer:
      'Refund policies vary by product. Please review our Terms of Use for specific refund information. Generally, digital products may be eligible for refunds within a certain time period after purchase.',
    question: 'Can I get a refund?'
  },
  {
    answer:
      'Yes, you need to create an account to purchase products. This allows us to securely process your payment and provide you with access to your purchased products.',
    question: 'Do I need to create an account?'
  },
  {
    answer:
      'After completing your purchase, you will receive access to your products through your account dashboard. You can log in at any time to access your purchased content.',
    question: 'How do I access my purchased products?'
  },
  {
    answer:
      'Yes, all payment information is processed securely through Stripe, a PCI-compliant payment processor. We do not store your full credit card information on our servers.',
    question: 'Is my payment information secure?'
  },
  {
    answer:
      'Yes, our website is mobile-first and responsive. You can access and use our products on any device including smartphones and tablets.',
    question: 'Can I use these products on mobile devices?'
  },
  {
    answer:
      'Yes, we offer customer support through our feedback form and support channels. Please feel free to reach out with any questions or concerns.',
    question: 'Do you offer customer support?'
  },
  {
    answer:
      'Yes, our products are designed for players of all skill levels. The Poker Guide is perfect for beginners, while our advanced strategy guides are great for more experienced players.',
    question: 'Are the products suitable for beginners?'
  }
];

export default function FAQPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography component="h1" variant="h3" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }} variant="body1">
        Find answers to common questions about our products and services
      </Typography>

      <Box>
        {faqItems.map((item, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary
              aria-controls={`panel${index}-content`}
              expandIcon={<ExpandMoreIcon />}
              id={`panel${index}-header`}
            >
              <Typography component="h2" variant="h6">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary" variant="body1">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
