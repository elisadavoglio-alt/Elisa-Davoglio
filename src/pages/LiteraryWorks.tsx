import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, X } from 'lucide-react';

const books = [
  {
    title: "Dreams of an Electric Critic",
    publisher: "Lithos",
    year: "2026",
    image: "/dreams-of-an-electric-critic-9791256570607.jpg",
    isAnthology: true
  },
  {
    title: "God-Mother-Book-Case",
    publisher: "Arcipelago Itaca",
    year: "2025",
    image: "/god-mother-book-case arcipelago itaca.jpg"
  },
  {
    title: "Nella città più fredda",
    publisher: "Tic Edizioni",
    year: "2021",
    image: "/nella-citta-piu-fredda.webp"
  },
  {
    title: "Taco Bell",
    publisher: "Nino Aragno Editore",
    year: "2018",
    image: "/taco-bell.jpg"
  },
  {
    title: "La deriva del continente",
    publisher: "Transeuropa",
    year: "2014",
    image: "/la-deriva.jpg",
    isAnthology: true
  },
  {
    title: "Roche Figures",
    publisher: "Benwey Series",
    year: "2014",
    image: "/roche-figures.jpg"
  },
  {
    title: "La lunga impazienza",
    publisher: "Arcipelago Itaca",
    year: "2013",
    image: "/la-lunga-impazienza.webp"
  },
  {
    title: "EX.IT",
    publisher: "",
    year: "2013",
    image: "/ex-it-2013-copertina.webp",
    isAnthology: true
  },
  {
    title: "Detour",
    publisher: "La Camera Verde",
    year: "2012",
    image: "/detour.jpg"
  },
  {
    title: "Inverse",
    publisher: "John Cabot University of Rome",
    year: "2012",
    image: "/inverse-2012-1.jpg",
    isAnthology: true
  },
  {
    title: "L'orlo di Galois",
    publisher: "La Camera Verde",
    year: "2009",
    image: "/galois.jpg"
  },
  {
    title: "Onore ai diffidati",
    publisher: "Mondadori",
    year: "2008",
    image: "/onore-ai-diffidati.jpg"
  },
  {
    title: "Olio burning",
    publisher: "Giulio Perrone Editore",
    year: "2006",
    image: "/olio-burning.jpg"
  }
];

