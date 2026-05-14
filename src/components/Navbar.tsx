"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, Phone, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Contact Info", href: "/contact-info" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">

      {/* ── Top Info Bar ── */}
      <div className="bg-black text-white text-[11px] md:text-xs px-4 md:px-8 py-1.5 flex justify-end items-center font-medium">
        <span>10+ Branches Across India, Saudi Arabia, UAE, Qatar, Nepal, Bangladesh</span>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        className={`bg-white transition-all duration-300 border-b border-gray-200 ${scrolled ? "shadow-md" : ""
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-[100rem] flex items-center justify-between h-[80px] lg:h-[90px]">

          {/* Left: Logo */}
          <div className="flex items-center h-full py-2 gap-3 lg:gap-5">
            <Link href="/" className="flex flex-shrink-0 items-center justify-center">
              <Image
                src="/images/logo.jpeg"
                alt="RKR Global Path HR & Manpower"
                width={150}
                height={60}
                className="object-contain h-14 lg:h-16 w-auto"
                priority
              />
            </Link>
            <div className="w-[1px] h-10 bg-gray-300 hidden sm:block" />
            <div className="hidden sm:flex items-center flex-shrink-0 gap-3">
              <Image
                src="/images/mea_logo.png"
                alt="Ministry of External Affairs"
                width={40}
                height={40}
                className="object-contain h-10 w-auto flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-[#004A99] font-black text-[12px] sm:text-[14px] leading-tight">
                  Ministry of External Affairs
                </span>
                <span className="text-gray-500 text-[10px] sm:text-[11px] leading-tight">
                  Government of India
                </span>
              </div>
            </div>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden xl:flex items-center justify-center gap-6 2xl:gap-8 px-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] md:text-[15px] font-bold py-1 transition-all whitespace-nowrap ${isActive
                      ? "text-[#EAB308] border-b-2 border-[#EAB308]"
                      : "text-[#1B365D] hover:text-[#EAB308]"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right: Language Switcher */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 text-[#004A99] hover:text-[#EAB308] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-200 px-6 py-5 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-base font-bold py-2 px-4 transition-colors ${isActive
                      ? "text-[#EAB308] border-l-4 border-[#EAB308] bg-gray-50"
                      : "text-[#1B365D] hover:text-[#EAB308]"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
