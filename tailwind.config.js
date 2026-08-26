/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f5f7f6', 100: '#e7ebe9', 200: '#cbd3cf', 300: '#9da9a3', 400: '#6f7d76',
          500: '#526059', 600: '#39453f', 700: '#27312c', 800: '#17201c', 900: '#0b120f', 950: '#050a08',
        },
        emerald: {
          50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399',
          500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b',
        },
        gold: {
          50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24',
          500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f',
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite', 'marquee-rev': 'marquee-rev 40s linear infinite',
        float: 'float 6s ease-in-out infinite', 'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        gradient: 'gradient 8s ease infinite', shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'marquee-rev': { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        'pulse-slow': { '0%, 100%': { opacity: '0.4' }, '50%': { opacity: '0.8' } },
        gradient: { '0%, 100%': { 'background-position': '0% 50%' }, '50%': { 'background-position': '100% 50%' } },
        shimmer: { '0%': { 'background-position': '-200% 0' }, '100%': { 'background-position': '200% 0' } },
      },
    },
  },
  plugins: [],
};
