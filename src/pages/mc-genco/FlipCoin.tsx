import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mic } from 'lucide-react';

interface FlipCoinProps {
  navigateTo: (screen: string) => void;
}

export default function FlipCoin({ navigateTo }: FlipCoinProps) {
  const [selected, setSelected] = useState<'PARI' | 'DISPARI' | null>(null);
  const [phase, setPhase] = useState<'SELECTION' | 'FLIPPING' | 'RESULT'>('SELECTION');
  const [result, setResult] = useState<'TU' | 'GENCO' | null>(null);

  const startFlip = () => {
    if (!selected) return;
    setPhase('FLIPPING');
    
    // Simulate flip duration
    setTimeout(() => {
       setResult(Math.random() > 0.5 ? 'TU' : 'GENCO');
       setPhase('RESULT');
    }, 2000);
  };

  return (
    <div className="w-full h-full bg-abisso/95 backdrop-blur-md flex flex-col items-center justify-center p-4 relative z-[100]">
      <motion.div 
         initial={{ scale: 0.9, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         className="w-full max-w-sm bg-cemento border-2 border-oro rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.6)] flex flex-col items-center"
      >
        <h2 className="font-bebas text-3xl text-oro tracking-widest mb-8">PARI O DISPARI</h2>

        {/* 3D Coin Placeholder */}
        <div className="w-32 h-32 mb-10 perspective-1000 relative flex items-center justify-center">
            {phase === 'FLIPPING' ? (
                <motion.div 
                   animate={{ rotateY: 360 * 5, y: [0, -60, 0] }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                   className="w-24 h-24 rounded-full bg-gradient-to-br from-oro to-yellow-600 shadow-xl flex items-center justify-center border-4 border-yellow-300"
                >
                    <span className="font-bebas text-abisso text-2xl">MC</span>
                </motion.div>
            ) : phase === 'RESULT' ? (
                <motion.div 
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   className="w-24 h-24 rounded-full bg-gradient-to-br from-oro to-yellow-600 shadow-[0_0_30px_rgba(212,175,55,0.5)] flex items-center justify-center border-4 border-yellow-300"
                >
                    {result === 'TU' ? <Mic className="w-10 h-10 text-abisso" /> : <span className="font-bebas text-abisso text-3xl">G</span>}
                </motion.div>
            ) : (
                <motion.div 
                   animate={{ y: [-2, 2, -2] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="w-24 h-24 rounded-full bg-gradient-to-br from-oro to-yellow-600 shadow-xl flex items-center justify-center border-4 border-yellow-300"
                >
                    <span className="font-bebas text-abisso text-2xl opacity-50">?</span>
                </motion.div>
            )}
        </div>

        {phase === 'SELECTION' && (
            <>
                <div className="flex space-x-4 w-full mb-8">
                    {['PARI', 'DISPARI'].map(opt => (
                        <button
                            key={opt}
                            onClick={() => setSelected(opt as any)}
                            className={`flex-[1] flex flex-col items-center justify-center py-4 rounded-xl border-2 transition-all ${selected === opt ? 'bg-sangue border-oro' : 'bg-fumoso border-transparent'}`}
                        >
                            <span className="font-bebas text-lg text-sporco">{opt}</span>
                            <span className="font-bebas text-4xl text-sporco">{opt === 'PARI' ? '2' : '1'}</span>
                        </button>
                    ))}
                </div>

                <button 
                   onClick={startFlip}
                   disabled={!selected}
                   className={`w-full py-4 rounded-xl font-bebas text-xl text-abisso transition-all ${selected ? 'bg-oro shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-oro/50'}`}
                >
                    LANCIA
                </button>
            </>
        )}

        {phase === 'RESULT' && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full flex flex-col items-center"
            >
                {result === 'TU' ? (
                    <div className="flex items-center space-x-2 mb-8">
                        <span className="font-bebas text-3xl text-live">INIZIA TU!</span>
                        <Mic className="w-8 h-8 text-live" />
                    </div>
                ) : (
                    <div className="flex items-center space-x-2 mb-8">
                        <span className="font-bebas text-3xl text-errore">INIZIA GENCO!</span>
                        <span className="text-3xl">😤</span>
                    </div>
                )}

                <button 
                   onClick={() => navigateTo('BATTLE_LIVE')}
                   className="w-full py-4 rounded-xl bg-gradient-to-r from-sangue to-fuoco font-bebas text-2xl text-sporco flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(196,30,58,0.4)]"
                >
                    <span>SI PARTE!</span>
                    <span>🔥</span>
                </button>
            </motion.div>
        )}
      </motion.div>
    </div>
  );
}
