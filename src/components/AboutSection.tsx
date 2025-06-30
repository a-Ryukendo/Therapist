'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F7F4FF]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl flex flex-col md:flex-row-reverse items-center gap-12 px-6"
      >
        {/* Portrait */}
        <figure className="relative shrink-0 w-72 md:w-96 lg:w-[28rem] h-96">
          <Image
            src="/therapist.jpg"
            alt="Dr Serena Blake portrait"
            fill
            priority
            className="object-cover rounded-3xl shadow-xl ring-4 ring-accent/10"
          />
        </figure>

        {/* Bio */}
        <div className="space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl text-gray-900">
            Meet&nbsp;Dr&nbsp;<span className="text-accent">Serena Blake</span>
          </h2>
          <div className="h-1 w-16 bg-accent rounded-full" />

          <p className="text-lg leading-relaxed text-gray-700">
            Dr.&nbsp;Serena&nbsp;Blake is a licensed clinical psychologist (PsyD) based in Los&nbsp;Angeles, CA, with
            eight years of experience and over&nbsp;500 client sessions. She blends evidence‑based approaches—like cognitive‑behavioral
            therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships,
            and heal from trauma.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Whether you meet in her Maplewood&nbsp;Drive office or connect virtually via Zoom, Dr.&nbsp;Blake is committed to creating
            a safe, supportive space for you to thrive.
          </p>

          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>PsyD, Clinical Psychology – Licensed in CA</li>
            <li>8&nbsp;years of practice • 500+ sessions</li>
            <li>In‑person Tue&nbsp;&amp;&nbsp;Thu&nbsp;10&nbsp;AM–6&nbsp;PM • Virtual Mon&nbsp;Wed&nbsp;Fri&nbsp;1&nbsp;PM–5&nbsp;PM</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
} 