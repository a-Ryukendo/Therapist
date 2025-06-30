'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  { src:'/service1.jpg', title:'Anxiety & Stress Management', text:'Practical CBT & mindfulness tools to reduce worry and restore balance.' },
  { src:'/service2.jpg', title:'Relationship Counseling', text:'Strengthen communication and rebuild trust with evidence‑based guidance.' },
  { src:'/service3.jpg', title:'Trauma Recovery', text:'Heal from traumatic experiences in a safe, supportive environment.' },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-gradient-to-b from-[#FFF9FF] to-[#F0F7FF]">
    <div className="mx-auto max-w-6xl px-6 text-center">
      <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Areas of Focus</h2>
      <p className="mt-2 text-gray-600">Explore how therapy can support your specific needs</p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 grid gap-8 md:grid-cols-3"
      >
        {services.map(({ src, title, text }) => (
          <div key={title} className="group rounded-xl bg-white shadow-md hover:shadow-lg transition overflow-hidden">
            {/* IMAGE wrapper with Next 13+ fill syntax */}
            <div className="relative w-full h-56">
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover transform group-hover:scale-105 transition"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>

            <div className="p-6 text-left space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection; 