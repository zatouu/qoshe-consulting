"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import QosheLogo from "@/components/QosheLogo";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Prestations", href: "#prestations" },
  { label: "Solutions", href: "#solutions" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0A0E1A]/95 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/50 shadow-lg shadow-slate-200/30 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#accueil">
            <QosheLogo iconSize={38} />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/40 dark:hover:border-amber-400/40 transition-all duration-200"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              className="bg-amber-400 hover:bg-amber-300 text-[#0A0E1A] font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/25"
            >
              Audit gratuit
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 transition-all duration-200"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white dark:bg-[#0F172A] border-t border-slate-200 dark:border-slate-800 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 text-sm font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-3">
              <a
                href="#contact"
                className="block text-center bg-amber-400 hover:bg-amber-300 text-[#0A0E1A] font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Demander un audit gratuit
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
