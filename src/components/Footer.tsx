import { InstagramIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-[#FAF9FF] border-t border-gray-200">
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Left: Logo + tagline */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold text-gray-900">Dr. Serena Blake, PsyD</h3>
        <p className="text-sm text-gray-500">Licensed Clinical Psychologist</p>
      </div>

      {/* Center: navigation links (hide on mobile) */}
      <nav className="hidden md:flex gap-6 text-sm text-gray-600">
        <a href="#home" className="hover:text-accent">Home</a>
        <a href="#about" className="hover:text-accent">About</a>
        <a href="#services" className="hover:text-accent">Services</a>
        <a href="#testimonials" className="hover:text-accent">Testimonials</a>
        <a href="#contact" className="hover:text-accent">Contact</a>
      </nav>

      {/* Right: Social links */}
      <div className="flex gap-4">
        <Link href="https://instagram.com" target="_blank" className="text-accent hover:opacity-80">
          <InstagramIcon className="w-5 h-5" />
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="text-accent hover:opacity-80">
          <LinkedinIcon className="w-5 h-5" />
        </Link>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-100">
      © {new Date().getFullYear()} Dr. Serena Blake, PsyD · All rights reserved. <br />
      Website built for internship assignment.
    </div>
  </footer>
);

export default Footer; 