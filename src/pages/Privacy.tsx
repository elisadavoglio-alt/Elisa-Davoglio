import React from 'react';
import { motion } from 'motion/react';

export function Privacy() {
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
          Privacy Policy
        </h1>
        
        <div className="prose prose-zinc max-w-none font-serif text-lg text-zinc-700 space-y-6">
          <p>
            Effective Date: {new Date().getFullYear()}
          </p>
          <p>
            This Privacy Policy describes how we collect, use, and protect your personal information when you use our website and contact form.
          </p>
          
          <h2 className="text-2xl text-natural-dark mt-10 mb-4 font-bold">1. Information We Collect</h2>
          <p>
            When you use our contact form, we collect the following personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your full name</li>
            <li>Your email address</li>
            <li>Subject of your inquiry</li>
            <li>Any information you provide in the message field</li>
          </ul>

          <h2 className="text-2xl text-natural-dark mt-10 mb-4 font-bold">2. How We Use Your Information</h2>
          <p>
            We use the information we collect solely for the purpose of responding to your inquiries, providing the requested consulting services, and maintaining professional communication. We do not sell or share your personal data with third parties for marketing purposes.
          </p>

          <h2 className="text-2xl text-natural-dark mt-10 mb-4 font-bold">3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration.
          </p>

          <h2 className="text-2xl text-natural-dark mt-10 mb-4 font-bold">4. Your Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you, to request corrections, or to ask us to delete your data. To exercise these rights, please contact us using the information provided on our website.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
