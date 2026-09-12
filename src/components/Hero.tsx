import React from 'react';
import { clientData } from '../data';
import { PhoneCall, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero({ onOpenEmail }: { onOpenEmail: () => void }) {
  return (
    <section className="relative pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-8"
      >
        <Sparkles size={14} className="text-indigo-400" />
        <span>Custom Built for Crye-Leike Elite</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight max-w-4xl leading-tight mb-6"
      >
        {clientData.name}, stop losing motivated buyers while you're out at a showing.
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10"
      >
        I noticed your recent listing at <span className="text-zinc-200 font-medium">{clientData.listingAddress}</span>. 
        I built a custom AI Call Handling workflow specifically for your real estate business to ensure you never miss another lead when you're busy.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
      >
        <button 
          onClick={onOpenEmail}
          className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-200 text-black font-medium rounded-full transition-all flex items-center justify-center gap-2 group"
        >
          View Your Custom Workflow
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <a 
          href="#workflow" 
          className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white font-medium rounded-full transition-colors text-center"
        >
          See How It Works
        </a>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
}
