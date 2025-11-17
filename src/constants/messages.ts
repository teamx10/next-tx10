export const MESSAGES = {
  AUTH: {
    SIGN_IN_SUCCESS: 'Successfully signed in!',
    SIGN_UP_SUCCESS: 'Account created successfully!',
    SIGN_OUT_SUCCESS: 'Successfully signed out!',
    SIGN_IN_FAILED: 'Failed to sign in. Please check your credentials.',
    SIGN_UP_FAILED: 'Failed to create account. Please try again.',
    EMAIL_VERIFICATION_SENT: 'Verification email sent!',
    PASSWORD_RESET_SENT: 'Password reset email sent!',
  },
  PAYMENT: {
    PROCESSING: 'Processing your payment...',
    SUCCESS: 'Payment successful! Thank you for your purchase.',
    FAILED: 'Payment failed. Please try again.',
    CANCELED: 'Payment canceled.',
    SESSION_EXPIRED: 'Payment session expired. Please start over.',
  },
  ERRORS: {
    GENERIC: 'Something went wrong. Please try again.',
    NETWORK: 'Network error. Please check your connection.',
    UNAUTHORIZED: 'You must be signed in to access this page.',
    NOT_FOUND: 'The requested resource was not found.',
  },
  VALIDATION: {
    EMAIL_REQUIRED: 'Email is required',
    EMAIL_INVALID: 'Please enter a valid email address',
    PASSWORD_REQUIRED: 'Password is required',
    PASSWORD_MIN_LENGTH: 'Password must be at least 6 characters',
    PASSWORD_MISMATCH: 'Passwords do not match',
    NAME_REQUIRED: 'Name is required',
  },
} as const;

