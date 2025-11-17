'use client';

import { User as FirebaseUser, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '@/lib/firebase/config';
import { User } from '@/types/user';

export function useAuth() {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!auth) {
      // Use setTimeout to avoid synchronous setState in effect
      setTimeout(() => {
        setLoading(false);
        setError(new Error('Firebase is not configured'));
      }, 0);

      return;
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      firebaseUser => {
        setUser(firebaseUser);
        setLoading(false);
        setError(null);
      },
      err => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const userData: null | User = user
    ? {
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        uid: user.uid
      }
    : null;

  return {
    error,
    firebaseUser: user,
    isAuthenticated: !!user,
    loading,
    user: userData
  };
}
