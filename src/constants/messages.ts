export const MESSAGES = {
  AUTH: {
    EMAIL_LINK_EXPIRED: 'This sign-in link has expired. Please request a new one.',
    EMAIL_LINK_INVALID: 'Invalid sign-in link. Please check your email and try again.',
    EMAIL_LINK_SENT: 'Check your email! We sent you a sign-in link.',
    EMAIL_LINK_SUCCESS: 'Successfully signed in via email link!',
    EMAIL_VERIFICATION_SENT: 'Verification email sent!',
    GOOGLE_SIGN_IN_CANCELED: 'Google sign-in was canceled.',
    GOOGLE_SIGN_IN_FAILED: 'Failed to sign in with Google. Please try again.',
    GOOGLE_SIGN_IN_SUCCESS: 'Successfully signed in with Google!',
    SIGN_IN_FAILED: 'Failed to sign in. Please try again.',
    SIGN_IN_SUCCESS: 'Successfully signed in!',
    SIGN_OUT_SUCCESS: 'Successfully signed out!',
    SIGN_UP_FAILED: 'Failed to create account. Please try again.',
    SIGN_UP_SUCCESS: 'Account created successfully!'
  },
  ERRORS: {
    GENERIC: 'Something went wrong. Please try again.',
    NETWORK: 'Network error. Please check your connection.',
    NOT_FOUND: 'The requested resource was not found.',
    UNAUTHORIZED: 'You must be signed in to access this page.'
  },
  PAYMENT: {
    CANCELED: 'Payment canceled.',
    FAILED: 'Payment failed. Please try again.',
    PROCESSING: 'Processing your payment...',
    SESSION_EXPIRED: 'Payment session expired. Please start over.',
    SUCCESS: 'Payment successful! Thank you for your purchase.'
  },
  VALIDATION: {
    EMAIL_INVALID: 'Please enter a valid email address',
    EMAIL_REQUIRED: 'Email is required',
    NAME_REQUIRED: 'Name is required'
  }
} as const;
