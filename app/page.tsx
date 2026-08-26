'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Building2, Calendar, Code2, Github, Heart, Instagram, Linkedin, Mail, Menu, Radio, Rocket, Sparkles, Target, TrendingUp, Twitter, Users, X, Zap } from 'lucide-react';
import { events, sponsors, stats } from '@/data';
import { useCountUp, useInView } from '@/hooks/useInView';

const links = [
  { label: 'Events', href: '#events' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'About', href: '#about' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? 'glass-strong shadow-2xl shadow-black/40' : 'bg-transparent'
          }`}
        >
          <a href="#top" className="group flex items-center" aria-label="IDEAKODE home">
            <img
              src="/ideakode-logo.png"
              alt="IDEAKODE"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.03]"
            />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-ink-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#join"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Get Involved
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 group-hover:animate-ping" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-80 mt-2' : 'max-h-0'
          }`}
        >
          <div className="glass-strong rounded-2xl p-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-ink-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="mt-1 px-4 py-3 text-sm font-semibold text-ink-950 bg-white rounded-lg text-center"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg radial-fade opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />

      {/* Glowing orbs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-emerald-600/20 blur-[120px] animate-pulse-slow" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[450px] w-[450px] rounded-full bg-gold-600/15 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8 animate-[float_6s_ease-in-out_infinite]">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
            <span className="text-xs font-medium tracking-wide text-ink-200">
              A DS Softwares initiative
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-500" />
            <span className="text-xs font-medium text-emerald-400">Est. student-led</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white">
            Where ideas
            <br />
            <span className="text-gradient-mix">compile</span> into
            <br />
            reality.
          </h1>

          {/* Sub */}
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-ink-300 leading-relaxed">
            IDEAKODE is a student-led tech organization running India's most
            electrifying hackathons, seminars, and build-sprints — turning
            curiosity into shipped products, one event at a time.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#events"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-7 py-4 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
            >
              <Zap className="h-4 w-4" fill="currentColor" />
              Explore Our Events
            </a>
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 rounded-xl glass px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              Partner with us
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* Quick proof bar */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-400">
            <ProofStat value="9,200+" label="Participants" />
            <Divider />
            <ProofStat value="11 Lakh+" label="Students reached" />
            <Divider />
            <ProofStat value="50+" label="Sponsors" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-ink-500">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-ink-600 to-transparent" />
      </div>
    </section>
  );
}

function ProofStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-xl font-semibold text-white">{value}</span>
      <span className="text-xs text-ink-400">{label}</span>
    </div>
  );
}

function Divider() {
  return <span className="hidden sm:block h-8 w-px bg-ink-700" />;
}

function formatLakh(n: number) {
  const lakh = n / 100000;
  if (lakh >= 10) return `${Math.floor(lakh)} Lakh+`;
  return `${lakh.toFixed(1)} Lakh+`;
}

