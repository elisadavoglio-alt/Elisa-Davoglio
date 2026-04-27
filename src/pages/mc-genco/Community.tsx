import { ArrowLeft, Bell, Trophy, Swords, Calendar, Eye, Activity, Flame } from 'lucide-react';

interface CommunityProps {
  navigateTo: (screen: string) => void;
}

export default function Community({ navigateTo }: CommunityProps) {
  return (
    <div className="w-full h-full bg-abisso flex flex-col text-sporco overflow-y-auto pb-24 relative">
       
      <header className="sticky top-0 z-50 flex items-center px-4 py-4 bg-abisso/90 backdrop-blur-md">
         <button onClick={() => navigateTo('HOME')} className="p-2 -ml-2 mr-4 hover:bg-fumoso rounded-full transition-colors">
             <ArrowLeft className="w-6 h-6 text-sporco" />
         </button>
         <h1 className="text-xl font-bebas tracking-wide text-sporco">COMMUNITY</h1>
         <button className="ml-auto p-2 -mr-2 hover:bg-fumoso rounded-full transition-colors">
             <Bell className="w-6 h-6 text-cenere" />
         </button>
      </header>

      <div className="flex-1 px-4 w-full max-w-lg mx-auto z-10 space-y-6">
          
          {/* Tabs */}
          <div className="flex space-x-2 border-b border-fumoso pb-2">
              <button className="flex-1 pb-3 relative">
                  <div className="flex flex-col items-center space-y-1">
                      <Trophy className="w-5 h-5 text-oro" />
                      <span className="font-bebas text-sm">CLASSIFICHE</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-oro"></div>
              </button>
              <button className="flex-1 pb-3 relative">
                  <div className="flex flex-col items-center space-y-1">
                      <Swords className="w-5 h-5 text-cenere" />
                      <span className="font-bebas text-sm text-cenere">BATTLE LIVE</span>
                  </div>
              </button>
              <button className="flex-1 pb-3 relative">
                  <div className="flex flex-col items-center space-y-1">
                      <Calendar className="w-5 h-5 text-cenere" />
                      <span className="font-bebas text-sm text-cenere">EVENTI</span>
                  </div>
              </button>
          </div>

          {/* In Questo Momento */}
          <div>
              <h3 className="font-bebas text-sm text-cenere mb-3 flex items-center">
                 <Flame className="w-4 h-4 mr-2 text-fuoco" /> IN QUESTO MOMENTO:
              </h3>
              <div className="bg-cemento border border-live rounded-xl p-5 flex flex-col shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                  <div className="flex items-center space-x-2 mb-2">
                      <span className="w-2.5 h-2.5 bg-live rounded-full animate-pulse"></span>
                      <span className="font-bebas text-live tracking-wide">LIVE</span>
                      <span className="font-inter text-sm text-sporco ml-2">3 battle in corso</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4 text-cenere font-inter text-sm">
                      <Eye className="w-4 h-4" />
                      <span>127 spettatori online</span>
                  </div>
                  <button className="w-full py-3 rounded-lg border border-live font-inter font-semibold text-sporco hover:bg-live/10 transition-colors">
                      GUARDA ORA
                  </button>
              </div>
          </div>

          {/* Attività Recente */}
          <div>
              <h3 className="font-bebas text-sm text-cenere mb-3 flex items-center">
                 <Activity className="w-4 h-4 mr-2 text-sporco" /> ATTIVITÀ RECENTE:
              </h3>
              <div className="space-y-3">
                  <div className="bg-cemento rounded-xl p-4 flex items-start space-x-4 border border-fumoso">
                      <div className="text-2xl mt-1">🥊</div>
                      <div>
                          <p className="font-inter text-sm text-sporco">
                              <span className="text-oro font-semibold">MC_Fury</span> ha battuto <span className="text-oro font-semibold">MC_Shadow</span>
                          </p>
                          <p className="font-inter text-xs text-cenere mt-1">
                              2 min fa • Battle Hardcore
                          </p>
                      </div>
                  </div>
                  <div className="bg-cemento rounded-xl p-4 flex items-start space-x-4 border border-fumoso">
                      <div className="text-2xl mt-1">🆙</div>
                      <div>
                          <p className="font-inter text-sm text-sporco">
                              <span className="text-oro font-semibold">MC_Luna</span> è salita al Lv.15
                          </p>
                          <p className="font-inter text-xs text-cenere mt-1">
                              5 min fa
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          {/* Amici Online */}
          <div>
              <h3 className="font-bebas text-sm text-cenere mb-3 flex items-center">
                 <span className="mr-2">👥</span> I TUOI AMICI ONLINE (4)
              </h3>
              <div className="flex space-x-4 overflow-x-auto pb-4">
                  {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex flex-col items-center flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-cemento border-2 border-live flex items-center justify-center mb-2">
                              <span className="text-xs text-cenere">U{i}</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

      </div>
    </div>
  );
}
