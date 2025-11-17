import { User as FirebaseUser } from 'firebase/auth';
import { DocumentData, Timestamp } from 'firebase/firestore';

export type { FirebaseUser };

export interface FirestoreTimestamp {
  nanoseconds: number;
  seconds: number;
}

export function convertTimestamp(timestamp: FirestoreTimestamp | Timestamp): Date {
  if (timestamp instanceof Timestamp) {
    return timestamp.toDate();
  }
  if ('seconds' in timestamp) {
    return new Date(timestamp.seconds * 1000);
  }

  return new Date();
}

export interface FirestoreDocument extends DocumentData {
  createdAt?: FirestoreTimestamp | Timestamp;
  id: string;
  updatedAt?: FirestoreTimestamp | Timestamp;
}
