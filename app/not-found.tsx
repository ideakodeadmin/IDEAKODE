import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <div className="text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-emerald-400">404 · Not found</p>
        <h1 className="font-display text-4xl font-bold text-ink-50">This page missed the build.</h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-400">The page does not exist or may have moved.</p>
        <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-emerald-400">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </main>
  );
}
