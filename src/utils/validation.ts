export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

export function validateEmail(email: string): { error?: string; isValid: boolean } {
  if (!email) {
    return { error: 'Email is required', isValid: false };
  }
  if (!isValidEmail(email)) {
    return { error: 'Please enter a valid email address', isValid: false };
  }

  return { isValid: true };
}
