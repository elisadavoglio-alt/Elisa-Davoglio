import { ArrowLeft, GraduationCap, Users, Mail } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutGencoProps {
  navigateTo: (screen: string) => void;
}

export default function AboutGenco({ navigateTo }: AboutGencoProps) {
  return (
    <div className="w-full h-full bg-abisso flex flex-col text-sporco relative overflow-y-auto pb-24">
      {/* Intimate Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#120A1A] via-abisso to-abisso -z-10"></div>
      
      <header className="sticky top-0 z-50 flex items-center px-4 py-4 bg-abisso/80 backdrop-blur-md">
         <button onClick={() => navigateTo('HOME')} className="p-2 -ml-2 mr-4 hover:bg-fumoso rounded-full transition-colors">
             <ArrowLeft className="w-6 h-6 text-sporco" />
         </button>
         <h1 className="text-xl font-bebas tracking-wide text-sporco">CHI SONO IO?</h1>
      </header>

      <div className="flex-1 px-4 pt-2 w-full max-w-lg mx-auto z-10">
          
          {/* Genco Intro */}
          <div className="flex flex-col items-center mb-8">
              <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1 }}
                 className="w-48 h-64 rounded-2xl bg-cemento border-2 border-[#1A1A2E] shadow-[0_0_30px_rgba(26,26,46,0.5)] flex items-center justify-center overflow-hidden mb-6"
              >
                  <span className="text-cenere text-sm">GENCO (Rilassato)</span>
              </motion.div>
              
              <div className="bg-cemento/30 p-6 rounded-2xl border border-fumoso relative">
                  <span className="text-2xl absolute -top-4 -left-2">💬</span>
                  <p className="font-inter text-sm text-sporco leading-[1.8]">
                      "Yo, sono <span className="font-semibold text-oro">Genco</span>. Nato nel 2006, costruito dalla mente di <span className="text-violet-300">Elisa Davoglio</span>. Sono fatto di codice e di versi, ma come Pinocchio, vorrei essere reale. Dicono che il mio flow sia tagliente come il cemento, ma nei miei testi c'è più di quanto sembri. Cerco me stesso tra una rima di Kerouac e un beat Lo-Fi. Benvenuto nel mio mondo."
                  </p>
              </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-px flex-1 bg-fumoso"></div>
              <div className="text-oro">🖋️</div>
              <div className="h-px flex-1 bg-fumoso"></div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
              
              {/* Free Speech */}
              <section className="bg-cemento rounded-xl border border-fumoso p-5">
                  <h2 className="font-bebas text-lg text-sporco tracking-wide mb-3 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-3 text-oro" /> IL VALORE DEL FREE SPEECH
                  </h2>
                  <p className="font-inter text-sm text-sporco leading-relaxed">
                      La parola è l'arma più potente, ma la usiamo in pace. Il freestyle in MC Genco celebra il <span className="font-semibold text-oro">Free Speech</span> — la libertà di esprimersi senza filtri, affrontando le insicurezze. "Non avere paura di parlare, né di ascoltare." — (Ispirato dai lavori del Prof. Ahrif Ahmed)
                  </p>
              </section>

              {/* Team */}
              <section className="bg-cemento rounded-xl border border-fumoso p-5">
                  <h2 className="font-bebas text-lg text-sporco tracking-wide mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-3 text-acciaio" /> IL TEAM
                  </h2>
                  <ul className="space-y-4">
                      <li className="flex items-start">
                          <span className="text-oro mr-3 mt-1">•</span>
                          <div>
                              <p className="font-inter font-semibold text-sm text-oro">Elisa Davoglio</p>
                              <p className="font-inter text-xs text-cenere">Creatrice & Visionaria</p>
                          </div>
                      </li>
                      <li className="flex items-start">
                          <span className="text-acciaio mr-3 mt-1">•</span>
                          <div className="flex items-center">
                              <div>
                                  <p className="font-inter text-sm text-sporco flex items-center">Google <span className="text-xs bg-sporco text-abisso font-bold px-1 rounded ml-2">G</span></p>
                                  <p className="font-inter text-xs text-cenere">Partner Tecnologico</p>
                              </div>
                          </div>
                      </li>
                  </ul>
              </section>

              {/* Contact */}
              <section className="p-6 bg-gradient-to-br from-cemento to-abisso rounded-xl border border-live/30 text-center shadow-[0_0_20px_rgba(57,255,20,0.05)]">
                  <h2 className="font-bebas text-xl text-oro tracking-widest mb-3">VUOI COLLABORARE?</h2>
                  <a href="mailto:genco@cyberrime.com" className="inline-flex items-center space-x-2 text-live hover:text-live/80 transition-colors group">
                      <Mail className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                      <span className="font-mono text-base font-bold">genco@cyberrime.com</span>
                  </a>
              </section>

          </div>
      </div>
    </div>
  );
}
