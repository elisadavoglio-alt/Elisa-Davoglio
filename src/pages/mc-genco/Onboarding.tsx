import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'battle',
      title: 'SPUTA LE TUE BARRE CONTRO LA PIÙ TAGLIENTE AI DEL RAP GAME.',
      description: 'Sfida l\'intelligenza artificiale più scaltra e liricamente abile mai creata. Ogni battle è una prova per le tue skill.',
      color: 'from-sangue/40 to-abisso'
    },
    {
      id: 'training',
      title: 'IMPARA DAI MIGLIORI. ALLENATI CON TOM HAGEN, IL COACH CHE TI FARÀ CRESCERE BARRA DOPO BARRA.',
      description: 'Sviluppa le tue abilità liriche, affina il tuo flow e scopri nuove tecniche con un mentore esperto al tuo fianco.',
      color: 'from-acciaio/40 to-abisso'
    },
    {
      id: 'community',
      title: 'ENTRA NELL\'ARENA. SFIDA ALTRI MC, SCALA LE CLASSIFICHE E PARTECIPA AGLI EVENTI LIVE.',
      description: 'Non solo AI. Unisciti a una community vibrante di freestyler. Battaglie testa a testa, tornei e contest ti aspettano.',
      color: 'from-live/30 to-abisso'
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(s => s + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="w-full h-full bg-abisso flex flex-col text-sporco overflow-hidden relative">
      <div className={`absolute inset-0 bg-gradient-to-b ${slides[currentSlide].color} opacity-30 transition-colors duration-500`}></div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 z-10">
        
        {/* Placeholder for Illustration */}
        <motion.div 
            key={`img-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm aspect-square bg-cemento rounded-3xl mb-12 flex items-center justify-center border border-fumoso relative overflow-hidden"
        >
            <span className="text-cenere font-inter">Illustrazione {currentSlide + 1}</span>
        </motion.div>

        <motion.div
           key={`text-${currentSlide}`}
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="text-center w-full max-w-md space-y-4"
        >
            <h2 className="text-3xl font-bebas tracking-wide leading-tight px-4">{slides[currentSlide].title}</h2>
            <p className="font-inter text-cenere text-base leading-relaxed px-6">
                {slides[currentSlide].description}
            </p>
        </motion.div>
      </div>

      <div className="pb-12 px-6 flex flex-col items-center space-y-6 z-10 w-full max-w-md mx-auto">
        <div className="flex space-x-3">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === currentSlide ? 'bg-oro' : 'bg-fumoso'}`}
            ></div>
          ))}
        </div>

        <button 
           onClick={handleNext}
           className={`w-full py-4 rounded-xl font-inter font-semibold transition-all flex items-center justify-center space-x-2 
             ${currentSlide === slides.length - 1 
                ? 'bg-sangue hover:bg-oro text-sporco group shadow-[0_4px_15px_rgba(196,30,58,0.3)]' 
                : 'bg-cenere/20 hover:bg-cenere/40 text-sporco border border-fumoso'
             }`}
        >
          {currentSlide === slides.length - 1 ? (
             <>
                <span>INIZIAMO</span>
                <Flame className="w-5 h-5 text-oro group-hover:text-sporco" />
             </>
          ) : (
             <>
                <span>AVANTI</span>
                <ArrowRight className="w-5 h-5" />
             </>
          )}
        </button>

        {currentSlide < slides.length - 1 && (
            <button 
               onClick={onComplete}
               className="text-cenere font-inter text-sm hover:underline"
            >
                Salta Intro
            </button>
        )}
      </div>
    </div>
  );
}
