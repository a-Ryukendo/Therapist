'use client';

import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="relative w-full max-w-7xl px-6 overflow-hidden rounded-2xl">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
          Therapy with <br />
          <span className="text-accent">Dr. Serena Blake, PsyD</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Evidence-based, compassionate care in Los Angeles & online.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-lg border border-white/50 bg-white/40 backdrop-blur-sm px-8 py-3 text-[#1e4674] font-semibold shadow hover:bg-white/60 hover:border-white transition"
        >
          Schedule a Consultation
        </a>
      </div>
      <ChevronDownIcon className="absolute bottom-10 z-10 w-8 h-8 text-white/70 animate-bounce" />
    </section>
  );
} 