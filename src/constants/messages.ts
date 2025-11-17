export const MESSAGES = {
  AUTH: {
    EMAIL_VERIFICATION_SENT: 'Verification email sent!',
    PASSWORD_RESET_SENT: 'Password reset email sent!',
    SIGN_IN_FAILED: 'Failed to sign in. Please check your credentials.',
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
    NAME_REQUIRED: 'Name is required',
    PASSWORD_MIN_LENGTH: 'Password must be at least 6 characters',
    PASSWORD_MISMATCH: 'Passwords do not match',
    PASSWORD_REQUIRED: 'Password is required'
  }
} as const;
