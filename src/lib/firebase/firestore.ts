import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  QueryConstraint,
  DocumentData,
  CollectionReference,
  DocumentReference,
} from 'firebase/firestore';
import { db } from './config';
import { convertTimestamp, FirestoreDocument } from '@/types/firebase';

if (!db) {
  throw new Error('Firestore is not configured. Please set your Firebase environment variables.');
}

// Type assertion: db is guaranteed to be non-null after the check above
const dbInstance = db as NonNullable<typeof db>;

// Collections
export const COLLECTIONS = {
  USERS: 'users',
  PRODUCTS: 'products',
  PAYMENTS: 'payments',
} as const;

// User operations
export async function getUserProfile(userId: string): Promise<FirestoreDocument | null> {
  const docRef = doc(dbInstance, COLLECTIONS.USERS, userId);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    return null;
  }
  
  return { id: docSnap.id, ...docSnap.data() } as FirestoreDocument;
}

export async function createUserProfile(userId: string, data: DocumentData): Promise<void> {
  const docRef = doc(dbInstance, COLLECTIONS.USERS, userId);
  await setDoc(docRef, {
    ...data,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
}

export async function updateUserProfile(userId: string, data: Partial<DocumentData>): Promise<void> {
  const docRef = doc(dbInstance, COLLECTIONS.USERS, userId);
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now(),
  });
}

// Product operations
export async function getProduct(productId: string): Promise<FirestoreDocument | null> {
  const docRef = doc(dbInstance, COLLECTIONS.PRODUCTS, productId);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    return null;
  }
  
  return { id: docSnap.id, ...docSnap.data() } as FirestoreDocument;
}

export async function getProducts(constraints: QueryConstraint[] = []): Promise<FirestoreDocument[]> {
  const q = query(collection(dbInstance, COLLECTIONS.PRODUCTS), ...constraints);
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as FirestoreDocument[];
}

// Payment operations
export async function createPayment(paymentId: string, data: DocumentData): Promise<void> {
  const docRef = doc(dbInstance, COLLECTIONS.PAYMENTS, paymentId);
  await setDoc(docRef, {
    ...data,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
}

export async function getPayment(paymentId: string): Promise<FirestoreDocument | null> {
  const docRef = doc(dbInstance, COLLECTIONS.PAYMENTS, paymentId);
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    return null;
  }
  
  return { id: docSnap.id, ...docSnap.data() } as FirestoreDocument;
}

export async function getUserPayments(userId: string): Promise<FirestoreDocument[]> {
  const q = query(
    collection(dbInstance, COLLECTIONS.PAYMENTS),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as FirestoreDocument[];
}

export async function updatePayment(paymentId: string, data: Partial<DocumentData>): Promise<void> {
  const docRef = doc(dbInstance, COLLECTIONS.PAYMENTS, paymentId);
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now(),
  });
}

