import { Box, Typography } from '@mui/material';

interface InsightQuoteProps {
  author?: string;
  quote: string;
  title: string;
}

export function InsightQuote({ author, quote, title }: InsightQuoteProps) {
  return (
    <Box
      sx={{
        borderColor: 'primary.main',
        borderLeft: '4px solid',
        m: 0,
        my: 4,
        pl: 3,
        py: 1
      }}
      component="blockquote"
    >
      <Typography color="text.secondary" fontWeight={600} sx={{ mb: 1 }} variant="overline">
        {title}
      </Typography>
      <Typography fontStyle="italic" variant="h6">
        &ldquo;{quote}&rdquo;
      </Typography>
      {author && (
        <Typography color="text.secondary" sx={{ mt: 1 }} variant="body2">
          — {author}
        </Typography>
      )}
    </Box>
  );
}
