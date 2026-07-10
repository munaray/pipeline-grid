"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/layout/brand-logo";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What's Included", href: "#whats-included" },
  { label: "Who It's For", href: "#who-its-for" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-sm shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[4.5rem] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <BrandLogo className="w-[9.75rem] sm:w-[10.5rem]" priority />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/newsletters/pipeline-insider-7475236472061763585"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center h-9 px-5 rounded-full border border-primary/30 bg-white/[0.04] text-sm font-medium text-white/80 hover:border-primary/50 hover:text-white transition-colors duration-200"
          >
            Newsletter
          </a>
          <a
            href="https://calendly.com/yahya-myimperiumsystems/30min?back=1&month=2026-07"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center h-9 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Book a Call
          </a>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md border-b border-border px-6 py-5 flex flex-col gap-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="https://www.linkedin.com/newsletters/pipeline-insider-7475236472061763585"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 px-5 rounded-full border border-primary/30 bg-white/[0.04] text-sm font-medium text-white/80 hover:border-primary/50 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Newsletter
          </a>
          <a
            href="https://calendly.com/yahya-myimperiumsystems/30min?back=1&month=2026-07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
}
