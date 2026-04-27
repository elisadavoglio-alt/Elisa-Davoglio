import React from 'react';
import { motion } from 'motion/react';

export function CookiePolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-32 pb-20 px-8 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="w-16 h-1 bg-natural-gold mb-8"
        />
        
        <h1 className="font-serif text-5xl sm:text-7xl text-natural-dark mb-10 leading-[1.1]">
          Cookie Policy
        </h1>
        
        <div className="prose prose-zinc max-w-none font-serif text-lg text-zinc-700 space-y-6">
          <p>
            Effective Date: {new Date().getFullYear()}
          </p>
          <p>
            This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website.
          </p>
          
          <h2 className="text-2xl text-natural-dark mt-10 mb-4 font-bold">1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-2xl text-natural-dark mt-10 mb-4 font-bold">2. Why do we use cookies?</h2>
          <p>
            We use essential cookies that are necessary for the website to function properly. Currently, our site is designed to be minimal and does not use aggressive tracking, advertising, or third-party marketing cookies.
          </p>

          <h2 className="text-2xl text-natural-dark mt-10 mb-4 font-bold">3. How can you control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
