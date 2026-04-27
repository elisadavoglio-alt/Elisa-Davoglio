import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

interface ContactProps {
  setActivePage?: (page: string) => void;
  key?: string;
}

export function Contact({ setActivePage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    privacyAccepted: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    // @ts-ignore
    const checked = e.target.checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      alert('Please accept the Privacy Policy to proceed.');
      return;
    }
    
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        privacyAccepted: false
      });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-32 pb-20 px-8 lg:px-20 relative overflow-hidden"
    >
      {/* Animated fluid text background */}
      <motion.div 
        animate={{ x: [0, -1000], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center whitespace-nowrap text-[25vw] font-serif font-bold pointer-events-none text-natural-dark z-0"
      >
        COMMUNICATION IS AN ACT OF ARCHITECTURE
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 1 }}
            className="w-16 h-1 bg-natural-gold mb-8"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl sm:text-8xl text-natural-dark leading-[1] uppercase tracking-tighter flex flex-col"
          >
            <span className="opacity-90 leading-none">Get</span>
            <div className="flex items-baseline flex-wrap text-accent leading-none mt-2">
              <span className="inline-block -translate-y-2 opacity-80 -ml-[0.02em]">I</span>
              <span className="inline-block rotate-3 -ml-[0.02em]">n</span>
              <span className="inline-block ml-4 text-natural-dark">T</span>
              <span className="inline-block scale-y-[1.15] origin-bottom font-medium -ml-[0.02em] text-natural-dark">O</span>
              <span className="inline-block text-[0.8em] -translate-y-1 text-natural-dark">U</span>
              <span className="inline-block -rotate-6 font-light italic -ml-[0.02em] -mr-[0.02em] text-natural-dark">C</span>
              <span className="text-natural-dark">H</span>
            </div>
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg text-zinc-600 mb-16 max-w-2xl font-serif italic"
        >
          For project inquiries, consulting engagements, or literary collaborations, please use the form below. I typically respond within 48 hours.
        </motion.p>

        <motion.form 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
              }
            }
          }}
          onSubmit={handleSubmit} 
          className="space-y-8 relative"
        >
          {/* Decorative geometric detail */}
          <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none hidden md:block">
            <svg width="300" height="300" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
              <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-natural-border px-0 py-3 text-natural-dark focus:outline-none focus:border-natural-gold transition-colors placeholder:text-zinc-300"
                placeholder="John Doe"
              />
            </motion.div>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="flex flex-col gap-2"
            >
              <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-natural-border px-0 py-3 text-natural-dark focus:outline-none focus:border-natural-gold transition-colors placeholder:text-zinc-300"
                placeholder="john@example.com"
              />
            </motion.div>
          </div>
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="flex flex-col gap-2"
          >
            <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-natural-border px-0 py-3 text-natural-dark focus:outline-none focus:border-natural-gold transition-colors placeholder:text-zinc-300"
              placeholder="How can I help you?"
            />
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="flex flex-col gap-2"
          >
            <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-natural-border px-0 py-3 text-natural-dark focus:outline-none focus:border-natural-gold transition-colors placeholder:text-zinc-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="flex items-start gap-4 pt-4"
          >
            <input
              type="checkbox"
              id="privacyAccepted"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              className="mt-1 flex-shrink-0 w-4 h-4 text-natural-gold bg-natural-bg border-natural-border rounded focus:ring-natural-gold focus:ring-2"
            />
            <label htmlFor="privacyAccepted" className="text-sm text-zinc-500">
              I have read and consent to the processing of my personal data in accordance with the{' '}
              <button
                type="button"
                onClick={() => setActivePage?.('privacy')}
                className="underline hover:text-natural-dark"
              >
                Privacy Policy
              </button>
              {' '}to handle my inquiry.
            </label>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="pt-8"
          >
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group relative inline-flex items-center gap-4 bg-natural-dark text-natural-bg px-8 py-4 transition-all duration-300 hover:bg-natural-gold disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium">
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
              </span>
              <Send className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
}
