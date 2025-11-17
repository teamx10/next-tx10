import { Product } from '@/types/product';

export const PRODUCTS: Product[] = [
  {
    category: 'poker-guide',
    createdAt: new Date(),
    currency: 'USD',
    description: 'Comprehensive guide to poker fundamentals and strategies',
    features: [
      'Complete poker rules and hand rankings',
      'Basic and advanced strategies',
      'Position play fundamentals',
      'Bankroll management tips',
      'Tournament vs cash game strategies'
    ],
    id: 'poker-guide',
    isActive: true,
    longDescription:
      'Master the art of poker with our comprehensive guide covering everything from basic rules to advanced strategies. Perfect for beginners and intermediate players looking to improve their game.',
    name: 'Poker Guide',
    price: 29.99,
    slug: 'poker-guide',
    updatedAt: new Date()
  },
  {
    category: 'poker-combinations',
    createdAt: new Date(),
    currency: 'USD',
    description: 'Interactive training to master poker hand combinations',
    features: [
      'Interactive hand recognition exercises',
      'Probability calculations',
      'Hand strength evaluation',
      'Practice quizzes and challenges',
      'Progress tracking'
    ],
    id: 'poker-combinations',
    isActive: true,
    longDescription:
      'Enhance your poker skills with interactive training focused on recognizing and understanding poker hand combinations. Practice makes perfect!',
    name: 'Poker Combinations Training',
    price: 19.99,
    slug: 'poker-combinations',
    updatedAt: new Date()
  },
  {
    category: 'poker-strategy',
    createdAt: new Date(),
    currency: 'USD',
    description: 'Advanced poker strategies for serious players',
    features: [
      'Advanced betting strategies',
      'Opponent reading techniques',
      'Table image management',
      'Bluffing and deception',
      'Mathematical poker concepts'
    ],
    id: 'poker-strategy',
    isActive: true,
    longDescription:
      'Take your poker game to the next level with advanced strategies used by professional players. Learn to read opponents, manage your table image, and make profitable decisions.',
    name: 'Poker Strategy',
    price: 39.99,
    slug: 'poker-strategy',
    updatedAt: new Date()
  },
  {
    category: 'solitaire',
    createdAt: new Date(),
    currency: 'USD',
    description: 'Classic solitaire card game for relaxation and fun',
    features: [
      'Classic Klondike solitaire',
      'Multiple difficulty levels',
      'Statistics tracking',
      'Beautiful card designs',
      'Undo and hint features'
    ],
    id: 'solitaire',
    isActive: true,
    longDescription:
      'Enjoy the classic solitaire card game with beautiful graphics and smooth gameplay. Perfect for relaxing and passing the time.',
    name: 'Solitaire Game',
    price: 9.99,
    slug: 'solitaire',
    updatedAt: new Date()
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(product => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(product => product.id === id);
}
