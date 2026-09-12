import React from 'react';
import { motion } from 'motion/react';
import { FolderGit2, Bot, CalendarClock, FileText, Download } from 'lucide-react';
import { clientData } from '../data';

export function WorkflowAccess({ onOpenEmail }: { onOpenEmail: () => void }) {
  const workflowLink = "https://drive.google.com/drive/folders/1eTBaFmT5UWUJq4Pgnt6yhEtCowOPek-8?usp=sharing";

  const components = [
    {
      icon: <Bot className="text-indigo-400" size={24} />,
      title: "Retell AI Configuration",
      description: "The core conversational engine programmed specifically for real estate inquiries."
    },
    {
      icon: <CalendarClock className="text-emerald-400" size={24} />,
      title: "Appointment Scheduling",
      description: "n8n workflow that automatically syncs qualified leads directly into your calendar."
    },
    {
      icon: <FileText className="text-amber-400" size={24} />,
      title: "Call Summary Extraction",
      description: "n8n workflow that immediately texts or emails you the exact details of every caller."
    },
    {
      icon: <FolderGit2 className="text-sky-400" size={24} />,
      title: "Installation Guide",
      description: "A complete checklist and setup diagram so you understand exactly how it connects."
    }
  ];

  return (
    <section id="workflow" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none rounded-3xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">What I Built Exclusively For You</h2>
          <p className="text-zinc-400 text-lg mb-12">
            I didn't just write down some ideas. I actually built the entire system. Inside your dedicated Google Drive folder, you will find the complete, ready-to-deploy AI Assistant package.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left mb-12">
            {components.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-zinc-800/40 border border-zinc-700/50 rounded-2xl p-6"
              >
                <div className="mb-4 bg-zinc-800/80 w-12 h-12 rounded-xl flex items-center justify-center border border-zinc-700/50">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={workflowLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download Workflow
            </a>
            <button 
              onClick={onOpenEmail}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-full transition-colors flex items-center justify-center border border-zinc-700"
            >
              Get Free Installation Help
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
