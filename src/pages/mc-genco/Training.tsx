import { ArrowLeft, Play, Mic, Star } from 'lucide-react';

interface TrainingProps {
  navigateTo: (screen: string) => void;
}

export default function Training({ navigateTo }: TrainingProps) {
  return (
    <div className="w-full h-full bg-abisso flex flex-col text-sporco relative overflow-y-auto pb-24">
      {/* Background - grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-acciaio/20 via-abisso to-abisso -z-10"></div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center px-4 py-4 bg-abisso/90 backdrop-blur-md">
         <button onClick={() => navigateTo('HOME')} className="p-2 -ml-2 mr-4 hover:bg-fumoso rounded-full transition-colors">
             <ArrowLeft className="w-6 h-6 text-sporco" />
         </button>
         <h1 className="text-xl font-bebas tracking-wide text-sporco">SESSIONE CON TOM HAGEN</h1>
         <div className="ml-auto flex items-center">
             <span className="font-inter text-xs text-cenere">3/5 Esercizi</span>
         </div>
      </header>

      <div className="flex-1 flex flex-col px-4 pt-4 w-full max-w-lg mx-auto z-10 space-y-6">
          
          {/* Coach Avatar & Speech Bubble */}
          <div className="flex flex-col items-center">
              <div className="w-28 h-32 rounded-xl bg-cemento flex items-center justify-center border-2 border-acciaio shadow-[0_0_20px_rgba(46,74,110,0.4)] mb-6 overflow-hidden">
                  <span className="text-cenere text-sm">TOM HAGEN</span>
              </div>
              
              <div className="relative w-full max-w-[90%] bg-acciaio/80 backdrop-blur-sm rounded-2xl p-4 shape-speech-bubble">
                  {/* Small triangle for speech bubble effect */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-acciaio/80"></div>
                  <p className="font-inter text-sm text-sporco leading-relaxed">
                      "Oggi lavoriamo sul flow. Ascolta questo beat e prova a entrare sul 2..."
                  </p>
              </div>
          </div>

          {/* Current Exercise Card */}
          <div className="w-full bg-cemento rounded-xl border border-acciaio p-5">
              <h3 className="font-bebas text-lg tracking-wide text-sporco mb-2">ESERCIZIO: RIME ALTERNATE</h3>
              <p className="font-inter text-sm text-sporco mb-4 leading-relaxed">
                  Cerca di mantenere il ritmo mentre alterni le rime alla fine di ogni barra per 4 barre consecutive.
              </p>
              <p className="font-inter text-xs text-cenere mb-6">
                  Beat suggerito: Old School
              </p>
              
              <div className="space-y-3">
                  <button className="w-full py-4 rounded-xl border border-live bg-abisso/50 flex items-center justify-center space-x-2 text-sporco font-inter font-semibold hover:bg-live/10 transition-colors">
                      <Play className="w-5 h-5 text-live" />
                      <span>Play Beat</span>
                  </button>
                  <button className="w-full py-4 rounded-xl bg-sangue flex items-center justify-center space-x-2 text-sporco font-inter font-semibold hover:bg-sangue/90 transition-colors shadow-[0_4px_15px_rgba(196,30,58,0.3)]">
                      <Mic className="w-5 h-5 text-sporco" />
                      <span>Registra tentativo</span>
                  </button>
              </div>
          </div>

          {/* Previous Feedback */}
          <div className="w-full bg-cemento rounded-xl border border-fumoso p-4">
              <h3 className="font-bebas text-sm tracking-wide text-sporco mb-4 flex items-center">
                  <span className="mr-2">📊</span> FEEDBACK PRECEDENTE:
              </h3>
              
              <div className="space-y-3 mb-4">
                   {[
                       { label: 'Timing', score: 4 },
                       { label: 'Rime', score: 3 },
                       { label: 'Flow', score: 5 }
                   ].map((stat) => (
                       <div key={stat.label} className="flex items-center justify-between">
                           <span className="font-inter text-sm text-sporco">{stat.label}</span>
                           <div className="flex space-x-1">
                               {[1, 2, 3, 4, 5].map((s) => (
                                   <Star key={s} className={`w-4 h-4 ${s <= stat.score ? 'text-oro fill-oro' : 'text-cenere'}`} />
                               ))}
                           </div>
                       </div>
                   ))}
              </div>
              
              <p className="font-inter italic text-sm text-cenere border-l-2 border-acciaio pl-3">
                  "Buon flow, ma attento a non scappare dal beat sulle ultime chiusure."
              </p>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-4">
              <button className="w-full py-4 rounded-xl bg-oro text-abisso font-inter font-semibold hover:bg-oro/90 transition-colors shadow-[0_4px_15px_rgba(212,175,55,0.3)]">
                  PROSSIMO ESERCIZIO
              </button>
              <button className="w-full py-4 rounded-xl bg-acciaio text-sporco font-inter font-semibold hover:bg-acciaio/90 transition-colors">
                  RIPROVA
              </button>
          </div>
      </div>
    </div>
  );
}
