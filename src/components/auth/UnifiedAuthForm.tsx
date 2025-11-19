'use client';

import { Box, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useState } from 'react';

import EmailLinkSignInForm from './EmailLinkSignInForm';
import GoogleSignInButton from './GoogleSignInButton';

type AuthMethod = 'email-link' | 'google';

export default function UnifiedAuthForm() {
  const [authMethod, setAuthMethod] = useState<AuthMethod>('email-link');

  return (
    <Box>
      <FormControl component="fieldset" sx={{ mb: 3 }} fullWidth>
        <RadioGroup
          aria-label="authentication method"
          name="auth-method"
          onChange={e => setAuthMethod(e.target.value as AuthMethod)}
          sx={{ justifyContent: 'center' }}
          value={authMethod}
          row
        >
          <FormControlLabel control={<Radio />} label="Email Link" value="email-link" />
          <FormControlLabel control={<Radio />} label="Google" value="google" />
        </RadioGroup>
      </FormControl>

      {authMethod === 'email-link' ? (
        <>
          <EmailLinkSignInForm />

          <Divider sx={{ my: 3 }}>
            <Typography color="text.secondary" variant="body2">
              OR
            </Typography>
          </Divider>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <GoogleSignInButton />
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <GoogleSignInButton fullWidth />
          </Box>

          <Divider sx={{ my: 3 }}>
            <Typography color="text.secondary" variant="body2">
              OR
            </Typography>
          </Divider>

          <Typography color="text.secondary" sx={{ mb: 2 }} textAlign="center" variant="body2">
            Prefer passwordless sign-in?
          </Typography>

          <EmailLinkSignInForm />
        </>
      )}
    </Box>
  );
}
