import { Container, Typography, Box } from '@mui/material';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { generateMetadata } from '@/utils/seo';

export const metadata = generateMetadata({
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about TeamX10 products and services',
  keywords: ['FAQ', 'help', 'support', 'questions'],
  url: '/faq',
});

const faqItems = [
  {
    question: 'What products does TeamX10 offer?',
    answer: 'TeamX10 offers a range of poker training products including Poker Guide, Poker Combinations Training, Poker Strategy guides, and a Solitaire game. Each product is designed to help you improve your poker skills.',
  },
  {
    question: 'How do I purchase a product?',
    answer: 'To purchase a product, sign up for an account, browse our products page, select the product you want, and proceed through our secure Stripe checkout process.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit and debit cards through our secure Stripe payment processor. All transactions are encrypted and secure.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'Refund policies vary by product. Please review our Terms of Use for specific refund information. Generally, digital products may be eligible for refunds within a certain time period after purchase.',
  },
  {
    question: 'Do I need to create an account?',
    answer: 'Yes, you need to create an account to purchase products. This allows us to securely process your payment and provide you with access to your purchased products.',
  },
  {
    question: 'How do I access my purchased products?',
    answer: 'After completing your purchase, you will receive access to your products through your account dashboard. You can log in at any time to access your purchased content.',
  },
  {
    question: 'Is my payment information secure?',
    answer: 'Yes, all payment information is processed securely through Stripe, a PCI-compliant payment processor. We do not store your full credit card information on our servers.',
  },
  {
    question: 'Can I use these products on mobile devices?',
    answer: 'Yes, our website is mobile-first and responsive. You can access and use our products on any device including smartphones and tablets.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer customer support through our feedback form and support channels. Please feel free to reach out with any questions or concerns.',
  },
  {
    question: 'Are the products suitable for beginners?',
    answer: 'Yes, our products are designed for players of all skill levels. The Poker Guide is perfect for beginners, while our advanced strategy guides are great for more experienced players.',
  },
];

export default function FAQPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Find answers to common questions about our products and services
      </Typography>

      <Box>
        {faqItems.map((item, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6" component="h2">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}

