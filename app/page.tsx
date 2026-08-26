import About from '@/components/About';
import CTA from '@/components/CTA';
import Events from '@/components/Events';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Sponsors from '@/components/Sponsors';
import Stats from '@/components/Stats';

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
