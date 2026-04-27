import { Menu, Bell, VolumeX, Flame } from 'lucide-react';

interface HomeProps {
  navigateTo: (screen: string) => void;
}

export default function Home({ navigateTo }: HomeProps) {
  return (
    <div className="w-full h-full bg-abisso flex flex-col text-sporco relative overflow-y-auto pb-20">
      
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-abisso/80 backdrop-blur-md">
         <button className="p-2 hover:bg-fumoso rounded-full transition-colors">
             <Menu className="w-6 h-6 text-sporco" />
         </button>
         <h1 className="text-2xl font-bebas tracking-widest text-sporco">MC GENCO</h1>
         <div className="flex items-center space-x-2">
             <button className="p-2 relative hover:bg-fumoso rounded-full transition-colors">
                 <Bell className="w-6 h-6 text-sporco" />
                 <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-errore rounded-full ring-2 ring-abisso"></span>
             </button>
             <button className="p-2 hover:bg-fumoso rounded-full transition-colors">
                 <VolumeX className="w-6 h-6 text-cenere" />
             </button>
         </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col px-4 pt-4 pb-8 max-w-lg mx-auto w-full relative z-10">
          
          {/* Quote */}
          <div className="w-full bg-cemento/60 border border-fumoso rounded-xl p-5 mb-8 backdrop-blur-sm">
             <p className="font-playfair italic text-cenere text-base leading-relaxed text-center">
               "Io non mi sento italiano, ma per fortuna lo sono"
             </p>
             <p className="font-inter font-medium text-oro text-xs text-center mt-3">
                — Giorgio Gaber
             </p>
          </div>

          {/* Genco Animated Placeholder */}
          <div className="w-full aspect-[4/5] max-w-[280px] mx-auto bg-cemento border border-fumoso rounded-2xl mb-10 flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_4px_30px_rgba(196,30,58,0.15)]">
             <div className="absolute inset-0 bg-gradient-to-t from-sangue/20 to-transparent mix-blend-overlay"></div>
             <div className="text-cenere font-inter text-sm mb-2 z-10">[GENCO ANIMATO]</div>
             <p className="text-xs text-cenere/60 text-center px-4 z-10">Tap per reagire</p>
          </div>

          {/* 2x2 Grid for Modes */}
          <div className="grid grid-cols-2 gap-3 mb-8">
              {/* Battle Genco */}
              <button 
                  onClick={() => navigateTo('BATTLE_SETUP')}
                  className="bg-cemento border border-fumoso border-l-4 border-l-sangue rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:bg-cemento/80 transition-colors group"
              >
                  <span className="text-3xl">⚔️</span>
                  <div className="text-center">
                      <h3 className="font-bebas text-lg tracking-wide group-hover:text-sangue transition-colors">BATTLE</h3>
                      <p className="font-inter text-xs text-sangue">Genco</p>
                  </div>
              </button>

              {/* Coach Tom Hagen */}
              <button 
                  onClick={() => navigateTo('TRAINING')}
                  className="bg-cemento border border-fumoso border-l-4 border-l-acciaio rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:bg-cemento/80 transition-colors group"
              >
                  <span className="text-3xl">🎓</span>
                  <div className="text-center">
                      <h3 className="font-bebas text-lg tracking-wide group-hover:text-acciaio transition-colors">COACH</h3>
                      <p className="font-inter text-xs text-acciaio">Tom Hagen</p>
                  </div>
              </button>

              {/* Battle Malgari */}
              <button 
                  onClick={() => navigateTo('BATTLE_SETUP')}
                  className="bg-cemento border border-fumoso border-l-4 border-l-malgari-viola rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:bg-cemento/80 transition-colors group"
              >
                  <span className="text-2xl">♀️⚔️</span>
                  <div className="text-center">
                      <h3 className="font-bebas text-lg tracking-wide group-hover:text-malgari-viola transition-colors">BATTLE</h3>
                      <p className="font-inter text-xs text-malgari-viola">Màlgari</p>
                  </div>
              </button>

              {/* Coach Malgari */}
              <button 
                  onClick={() => navigateTo('TRAINING')}
                  className="bg-cemento border border-fumoso border-l-4 border-l-malgari-magenta rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:bg-cemento/80 transition-colors group"
              >
                  <span className="text-2xl">♀️🎓</span>
                  <div className="text-center">
                      <h3 className="font-bebas text-lg tracking-wide group-hover:text-malgari-magenta transition-colors">COACH</h3>
                      <p className="font-inter text-xs text-malgari-magenta">Màlgari</p>
                  </div>
              </button>
          </div>

          {/* Streak Banner */}
          <div className="w-full bg-gradient-to-r from-cemento to-fuoco/20 border border-fuoco/50 rounded-xl p-4 flex items-center justify-between shadow-[0_0_15px_rgba(255,107,53,0.1)]">
              <div className="flex items-center space-x-3">
                  <Flame className="w-6 h-6 text-fuoco animate-pulse" />
                  <span className="font-inter font-medium text-sm">La tua streak: 3 vittorie!</span>
              </div>
              <button className="font-inter font-semibold text-xs text-oro hover:underline">
                  CONTINUA A BATTERE
              </button>
          </div>
      </div>
    </div>
  );
}