export function LiteraryWorks() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-32 pb-24 relative overflow-hidden"
    >
      {/* Background Typography */}
      <div className="absolute top-[5%] -right-20 pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply opacity-20">
        <motion.div
           initial={{ opacity: 0, x: 100 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.5, delay: 0.3 }}
           className="font-serif text-[12rem] lg:text-[25rem] leading-none text-natural-gold font-black tracking-tighter"
        >
          WORKS
        </motion.div>
      </div>
      <div className="absolute top-[40%] -left-10 pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply opacity-10">
        <motion.div
           initial={{ opacity: 0, x: -100 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1.5, delay: 0.5 }}
           className="font-serif text-[10rem] lg:text-[20rem] leading-none text-accent font-black tracking-tighter"
        >
          POETRY
        </motion.div>
      </div>
      <div className="absolute top-[75%] right-[10%] pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply opacity-[0.03]">
        <motion.div
           animate={{ rotate: [0, 360] }}
           transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
           className="w-[600px] h-[600px] rounded-full border-[100px] border-natural-gold"
        />
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-24">
           <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="w-16 h-1 bg-natural-gold mb-8"
            />
          <h1 className="font-serif text-5xl sm:text-7xl text-natural-dark mb-10 leading-[1.1] uppercase tracking-tighter">
            <div className="flex items-baseline flex-wrap">
              <span>P</span>
              <span className="inline-block scale-y-75 origin-bottom font-medium -ml-[0.02em]">U</span>
              <span>B</span>
              <span className="inline-block scale-y-[1.15] origin-bottom -ml-[0.02em]">L</span>
              <span className="inline-block text-[0.8em] -translate-y-1">I</span>
              <span>C</span>
              <span className="inline-block -rotate-6 font-light italic -ml-[0.02em] -mr-[0.02em] text-accent">A</span>
              <span>T</span>
              <span className="inline-block -translate-y-2 opacity-80 -ml-[0.02em]">I</span>
              <span className="inline-block rotate-3 -ml-[0.02em]">O</span>
              <span>N</span>
              <span className="inline-block translate-y-1 -ml-[0.02em] opacity-90">S</span>
            </div>
          </h1>
          <p className="text-2xl text-zinc-600 leading-relaxed font-serif italic border-l-2 border-natural-gold pl-6">
            A chronological archive of novels, poetry collections, and literary works crossing boundaries between exactitude and narrative exploration.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto pt-10 pb-40">
          
          <div className="flex items-center gap-6 mb-32 relative z-10 py-4">
            <h2 className="text-xs tracking-[0.2em] uppercase text-zinc-500">Selected Works</h2>
            <div className="flex-1 h-px bg-natural-border"></div>
          </div>
          
          {/* The central line */}
          <div className="absolute left-[30px] md:left-1/2 top-32 bottom-0 w-px bg-natural-gold/20 md:-translate-x-1/2" />
          
          {books.map((book, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* The timeline node */}
                <div className="absolute left-[30px] md:left-1/2 w-4 h-4 bg-natural-bg border border-natural-gold rounded-full md:-translate-x-1/2 flex items-center justify-center z-10 shadow-sm">
                   <div className="w-1.5 h-1.5 bg-natural-gold rounded-full" />
                </div>
                
                {/* Content (Text) */}
                <motion.div 
                   initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8 }}
                   className={`flex-1 w-full pl-20 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'} flex flex-col justify-center`}
                >
                  <p className="text-2xl md:text-3xl tracking-[0.1em] text-natural-gold font-sans mb-4">
                    {book.year}
                  </p>
                  <h3 className="font-serif text-4xl md:text-5xl text-natural-dark mb-4 italic leading-tight">
                    {book.title}
                  </h3>
                  <div className={`flex flex-col gap-3 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                    {book.publisher && (
                      <p className="text-xs tracking-widest uppercase text-zinc-500">
                        {book.publisher}
                      </p>
                    )}
                    {(book as any).isAnthology && (
                      <span className="inline-flex w-fit text-[10px] tracking-widest uppercase border border-natural-gold text-natural-gold px-2.5 py-0.5 rounded-full">
                        Antologia
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* The Image (Circle style!) */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                   className={`flex-1 w-full flex justify-center pl-20 md:pl-0 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                >
                   <div className="relative w-[50vw] max-w-xs md:w-64 md:h-64 aspect-square rounded-full p-2 group">
                     {/* Outer rotating dashed border or SVG effect */}
                     <motion.svg 
                       animate={{ rotate: isEven ? 360 : -360 }}
                       transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                       className="absolute inset-0 w-full h-full text-natural-gold/50" 
                       viewBox="0 0 100 100"
                     >
                       <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" />
                     </motion.svg>
                     
                     <div className="absolute inset-3 md:inset-4 rounded-full overflow-hidden bg-natural-bg shadow-[-10px_10px_30px_rgba(0,0,0,0.05)] border border-natural-border">
                       <motion.div 
                         whileHover={{ scale: 1.15 }}
                         transition={{ duration: 1.2, ease: "easeOut" }}
                         className="absolute inset-0 bg-cover bg-center cursor-crosshair"
                         onClick={() => setSelectedImage(book.image)}
                         style={{ 
                           backgroundImage: `url("${book.image}")`,
                         }}
                       />
                       {/* Vignette effect to obscure pixelation */}
                       <div className="absolute inset-0 flex bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.3)_100%)] pointer-events-none mix-blend-multiply" />
                       
                       {/* Fallback pattern if placeholder */}
                       {(book as any).isPlaceholder && (
                         <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                       )}
                     </div>
                   </div>
                </motion.div>
                
              </div>
            );
          })}
        </div>

      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 cursor-zoom-out"
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full aspect-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Full cover" 
                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
