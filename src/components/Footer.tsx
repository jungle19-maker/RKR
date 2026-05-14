"use client";

import Image from "next/image";
import { Globe, MessageCircle, Users, Share2, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Why Us", href: "/why-choose-us" },
    { name: "Contact Us", href: "/contact-info" },
];

const services = [
    "Overseas Recruitment",
    "Bulk Hiring",
    "Visa Processing",
    "Documentation & Compliance",
    "Candidate Screening",
    "Deployment Support",
];

export default function Footer() {
    return (
        <footer className="bg-[#001f4d] text-white/75 pt-20 pb-10 border-t-4 border-[#D90429]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6 lg:col-span-1">
                        <Image
                            src="/images/logo.png"
                            alt="RKR Global Path HR & Manpower"
                            width={200}
                            height={60}
                            className="bg-white/95 p-3 rounded-xl shadow-lg border-b-2 border-[#D90429]"
                        />
                        <p className="text-white/60 text-sm leading-relaxed">
                            A premier MEA-approved global talent acquisition partner, delivering elite workforce
                            solutions across the Middle East, Asia, and Europe.
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-3">
                            {[Globe, MessageCircle, Users, Share2].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#D90429] hover:text-white transition-all shadow-md"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#F28C28]" />
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-2 text-white/60 hover:text-[#F28C28] transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5 text-[#D90429]" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-6 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#F28C28]" />
                        </h4>
                        <ul className="space-y-3">
                            {services.map((svc) => (
                                <li key={svc}>
                                    <a
                                        href="#services"
                                        className="flex items-center gap-2 text-white/60 hover:text-[#F28C28] transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5 text-[#D90429]" />
                                        {svc}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold text-base mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#F28C28]" />
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#D90429] flex-shrink-0 mt-0.5" />
                                <span className="text-white/60 leading-relaxed">
                                    Deoria Sadar R.S Deoria,<br />
                                    Uttar Pradesh 274001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#D90429] flex-shrink-0" />
                                <a href="tel:+91123456789" className="text-white/60 hover:text-[#F28C28] transition-colors">
                                    +91-91123456789
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#D90429] flex-shrink-0" />
                                <a href="mailto:newrkrmanpowerconsultant@gmail.com"
                                    className="text-white/60 hover:text-[#F28C28] transition-colors break-all">
                                    newrkrmanpowerconsultant@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/40">
                        &copy; 2026{" "}
                        <strong><a className="text-white/70 hover:text-white" target='_blank' href="https://snine.online">SNINEFUTURE</a></strong>. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#F28C28] bg-white/5 px-4 py-2 border border-white/10 rounded-full">
                            <span className="w-2 h-2 bg-[#D90429] animate-pulse rounded-full" />
                            RA License: B-3395/UP/COM/
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
