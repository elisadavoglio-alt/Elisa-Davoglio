import React from 'react';
import { motion } from 'motion/react';

export function Home({ setActivePage }: { setActivePage: (page: string) => void; key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen flex flex-col relative"
    >
      {/* Striking Accent Element: A subtle but large typographic monogram in the background */}
      <div className="absolute top-[10%] -left-20 pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply opacity-80">
        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
           animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
           transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
           className="w-[800px] h-[800px] rounded-full bg-accent/20 blur-[80px]"
        />
      </div>
      
      <div className="absolute top-[20%] left-0 -translate-y-1/2 -ml-8 lg:-ml-12 pointer-events-none select-none z-0 overflow-hidden mix-blend-multiply opacity-40">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.04, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-serif text-[28rem] lg:text-[45rem] leading-none text-accent font-light italic tracking-tighter origin-bottom-left -rotate-6"
        >
          E
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col lg:flex-row min-h-screen relative z-10">
        
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-24 lg:py-0">
          <div className="max-w-2xl relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.1, duration: 1.2, ease: 'easeInOut' }}
              className="absolute -left-8 lg:-left-20 top-16 bottom-16 w-1 bg-gradient-to-b from-accent via-accent/50 to-transparent origin-top"
            />
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter leading-[0.9] text-natural-dark mb-8 flex flex-col uppercase">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex items-baseline"
              >
                <span>E</span>
                <span className="inline-block -rotate-6 origin-bottom font-light italic -ml-[0.02em] -mr-[0.02em]">L</span>
                <span className="font-mono text-[0.85em] bg-zinc-100/80 px-2 pt-1 pb-2 border-y border-r border-zinc-300 shadow-sm rotate-2 mr-1">I</span>
                <span className="inline-block scale-y-75 font-sans font-bold tracking-tighter origin-bottom -ml-[0.02em] mix-blend-multiply">S</span>
                <span>A</span>
              </motion.div>
              <div className="flex items-center gap-4 sm:gap-6 mt-2">
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                  className="w-10 sm:w-16 h-[2px] bg-accent/80 origin-left"
                ></motion.span>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex items-baseline relative"
                >
                  <span>D</span>
                  <span className="inline-block translate-y-1 opacity-80 -ml-[0.02em] font-sans font-medium">A</span>
                  <span className="inline-block -rotate-3 text-natural-dark">V</span>
                  <motion.span 
                    initial={{ opacity: 0, y: -30, rotate: 20 }}
                    animate={{ opacity: 1, y: 0, rotate: -12 }}
                    transition={{ delay: 1.1, duration: 0.8, type: "spring", bounce: 0.5 }}
                    className="inline-block origin-center font-light italic -ml-[0.05em] -mr-[0.02em] text-accent relative z-10"
                  >
                    O
                  </motion.span>
                  <span className="bg-natural-dark text-white px-2 py-0 inline-block -rotate-2 shadow-md translate-y-1">G</span>
                  <span className="inline-block scale-y-[1.15] origin-bottom font-medium ml-1">L</span>
                  <span className="font-mono text-[0.9em]">I</span>
                  <span className="inline-block text-[0.85em] -translate-y-2 border border-zinc-200 bg-white px-1 ml-1 rotate-3 shadow-sm">O</span>
                </motion.div>
              </div>
            </h1>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 mb-12 leading-relaxed"
            >
              Senior Digital Project Manager<br />
              Cybersecurity & AI<br />
              <span className="text-accent">Published Author</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="text-xl sm:text-2xl text-zinc-800 leading-relaxed font-serif italic mb-16 border-l-2 border-accent/30 pl-6"
            >
              "I map the syntax of code and language to build <span className="font-sans font-medium uppercase tracking-widest text-[0.8em] mx-1 text-natural-dark">resilient</span> digital ecosystems. In a landscape where tech often lacks <span className="inline-block -rotate-2 font-light text-accent mx-1">empathy</span> and creativity lacks <span className="font-sans font-bold tracking-tight text-zinc-900 mx-1">structure</span>, I bridge the gap."
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button 
                onClick={() => setActivePage('consulting')}
                className="px-8 py-4 bg-natural-dark text-natural-bg uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-colors duration-300"
              >
                Explore Consulting
              </button>
              <button 
                onClick={() => setActivePage('literary')}
                className="px-8 py-4 border border-natural-border text-natural-dark uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-colors duration-300"
              >
                View Literary Works
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right: Image Space */}
        <div className="flex-1 bg-natural-bg relative overflow-hidden min-h-[60vh] lg:min-h-screen flex items-center justify-center p-8 lg:p-0 border-l border-natural-border/30">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full relative flex items-center justify-center lg:block"
          >
            <img 
              src="/elisa.jpg"
              alt="Elisa Davoglio"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                // Fallback rendering in case image is missing or empty
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1600";
              }}
            />
            {/* Elegant gradient overlay to blend the image into the page */}
            <div className="absolute inset-0 bg-gradient-to-t from-natural-bg/40 via-transparent to-natural-bg/10"></div>
          </motion.div>
          
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 flex flex-col items-end gap-2">
            <div className="text-[10px] tracking-widest text-zinc-500 uppercase font-sans bg-natural-bg/80 backdrop-blur-sm px-4 py-2 rounded-full border border-natural-border/50">
              Vision & Structure
            </div>
            <div className="text-[9px] tracking-[0.15em] text-zinc-400 uppercase font-sans pr-2">
              Foto di Dino Ignani
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Dark */}
      <section className="bg-natural-dark text-natural-bg py-32 lg:py-48 relative overflow-hidden">
        {/* Subtle background element for uniqueness */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-8 lg:px-20 text-center relative z-10">
           <BookOpenIcon className="w-8 h-8 text-accent mx-auto mb-12 opacity-90" />
           <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
           >
              <p className="text-2xl sm:text-3xl lg:text-4xl leading-[1.6] font-serif text-zinc-300">
                In a landscape afflicted by what Italo Calvino termed the{" "}
                <motion.span 
                  animate={{ opacity: [0.6, 1, 0.6], y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="font-sans font-black tracking-tight text-accent inline-block"
                >
                  plague of language
                </motion.span>
                , exactitude is the foundation of every resilient system. The modern risk is a flattening of structural rigor. Whether I am auditing a semantic architecture, troubleshooting a vulnerability, or writing a novel, my goal is to recover the core values of his <span className="italic">Six Memos for the Next Millennium</span>:
                
                <span className="block my-12 text-center flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                  <motion.span 
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                    className="font-sans font-bold uppercase tracking-[0.2em] text-natural-gold text-lg sm:text-xl lg:text-2xl lg:tracking-[0.3em]"
                  >
                    Exactitude
                  </motion.span>
                  <motion.span 
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="font-sans font-bold uppercase tracking-[0.2em] text-natural-gold text-lg sm:text-xl lg:text-2xl lg:tracking-[0.3em]"
                  >
                    Quickness
                  </motion.span>
                  <motion.span 
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="font-sans font-bold uppercase tracking-[0.2em] text-natural-gold text-lg sm:text-xl lg:text-2xl lg:tracking-[0.3em]"
                  >
                    Multiplicity
                  </motion.span>
                </span>

                Applying these rules to technology and business is the only way to{" "}
                <motion.span
                  animate={{ color: ["#C5A47E", "#E63946", "#C5A47E"], scale: [1, 1.02, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="font-sans font-semibold italic text-accent inline-block"
                >
                  cure entropy
                </motion.span>
                {" "}and deliver deeply human digital experiences.
              </p>
           </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

// Inline icon component to avoid top-level import conflict if lucide-react isn't handy here
function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

