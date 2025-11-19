import {
  isSignInWithEmailLink as firebaseIsSignInWithEmailLink,
  sendSignInLinkToEmail as firebaseSendSignInLinkToEmail,
  signInWithEmailLink as firebaseSignInWithEmailLink,
  signOut as firebaseSignOut,
  User as FirebaseUser,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  signInWithRedirect,
  updateProfile,
  UserCredential
} from 'firebase/auth';

import { auth } from './config';

if (!auth) {
  throw new Error('Firebase is not configured. Please set your Firebase environment variables.');
}

// Type assertion: auth is guaranteed to be non-null after the check above
const authInstance = auth as NonNullable<typeof auth>;

// Configure Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account' // Always show account selection
});

// Email Link Authentication Configuration
const getActionCodeSettings = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    android: {
      installApp: true,
      minimumVersion: '12',
      packageName: 'com.teamx10.app'
    },
    dynamicLinkDomain: undefined,
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.teamx10.app'
    },
    url: `${url}/sign-in/verify`
  };
};

/**
 * Sends a sign-in link to the provided email address
 * Stores the email in localStorage for verification step
 */
export async function sendSignInLinkToEmail(email: string): Promise<void> {
  const actionCodeSettings = getActionCodeSettings();

  await firebaseSendSignInLinkToEmail(authInstance, email, actionCodeSettings);

  // Store email in localStorage for the verification step
  if (typeof window !== 'undefined') {
    window.localStorage.setItem('emailForSignIn', email);
    window.localStorage.setItem('emailForSignInExpiry', String(Date.now() + 24 * 60 * 60 * 1000)); // 24 hours
  }
}

/**
 * Checks if the current URL is a sign-in email link
 */
export function isSignInWithEmailLink(url: string): boolean {
  return firebaseIsSignInWithEmailLink(authInstance, url);
}

/**
 * Completes the email link sign-in process
 * Clears the stored email from localStorage after successful sign-in
 */
export async function completeSignInWithEmailLink(email: string, emailLink: string): Promise<UserCredential> {
  const userCredential = await firebaseSignInWithEmailLink(authInstance, email, emailLink);

  // Clear email from localStorage after successful sign-in
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('emailForSignIn');
    window.localStorage.removeItem('emailForSignInExpiry');
  }

  return userCredential;
}

/**
 * Retrieves the stored email for sign-in from localStorage
 * Returns null if email is not found or has expired
 */
export function getStoredEmailForSignIn(): null | string {
  if (typeof window === 'undefined') {
    return null;
  }

  const email = window.localStorage.getItem('emailForSignIn');
  const expiry = window.localStorage.getItem('emailForSignInExpiry');

  if (!email || !expiry) {
    return null;
  }

  // Check if email has expired (24 hours)
  if (Date.now() > Number(expiry)) {
    window.localStorage.removeItem('emailForSignIn');
    window.localStorage.removeItem('emailForSignInExpiry');

    return null;
  }

  return email;
}

/**
 * Clears the stored email for sign-in from localStorage
 */
export function clearStoredEmailForSignIn(): void {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem('emailForSignIn');
    window.localStorage.removeItem('emailForSignInExpiry');
  }
}

/**
 * Signs in with Google using popup (with fallback to redirect)
 * Tries popup first, falls back to redirect if popup is blocked
 */
export async function signInWithGoogle(): Promise<null | UserCredential> {
  try {
    // Try popup first
    return await signInWithPopup(authInstance, googleProvider);
  } catch (error: unknown) {
    // Check if error is popup blocked
    if (error && typeof error === 'object' && 'code' in error) {
      const errorCode = (error as { code: string }).code;

      if (errorCode === 'auth/popup-blocked' || errorCode === 'auth/popup-closed-by-user') {
        // Fallback to redirect
        await signInWithRedirect(authInstance, googleProvider);

        return null; // Will complete on redirect return
      }
    }

    // Re-throw other errors
    throw error;
  }
}

/**
 * Signs out the current user
 */
export function signOut(): Promise<void> {
  return firebaseSignOut(authInstance);
}

/**
 * Sends email verification to the provided user
 */
export function sendVerificationEmail(user: FirebaseUser): Promise<void> {
  return sendEmailVerification(user);
}

/**
 * Updates the user's profile (displayName, photoURL)
 */
export function updateUserProfile(
  user: FirebaseUser,
  updates: { displayName?: string; photoURL?: string }
): Promise<void> {
  return updateProfile(user, updates);
}
