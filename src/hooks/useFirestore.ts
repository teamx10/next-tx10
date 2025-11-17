'use client';

import { useState, useEffect } from 'react';
import {
  getUserProfile,
  getProduct,
  getProducts,
  getUserPayments,
  createUserProfile,
  updateUserProfile,
  createPayment,
  updatePayment,
} from '@/lib/firebase/firestore';
import { FirestoreDocument } from '@/types/firebase';
import { UserProfile } from '@/types/user';
import { Product } from '@/types/product';
import { Payment } from '@/types/payment';
import { convertTimestamp } from '@/types/firebase';
import { Timestamp } from 'firebase/firestore';

export function useUserProfile(userId: string | null) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) {
      setProfile(null);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchProfile() {
      try {
        setLoading(true);
        const data = await getUserProfile(userId as string);
        
        if (cancelled) return;

        if (data) {
          const profile: UserProfile = {
            uid: data.id,
            email: data.email || '',
            displayName: data.displayName,
            photoURL: data.photoURL,
            purchasedProducts: data.purchasedProducts || [],
            createdAt: data.createdAt ? convertTimestamp(data.createdAt as Timestamp) : new Date(),
            updatedAt: data.updatedAt ? convertTimestamp(data.updatedAt as Timestamp) : new Date(),
          };
          setProfile(profile);
        } else {
          setProfile(null);
        }
        setError(null);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error('Failed to fetch profile'));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchProfile();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return { profile, loading, error };
}

export function useProduct(productId: string | null) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!productId) {
      setProduct(null);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchProduct() {
      try {
        setLoading(true);
        const data = await getProduct(productId as string);
        
        if (cancelled) return;

        if (data) {
          const product: Product = {
            id: data.id,
            name: data.name,
            slug: data.slug,
            description: data.description,
            longDescription: data.longDescription,
            price: data.price,
            currency: data.currency,
            imageUrl: data.imageUrl,
            category: data.category,
            features: data.features,
            stripePriceId: data.stripePriceId,
            isActive: data.isActive,
            createdAt: data.createdAt ? convertTimestamp(data.createdAt as Timestamp) : new Date(),
            updatedAt: data.updatedAt ? convertTimestamp(data.updatedAt as Timestamp) : new Date(),
          };
          setProduct(product);
        } else {
          setProduct(null);
        }
        setError(null);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error('Failed to fetch product'));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      cancelled = true;
    };
  }, [productId]);

  return { product, loading, error };
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts();
        
        if (cancelled) return;

        const productsList: Product[] = data.map((item) => ({
          id: item.id,
          name: item.name,
          slug: item.slug,
          description: item.description,
          longDescription: item.longDescription,
          price: item.price,
          currency: item.currency,
          imageUrl: item.imageUrl,
          category: item.category,
          features: item.features,
          stripePriceId: item.stripePriceId,
          isActive: item.isActive,
          createdAt: item.createdAt ? convertTimestamp(item.createdAt as Timestamp) : new Date(),
          updatedAt: item.updatedAt ? convertTimestamp(item.updatedAt as Timestamp) : new Date(),
        }));
        
        setProducts(productsList);
        setError(null);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error('Failed to fetch products'));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading, error };
}

export function useUserPayments(userId: string | null) {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!userId) {
      setPayments([]);
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function fetchPayments() {
      try {
        setLoading(true);
        const data = await getUserPayments(userId as string);
        
        if (cancelled) return;

        const paymentsList: Payment[] = data.map((item) => ({
          id: item.id,
          userId: item.userId,
          productId: item.productId,
          amount: item.amount,
          currency: item.currency,
          status: item.status,
          stripeSessionId: item.stripeSessionId,
          stripePaymentIntentId: item.stripePaymentIntentId,
          createdAt: item.createdAt ? convertTimestamp(item.createdAt as Timestamp) : new Date(),
          updatedAt: item.updatedAt ? convertTimestamp(item.updatedAt as Timestamp) : new Date(),
        }));
        
        setPayments(paymentsList);
        setError(null);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error('Failed to fetch payments'));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchPayments();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return { payments, loading, error };
}

