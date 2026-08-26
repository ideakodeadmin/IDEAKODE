'use client';

import { Users, TrendingUp, Building2, Calendar } from 'lucide-react';
import { useInView, useCountUp } from '@/hooks/useInView';
import { stats } from '@/data';

function formatLakh(n: number) {
  const lakh = n / 100000;
  if (lakh >= 10) return `${Math.floor(lakh)} Lakh+`;
  return `${lakh.toFixed(1)} Lakh+`;
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const participants = useCountUp(stats.totalParticipants, inView, 2200);
  const reach = useCountUp(stats.totalReach, inView, 2400);
  const sponsors = useCountUp(stats.totalSponsors, inView, 1800);
  const events = useCountUp(stats.eventsRun, inView, 1200);

  const cards = [
    { icon: Users, value: `${participants.toLocaleString()}+`, label: 'Total participants', accent: 'text-emerald-400' },
    { icon: TrendingUp, value: formatLakh(reach), label: 'Students reached', accent: 'text-gold-400' },
    { icon: Building2, value: `${sponsors}+`, label: 'Sponsors partnered', accent: 'text-emerald-400' },
    { icon: Calendar, value: `${events}`, label: 'Flagship events', accent: 'text-gold-400' },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((c, i) => (
            <div
              key={c.label}
              className={`group relative rounded-2xl glass p-6 sm:p-8 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ${c.accent}`}>
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-mono text-ink-600">0{i + 1}</span>
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {c.value}
              </div>
              <div className="mt-1.5 text-sm text-ink-400">{c.label}</div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
