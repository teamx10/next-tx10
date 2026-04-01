// Stub data — will be superseded by task #8 (Content Data)
export interface CaseStudy {
  client: string;
  description: string;
  keyMetric: string;
  slug: string;
  title: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: 'Grid Dynamics',
    description: 'Implemented AI-assisted code review and generation workflows across engineering teams.',
    keyMetric: '10x productivity',
    slug: 'grid-dynamics',
    title: 'AI-Powered Development at Scale'
  },
  {
    client: 'Grammarly',
    description: 'Automated routine QA tasks with AI agents, reducing manual testing effort.',
    keyMetric: '60% faster QA',
    slug: 'grammarly',
    title: 'AI QA Automation'
  },
  {
    client: 'Deutsche Bank',
    description: 'AI adoption program for development teams across 3 countries.',
    keyMetric: '200+ developers trained',
    slug: 'deutsche-bank',
    title: 'Enterprise AI Adoption'
  }
];
