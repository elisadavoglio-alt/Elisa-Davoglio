import React from 'react';

interface FooterProps {
  setActivePage?: (page: string) => void;
}

export function Footer({ setActivePage }: FooterProps) {
  return (
    <footer className="w-full py-10 px-8 lg:px-20 border-t border-natural-border bg-natural-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif italic text-[13px] text-zinc-500">
          © {new Date().getFullYear()} Elisa Davoglio. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[10px] uppercase tracking-widest text-zinc-400">
          <button 
            type="button"
            onClick={() => setActivePage?.('privacy')} 
            className="hover:text-natural-dark transition-colors"
          >
            Privacy Policy
          </button>
          <button 
            type="button"
            onClick={() => setActivePage?.('cookie-policy')} 
            className="hover:text-natural-dark transition-colors"
          >
            Cookie Policy
          </button>
          <span className="cursor-default">Credits</span>
        </div>
      </div>
    </footer>
  );
}
