import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, MapPin, Eye, EyeOff } from 'lucide-react';

interface AuthProps {
  onComplete: () => void;
}

export default function Auth({ onComplete }: AuthProps) {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full bg-abisso flex flex-col overflow-y-auto text-sporco relative">
       {/* Background Noise effect */}
       <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

       <div className="flex-1 flex flex-col p-6 items-center justify-center max-w-md mx-auto w-full z-10 pt-12 pb-12">
            
            {/* Header Content */}
            {!isLogin ? (
                <div className="w-full mb-8">
                     <h1 className="text-2xl font-bebas tracking-wide mb-2">CREA IL TUO PROFILO MC</h1>
                </div>
            ) : (
                <div className="w-full flex flex-col items-center mb-12">
                    <h1 className="text-5xl font-bebas tracking-widest mb-6">MC GENCO</h1>
                    <div className="text-center">
                        <p className="font-playfair italic text-cenere">"La parola è l'arma più potente"</p>
                        <p className="font-inter text-sm text-oro mt-2">— Socrate</p>
                    </div>
                </div>
            )}

            <div className="w-full space-y-4">
                {!isLogin && (
                    <>
                        <div className="flex justify-center mb-6">
                            <button className="w-24 h-24 rounded-full border-2 border-dashed border-fumoso flex items-center justify-center hover:border-sangue transition-colors group bg-cemento">
                                <span className="text-3xl text-cenere group-hover:text-sangue">+</span>
                            </button>
                        </div>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cenere group-focus-within:text-sangue transition-colors" />
                            <input 
                               type="text" 
                               placeholder="Nome MC (es. MC_Fury)"
                               className="w-full bg-cemento border border-fumoso rounded-xl py-3 pl-12 pr-4 text-sporco focus:outline-none focus:border-sangue focus:ring-1 focus:ring-sangue/50 transition-all font-inter placeholder:text-cenere"
                            />
                        </div>
                    </>
                )}

                <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cenere group-focus-within:text-sangue transition-colors" />
                    <input 
                        type="email" 
                        placeholder="Email"
                        className="w-full bg-cemento border border-fumoso rounded-xl py-3 pl-12 pr-4 text-sporco focus:outline-none focus:border-sangue focus:ring-1 focus:ring-sangue/50 transition-all font-inter placeholder:text-cenere"
                    />
                </div>

                <div>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cenere group-focus-within:text-sangue transition-colors" />
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder={isLogin ? "Password" : "Password (min 8 car.)"}
                            className="w-full bg-cemento border border-fumoso rounded-xl py-3 pl-12 pr-12 text-sporco focus:outline-none focus:border-sangue focus:ring-1 focus:ring-sangue/50 transition-all font-inter placeholder:text-cenere"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-cenere hover:text-sporco transition-colors"
                        >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                    </div>
                    {!isLogin && (
                        <div className="mt-2 h-1 w-full bg-fumoso rounded-full overflow-hidden">
                            <div className="w-1/2 h-full bg-fuoco"></div>
                        </div>
                    )}
                </div>

                {!isLogin && (
                    <>
                        <div className="relative group">
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cenere group-focus-within:text-sangue transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Città (opzionale)"
                                className="w-full bg-cemento border border-fumoso rounded-xl py-3 pl-12 pr-4 text-sporco focus:outline-none focus:border-sangue focus:ring-1 focus:ring-sangue/50 transition-all font-inter placeholder:text-cenere"
                            />
                        </div>
                        <div className="relative group">
                            <textarea 
                                placeholder="Raccontaci di te... (Il tuo stile, ispirazioni)"
                                rows={3}
                                className="w-full bg-cemento border border-fumoso rounded-xl py-3 px-4 text-sporco focus:outline-none focus:border-sangue focus:ring-1 focus:ring-sangue/50 transition-all font-inter placeholder:text-cenere resize-none"
                            />
                        </div>
                        <label className="flex items-start space-x-3 cursor-pointer">
                            <div className="w-5 h-5 mt-0.5 rounded border border-fumoso flex items-center justify-center">
                                {/* Checkmark logic goes here */}
                            </div>
                            <span className="font-inter text-sm text-cenere leading-tight">Accetto Termini e Privacy</span>
                        </label>
                    </>
                )}

                {isLogin && (
                    <div className="flex justify-end">
                        <button className="text-sm font-inter text-cenere hover:text-sporco hover:underline">
                            Password dimenticata?
                        </button>
                    </div>
                )}
            </div>

            <div className="w-full mt-8 space-y-6">
                <button 
                   onClick={onComplete}
                   className="w-full py-4 rounded-xl font-inter font-semibold bg-gradient-to-r from-sangue to-fuoco hover:opacity-90 transition-opacity text-sporco shadow-[0_4px_15px_rgba(196,30,58,0.3)] flex items-center justify-center space-x-2"
                >
                    {isLogin ? <span>ENTRA</span> : <span>CREA IL TUO MC 🎤</span>}
                </button>

                {isLogin && (
                    <div className="w-full max-w-sm mx-auto">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="flex-1 h-px bg-fumoso"></div>
                            <span className="font-inter text-cenere text-sm">o</span>
                            <div className="flex-1 h-px bg-fumoso"></div>
                        </div>
                        <div className="space-y-3">
                            <button className="w-full py-3 rounded-xl border border-fumoso bg-cemento font-inter font-medium flex items-center justify-center space-x-3 hover:bg-fumoso/50 transition-colors">
                                <span>G</span>
                                <span>Continua con Google</span>
                            </button>
                            <button className="w-full py-3 rounded-xl border border-fumoso bg-cemento font-inter font-medium flex items-center justify-center space-x-3 hover:bg-fumoso/50 transition-colors">
                                <span>🍎</span>
                                <span>Continua con Apple</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 text-center">
                <button 
                   onClick={() => setIsLogin(!isLogin)}
                   className="font-inter text-cenere text-sm hover:underline"
                >
                    {isLogin ? (
                        <>Non hai un account? <span className="text-oro font-semibold">REGISTRATI</span></>
                    ) : (
                        <>Hai già un account? <span className="text-oro font-semibold">ACCEDI</span></>
                    )}
                </button>
            </div>

       </div>
    </div>
  );
}
