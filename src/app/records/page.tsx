import Link from 'next/link';

import { RECORD_CASES } from './_cases';

export default function RecordsIndexPage() {
  return (
    <main style={{ margin: '0 auto', maxWidth: 720, padding: '4rem 1.5rem' }}>
      <h1>Records</h1>
      <p>Internal AI agent demo cases. Not for public distribution.</p>
      <ul>
        {RECORD_CASES.map(c => (
          <li key={c.slug}>
            <Link href={`/records/${c.slug}`}>{c.title}</Link>
            {c.status === 'draft' && ' (draft)'}
          </li>
        ))}
      </ul>
    </main>
  );
}
