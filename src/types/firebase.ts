import { User as FirebaseUser } from 'firebase/auth';
import { DocumentData, Timestamp } from 'firebase/firestore';

export type { FirebaseUser };

export interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

export function convertTimestamp(timestamp: Timestamp | FirestoreTimestamp): Date {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  if ('seconds' in timestamp) {
    return new Date(timestamp.seconds * 1000);
  }
  return new Date();
}

export interface FirestoreDocument extends DocumentData {
  id: string;
  createdAt?: Timestamp | FirestoreTimestamp;
  updatedAt?: Timestamp | FirestoreTimestamp;
}

