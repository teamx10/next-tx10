import { Product } from '@/types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'poker-guide',
    name: 'Poker Guide',
    slug: 'poker-guide',
    description: 'Comprehensive guide to poker fundamentals and strategies',
    longDescription: 'Master the art of poker with our comprehensive guide covering everything from basic rules to advanced strategies. Perfect for beginners and intermediate players looking to improve their game.',
    price: 29.99,
    currency: 'USD',
    category: 'poker-guide',
    features: [
      'Complete poker rules and hand rankings',
      'Basic and advanced strategies',
      'Position play fundamentals',
      'Bankroll management tips',
      'Tournament vs cash game strategies',
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'poker-combinations',
    name: 'Poker Combinations Training',
    slug: 'poker-combinations',
    description: 'Interactive training to master poker hand combinations',
    longDescription: 'Enhance your poker skills with interactive training focused on recognizing and understanding poker hand combinations. Practice makes perfect!',
    price: 19.99,
    currency: 'USD',
    category: 'poker-combinations',
    features: [
      'Interactive hand recognition exercises',
      'Probability calculations',
      'Hand strength evaluation',
      'Practice quizzes and challenges',
      'Progress tracking',
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'poker-strategy',
    name: 'Poker Strategy',
    slug: 'poker-strategy',
    description: 'Advanced poker strategies for serious players',
    longDescription: 'Take your poker game to the next level with advanced strategies used by professional players. Learn to read opponents, manage your table image, and make profitable decisions.',
    price: 39.99,
    currency: 'USD',
    category: 'poker-strategy',
    features: [
      'Advanced betting strategies',
      'Opponent reading techniques',
      'Table image management',
      'Bluffing and deception',
      'Mathematical poker concepts',
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'solitaire',
    name: 'Solitaire Game',
    slug: 'solitaire',
    description: 'Classic solitaire card game for relaxation and fun',
    longDescription: 'Enjoy the classic solitaire card game with beautiful graphics and smooth gameplay. Perfect for relaxing and passing the time.',
    price: 9.99,
    currency: 'USD',
    category: 'solitaire',
    features: [
      'Classic Klondike solitaire',
      'Multiple difficulty levels',
      'Statistics tracking',
      'Beautiful card designs',
      'Undo and hint features',
    ],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}

