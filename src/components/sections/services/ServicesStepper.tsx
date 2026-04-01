import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';

import type { Locale } from '@/lib/i18n/config';
import type { Service } from '@/types/service';

interface ServicesStepperProps {
  locale: Locale;
  services: Service[];
}

export function ServicesStepper({ locale, services }: ServicesStepperProps) {
  return (
    <Box sx={{ mb: 6, width: '100%' }}>
      <Stepper
        sx={{
          '& .MuiStepConnector-line': { borderColor: 'primary.light' },
          display: { sm: 'flex', xs: 'none' }
        }}
        activeStep={-1}
        alternativeLabel
      >
        {services.map(service => (
          <Step key={service.slug} completed>
            <StepLabel
              StepIconProps={{
                sx: {
                  '&.Mui-completed': { color: 'primary.main' },
                  color: 'primary.main'
                }
              }}
            >
              <Typography fontWeight={600} variant="body2">
                {service.title[locale]}
              </Typography>
              <Typography color="text.secondary" variant="caption">
                {service.description[locale].slice(0, 60)}...
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          display: { sm: 'none', xs: 'flex' },
          flexDirection: 'column',
          gap: 2
        }}
      >
        {services.map((service, index) => (
          <Box key={service.slug} sx={{ alignItems: 'flex-start', display: 'flex', gap: 1.5 }}>
            <Box
              sx={{
                alignItems: 'center',
                bgcolor: 'primary.main',
                borderRadius: '50%',
                color: 'primary.contrastText',
                display: 'flex',
                flexShrink: 0,
                fontSize: '0.75rem',
                fontWeight: 700,
                height: 28,
                justifyContent: 'center',
                width: 28
              }}
            >
              {index + 1}
            </Box>
            <Typography fontWeight={600} pt={0.25} variant="body2">
              {service.title[locale]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
