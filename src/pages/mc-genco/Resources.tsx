import { ArrowLeft, Search, BookOpen, Library, PenTool, CalendarDays, ChevronRight } from 'lucide-react';

interface ResourcesProps {
  navigateTo: (screen: string) => void;
}

export default function Resources({ navigateTo }: ResourcesProps) {
  const cards = [
    {
      id: 'glossary',
      title: 'GLOSSARIO DEL FREESTYLE',
      desc: 'Termini, slang, tecniche',
      icon: <BookOpen className="w-10 h-10 text-oro" />,
      colorClass: 'hover:border-oro hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]'
    },
    {
      id: 'history',
      title: 'STORIA DEL FREESTYLE ITALIANO',
      desc: 'Timeline completa, artisti chiave',
      icon: <Library className="w-10 h-10 text-acciaio" />,
      colorClass: 'hover:border-acciaio hover:shadow-[0_0_15px_rgba(46,74,110,0.2)]'
    },
    {
      id: 'textfx',
      title: 'TEXTFX by Lupe Fiasco',
      desc: 'Tool per rime e wordplay',
      icon: <PenTool className="w-10 h-10 text-live" />,
      colorClass: 'hover:border-live hover:shadow-[0_0_15px_rgba(57,255,20,0.2)]'
    },
    {
      id: 'contest',
      title: 'PROSSIMI CONTEST ITALIANI',
      desc: 'Calendario eventi, iscrizioni',
      icon: <CalendarDays className="w-10 h-10 text-sangue" />,
      colorClass: 'hover:border-sangue hover:shadow-[0_0_15px_rgba(196,30,58,0.2)]'
    }
  ];

  return (
    <div className="w-full h-full bg-abisso flex flex-col text-sporco relative overflow-y-auto pb-24">
      {/* Background with fine grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1A1A_1px,transparent_1px),linear-gradient(to_bottom,#1A1A1A_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none"></div>

      <header className="sticky top-0 z-50 flex items-center px-4 py-4 bg-abisso/90 backdrop-blur-md">
         <button onClick={() => navigateTo('HOME')} className="p-2 -ml-2 mr-4 hover:bg-fumoso rounded-full transition-colors">
             <ArrowLeft className="w-6 h-6 text-sporco" />
         </button>
         <h1 className="text-xl font-bebas tracking-wide text-sporco">RISORSE & STUDIO</h1>
         <button className="ml-auto p-2 -mr-2 hover:bg-fumoso rounded-full transition-colors">
             <Search className="w-6 h-6 text-sporco" />
         </button>
      </header>

      <div className="flex-1 px-4 pt-4 w-full max-w-lg mx-auto z-10 space-y-4">
          {cards.map(card => (
              <div 
                  key={card.id}
                  className={`bg-cemento border border-fumoso rounded-xl p-5 flex items-center transition-all cursor-pointer group ${card.colorClass}`}
              >
                  <div className="mr-5 transition-transform group-hover:scale-110">
                      {card.icon}
                  </div>
                  <div className="flex-1">
                      <h2 className="font-bebas text-lg tracking-wide text-sporco">{card.title}</h2>
                      <p className="font-inter text-sm text-cenere mt-1">{card.desc}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-cenere group-hover:text-sporco transition-colors" />
              </div>
          ))}
      </div>
    </div>
  );
}