function Stats() {
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

function formatReach(n: number) {
  const lakh = n / 100000;
  if (lakh >= 10) return `${Math.floor(lakh)} Lakh+`;
  return `${lakh.toFixed(0)} Lakh+`;
}

function Events() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="events" className="relative py-24 sm:py-32 scroll-mt-24">
      {/* Section glow */}
      <div className="pointer-events-none absolute top-1/4 left-0 h-96 w-96 rounded-full bg-emerald-700/10 blur-[140px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className={`max-w-2xl mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 mb-4">
            <span className="h-px w-8 bg-emerald-500" />
            Flagship Events
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Three events. One mission — <span className="text-gradient-emerald">ignite builders.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-300 leading-relaxed">
            From 24-hour hackathons to titan-scale build weekends, every IDEAKODE
            event is engineered to turn first-time coders into shippers.
          </p>
        </div>

        {/* Event cards */}
        <div className="grid gap-6 lg:gap-8">
          {events.map((ev, i) => {
            const isEmerald = ev.accent === 'emerald';
            return (
              <Link
                href={`/events/${ev.slug}`}
                key={ev.id}
                className={`group relative block overflow-hidden rounded-3xl glass p-7 sm:p-10 transition-all duration-700 hover:bg-white/[0.05] ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Accent glow on hover */}
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                    isEmerald ? 'bg-emerald-600/20' : 'bg-gold-600/20'
                  }`}
                />

                <div className="relative grid lg:grid-cols-12 gap-8 items-center">
                  {/* Left: identity */}
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          isEmerald ? 'bg-emerald-500/15 text-emerald-400' : 'bg-gold-500/15 text-gold-400'
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
                    <p className={`mt-1 text-sm font-medium ${isEmerald ? 'text-emerald-400' : 'text-gold-400'}`}>
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
                    <div className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${isEmerald ? 'text-emerald-400' : 'text-gold-400'}`}>
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
                      isEmerald={isEmerald}
                    />
                    <MetricCard
                      icon={ArrowUpRight}
                      value={formatReach(ev.reach)}
                      label={ev.reachLabel}
                      isEmerald={isEmerald}
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
  isEmerald,
}: {
  icon: typeof Users;
  value: string;
  label: string;
  isEmerald: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-ink-900/40 p-5 sm:p-6">
      <div className="flex items-center gap-2 text-ink-400 mb-3">
        <Icon className="h-4 w-4" />
        <span className="text-xs font-medium uppercase tracking-wide">Impact</span>
      </div>
      <div className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${isEmerald ? 'text-emerald-400' : 'text-gold-400'}`}>
        {value}
      </div>
      <div className="mt-1.5 text-sm text-ink-400">{label}</div>
    </div>
  );
}

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

function Sponsors() {
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

const pillars = [
  {
    icon: Rocket,
    title: 'Build-first mindset',
    desc: 'Every event ends with a shipped project, not just a certificate. We push builders to go from idea to demo.',
  },
  {
    icon: Heart,
    title: 'Student-led, always',
    desc: 'Run by students, for students. We understand first-time builders because we were them yesterday.',
  },
  {
    icon: Target,
    title: 'Real industry access',
    desc: 'Judges, mentors, and sponsors from Google, Amazon, and beyond — bridging campus and career.',
  },
];

function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-gold-700/10 blur-[140px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: narrative */}
          <div className={`lg:col-span-5 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 mb-4">
              <span className="h-px w-8 bg-emerald-500" />
              Who we are
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              A movement under <span className="text-gradient-emerald">DS Softwares.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-300 leading-relaxed">
              IDEAKODE operates under DS Softwares — a student-driven tech
              collective. We exist to give every curious student a stage to build,
              break, and ship.
            </p>
            <p className="mt-4 text-ink-400 leading-relaxed">
              What started as a single hackathon has grown into a community
              reaching over 11 lakh students across India, backed by 50+
              sponsors who believe in what happens when you hand students a
              deadline and a compiler.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl glass px-5 py-4">
              <Code2 className="h-5 w-5 text-gold-400" />
              <span className="text-sm text-ink-200">
                An initiative of <span className="font-semibold text-white">DS Softwares</span>
              </span>
            </div>
          </div>

          {/* Right: pillars */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`group rounded-2xl glass p-7 transition-all duration-700 hover:bg-white/[0.06] hover:-translate-y-1 ${
                  i === 2 ? 'sm:col-span-2' : ''
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-emerald-400 mb-5 transition-colors group-hover:from-emerald-500/20 group-hover:to-gold-500/10">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-xl font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-ink-400 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="join" className="relative py-24 sm:py-32 scroll-mt-24">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-950 p-10 sm:p-16 text-center transition-all duration-700 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-emerald-600/20 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-gold-600/15 blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 mb-5">
              <span className="h-px w-8 bg-emerald-500" />
              Join the movement
              <span className="h-px w-8 bg-emerald-500" />
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.05] max-w-3xl mx-auto">
              Build with us. Or <span className="text-gradient-mix">sponsor the next.</span>
            </h2>
            <p className="mt-6 text-lg text-ink-300 max-w-xl mx-auto leading-relaxed">
              Whether you're a student ready to ship your first project or a
              company looking to reach India's brightest builders — there's a
              seat for you at IDEAKODE.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#events"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-7 py-4 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5"
              >
                Register for an event
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hello@ideakode.in"
                className="group inline-flex items-center justify-center gap-2 rounded-xl glass px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
              >
                <Mail className="h-4 w-4" />
                Become a sponsor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: '#', label: 'GitHub' },
];

const nav = [
  { label: 'Events', href: '#events' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'About', href: '#about' },
  { label: 'Get Involved', href: '#join' },
];

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#top" className="mb-4 inline-flex" aria-label="IDEAKODE home">
              <img
                src="/ideakode-logo.png"
                alt="IDEAKODE"
                className="h-11 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              A student-led tech organization running India's most electrifying
              hackathons. An initiative of DS Softwares.
            </p>
          </div>

          {/* Nav */}
          <div className="md:justify-self-center">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-ink-500 mb-4">Navigate</h4>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-ink-300 hover:text-white transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:justify-self-end">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-ink-500 mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-ink-300 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <s.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.04]">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} IDEAKODE. An initiative of DS Softwares.
          </p>
          <p className="text-xs text-ink-600 font-mono">
            Where ideas compile into reality.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Events />
        <Sponsors />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
