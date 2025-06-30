'use client';

/* ---------------------------------------------------------
   FAQSection – pastel cards with + / – toggle, Headless UI
   --------------------------------------------------------- */
import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Do you accept insurance?',
    a: 'No. However, a superbill is provided so you may submit it to your insurance provider for possible reimbursement.',
  },
  {
    q: 'Are online sessions available?',
    a: 'Yes — all sessions are held virtually via Zoom.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'A minimum 24‑hour notice is required to avoid being charged the full session fee.',
  },
];

export default function FAQSection() {
  /* track which question is open (null = all closed) */
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#1e4674] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <h3 className="text-2xl font-serif text-[#1e4674] mb-6">Therapy</h3>

        <ul className="divide-y divide-[#CBD5E1]">
          {faqs.map(({ q, a }, idx) => {
            const open = openIdx === idx;
            return (
              <li key={q} className="py-4">
                {/* Question row */}
                <button
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="w-full flex items-start gap-4 text-left group"
                >
                  {/* Chevron‑in‑circle */}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#1e4674] mt-1 transition-colors group-hover:bg-[#1e4674]/10">
                    <ChevronRightIcon
                      className={`h-4 w-4 text-[#1e4674] transition-transform duration-300 ${
                        open ? 'rotate-90' : ''
                      }`}
                    />
                  </span>
                  <span className="flex-1 font-medium text-[#1e4674]">{q}</span>
                </button>

                {/* Answer (animate show / hide) */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.p
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pl-10 pr-2 pt-2 text-gray-700 leading-relaxed"
                    >
                      {a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
} 