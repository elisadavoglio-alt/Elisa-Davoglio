import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Consulting } from './pages/Consulting';
import { LiteraryWorks } from './pages/LiteraryWorks';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { CookiePolicy } from './pages/CookiePolicy';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState('about');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home key="home" setActivePage={setActivePage} />;
      case 'consulting':
        return <Consulting key="consulting" />;
      case 'literary':
        return <LiteraryWorks key="literary" />;
      case 'about':
        return <About key="about" />;
      case 'contact':
        return <Contact key="contact" setActivePage={setActivePage} />;
      case 'privacy':
        return <Privacy key="privacy" />;
      case 'cookie-policy':
        return <CookiePolicy key="cookie-policy" />;
      default:
        return <About key="about" />;
    }
  };

  return (
    <div className="bg-natural-bg min-h-screen text-natural-dark font-sans selection:bg-natural-dark selection:text-natural-bg overflow-x-hidden">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      
      <main className="pt-24 lg:pt-0 lg:pl-[280px] flex flex-col min-h-screen">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {renderPage()}
          </AnimatePresence>
        </div>
        <Footer setActivePage={setActivePage} />
      </main>
    </div>
  );
}
