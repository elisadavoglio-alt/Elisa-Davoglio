import React from 'react';
import { motion } from 'motion/react';
import { Shield, LayoutTemplate, Bot } from 'lucide-react';

export function Consulting() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen flex flex-col"
    >
      <div className="flex-1 max-w-7xl mx-auto px-8 lg:px-20 py-32 w-full">
        
        {/* Header with image placeholder */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="w-16 h-1 bg-natural-gold mb-8"
            />
            <h1 className="font-serif text-5xl sm:text-7xl text-natural-dark mb-10 leading-[1.1] uppercase tracking-tighter flex flex-col gap-2">
              <span className="opacity-90">Enterprise <span className="text-accent">Digital</span></span>
              <div className="flex items-baseline flex-wrap">
                <span>C</span>
                <span className="inline-block scale-y-75 origin-bottom font-medium -ml-[0.02em]">O</span>
                <span>N</span>
                <span className="inline-block text-[0.8em] -translate-y-2 opacity-80 -ml-[0.02em]">S</span>
                <span className="inline-block scale-y-[1.15] origin-bottom -ml-[0.02em]">U</span>
                <span>L</span>
                <span className="inline-block -rotate-6 font-light italic -ml-[0.02em] -mr-[0.02em]">T</span>
                <span>I</span>
                <span className="inline-block translate-y-1 -ml-[0.02em]">N</span>
                <span className="inline-block rotate-3 -ml-[0.02em] opacity-90">G</span>
              </div>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-600 leading-relaxed font-serif italic border-l-2 border-natural-gold pl-6">
              For over 15 years, I have orchestrated the end-to-end delivery of complex WordPress and CMS ecosystems for enterprise clients. I align engineering, design, and QA to translate business goals into scalable digital products.
            </p>
          </div>
          
          <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl aspect-[4/5] relative flex items-center justify-center p-0">
              <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 400 500"
                className="text-natural-dark"
                initial="hidden"
                animate="visible"
              >
                {/* Minimal grid lines for 'tech/structure' vibe */}
                <motion.line x1="10%" y1="20%" x2="90%" y2="20%" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1, transition: { delay: 0.5, duration: 1.5 } }
                }} />
                <motion.line x1="10%" y1="80%" x2="90%" y2="80%" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1, transition: { delay: 1, duration: 1.5 } }
                }} />
                <motion.line x1="25%" y1="10%" x2="25%" y2="90%" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1, transition: { delay: 0.8, duration: 1.5 } }
                }} />

                {/* Elegant Female Profile */}
                <motion.path
                  d="M 220 100 C 180 100 170 130 170 160 Q 170 175 180 185 L 155 220 Q 150 225 162 230 Q 155 235 164 242 Q 158 252 168 265 Q 185 285 175 320 Q 165 360 140 400"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1, transition: { delay: 0.4, duration: 2.5, ease: "easeInOut" } }
                  }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Flowing Abstract Hair / Network Stream */}
                <motion.path
                  d="M 220 100 C 270 100 300 150 290 220 C 280 300 330 350 280 430"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1, transition: { delay: 1.2, duration: 2.5, ease: "easeInOut" } }
                  }}
                  strokeLinecap="round"
                />

                {/* Minimal Eye */}
                <motion.path
                  d="M 180 185 Q 190 180 200 185"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  variants={{
                    hidden: { pathLength: 0, opacity: 0 },
                    visible: { pathLength: 1, opacity: 1, transition: { delay: 1.8, duration: 1 } }
                  }}
                  strokeLinecap="round"
                />

                {/* Geometric nodes (Tech intersection) */}
                <motion.circle cx="280" cy="180" r="4" fill="transparent" stroke="#C41E3A" strokeWidth="1.5" variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1, transition: { delay: 2, duration: 0.5, type: "spring" } }
                }} />
                <motion.circle cx="295" cy="250" r="6" fill="transparent" stroke="#D4AF37" strokeWidth="1.5" variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1, transition: { delay: 2.2, duration: 0.5, type: "spring" } }
                }} />
                <motion.circle cx="260" cy="300" r="3" fill="currentColor" variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1, transition: { delay: 2.4, duration: 0.5, type: "spring" } }
                }} />
                
                {/* Structural Connections */}
                <motion.path d="M 280 185 L 295 244" fill="transparent" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1, transition: { delay: 2.5, duration: 1 } }
                }} />
                <motion.path d="M 295 256 L 260 297" fill="transparent" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1, transition: { delay: 2.7, duration: 1 } }
                }} />
                <motion.path d="M 260 300 C 230 320 200 300 178 305" fill="transparent" stroke="currentColor" strokeWidth="0.5" variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: { pathLength: 1, opacity: 1, transition: { delay: 2.9, duration: 1.5 } }
                }} />

                {/* Floating Elements */}
                <motion.rect x="330" y="150" width="12" height="12" fill="transparent" stroke="currentColor" strokeWidth="0.5" 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  style={{ originX: "336px", originY: "156px" }}
                />
                <motion.rect x="120" y="320" width="8" height="8" fill="#D4AF37" 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.2, duration: 0.8, type: "spring" }}
                />

              </motion.svg>
            </div>
          </div>
        </div>

        {/* Core Expertise Grids */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-xs tracking-[0.2em] uppercase text-zinc-500">Core Expertise</h2>
            <div className="flex-1 h-px bg-natural-border"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-10 bg-white border border-natural-border hover:border-natural-gold transition-colors duration-500 group flex flex-col h-full">
              <LayoutTemplate className="w-8 h-8 text-zinc-300 group-hover:text-natural-gold transition-colors mb-10" />
              <h3 className="font-serif text-2xl text-natural-dark mb-4">Digital Project Delivery</h3>
              <p className="text-zinc-500 leading-relaxed text-sm mt-auto">
                WordPress & CMS Architecture<br/>
                Cross-functional Agile Teams<br/>
                Stakeholder Management
              </p>
            </div>

            <div className="p-10 bg-natural-dark text-natural-bg group flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-natural-gold/10 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <Bot className="w-8 h-8 text-zinc-600 group-hover:text-natural-gold transition-colors mb-10 relative z-10" />
              <h3 className="font-serif text-2xl mb-4 relative z-10">Semantic SEO & AI</h3>
              <p className="text-zinc-400 leading-relaxed text-sm mt-auto relative z-10">
                Generative Engine Optimization (GEO)<br/>
                Custom AI Agents<br/>
                LLM Prompt Engineering
              </p>
            </div>

            <div className="p-10 bg-white border border-natural-border hover:border-natural-gold transition-colors duration-500 group flex flex-col h-full">
              <Shield className="w-8 h-8 text-zinc-300 group-hover:text-natural-gold transition-colors mb-10" />
              <h3 className="font-serif text-2xl text-natural-dark mb-4">Cyber-Resilience</h3>
              <p className="text-zinc-500 leading-relaxed text-sm mt-auto">
                Ethical Hacking<br/>
                Threat Mitigation<br/>
                NIS 2 & GDPR Compliance
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Certifications - Dark Section */}
      <section className="bg-natural-dark text-natural-bg py-32 mt-auto relative">
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-natural-gold to-transparent opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 lg:px-20 text-center">
          <h2 className="text-xs tracking-[0.2em] uppercase text-natural-gold/70 mb-16">Certifications & Clearances</h2>
          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 border border-natural-border-light p-8 hover:bg-white/10 transition-colors">
              <h4 className="font-serif text-xl sm:text-2xl text-zinc-200">Google Cybersecurity Professional Certificate</h4>
            </div>
            <div className="bg-white/5 border border-natural-border-light p-8 hover:bg-white/10 transition-colors">
              <h4 className="font-serif text-xl sm:text-2xl text-zinc-200">Vanderbilt University: ChatGPT + Cybersecurity</h4>
              <p className="text-sm tracking-widest uppercase text-zinc-500 mt-3">AI-Powered Tabletops</p>
            </div>
            <div className="bg-white/5 border border-natural-border-light p-8 hover:bg-white/10 transition-colors">
              <h4 className="font-serif text-xl sm:text-2xl text-zinc-200">StarWeaver: AI Agents for Cybersecurity</h4>
            </div>
          </div>
        </div>
      </section>
      
    </motion.div>
  );
}
