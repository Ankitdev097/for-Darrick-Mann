import React from 'react';
import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export function CostComparison() {
  return (
    <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">A Full-Time Assistant Without the Payroll</h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">See how your customized AI workflow stacks up against hiring a traditional front-desk employee.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Real Employee */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8"
        >
          <div className="mb-6">
            <h3 className="text-xl font-medium text-zinc-300 mb-1">Human Receptionist</h3>
            <div className="text-3xl font-semibold text-white">$40,000+ <span className="text-lg text-zinc-500 font-normal">/year</span></div>
          </div>
          
          <ul className="space-y-4">
            {[
              "Works standard 9-to-5 hours",
              "Unavailable on weekends and holidays",
              "Takes sick days and vacations",
              "Requires training and management",
              "Can only handle one call at a time",
              "Inconsistent data entry into CRM"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-400">
                <X size={18} className="text-rose-500/70 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* AI Workflow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-zinc-900 border border-indigo-500/30 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />
          
          <div className="mb-6 relative">
            <h3 className="text-xl font-medium text-white mb-1">Custom AI Workflow</h3>
            <div className="text-3xl font-semibold text-white">Free Setup <span className="text-lg text-indigo-400 font-normal ml-2">Minimal usage costs</span></div>
          </div>
          
          <ul className="space-y-4 relative">
            {[
              "Works 24 hours a day, 365 days a year",
              "Available immediately, even at 2 AM",
              "Never takes a sick day or vacation",
              "Requires zero onboarding or management",
              "Handles unlimited simultaneous calls",
              "Perfect, instant calendar and CRM syncing"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-zinc-200">
                <Check size={18} className="text-emerald-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
