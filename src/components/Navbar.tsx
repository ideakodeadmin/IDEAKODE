import { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'Events', href: '#events' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
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
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-electric-600 transition-transform group-hover:scale-105">
              <Code2 className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              IDEAKODE
            </span>
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
              className="group relative inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all hover:shadow-lg hover:shadow-ember-500/20"
            >
              Get Involved
              <span className="h-1.5 w-1.5 rounded-full bg-ember-500 group-hover:animate-ping" />
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
