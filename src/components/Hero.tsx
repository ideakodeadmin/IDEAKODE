import { ArrowDown, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
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
