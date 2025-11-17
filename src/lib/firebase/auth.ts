import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  User as FirebaseUser,
  UserCredential,
} from 'firebase/auth';
import { auth } from './config';

if (!auth) {
  throw new Error('Firebase is not configured. Please set your Firebase environment variables.');
}

// Type assertion: auth is guaranteed to be non-null after the check above
const authInstance = auth as NonNullable<typeof auth>;

export async function signIn(email: string, password: string): Promise<UserCredential> {
  return signInWithEmailAndPassword(authInstance, email, password);
}

export async function signUp(email: string, password: string, displayName?: string): Promise<UserCredential> {
  const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
  
  if (displayName && userCredential.user) {
    await updateProfile(userCredential.user, { displayName });
  }
  
  return userCredential;
}

export async function signOut(): Promise<void> {
  return firebaseSignOut(authInstance);
}

export async function sendVerificationEmail(user: FirebaseUser): Promise<void> {
  return sendEmailVerification(user);
}

export async function resetPassword(email: string): Promise<void> {
  return sendPasswordResetEmail(authInstance, email);
}

export async function updateUserProfile(user: FirebaseUser, updates: { displayName?: string; photoURL?: string }): Promise<void> {
  return updateProfile(user, updates);
}

