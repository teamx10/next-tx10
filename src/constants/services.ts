// Stub data — will be superseded by task #8 (Content Data)
export interface Service {
  deliverable: string;
  phase: number;
  slug: string;
}

export const SERVICES: Service[] = [
  { deliverable: 'AI Readiness Report', phase: 1, slug: 'ai-audit' },
  { deliverable: 'AI Strategy Roadmap', phase: 2, slug: 'ai-strategy' },
  { deliverable: 'Working AI Integrations', phase: 3, slug: 'ai-implementation' },
  { deliverable: 'Trained Team', phase: 4, slug: 'ai-training' },
  { deliverable: 'Optimized AI Workflows', phase: 5, slug: 'ai-optimization' }
];
