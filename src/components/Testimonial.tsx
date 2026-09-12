import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonial() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-4xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <Quote size={40} className="text-zinc-700 mb-8" />
        
        <h3 className="text-2xl sm:text-3xl text-zinc-300 font-medium leading-relaxed mb-8">
          "I used to miss 3-4 calls a week while showing properties. Since implementing this exact AI receptionist workflow, every lead is qualified instantly, and my calendar fills up automatically. It's literally like having a full-time assistant without the payroll."
        </h3>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 font-medium border border-zinc-700">
            MT
          </div>
          <div className="text-left">
            <div className="text-white font-medium">Marcus T.</div>
            <div className="text-zinc-500 text-sm">Independent Realtor</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
