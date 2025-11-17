import {
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  User as FirebaseUser,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  UserCredential
} from 'firebase/auth';

import { auth } from './config';

if (!auth) {
  throw new Error('Firebase is not configured. Please set your Firebase environment variables.');
}

// Type assertion: auth is guaranteed to be non-null after the check above
const authInstance = auth as NonNullable<typeof auth>;

export function signIn(email: string, password: string): Promise<UserCredential> {
  return signInWithEmailAndPassword(authInstance, email, password);
}

export async function signUp(email: string, password: string, displayName?: string): Promise<UserCredential> {
  const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);

  if (displayName) {
    await updateProfile(userCredential.user, { displayName });
  }

  return userCredential;
}

export function signOut(): Promise<void> {
  return firebaseSignOut(authInstance);
}

export function sendVerificationEmail(user: FirebaseUser): Promise<void> {
  return sendEmailVerification(user);
}

export function resetPassword(email: string): Promise<void> {
  return sendPasswordResetEmail(authInstance, email);
}

export function updateUserProfile(
  user: FirebaseUser,
  updates: { displayName?: string; photoURL?: string }
): Promise<void> {
  return updateProfile(user, updates);
}
