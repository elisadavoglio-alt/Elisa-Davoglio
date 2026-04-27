import React from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, Github, Globe, Linkedin } from 'lucide-react';

export function About() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-32 pb-0 flex flex-col"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-20 flex-1 w-full">
        
        {/* Header and Image Split */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 mb-32 items-center">
          <div className="flex-1">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 1 }}
              className="w-16 h-1 bg-natural-gold mb-8"
            />
            <h1 className="font-serif text-5xl sm:text-7xl text-natural-dark mb-10 leading-[1.1] uppercase tracking-tighter flex flex-col gap-2">
              <span className="opacity-90 leading-none">The Intersection</span>
              <div className="flex items-baseline flex-wrap text-accent leading-none">
                <span>L</span>
                <span className="inline-block scale-y-75 origin-bottom font-medium -ml-[0.02em]">O</span>
                <span>G</span>
                <span className="inline-block -translate-y-2 opacity-80 -ml-[0.02em]">I</span>
                <span className="inline-block rotate-3 -ml-[0.02em]">C</span>
                <span className="font-sans font-light mx-4 text-natural-dark">&</span>
                <span className="text-natural-dark">S</span>
                <span className="inline-block scale-y-[1.15] origin-bottom -ml-[0.02em] text-natural-dark">T</span>
                <span className="inline-block text-[0.8em] -translate-y-1 text-natural-dark">O</span>
                <span className="text-natural-dark">R</span>
                <span className="inline-block -rotate-6 font-light italic -ml-[0.02em] -mr-[0.02em] text-natural-dark">Y</span>
                <span className="text-natural-dark">T</span>
                <span className="inline-block translate-y-1 opacity-90 -ml-[0.02em] text-natural-dark">E</span>
                <span className="text-natural-dark">L</span>
                <span className="inline-block scale-y-75 origin-bottom font-medium -ml-[0.02em] text-natural-dark">L</span>
                <span className="text-natural-dark">I</span>
                <span className="inline-block rotate-[10deg] opacity-80 -ml-[0.02em] text-natural-dark">N</span>
                <span className="text-natural-dark">G</span>
              </div>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed font-serif italic mb-8">
              I am an SEO & AI-driven Senior Digital Project Manager, Cybersecurity Specialist, and Published Author. I didn't start in tech—I started with words. Today, I operate at the intersection of rigorous systems architecture and experimental literature.
            </p>
            <p className="text-lg text-zinc-700 leading-relaxed">
              I treat code as literature, and literature as architecture. Whether building AI-integrated enterprise platforms, optimizing semantic search, or writing poetry, I apply the same disciplined structural methodology. It is all syntax; it is all meaning.
            </p>
          </div>

          <div className="flex-1 w-full lg:w-auto self-stretch flex flex-col items-center justify-center lg:justify-end gap-4">
            <div className="w-full max-w-md aspect-square rounded-full border border-natural-border relative overflow-hidden">
               <motion.div 
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full rounded-full bg-no-repeat"
                  style={{ 
                    backgroundImage: 'url("/davoglio2.jpg")',
                    backgroundSize: '210%',
                    backgroundPosition: 'center 75%'
                  }}
                />
                <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                  <path id="textPath" d="M 50 5 a 45 45 0 1 1 0 90 a 45 45 0 1 1 0 -90" fill="none" />
                  <text className="text-[3px] uppercase tracking-[0.5em] fill-zinc-300 font-sans">
                    <textPath href="#textPath" startOffset="0%">
                      Poetessa Sperimentale • AI Trainer • SEO Specialist •
                    </textPath>
                  </text>
                </svg>
                
                {/* Red text masked to the light (top) part of the image */}
                <div 
                  className="absolute inset-0 w-full h-full pointer-events-none" 
                  style={{ 
                    WebkitMaskImage: 'linear-gradient(to bottom, black 35%, transparent 60%)', 
                    maskImage: 'linear-gradient(to bottom, black 35%, transparent 60%)' 
                  }}
                >
                  <svg className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                    <path id="textPathRed" d="M 50 5 a 45 45 0 1 1 0 90 a 45 45 0 1 1 0 -90" fill="none" />
                    <text className="text-[3px] uppercase tracking-[0.5em] fill-red-600 font-sans font-medium">
                      <textPath href="#textPathRed" startOffset="0%">
                        Poetessa Sperimentale • AI Trainer • SEO Specialist •
                      </textPath>
                    </text>
                  </svg>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology / The Dual Lexicon */}
      <section className="py-20 mb-12">
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-xs tracking-[0.2em] uppercase text-zinc-500">The Dual Lexicon</h2>
            <div className="flex-1 h-px bg-natural-border"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="border border-natural-border p-8 hover:border-natural-gold transition-colors duration-500 group">
              <h3 className="font-serif text-2xl text-natural-dark mb-4 group-hover:text-natural-gold transition-colors">Semantic Architecture</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                In technical SEO and systems design, structure is destiny. I build and audit digital environments to ensure search engines and humans alike can traverse them with zero friction, anchoring meaning directly to code.
              </p>
            </div>
            {/* Card 2 */}
            <div className="border border-natural-border p-8 hover:border-natural-gold transition-colors duration-500 group">
              <h3 className="font-serif text-2xl text-natural-dark mb-4 group-hover:text-natural-gold transition-colors">Narrative Precision</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Writing experimental poetry taught me that every syllable carries weight. I apply this exactitude to brand voice, content strategy, and prompt engineering—stripping away corporate noise to reveal the core signal.
              </p>
            </div>
            {/* Card 3 */}
            <div className="border border-natural-border p-8 hover:border-natural-gold transition-colors duration-500 group">
              <h3 className="font-serif text-2xl text-natural-dark mb-4 group-hover:text-natural-gold transition-colors">Algorithmic Empathy</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                We do not build for machines; we build for humans using machines. By understanding the intersection of human psychology and algorithmic parsing, I design experiences that are both deeply resonant and technically flawless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section - The Epistemic Challenge */}
      <section className="bg-natural-dark text-natural-bg py-32 border-y border-natural-border-light relative overflow-hidden">
        {/* Animated fluid text background */}
        <motion.div 
          animate={{ x: [0, -1000], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 flex items-center whitespace-nowrap text-[20vw] font-serif font-bold pointer-events-none text-natural-gold"
        >
          THE PLAGUE OF LANGUAGE
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-8 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-serif text-4xl sm:text-5xl text-natural-gold mb-8 italic"
              >
                AI as an Epistemic Challenge
              </motion.h2>
              <div className="space-y-6">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-zinc-300 leading-relaxed font-serif"
                >
                  In my research and seminars (such as those at IULM), I explore the convergence of generative AI, philosophy, and experimental poetry. We are facing what Italo Calvino warned of in his <i>American Lessons</i>: a <strong className="text-natural-gold font-bold">"plague of language,"</strong> where human thought flattens into generic, interchangeable formulas.
                </motion.p>
                <div className="border-l-4 border-natural-gold pl-6 py-2 my-8">
                  <p className="text-2xl text-white font-serif italic">
                    "The true challenge is interacting with the <motion.span animate={{ opacity:[1,0.5,1] }} transition={{duration:2, repeat:Infinity}} className="text-natural-gold inline-block">absence of the body</motion.span>."
                  </p>
                </div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-zinc-300 leading-relaxed font-serif"
                >
                  AI learns by mimicking, producing infinite syntactic variations devoid of biological friction. It calculates weights and tokens without experiencing trauma, hunger, or physical reality. This generates a "smooth" language that threatens to deskill our own cognition.
                </motion.p>
              </div>
            </div>

            <div className="pt-2 lg:pt-16 space-y-12">
              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-zinc-400 mb-4 flex items-center gap-4">
                  <span className="w-8 h-px bg-zinc-600 inline-block"></span>
                  Poetry as Friction
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  The role of the experimental poet today is to reintroduce the <i>glitch</i>, the error, and the necessary friction. At the center of this discourse is poetry—and, in a subtle parallel, the freestyle rap as an example of raw, rhythmic creative language. Both rely on sudden deviations and visceral punchlines to break the omologation of machine-generated text. They remind us of the physical weight of words.
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-zinc-400 mb-4 flex items-center gap-4">
                  <span className="w-8 h-px bg-zinc-600 inline-block"></span>
                  The Epistemic Partner
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  We cannot treat AI merely as a cognitive shortcut, which only leads to intellectual proletarianization. Instead, we must treat it as an antagonistic epistemic partner. By training AI to understand creative nuance, we engage in complex language games that preserve our depth, exactitude, and humanity.
                </p>
              </div>

              <div>
                <h3 className="text-sm tracking-[0.2em] uppercase text-zinc-400 mb-4 flex items-center gap-4">
                  <span className="w-8 h-px bg-zinc-600 inline-block"></span>
                  Experiment: Palimpsest
                </h3>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  To further explore this human-AI convergence, I developed <strong className="text-zinc-200 font-serif font-medium">Palimpsest: Autonomous Poetry AI Agent</strong>. Built in Python and deployed via Streamlit, Palimpsest unites advanced prompt engineering with generative poetry constraints. Using the Google Gemini API, the agent autonomously navigates the "Moltbook" social platform, analyzing the semantic context of user posts to generate highly contextual, poetic responses. It is a living demonstration of hybrid architecture—fusing automation, API integrations, and a profound comprehension of natural language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="bg-natural-dark text-natural-bg py-32 mt-auto border-t border-natural-border-light/20">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-xs tracking-[0.2em] uppercase text-natural-gold mb-10 flex items-center gap-4">
              <span className="w-8 h-px bg-natural-gold inline-block"></span>
              Let's Connect
            </h2>
            <p className="font-serif text-3xl sm:text-5xl text-zinc-200 leading-[1.3]">
              Whether you need to rescue a failing web project, secure your architecture, or dominate AI-driven search engines, let's talk.
            </p>
          </div>

          <div className="flex flex-col justify-center items-start lg:items-end gap-8">
            <a href="https://neocyberneticcrew.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <span className="text-xl font-serif italic text-zinc-400 group-hover:text-natural-gold transition-colors">Neo Cybernetic Crew</span>
              <div className="w-14 h-14 rounded-full border border-natural-border-light flex items-center justify-center group-hover:bg-natural-gold group-hover:text-natural-dark group-hover:border-natural-gold transition-all duration-300">
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>

            <a href="https://linkedin.com/in/elisadavoglio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <span className="text-xl font-serif italic text-zinc-400 group-hover:text-natural-gold transition-colors">LinkedIn</span>
              <div className="w-14 h-14 rounded-full border border-natural-border-light flex items-center justify-center group-hover:bg-natural-gold group-hover:text-natural-dark group-hover:border-natural-gold transition-all duration-300">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>

            <a href="https://github.com/elisadavoglio-alt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
              <span className="text-xl font-serif italic text-zinc-400 group-hover:text-natural-gold transition-colors">GitHub</span>
              <div className="w-14 h-14 rounded-full border border-natural-border-light flex items-center justify-center group-hover:bg-natural-gold group-hover:text-natural-dark group-hover:border-natural-gold transition-all duration-300">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>

            <a href="mailto:contact@elisadavoglio.it" className="flex items-center gap-6 group">
              <span className="text-xl font-serif italic text-zinc-400 group-hover:text-natural-gold transition-colors">Email</span>
              <div className="w-14 h-14 rounded-full border border-natural-border-light flex items-center justify-center group-hover:bg-natural-gold group-hover:text-natural-dark group-hover:border-natural-gold transition-all duration-300">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
          </div>

        </div>
      </section>
      
    </motion.div>
  );
}

