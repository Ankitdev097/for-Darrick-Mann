import React from 'react';
import { PhoneMissed, Clock, UserX, CheckCircle2, CalendarDays, Headset } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSolution() {
  const problems = [
    {
      icon: <PhoneMissed size={20} />,
      text: "Letting new leads go to voicemail while you're with clients or at a showing."
    },
    {
      icon: <Clock size={20} />,
      text: "Missing calls after hours, during dinners, or on weekends."
    },
    {
      icon: <UserX size={20} />,
      text: "Losing motivated buyers and sellers to the next agent who actually answers."
    }
  ];

  const solutions = [
    {
      icon: <Headset size={20} />,
      text: "Answers every single call instantly, 24/7, just like a real person."
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: "Qualifies buyers and sellers naturally, completely indistinguishable from a human assistant."
    },
    {
      icon: <CalendarDays size={20} />,
      text: "Books appointments and property showings straight into your calendar."
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto relative">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Before / Problem */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 lg:p-10"
        >
          <h3 className="text-sm font-semibold text-rose-400 tracking-wider uppercase mb-3">The Problem</h3>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-8">What happens when you're busy closing a deal?</h2>
          
          <ul className="space-y-6">
            {problems.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-zinc-400">
                <div className="w-10 h-10 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="pt-2 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After / Solution */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900 border border-zinc-700/50 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(79,70,229,0.1)]"
        >
          <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[80px] -z-10 rounded-full" />
          
          <h3 className="text-sm font-semibold text-indigo-400 tracking-wider uppercase mb-3">The Solution</h3>
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-8">Your dedicated 24/7 AI Receptionist</h2>
          
          <ul className="space-y-6">
            {solutions.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="pt-2 leading-relaxed font-medium">{item.text}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
