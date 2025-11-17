export interface Product {
  category: ProductCategory;
  createdAt: Date;
  currency: string;
  description: string;
  features?: string[];
  id: string;
  imageUrl?: string;
  isActive: boolean;
  longDescription?: string;
  name: string;
  price: number;
  slug: string;
  stripePriceId?: string;
  updatedAt: Date;
}

export type ProductCategory = 'poker-combinations' | 'poker-guide' | 'poker-strategy' | 'solitaire';

export interface ProductListItem {
  category: ProductCategory;
  currency: string;
  description: string;
  id: string;
  imageUrl?: string;
  name: string;
  price: number;
  slug: string;
}
