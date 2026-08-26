import { Code2, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

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

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-gold-600">
                <Code2 className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-semibold text-white">IDEAKODE</span>
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
