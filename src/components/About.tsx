import { Rocket, Heart, Target, Code2 } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

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

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-electric-700/10 blur-[140px]" />

      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: narrative */}
          <div className={`lg:col-span-5 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-ember-400 mb-4">
              <span className="h-px w-8 bg-ember-500" />
              Who we are
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              A movement under <span className="text-gradient-ember">DS Softwares.</span>
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
              <Code2 className="h-5 w-5 text-electric-400" />
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
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-ember-400 mb-5 transition-colors group-hover:from-ember-500/20 group-hover:to-electric-500/10">
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
