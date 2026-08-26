'use client';

import { sponsors } from '@/data';
import { useInView } from '@/hooks/useInView';

const tierStyles: Record<string, string> = {
  title: 'text-emerald-400',
  platinum: 'text-white',
  gold: 'text-gold-300',
  partner: 'text-ink-300',
};

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const row = [...sponsors, ...sponsors];
  return (
    <div className="flex overflow-hidden">
      <div className={`flex shrink-0 items-center gap-4 pr-4 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}>
        {row.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-2xl glass px-6 py-4 transition-colors hover:bg-white/[0.06]"
          >
            <span className={`h-2 w-2 rounded-full ${s.tier === 'title' ? 'bg-emerald-500' : s.tier === 'platinum' ? 'bg-white' : s.tier === 'gold' ? 'bg-gold-400' : 'bg-ink-600'}`} />
            <span className={`font-display text-lg font-semibold tracking-tight whitespace-nowrap ${tierStyles[s.tier]}`}>
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Sponsors() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="sponsors" className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-gold-400 mb-4">
            <span className="h-px w-8 bg-gold-500" />
            Backed by the best
            <span className="h-px w-8 bg-gold-500" />
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            50+ sponsors. <span className="text-gradient-gold">Countless believers.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-300 leading-relaxed">
            From global tech giants to homegrown developer platforms — the
            industry trusts IDEAKODE to find and fuel the next generation of builders.
          </p>
        </div>

        {/* Tier legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[
            { label: 'Title', dot: 'bg-emerald-500' },
            { label: 'Platinum', dot: 'bg-white' },
            { label: 'Gold', dot: 'bg-gold-400' },
            { label: 'Partner', dot: 'bg-ink-600' },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-2 text-xs text-ink-400">
              <span className={`h-2 w-2 rounded-full ${t.dot}`} />
              {t.label}
            </div>
          ))}
        </div>
      </div>

      {/* Marquees — full bleed */}
      <div className="relative space-y-4">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-40 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-40 bg-gradient-to-l from-ink-950 to-transparent" />
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  );
}
