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
      <div className="bg-[#004A99] text-white text-[12px] md:text-sm px-4 md:px-8 py-2 md:py-2.5 flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-0 font-medium">
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-center">
          <a
            href="mailto:newrkrmanpowerconsultant@gmail.com"
            className="flex items-center gap-1.5 text-white/90 hover:text-[#F28C28] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#F28C28]" />
            newrkrmanpowerconsultant@gmail.com
          </a>
          <a
            href="tel:+91123456789"
            className="flex items-center gap-1.5 text-white/90 hover:text-[#F28C28] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#F28C28]" />
            +91-91123456789
          </a>
          <span className="hidden md:flex items-center gap-1.5 text-white/70">
            <Globe className="w-3.5 h-3.5 text-[#F28C28]" />
            Connecting Talent with Opportunity
          </span>
        </div>
        <div className="flex flex-col items-center md:items-end md:text-right gap-0 text-center">
          <span className="font-black tracking-wide text-white text-[13px] md:text-[15px]">
            RKR GLOBAL PATH HR & MANPOWER
          </span>
          <span className="text-[#F28C28] text-[10px] md:text-[11px] font-semibold tracking-wide">
            License: B-3395/UP/COM/ · MEA Approved
          </span>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav
        className={`bg-white transition-all duration-300 border-b-2 border-[#004A99]/10 ${scrolled ? "shadow-lg shadow-[#004A99]/10" : ""
          }`}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-[100rem] flex items-center justify-between h-[80px]">

          {/* Left: Logo */}
          <div className="flex items-center h-full py-3 gap-3 lg:gap-5">
            <Link href="/" className="flex flex-shrink-0 items-center justify-center">
              <Image
                src="/images/logo.jpeg"
                alt="RKR Global Path HR & Manpower"
                width={130}
                height={52}
                className="object-contain h-14 w-auto"
                priority
              />
            </Link>
            <div className="w-[1px] h-10 bg-gray-200 hidden sm:block" />
            <div className="hidden sm:flex items-center flex-shrink-0 gap-2">
              <Image
                src="/images/mea_logo.png"
                alt="Ministry of External Affairs"
                width={40}
                height={40}
                className="object-contain h-9 w-auto flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-[#004A99] font-black text-[11px] sm:text-[13px] leading-tight">
                  Ministry of External Affairs
                </span>
                <span className="text-[#555555] text-[9px] sm:text-[11px] leading-tight">
                  Government of India
                </span>
              </div>
            </div>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden xl:flex items-center justify-center flex-1 gap-1 px-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] font-bold px-3 py-1.5 transition-all whitespace-nowrap rounded-full ${isActive
                      ? "text-white bg-[#004A99]"
                      : "text-[#333333] hover:text-[#004A99] hover:bg-[#004A99]/08"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right: CTA + Language */}
          <div className="flex items-center gap-3">
            <a
              href="/contact-info"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#004A99] to-[#D90429] text-white font-bold text-sm hover:shadow-lg hover:shadow-[#D90429]/30 hover:-translate-y-0.5 transition-all"
            >
              Hire Talent
            </a>
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Mobile Toggle */}
            <button
              className="xl:hidden p-2 text-[#004A99] hover:text-[#D90429] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-[#DDDDDD] px-6 py-5 flex flex-col gap-3 shadow-xl">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-base font-bold py-2 px-4 rounded-xl transition-colors ${isActive
                      ? "text-white bg-[#004A99]"
                      : "text-[#333333] hover:text-[#004A99] hover:bg-[#004A99]/08"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="/contact-info"
              className="mt-2 text-center py-3 rounded-full bg-gradient-to-r from-[#004A99] to-[#D90429] text-white font-bold text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Talent
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
