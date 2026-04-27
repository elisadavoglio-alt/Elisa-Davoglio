import { motion } from 'motion/react';
import { Home, RefreshCw, Share2, Star, Trophy, Flame, Target } from 'lucide-react';

interface BattleResultProps {
  navigateTo: (screen: string) => void;
}

export default function BattleResult({ navigateTo }: BattleResultProps) {
  const isVictory = true; // Toggle to see different states

  return (
    <div className="w-full h-full bg-abisso flex flex-col text-sporco overflow-y-auto relative pb-10">
       
       {/* Background Effects */}
       {isVictory && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
             <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full aspect-square bg-oro/20 blur-[100px] rounded-full"></div>
             {/* Fake particles can be added here */}
          </div>
       )}

       <div className="flex-1 flex flex-col items-center pt-12 px-4 z-10 w-full max-w-md mx-auto">
           
           {/* Header Announcement */}
           <motion.div 
               initial={{ scale: 0.5, opacity: 0 }}
               animate={{ scale: 1, opacity: 1, y: [0, -10, 0] }}
               transition={{ duration: 0.5, type: 'spring' }}
               className="mb-8 w-full flex flex-col items-center"
           >
               <div className="w-full flex items-center justify-center space-x-4">
                   <div className="h-px flex-1 bg-fumoso"></div>
                   <h1 className={`font-bebas text-5xl tracking-widest ${isVictory ? 'text-oro' : 'text-errore'}`}>
                       {isVictory ? '🎉 VITTORIA! 🎉' : '😭 SCONFITTA'}
                   </h1>
                   <div className="h-px flex-1 bg-fumoso"></div>
               </div>
           </motion.div>

           {/* Winner Avatar */}
           <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="flex flex-col items-center mb-8 relative"
           >
               {isVictory && (
                   <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="absolute -top-8"
                   >
                       <span className="text-4xl">👑</span>
                   </motion.div>
               )}
               <div className={`w-32 h-40 rounded-2xl flex items-center justify-center border-4 ${isVictory ? 'border-oro shadow-[0_0_30px_rgba(212,175,55,0.4)]' : 'border-errore'}`}>
                   <span className="text-cenere">[{isVictory ? 'TUO AVATAR' : 'GENCO'}]</span>
               </div>
               
               <div className="mt-6 mb-2">
                   <span className="font-bebas text-5xl text-sporco tracking-widest">{isVictory ? '2 - 1' : '1 - 2'}</span>
               </div>
           </motion.div>

           {/* Rewards Box */}
           <motion.div 
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.5 }}
               className={`w-full bg-cemento rounded-xl border p-4 mb-4 ${isVictory ? 'border-oro' : 'border-fumoso'}`}
           >
               <h3 className="font-bebas text-sm text-sporco tracking-wide mb-3 flex items-center">
                   <span className="mr-2">📈</span> GUADAGNI
               </h3>
               
               {isVictory ? (
                   <div className="space-y-3">
                       <div className="flex items-center justify-between font-inter text-sm">
                           <span className="text-sporco">+150 XP</span>
                           <Star className="w-4 h-4 text-oro fill-oro" />
                       </div>
                       <div className="flex items-center justify-between font-inter text-sm">
                           <span className="text-sporco">+25 Punti Classifica</span>
                           <Trophy className="w-4 h-4 text-oro" />
                       </div>
                       <div className="flex items-center justify-between font-inter text-sm">
                           <span className="text-sporco">Streak: 3 vittorie</span>
                           <Flame className="w-4 h-4 text-fuoco animate-pulse" />
                       </div>
                       <div className="flex items-center justify-between font-inter text-sm">
                           <span className="text-successo font-medium">Nuovo Badge! "First Blood"</span>
                           <Target className="w-4 h-4 text-successo" />
                       </div>
                   </div>
               ) : (
                   <div className="space-y-3 text-center py-2">
                       <div className="flex items-center justify-center space-x-2 font-inter text-sm mb-4">
                           <span className="text-sporco">+15 XP</span>
                           <Star className="w-4 h-4 text-oro fill-oro" />
                       </div>
                       <p className="font-inter text-sm text-cenere italic px-4">
                           "Non mollare, riprova! Il flow si affina con la pratica."
                       </p>
                   </div>
               )}
           </motion.div>

           {/* Stats Box */}
           <motion.div 
               initial={{ x: 20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.7 }}
               className="w-full bg-cemento rounded-xl border border-fumoso p-4 mb-8"
           >
               <h3 className="font-bebas text-sm text-sporco tracking-wide mb-4 flex items-center">
                   <span className="mr-2">📊</span> STATISTICHE BATTLE
               </h3>
               <div className="space-y-3">
                   {[
                       { label: 'Flow', score: 4 },
                       { label: 'Rime', score: 5 },
                       { label: 'Punchline', score: 3 },
                       { label: 'Timing', score: 4 }
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
           </motion.div>

           {/* Action Buttons */}
           <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.9 }}
               className="w-full flex space-x-3"
           >
               <button 
                  onClick={() => navigateTo('BATTLE_SETUP')}
                  className="flex-[2] bg-sangue hover:bg-sangue/90 text-sporco font-inter font-semibold py-4 rounded-xl flex items-center justify-center space-x-2 transition-transform hover:scale-[1.02]"
               >
                   <RefreshCw className="w-5 h-5" />
                   <span>RIVINCITA</span>
               </button>
               <button className="flex-1 bg-fumoso hover:bg-fumoso/80 text-sporco font-inter font-semibold py-4 rounded-xl flex items-center justify-center transition-transform hover:scale-[1.02]">
                   <Share2 className="w-5 h-5" />
               </button>
               <button 
                  onClick={() => navigateTo('HOME')}
                  className="flex-1 bg-cemento border border-fumoso hover:bg-fumoso/50 text-sporco font-inter font-semibold py-4 rounded-xl flex items-center justify-center transition-transform hover:scale-[1.02]"
               >
                   <Home className="w-5 h-5" />
               </button>
           </motion.div>

       </div>
    </div>
  );
}
