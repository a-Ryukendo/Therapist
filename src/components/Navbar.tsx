'use client';

import { useState, useEffect, Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const firstLinkRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );
    navigation.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 h-16 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
            <Link href="#home" className="flex-shrink-0" onClick={() => setActiveSection('home')}>
              <span className="text-xl font-semibold text-[#1e4674]">Dr. Serena Blake, PsyD</span>
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-[#1e4674] hover:text-accent"
              aria-label="Open menu"
            >
              <span>Open Menu</span>
              <Bars3Icon className="h-6 w-6" />
            </button>
        </div>
      </header>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" initialFocus={firstLinkRef} onClose={closeMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-lilac" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full flex flex-col items-center justify-center">
                    <button
                      onClick={closeMenu}
                      className="absolute top-4 right-4 flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-accent hover:text-accent/80"
                      aria-label="Close menu"
                    >
                      <span>Close Menu</span>
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                    
                    <nav className="flex flex-col gap-6">
                        {navigation.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                ref={index === 0 ? firstLinkRef : null}
                                onClick={closeMenu}
                                className={classNames(
                                    'font-serif text-2xl md:text-3xl font-medium tracking-wide transition-colors',
                                    activeSection === item.href.substring(1) ? 'text-accent' : 'text-gray-700 hover:text-accent'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
} 