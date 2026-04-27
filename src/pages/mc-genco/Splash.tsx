import { motion } from 'motion/react';
import { useEffect } from 'react';

interface SplashProps {
  onComplete: () => void;
}

export default function Splash({ onComplete }: SplashProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-abisso relative overflow-hidden">
      {/* Background noise and setup */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col items-center z-10"
      >
        {/* LOGO */}
        <div className="relative">
          <motion.h1 
             className="text-6xl font-bebas text-sporco tracking-wider"
          >
            MC GENCO
          </motion.h1>
          <motion.div 
             className="absolute inset-0 bg-sangue blur-2xl -z-10 rounded-full"
             animate={{ opacity: [0.2, 0.5, 0.2] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="mt-12 text-center max-w-xs z-10"
      >
        <p className="font-playfair italic text-cenere text-lg">
          "La poesia è un atto di pace"
        </p>
        <p className="font-inter font-medium text-oro text-sm mt-3">
          — Pablo Neruda
        </p>
      </motion.div>

      {/* Loading Bar */}
      <div className="absolute bottom-12 w-[60%] max-w-sm h-0.5 bg-fumoso rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-sangue to-oro"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        ></motion.div>
      </div>
    </div>
  );
}
