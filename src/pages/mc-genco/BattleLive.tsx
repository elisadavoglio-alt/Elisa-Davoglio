import { useState, useEffect } from 'react';
import { Pause, X, Mic, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface BattleLiveProps {
  navigateTo: (screen: string) => void;
}

export default function BattleLive({ navigateTo }: BattleLiveProps) {
  const [timeLeft, setTimeLeft] = useState(45);
  const [turn, setTurn] = useState<'TU' | 'GENCO'>('GENCO');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<string[]>([
      "Yo, arrivi con quelle barre deboli,",
      "ti smonto come i mobili dell'IKEA, prego accodati."
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
        setTimeLeft(t => {
            if (t <= 1) {
                // switch turn logic simulation
                return 45;
            }
            return t - 1;
        });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full bg-abisso flex flex-col text-sporco relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1F0A0A] to-abisso -z-10"></div>
      
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-abisso/40 backdrop-blur-md z-20">
          <div className="flex-1"></div>
          <div className="flex flex-col items-center justify-center flex-[2]">
              <span className={`font-mono font-bold text-3xl ${timeLeft <= 10 ? 'text-errore animate-pulse' : 'text-sporco'}`}>
                  00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
              </span>
              <div className="font-inter font-semibold text-sm mt-1">
                  <span className="text-cenere">ROUND </span>
                  <span className="text-oro">1</span>
                  <span className="text-cenere">/3</span>
              </div>
          </div>
          <div className="flex items-center justify-end flex-1 space-x-3">
              <button className="text-cenere hover:text-sporco transition-colors"><Pause className="w-6 h-6" /></button>
              <button onClick={() => navigateTo('BATTLE_RESULT')} className="text-cenere hover:text-sporco transition-colors"><X className="w-6 h-6" /></button>
          </div>
      </header>

      <div className="flex-1 flex flex-col pt-4 pb-0 z-10">
          
          {/* Avatars */}
          <div className="flex items-center justify-center px-4 space-x-4 mb-6">
              {/* Genco */}
              <div className="flex flex-col items-center">
                  <div className={`w-28 h-32 rounded-xl bg-cemento flex items-center justify-center border-2 transition-all ${turn === 'GENCO' ? 'border-sangue shadow-[0_0_20px_rgba(196,30,58,0.4)]' : 'border-fumoso'}`}>
                      <span className="text-cenere text-sm">GENCO</span>
                  </div>
                  <div className="mt-3">
                      {turn === 'GENCO' 
                          ? <span className="font-inter font-semibold text-xs text-sangue flex items-center">🎤 PARLA</span>
                          : <span className="font-inter font-medium text-xs text-cenere flex items-center">⏳ ATTENDE</span>
                      }
                  </div>
              </div>

              {/* VS */}
              <div className="text-3xl text-oro animate-pulse px-2">⚔️</div>

              {/* User */}
              <div className="flex flex-col items-center">
                  <div className={`w-28 h-32 rounded-xl bg-cemento flex items-center justify-center border-2 transition-all ${turn === 'TU' ? 'border-live shadow-[0_0_20px_rgba(57,255,20,0.4)]' : 'border-fumoso'}`}>
                      <span className="text-cenere text-sm">TU</span>
                  </div>
                  <div className="mt-3">
                      {turn === 'TU' 
                          ? <span className="font-inter font-semibold text-xs text-live flex items-center">🎤 PARLA</span>
                          : <span className="font-inter font-medium text-xs text-cenere flex items-center">⏳ ATTENDE</span>
                      }
                  </div>
              </div>
          </div>

          {/* Beat Visualizer */}
          <div className="w-full px-4 mb-4">
              <div className="w-full h-16 bg-cemento rounded-xl border border-fumoso relative flex items-center overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-between px-2 opacity-50">
                     {[...Array(40)].map((_, i) => (
                         <div key={i} className={`w-1 bg-sangue rounded-full transition-all duration-75`} style={{ height: `${Math.random() * 100}%` }}></div>
                     ))}
                  </div>
                  {turn === 'TU' && (
                     <div className="absolute inset-0 flex items-center justify-center bg-cemento/80 backdrop-blur-sm z-10">
                        <span className="font-inter font-bold text-xs text-live">🟢 SEI A TEMPO!</span>
                     </div>
                  )}
              </div>
          </div>

          {/* Transcript Live */}
          <div className="flex-1 px-4 mb-4 flex flex-col justify-end min-h-0">
             <div className="w-full h-full max-h-40 bg-cemento/80 rounded-xl p-4 overflow-y-auto font-mono text-sm leading-relaxed backdrop-blur-md">
                 {transcript.map((line, i) => (
                     <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={i} 
                        className="mb-1"
                     >
                         {line.includes('IKEA') ? (
                             <span className="text-oro font-bold">{line}</span>
                         ) : (
                             line
                         )}
                     </motion.p>
                 ))}
             </div>
          </div>

          {/* Crowd Reaction */}
          <div className="px-6 mb-6">
              <div className="flex items-center space-x-3 mb-1">
                  <Users className="w-5 h-5 text-sporco" />
                  <span className="font-inter text-xs text-sporco font-medium tracking-wide">Crowd Reaction</span>
              </div>
              <div className="w-full h-2 bg-fumoso rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cenere via-oro to-sangue w-[70%] transition-all duration-300"></div>
              </div>
          </div>

          {/* Next turn warning */}
          <div className="text-center h-6 mb-4">
              {timeLeft <= 3 && <span className="font-inter font-medium text-sm text-sporco animate-pulse">La parola passa a te tra {timeLeft}...</span>}
          </div>

          {/* Record Button */}
          <div className="px-4 pb-6 w-full mt-auto">
             <button 
                onMouseDown={() => { if(turn==='TU') setIsRecording(true)}}
                onMouseUp={() => setIsRecording(false)}
                onTouchStart={() => { if(turn==='TU') setIsRecording(true)}}
                onTouchEnd={() => setIsRecording(false)}
                className={`w-full h-24 rounded-2xl flex flex-col items-center justify-center space-y-1 transition-all
                    ${turn === 'TU' 
                        ? (isRecording 
                            ? 'bg-gradient-to-r from-sangue to-fuoco border-2 border-live scale-95 shadow-[0_0_30px_rgba(57,255,20,0.3)]' 
                            : 'bg-gradient-to-r from-sangue to-fuoco shadow-[0_4px_20px_rgba(196,30,58,0.4)]') 
                        : 'bg-cemento opacity-50 border border-fumoso'
                    }
                `}
             >
                 <div className="flex items-center space-x-2">
                     <Mic className={`w-8 h-8 ${turn==='TU' ? 'text-sporco' : 'text-cenere'} ${isRecording ? 'animate-bounce' : ''}`} />
                     <span className={`font-inter font-bold text-lg ${turn==='TU' ? 'text-sporco' : 'text-cenere'}`}>REGISTRA</span>
                 </div>
                 <span className={`font-inter text-xs ${turn==='TU' ? 'text-sporco/80' : 'text-cenere/60'}`}>TIENI PREMUTO E RAPPA</span>
             </button>
          </div>
      </div>
    </div>
  );
}
