import React from 'react';
import { motion } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      question: "Do people actually trust enough to talk to an AI?",
      answer: "Yes. Modern conversational AI voices are incredibly realistic, featuring natural pauses, breathing, and seamless conversational flow. Most callers don't even realize they aren't speaking to a human. Ultimately, buyers and sellers just appreciate getting an instant, helpful response instead of hitting a voicemail."
    },
    {
      question: "Will the AI understand real estate terminology?",
      answer: "Absolutely. The workflow is programmed specifically for real estate. It understands inquiries about listings, pre-approvals, showings, seller timelines, and general market questions specific to your area."
    },
    {
      question: "What if a caller asks a highly complex or unusual question?",
      answer: "The AI is trained to handle standard qualifications and booking. If it encounters a complex issue or an emotional client, it is programmed to politely explain it will take a detailed message and instantly notify you with a summary so you can follow up personally."
    },
    {
      question: "Why are you giving this to me for free?",
      answer: "I build these workflows to demonstrate immediate, undeniable value. I'll help you set it up for free so you can see exactly how much time and money it saves you. If you love it and want more advanced automations later, we can talk then. No pressure."
    }
  ];

  return (
    <section className="py-24 px-6 sm:px-12 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold text-white mb-4">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="border-b border-zinc-800 pb-8"
          >
            <h3 className="text-lg font-medium text-white mb-3">{faq.question}</h3>
            <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
