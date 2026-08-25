import { Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Events from '@/components/Events';
import Sponsors from '@/components/Sponsors';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import EventDetail from '@/components/EventDetail';

function LandingPage() {
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

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-ink-100 overflow-x-hidden">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/events/:slug" element={<EventDetail />} />
      </Routes>
    </div>
  );
}
