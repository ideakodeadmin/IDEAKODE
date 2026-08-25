import { ArrowUpRight, Users, Radio, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '@/data';
import { useInView } from '@/hooks/useInView';

function formatReach(n: number) {
  const lakh = n / 100000;
  if (lakh >= 10) return `${Math.floor(lakh)} Lakh+`;
  return `${lakh.toFixed(0)} Lakh+`;
}

export default function Events() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="events" className="relative py-24 sm:py-32 scroll-mt-24">
      {/* Section glow */}
      <div className="pointer-events-none absolute top-1/4 left-0 h-96 w-96 rounded-full bg-ember-700/10 blur-[140px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className={`max-w-2xl mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-ember-400 mb-4">
            <span className="h-px w-8 bg-ember-500" />
            Flagship Events
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Three events. One mission — <span className="text-gradient-ember">ignite builders.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-300 leading-relaxed">
            From 24-hour hackathons to titan-scale build weekends, every IDEAKODE
            event is engineered to turn first-time coders into shippers.
          </p>
        </div>

        {/* Event cards */}
        <div className="grid gap-6 lg:gap-8">
          {events.map((ev, i) => {
            const isEmber = ev.accent === 'ember';
            return (
              <Link
                to={`/events/${ev.slug}`}
                key={ev.id}
                className={`group relative block overflow-hidden rounded-3xl glass p-7 sm:p-10 transition-all duration-700 hover:bg-white/[0.05] ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Accent glow on hover */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    isEmber ? 'bg-ember-600/20' : 'bg-electric-600/20'
                  }`}
                />

                <div className="relative grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left: identity */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          isEmber ? 'bg-ember-500/15 text-ember-400' : 'bg-electric-500/15 text-electric-400'
                        }`}
                      >
                        <Radio className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-mono text-ink-500 uppercase tracking-wider">
                        {ev.year} Edition
                      </span>
                    </div>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {ev.name}
                    </h3>
                    <p className={`mt-1 text-sm font-medium ${isEmber ? 'text-ember-400' : 'text-electric-400'}`}>
                      {ev.tagline}
                    </p>
                    <p className="mt-5 text-ink-300 leading-relaxed">{ev.description}</p>

                    {/* Highlights */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {ev.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-ink-200"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* View detail link */}
                    <div className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${isEmber ? 'text-ember-400' : 'text-electric-400'}`}>
                      View event details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Right: metrics */}
                  <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                    <MetricCard
                      icon={Users}
                      value={ev.participants.toLocaleString()}
                      label="Participants"
                      isEmber={isEmber}
                    />
                    <MetricCard
                      icon={ArrowUpRight}
                      value={formatReach(ev.reach)}
                      label={ev.reachLabel}
                      isEmber={isEmber}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  icon: Icon,
  value,
  label,
  isEmber,
}: {
  icon: typeof Users;
  value: string;
  label: string;
  isEmber: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-5 sm:p-6">
      <div className="flex items-center gap-2 text-ink-400 mb-3">
        <Icon className="h-4 w-4" />
        <span className="text-xs font-medium uppercase tracking-wide">Impact</span>
      </div>
      <div className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${isEmber ? 'text-ember-400' : 'text-electric-400'}`}>
        {value}
      </div>
      <div className="mt-1.5 text-sm text-ink-400">{label}</div>
    </div>
  );
}
