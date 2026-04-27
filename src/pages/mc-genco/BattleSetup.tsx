import { useState } from 'react';
import { ArrowLeft, HelpCircle } from 'lucide-react';

interface BattleSetupProps {
  navigateTo: (screen: string) => void;
}

export default function BattleSetup({ navigateTo }: BattleSetupProps) {
  const [battleType, setBattleType] = useState('standard');
  const [roundDuration, setRoundDuration] = useState('60s');

  const durations = ['30s', '45s', '60s', '90s'];
  
  return (
    <div className="w-full h-full bg-abisso flex flex-col text-sporco overflow-y-auto pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-sangue/10 to-transparent pointer-events-none"></div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-abisso/90 backdrop-blur-md">
         <button onClick={() => navigateTo('HOME')} className="p-2 -ml-2 hover:bg-fumoso rounded-full transition-colors">
             <ArrowLeft className="w-6 h-6 text-sporco" />
         </button>
         <h1 className="text-xl font-bebas tracking-wide text-sporco">PREPARA LA BATTLE</h1>
         <button className="p-2 -mr-2 hover:bg-fumoso rounded-full transition-colors">
             <HelpCircle className="w-6 h-6 text-cenere" />
         </button>
      </header>

      <div className="flex-1 px-4 py-4 max-w-lg mx-auto w-full z-10 space-y-6">
          
          {/* Opponent Preview */}
          <div className="w-full bg-cemento rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-xl border-2 border-sangue bg-abisso flex items-center justify-center overflow-hidden">
                      <span className="font-bebas text-sangue text-xl">GENCO</span>
                  </div>
                  <div>
                      <h2 className="font-bebas text-xl text-sporco">GENCO</h2>
                      <p className="font-inter text-sm text-sangue font-medium">Livello: BOSS</p>
                  </div>
              </div>
              <div className="text-3xl text-oro">⚔️</div>
              <div className="w-16 h-16 rounded-xl border-2 border-fumoso border-dashed bg-abisso/50 hidden sm:flex items-center justify-center">
                  <span className="text-cenere text-sm">TU</span>
              </div>
          </div>

          <div className="h-px w-full bg-fumoso"></div>

          {/* Battle Type */}
          <div>
              <h3 className="font-bebas text-cenere text-sm mb-3">TIPO DI BATTLE:</h3>
              <div className="bg-cemento rounded-xl p-2 space-y-1">
                  {[
                      { id: 'standard', label: 'Standard', desc: '(3 round)' },
                      { id: 'parola', label: 'Parola Random', desc: '(topic dato)' },
                      { id: 'hardcore', label: 'Hardcore', desc: '(no pausa)' },
                      { id: 'giro', label: 'Giro della Morte', desc: '(1 round)' },
                      { id: 'patto', label: 'Patto col Diavolo', desc: '(estremo)' }
                  ].map(type => (
                      <label key={type.id} className="flex items-center p-3 rounded-lg hover:bg-fumoso/50 cursor-pointer transition-colors group">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 transition-colors ${battleType === type.id ? 'border-sangue' : 'border-fumoso'}`}>
                              {battleType === type.id && <div className="w-2.5 h-2.5 bg-sangue rounded-full"></div>}
                          </div>
                          <div className="flex-1 flex justify-between items-center">
                              <span className="font-inter text-sporco">{type.label}</span>
                              <span className="font-inter text-xs text-cenere">{type.desc}</span>
                          </div>
                      </label>
                  ))}
              </div>
          </div>

          {/* Style */}
          <div>
              <h3 className="font-bebas text-cenere text-sm mb-3">STILE DI GENCO:</h3>
              <select className="w-full bg-cemento border border-fumoso rounded-xl p-4 font-inter text-sporco focus:outline-none focus:border-sangue appearance-none">
                  <option>Clementino</option>
                  <option>Nitro</option>
                  <option>Gianni Bismark</option>
                  <option>Giulio Cesare</option>
              </select>
          </div>

          {/* Beat */}
          <div>
              <h3 className="font-bebas text-cenere text-sm mb-3">BEAT:</h3>
              <div className="bg-cemento border border-fumoso rounded-xl overflow-hidden">
                  <div className="p-4 flex items-center justify-between border-b border-fumoso">
                      <select className="bg-transparent font-inter text-sporco focus:outline-none flex-1 appearance-none">
                          <option>Boom Bap 90 BPM</option>
                          <option>Trap 140 BPM</option>
                          <option>Drill 142 BPM</option>
                      </select>
                      <button className="text-3xl">▶️</button>
                  </div>
                  <div className="h-10 bg-cemento flex items-center px-4 space-x-1">
                      {/* Fake waveform */}
                      {[...Array(30)].map((_, i) => (
                          <div key={i} className="flex-1 bg-sangue/40 rounded-full" style={{ height: `${Math.max(20, Math.random() * 100)}%` }}></div>
                      ))}
                  </div>
              </div>
          </div>

          {/* Round Duration */}
          <div>
              <h3 className="font-bebas text-cenere text-sm mb-3">DURATA ROUND:</h3>
              <div className="bg-cemento rounded-xl p-6">
                  <div className="flex justify-between mb-4">
                      {durations.map(d => (
                          <span key={d} className={`font-inter text-sm ${roundDuration === d ? 'text-oro font-bold text-lg' : 'text-cenere'}`}>{d}</span>
                      ))}
                  </div>
                  <div className="relative h-1 bg-fumoso rounded-full flex items-center">
                      <div className="absolute left-0 top-0 bottom-0 bg-sangue rounded-full" style={{ width: '75%' }}></div> {/* Mocked active width */}
                      <div className="absolute w-6 h-6 bg-sporco rounded-full shadow-md -ml-3" style={{ left: '75%' }}></div>
                  </div>
              </div>
          </div>

          <div className="pt-4">
              <button 
                onClick={() => navigateTo('FLIP_COIN')}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-sangue to-errore text-sporco flex items-center justify-center space-x-3 shadow-[0_4px_20px_rgba(196,30,58,0.4)] hover:scale-[1.02] hover:shadow-[0_6px_25px_rgba(196,30,58,0.5)] transition-all"
              >
                  <span className="text-2xl animate-spin-slow">🎲</span>
                  <span className="font-bebas text-2xl tracking-wide">PARI O DISPARI - CHI INIZIA?</span>
              </button>
          </div>

      </div>
    </div>
  );
}
