"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#lab", label: "Lab" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.05]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-white font-bold text-xl tracking-tight group-hover:text-[#c5ff41] transition-colors">
            WA
          </span>
          <span className="text-[#c5ff41] text-2xl font-bold leading-none">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.06] rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm text-[#888] hover:text-white transition-colors rounded-full hover:bg-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Status + mobile toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5ff41] animate-pulse" />
            <span className="text-[#888] text-xs">Available for work</span>
          </div>

          <button
            className="md:hidden text-[#888] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {mobileOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-b border-white/[0.06] px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-[#888] hover:text-white transition-colors border-b border-white/[0.04] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pt-3">
            <span className="w-2 h-2 rounded-full bg-[#c5ff41] animate-pulse" />
            <span className="text-[#888] text-xs">Available for work</span>
          </div>
        </div>
      )}
    </nav>
  );
}
