import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'IDEAKODE — Where ideas compile into reality', template: '%s | IDEAKODE' },
  description: "A student-led tech organization running India's most electrifying hackathons, seminars, and build sprints.",
  metadataBase: new URL('https://ideakode.in'),
};

export const viewport: Viewport = { themeColor: '#050a08', colorScheme: 'dark', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-ink-950">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
        <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-ink-100">{children}</div>
      </body>
    </html>
  );
}
