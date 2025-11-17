'use client';

import { Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { getProduct, getProducts, getUserPayments, getUserProfile } from '@/lib/firebase/firestore';
import { convertTimestamp } from '@/types/firebase';
import { Payment } from '@/types/payment';
import { Product } from '@/types/product';
import { UserProfile } from '@/types/user';

export function useUserProfile(userId: null | string) {
  const [profile, setProfile] = useState<null | UserProfile>(null);
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
          const userProfile: UserProfile = {
            createdAt: data.createdAt ? convertTimestamp(data.createdAt as Timestamp) : new Date(),
            displayName: data.displayName,
            email: data.email || '',
            photoURL: data.photoURL,
            purchasedProducts: data.purchasedProducts || [],
            uid: data.id,
            updatedAt: data.updatedAt ? convertTimestamp(data.updatedAt as Timestamp) : new Date()
          };
          setProfile(userProfile);
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

  return { error, loading, profile };
}

export function useProduct(productId: null | string) {
  const [product, setProduct] = useState<null | Product>(null);
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
          const productData: Product = {
            category: data.category,
            createdAt: data.createdAt ? convertTimestamp(data.createdAt as Timestamp) : new Date(),
            currency: data.currency,
            description: data.description,
            features: data.features,
            id: data.id,
            imageUrl: data.imageUrl,
            isActive: data.isActive,
            longDescription: data.longDescription,
            name: data.name,
            price: data.price,
            slug: data.slug,
            stripePriceId: data.stripePriceId,
            updatedAt: data.updatedAt ? convertTimestamp(data.updatedAt as Timestamp) : new Date()
          };
          setProduct(productData);
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

  return { error, loading, product };
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

        const productsList: Product[] = data.map(item => ({
          category: item.category,
          createdAt: item.createdAt ? convertTimestamp(item.createdAt as Timestamp) : new Date(),
          currency: item.currency,
          description: item.description,
          features: item.features,
          id: item.id,
          imageUrl: item.imageUrl,
          isActive: item.isActive,
          longDescription: item.longDescription,
          name: item.name,
          price: item.price,
          slug: item.slug,
          stripePriceId: item.stripePriceId,
          updatedAt: item.updatedAt ? convertTimestamp(item.updatedAt as Timestamp) : new Date()
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

  return { error, loading, products };
}

export function useUserPayments(userId: null | string) {
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

        const paymentsList: Payment[] = data.map(item => ({
          amount: item.amount,
          createdAt: item.createdAt ? convertTimestamp(item.createdAt as Timestamp) : new Date(),
          currency: item.currency,
          id: item.id,
          productId: item.productId,
          status: item.status,
          stripePaymentIntentId: item.stripePaymentIntentId,
          stripeSessionId: item.stripeSessionId,
          updatedAt: item.updatedAt ? convertTimestamp(item.updatedAt as Timestamp) : new Date(),
          userId: item.userId
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

  return { error, loading, payments };
}
