'use client';

import { motion } from 'framer-motion';

const FeesSection = () => (
  <section id="fees" className="py-24 bg-white">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-6 text-center"
    >
      <h2 className="font-heading text-3xl md:text-4xl text-gray-900">Fees</h2>
      <p className="mt-4 text-lg text-gray-700">
        Individual therapy sessions are ₹2,000 (45 minutes), conducted via secure video.
      </p>
      <p className="mt-2 text-gray-600 text-sm">
        Reduced fee slots may be available based on financial need. Please inquire.
      </p>
    </motion.div>
  </section>
);

export default FeesSection; 