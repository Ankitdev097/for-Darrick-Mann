import React from 'react';
import { clientData } from '../data';

export function Footer({ onOpenEmail }: { onOpenEmail: () => void }) {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 pt-24 pb-12 px-6 sm:px-12 text-center">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Let's set this up for you.</h2>
        <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
          Reply to my previous message, and we'll schedule a quick 9-minute call where I'll personally help you install and customize this workflow for your business at no cost.
        </p>
        <button 
          onClick={onOpenEmail}
          className="px-8 py-4 bg-white hover:bg-zinc-200 text-black font-medium rounded-full transition-all flex items-center justify-center gap-2 mx-auto"
        >
          Schedule Free Setup Call
        </button>
      </div>

      <div className="text-zinc-600 text-sm flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto pt-8 border-t border-zinc-900">
        <div>Custom crafted for {clientData.name}</div>
        <div className="mt-4 sm:mt-0">Not affiliated with Crye-Leike Elite. This is an independent proposal.</div>
      </div>
    </footer>
  );
}
