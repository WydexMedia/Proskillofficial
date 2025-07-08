"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <img src="/proskillblack.webp" alt="Proskill Logo" width={40} height={40} />
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-black dark:bg-white mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black dark:bg-white mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2 md:gap-4 text-base font-medium">
          <Link href="/about" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">About</Link>
          <Link href="/calculator" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">Resin Calculator</Link>
          <Link href="/testimonials" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">Testimonials</Link>
          <Link href="/contact" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">Contact</Link>
        </nav>
      </div>
      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 animate-fade-in-down">
          <Link href="/about" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/courses" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link href="/calculator" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black" onClick={() => setMenuOpen(false)}>Calculator</Link>
          <Link href="/testimonials" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          <Link href="/contact" className="px-4 py-2 rounded-full transition bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
} 