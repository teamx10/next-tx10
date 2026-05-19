export interface RecordCase {
  description?: string;
  slug: string;
  status: 'draft' | 'ready';
  title: string;
}

export const RECORD_CASES: RecordCase[] = [
  {
    slug: 'example-case',
    status: 'draft',
    title: 'Example Case'
  }
];
