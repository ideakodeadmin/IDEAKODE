import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Users,
  Trophy,
  Code2,
  ChevronDown,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { getEventBySlug, events } from '@/data';

const galleryImages: Record<string, string[]> = {
  kodekalesh: [
    'https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/1181260/pexels-photo-1181260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/5380607/pexels-photo-5380607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ],
  'hack-on-titan': [
    'https://images.pexels.com/photos/20733081/pexels-photo-20733081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/301987/pexels-photo-301987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/15448073/pexels-photo-15448073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/20733069/pexels-photo-20733069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ],
  elevate: [
    'https://images.pexels.com/photos/18999470/pexels-photo-18999470.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/29627312/pexels-photo-29627312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/15141493/pexels-photo-15141493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    'https://images.pexels.com/photos/18999478/pexels-photo-18999478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  ],
};

function formatReach(n: number) {
  const lakh = n / 100000;
  if (lakh >= 10) return `${Math.floor(lakh)} Lakh+`;
  return `${lakh.toFixed(0)} Lakh+`;
}

export default function EventDetail() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? getEventBySlug(slug) : undefined;

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-4">Event not found</h1>
          <p className="text-ink-400 mb-8">This event page doesn't exist or may have been moved.</p>
          <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-ink-950">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </div>
    );
  }

  const isEmber = event.accent === 'ember';
  const isUpcoming = event.status === 'upcoming';
  const gallery = galleryImages[event.slug] ?? [];
  const otherEvents = events.filter((e) => e.slug !== event.slug);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          {gallery[0] && (
            <img src={gallery[0]} alt={event.name} className="h-full w-full object-cover opacity-25" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/50" />
        </div>
        <div className="pointer-events-none absolute top-20 left-1/4 h-80 w-80 rounded-full blur-[120px] opacity-40"
          style={{ background: isEmber ? 'rgba(249,115,22,0.3)' : 'rgba(34,211,238,0.25)' }} />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-ink-300 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            All events
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
              isUpcoming ? 'bg-ember-500/15 text-ember-400' : 'bg-white/5 text-ink-300'
            }`}>
              <span className={`h-1.5 w-1.5 rounded-full ${isUpcoming ? 'bg-ember-500 animate-pulse' : 'bg-ink-500'}`} />
              {isUpcoming ? 'Upcoming' : 'Past event'} · {event.year}
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-bold text-white tracking-tight leading-[0.95]">
            {event.name}
          </h1>
          <p className={`mt-3 text-xl font-medium ${isEmber ? 'text-ember-400' : 'text-electric-400'}`}>
            {event.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-lg text-ink-200 leading-relaxed">
            {event.longDescription}
          </p>

          {/* Quick facts */}
          <div className="mt-8 flex flex-wrap gap-3">
            <FactChip icon={Calendar} label={event.date} />
            <FactChip icon={MapPin} label={event.venue} />
            <FactChip icon={Clock} label={event.duration} />
            <FactChip icon={Users} label={event.teamSize} />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative py-12 border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
          <StatBlock value={event.participants.toLocaleString()} label="Participants" accent={isEmber ? 'text-ember-400' : 'text-electric-400'} />
          <StatBlock value={formatReach(event.reach)} label={event.reachLabel} accent={isEmber ? 'text-ember-400' : 'text-electric-400'} />
          <StatBlock value={`${event.tracks.length}`} label="Build tracks" accent={isEmber ? 'text-ember-400' : 'text-electric-400'} />
        </div>
      </section>

      {/* Tracks */}
      <section className="relative py-20 sm:py-28">
        <div className="pointer-events-none absolute top-1/4 right-0 h-80 w-80 rounded-full blur-[140px] opacity-20"
          style={{ background: isEmber ? 'rgba(249,115,22,0.2)' : 'rgba(34,211,238,0.15)' }} />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Build Tracks" title="Pick your arena" accent={isEmber} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {event.tracks.map((t, i) => (
              <div key={t.name} className="group rounded-2xl glass p-7 transition-all hover:bg-white/[0.06] hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${isEmber ? 'bg-ember-500/15 text-ember-400' : 'bg-electric-500/15 text-electric-400'}`}>
                    <Code2 className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-mono text-ink-600">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2">{t.name}</h3>
                <p className="text-sm text-ink-400 leading-relaxed mb-5">{t.description}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-white/[0.06]">
                  <Trophy className={`h-4 w-4 ${isEmber ? 'text-ember-400' : 'text-electric-400'}`} />
                  <span className="text-sm font-semibold text-white">{t.prize}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="relative py-20 sm:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Timeline" title="Hour by hour" accent={isEmber} />
          <div className="mt-12 max-w-3xl">
            <div className="relative pl-8 sm:pl-10">
              {/* vertical line */}
              <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
              {event.schedule.map((s, i) => (
                <div key={i} className="relative mb-8 last:mb-0 group">
                  <span className={`absolute -left-[1.45rem] sm:-left-[1.65rem] top-1.5 h-3 w-3 rounded-full ring-4 ring-ink-950 transition-transform group-hover:scale-125 ${
                    isEmber ? 'bg-ember-500' : 'bg-electric-500'
                  }`} />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="font-mono text-xs text-ink-500 sm:w-32 shrink-0">{s.time}</span>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-white">{s.title}</h4>
                      <p className="text-sm text-ink-400 mt-1 leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="relative py-20 sm:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Prizes" title="What's on the line" accent={isEmber} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {event.prizes.map((p, i) => (
              <div key={i} className={`relative rounded-2xl p-7 transition-all hover:-translate-y-1 ${
                i === 0 ? 'glass-strong glow-ember' : 'glass'
              }`}>
                {i === 0 && (
                  <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-ember-500 to-ember-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    <Sparkles className="h-3 w-3" /> Top prize
                  </span>
                )}
                <div className={`font-display text-2xl font-bold mb-1 ${i === 0 ? 'text-ember-400' : 'text-white'}`}>
                  {p.place}
                </div>
                <div className="font-display text-3xl font-bold text-white mb-3">{p.amount}</div>
                <div className="flex items-start gap-2 text-sm text-ink-400">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-ink-500" />
                  {p.perk}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="relative py-20 sm:py-28 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="Gallery" title="Moments from the floor" accent={isEmber} />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {gallery.map((src, i) => (
                <div key={i} className={`group relative overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 lg:col-span-2 row-span-2' : ''}`}>
                  <img
                    src={src}
                    alt={`${event.name} gallery ${i + 1}`}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      i === 0 ? 'h-full min-h-[300px]' : 'h-40 sm:h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="relative py-20 sm:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading eyebrow="FAQ" title="Good questions, answered" accent={isEmber} />
          <div className="mt-12 space-y-3">
            {event.faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-28 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-10 sm:p-14 text-center">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-56 w-[500px] rounded-full blur-[110px]"
              style={{ background: isEmber ? 'rgba(249,115,22,0.25)' : 'rgba(34,211,238,0.2)' }} />
            <div className="relative">
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
                {isUpcoming ? `Ready to join ${event.name}?` : `Missed ${event.name}?`}
              </h2>
              <p className="mt-4 text-ink-300 max-w-lg mx-auto">
                {isUpcoming
                  ? 'Spots are limited. Register now and be part of the next big IDEAKODE event.'
                  : 'Don\'t worry — there\'s always a next one. Check out our other events and stay in the loop.'}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                {isUpcoming ? (
                  <a href="#join" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ember-500 to-ember-600 px-7 py-4 text-sm font-semibold text-white hover:shadow-xl hover:shadow-ember-600/30 hover:-translate-y-0.5 transition-all">
                    Register now <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link to="/" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ember-500 to-ember-600 px-7 py-4 text-sm font-semibold text-white hover:shadow-xl hover:shadow-ember-600/30 hover:-translate-y-0.5 transition-all">
                    See all events <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other events */}
      <section className="relative py-20 sm:py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h3 className="font-display text-2xl font-bold text-white mb-8">Explore other events</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {otherEvents.map((e) => (
              <Link
                key={e.slug}
                to={`/events/${e.slug}`}
                className="group rounded-2xl glass p-6 transition-all hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-ink-500 mb-1">{e.year}</div>
                    <h4 className="font-display text-xl font-semibold text-white">{e.name}</h4>
                    <p className="text-sm text-ink-400 mt-1">{e.tagline}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-ink-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FactChip({ icon: Icon, label }: { icon: typeof Calendar; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm text-ink-200">
      <Icon className="h-4 w-4 text-ink-400" />
      {label}
    </div>
  );
}

function StatBlock({ value, label, accent }: { value: string; label: string; accent: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className={`font-display text-3xl sm:text-4xl font-bold ${accent}`}>{value}</div>
      <div className="mt-1 text-sm text-ink-400">{label}</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: boolean }) {
  return (
    <div>
      <span className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] mb-4 ${accent ? 'text-ember-400' : 'text-electric-400'}`}>
        <span className={`h-px w-8 ${accent ? 'bg-ember-500' : 'bg-electric-500'}`} />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
        {title}
      </h2>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl glass overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-white">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-ink-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-ink-400 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
