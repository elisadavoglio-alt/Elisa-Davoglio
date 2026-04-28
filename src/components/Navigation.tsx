import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'literary', label: 'Authorship' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation({ activePage, setActivePage }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col justify-between w-[280px] h-screen border-r border-natural-border bg-natural-bg p-10 fixed left-0 top-0 z-20">
        <div>
          <button 
            onClick={() => setActivePage('home')}
            className="text-left w-full mb-1 group"
          >
            <div className="font-serif text-3xl font-bold">E.D.</div>
            <div className="text-sm italic font-medium opacity-100 text-zinc-800 mt-4 border-l-2 border-accent pl-3 group-hover:border-natural-gold transition-colors duration-300 leading-relaxed shadow-sm py-1">
              "The pursuit of life by means other than life."<br/>
              <span className="text-xs uppercase tracking-widest font-semibold not-italic opacity-100 block mt-2 text-accent">— Bernard Stiegler</span>
            </div>
          </button>
          
          <nav className="mt-16 flex flex-col space-y-6">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`text-left text-[13px] uppercase tracking-[0.05em] transition-all duration-200 ${
                    isActive 
                      ? "text-natural-dark font-semibold pl-3 border-l-2 border-natural-dark" 
                      : "text-zinc-500 hover:text-natural-dark"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
        
        <div className="text-[11px] leading-relaxed opacity-40">
          © 2026 ELISA DAVOGLIO<br/>REMOTE / ROME / MILAN / LONDON
        </div>
      </aside>

      {/* Mobile Topbar */}
      <nav className="lg:hidden fixed top-0 w-full z-50 bg-natural-bg/90 backdrop-blur-md border-b border-natural-border text-natural-dark">
        <div className="px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => setActivePage('home')}
            className="flex flex-col text-left max-w-[280px] sm:max-w-none"
          >
            <div className="font-serif text-2xl font-bold leading-none mb-1 mt-1">E.D.</div>
            <div className="text-xs italic font-serif font-medium leading-tight opacity-100 text-zinc-900 border-l border-accent pl-2">
              "The pursuit of life by means other than life." <span className="not-italic font-sans text-[10px] tracking-wider text-accent font-semibold ml-1 block mt-1">— B. Stiegler</span>
            </div>
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
        className="fixed inset-0 z-40 bg-natural-dark text-natural-bg flex flex-col items-center justify-center gap-8 lg:hidden"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActivePage(item.id);
              setIsOpen(false);
            }}
            className={`font-serif text-3xl italic tracking-wide transition-colors ${
              activePage === item.id ? "text-natural-gold" : "text-zinc-400"
            }`}
          >
            {item.label}
          </button>
        ))}
      </motion.div>
    </>
  );
}
