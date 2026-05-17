"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/kursus", label: "Kursus" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/testimonial", label: "Testimonial" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-warmWhite/95 backdrop-blur-sm shadow-sm" : "bg-warmWhite"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold text-darkBrown">
              Faeyza Music
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-deepBrown hover:text-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              className="bg-gold text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gold/90 transition-colors"
            >
              Daftar Sekarang
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-deepBrown"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-warmWhite border-t border-cream">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-deepBrown hover:text-gold transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              className="block bg-gold text-white px-4 py-2 rounded-lg text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}