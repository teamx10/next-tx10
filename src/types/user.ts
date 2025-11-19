export type AuthProvider = 'email-link' | 'google';

export interface User {
  authProvider?: AuthProvider;
  createdAt?: Date;
  displayName: null | string;
  email: null | string;
  emailVerified: boolean;
  photoURL: null | string;
  uid: string;
  updatedAt?: Date;
}

export interface UserProfile {
  createdAt: Date;
  displayName?: string;
  email: string;
  photoURL?: string;
  purchasedProducts?: string[];
  uid: string;
  updatedAt: Date;
}
