'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import WaveDivider from './WaveDivider';

const credentials = [
  'PsyD in Clinical Psychology',
  'Licensed Clinical Psychologist',
  '8+ Years of Professional Experience',
  'Specializing in CBT & Mindfulness',
];

const AboutSection = () => (
  <section id="about" className="relative bg-[#F7F4FF] py-24">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-6xl flex flex-col md:flex-row-reverse items-center gap-12 px-6"
    >
      {/* 📸 PHOTO on the RIGHT (desktop) */}
      <figure className="relative shrink-0 w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
        <Image
          src="/therapist.jpg"
          alt="Dr. Serena Blake headshot"
          fill
          priority
          className="object-cover rounded-3xl shadow-xl ring-4 ring-accent/10"
        />
      </figure>

      {/* 📝 TEXT on the LEFT */}
      <div className="space-y-6 text-left md:text-left">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
          Meet Dr. Serena Blake
        </h2>
        <div className="h-1 w-16 bg-accent rounded-full" />
        <p className="text-lg leading-relaxed text-gray-700">
          Dr. Serena Blake is a licensed clinical psychologist with over 8 years of experience, having conducted more than 500 client sessions. She specializes in providing compassionate and evidence-based care to help individuals navigate life's challenges.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          Her practice is founded on the belief that a strong therapeutic alliance is the cornerstone of meaningful change. Dr. Blake is committed to creating a safe, non-judgmental space where clients can explore their thoughts and feelings, develop coping strategies, and work towards their personal goals.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>PsyD, Clinical Psychology – Licensed in CA</li>
          <li>8 years practice | 500+ sessions</li>
        </ul>
        <p className="text-gray-600">1287 Maplewood Dr, Los Angeles CA 90026</p>
        <a
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg border border-accent px-6 py-2 text-accent hover:bg-accent hover:text-white transition"
        >
          Download CV
        </a>
      </div>
    </motion.div>
  </section>
);

export default AboutSection; 