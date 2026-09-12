import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { CostComparison } from './components/CostComparison';
import { WorkflowAccess } from './components/WorkflowAccess';
import { Testimonial } from './components/Testimonial';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { EmailModal } from './components/EmailModal';
import { clientData } from './data';

export default function App() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-50 font-sans selection:bg-indigo-500/30">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 w-full z-30 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-lg font-medium tracking-tight text-white">
            {clientData.name} <span className="text-zinc-600 font-normal">| Crye-Leike Elite</span>
          </div>
          <button 
            onClick={() => setIsEmailModalOpen(true)}
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>
      </header>

      <main>
        <Hero onOpenEmail={() => setIsEmailModalOpen(true)} />
        <ProblemSolution />
        <CostComparison />
        <WorkflowAccess onOpenEmail={() => setIsEmailModalOpen(true)} />
        <Testimonial />
        <FAQ />
      </main>

      <Footer onOpenEmail={() => setIsEmailModalOpen(true)} />

      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
    </div>
  );
}
