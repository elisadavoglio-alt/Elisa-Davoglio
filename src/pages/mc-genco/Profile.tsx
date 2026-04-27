import { ArrowLeft, Settings, MapPin } from 'lucide-react';

interface ProfileProps {
  navigateTo: (screen: string) => void;
}

export default function Profile({ navigateTo }: ProfileProps) {
  return (
    <div className="w-full h-full bg-abisso flex flex-col text-sporco overflow-y-auto pb-24 relative">
       {/* Subtly patterned background */}
       <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMGEwYTBhIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMODggWk04IDBMMCA4IFoiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-50"></div>

       <header className="sticky top-0 z-50 flex items-center px-4 py-4 bg-abisso/90 backdrop-blur-md">
         <button onClick={() => navigateTo('HOME')} className="p-2 -ml-2 mr-4 hover:bg-fumoso rounded-full transition-colors">
             <ArrowLeft className="w-6 h-6 text-sporco" />
         </button>
         <h1 className="text-xl font-bebas tracking-wide text-sporco">IL TUO PROFILO</h1>
         <button className="ml-auto p-2 -mr-2 hover:bg-fumoso rounded-full transition-colors">
             <Settings className="w-6 h-6 text-sporco" />
         </button>
      </header>

      <div className="flex-1 px-4 pt-4 w-full max-w-lg mx-auto z-10 space-y-8">
          
          {/* Avatar and Basic Info */}
          <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-oro bg-cemento flex items-center justify-center mb-4 overflow-hidden relative shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <span className="text-cenere text-sm">TUA FOTO</span>
              </div>
              <h2 className="font-bebas text-3xl tracking-wide mb-1">MC_TuoNome</h2>
              <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm">🏆</span>
                  <span className="font-inter font-semibold text-sm">Livello 12 - <span className="text-oro">CONTENDER</span></span>
              </div>
              <div className="flex items-center space-x-1 text-cenere">
                  <MapPin className="w-3 h-3" />
                  <span className="font-inter text-xs">Milano</span>
              </div>
          </div>

          {/* XP Bar */}
          <div className="bg-cemento rounded-xl border border-fumoso p-5">
              <div className="flex items-end justify-between mb-2">
                  <h3 className="font-bebas text-lg">LIVELLO 12 - CONTENDER</h3>
                  <span className="font-inter text-xs text-oro">72%</span>
              </div>
              <div className="w-full h-3 bg-fumoso rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-gradient-to-r from-oro to-successo" style={{ width: '72%' }}></div>
              </div>
              <div className="text-right">
                  <span className="font-inter text-xs text-cenere">4,250 / 6,000 XP</span>
              </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-3 bg-cemento rounded-xl border border-fumoso p-4">
              <div className="flex flex-col items-center">
                  <span className="font-bebas text-3xl">42</span>
                  <span className="font-inter text-xs text-cenere">Battles</span>
              </div>
              <div className="flex flex-col items-center border-x border-fumoso">
                  <span className="font-bebas text-3xl">28</span>
                  <span className="font-inter text-xs text-cenere">Vittorie</span>
              </div>
              <div className="flex flex-col items-center">
                  <span className="font-bebas text-3xl text-successo">66%</span>
                  <span className="font-inter text-xs text-cenere">Win Rate</span>
              </div>
          </div>

          {/* Bio */}
          <div>
              <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bebas text-sm text-cenere">📝 LA TUA STORIA:</h3>
                  <button className="font-inter font-semibold text-xs text-oro hover:underline">MODIFICA</button>
              </div>
              <div className="bg-cemento rounded-xl border border-fumoso p-4">
                  <p className="font-inter text-sm text-sporco leading-relaxed">
                      "Ho iniziato ascoltando Fabri Fibra, poi Marracash mi ha aperto un mondo..."
                  </p>
              </div>
          </div>

          {/* Badges */}
          <div>
              <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bebas text-sm text-cenere">🏅 BADGE SBLOCCATI (8/24)</h3>
                  <button className="font-inter font-semibold text-xs text-oro hover:underline">VEDI TUTTI</button>
              </div>
              <div className="grid grid-cols-6 gap-2">
                  {/* Unlocked */}
                  {['🔥', '⚡', '🎯', '📚', '🗣️', '🌙', '👑', '🎵'].map((badge, i) => (
                      <div key={i} className="aspect-square bg-cemento rounded-lg border border-oro/30 flex items-center justify-center text-2xl drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                          {badge}
                      </div>
                  ))}
                  {/* Locked */}
                  {[1,2,3,4].map(i => (
                      <div key={`l-${i}`} className="aspect-square bg-fumoso/30 rounded-lg flex items-center justify-center relative grayscale opacity-50">
                          <span className="text-2xl blur-[2px]">🌟</span>
                          <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs">🔒</span>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Battle History */}
          <div>
              <h3 className="font-bebas text-sm text-cenere mb-3">📜 CRONOLOGIA BATTLE:</h3>
              <div className="space-y-2">
                  <div className="bg-cemento rounded-lg border border-fumoso p-3 flex justify-between items-center">
                      <span className="font-inter text-sm">vs <span className="font-semibold text-oro">Genco</span> (Hardcore)</span>
                      <span className="font-inter font-bold text-xs text-errore">Persa</span>
                  </div>
                  <div className="bg-cemento rounded-lg border border-fumoso p-3 flex justify-between items-center">
                      <span className="font-inter text-sm">vs <span className="font-semibold text-oro">Màlgari</span> (Standard)</span>
                      <span className="font-inter font-bold text-xs text-successo">Vinta</span>
                  </div>
                  <div className="bg-cemento rounded-lg border border-fumoso p-3 flex justify-between items-center">
                      <span className="font-inter text-sm">vs <span className="font-semibold text-oro">MC_Shadow</span> (P2P)</span>
                      <span className="font-inter font-bold text-xs text-successo">Vinta</span>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}
