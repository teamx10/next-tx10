export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  price: number;
  currency: string;
  imageUrl?: string;
  category: ProductCategory;
  features?: string[];
  stripePriceId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductCategory = 'poker-guide' | 'poker-combinations' | 'poker-strategy' | 'solitaire';

export interface ProductListItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  imageUrl?: string;
  category: ProductCategory;
}

