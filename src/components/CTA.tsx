import { ArrowRight, Mail } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function CTA() {
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
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-ember-600/20 blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-electric-600/15 blur-[100px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-ember-400 mb-5">
              <span className="h-px w-8 bg-ember-500" />
              Join the movement
              <span className="h-px w-8 bg-ember-500" />
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
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ember-500 to-ember-600 px-7 py-4 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-ember-600/30 hover:-translate-y-0.5"
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
