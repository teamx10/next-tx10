export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

export function isValidPassword(password: string, minLength: number = 6): boolean {
  return password.length >= minLength;
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

export function validatePassword(password: string, minLength: number = 6): { error?: string; isValid: boolean } {
  if (!password) {
    return { error: 'Password is required', isValid: false };
  }
  if (!isValidPassword(password, minLength)) {
    return { error: `Password must be at least ${minLength} characters`, isValid: false };
  }

  return { isValid: true };
}

export function validateConfirmPassword(
  password: string,
  confirmPassword: string
): { error?: string; isValid: boolean } {
  if (password !== confirmPassword) {
    return { error: 'Passwords do not match', isValid: false };
  }

  return { isValid: true };
}
