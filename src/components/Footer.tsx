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
        <footer className="bg-[#061428] text-white/75 pt-20 pb-10 border-t-4 border-[#22C55E]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div className="space-y-6 lg:col-span-1">
                        <Image
                            src="/images/logo.png"
                            alt="New RKR Manpower Consultant"
                            width={200}
                            height={60}
                            className="bg-white/95 p-2 "
                        />
                        <p className="text-white/50 text-sm leading-relaxed">
                            A premier MEA-approved global talent acquisition partner, delivering elite workforce
                            solutions across the Middle East, Asia, and Europe.
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-3">
                            {[Globe, MessageCircle, Users, Share2].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 bg-white/8 border border-white/10 flex items-center justify-center hover:bg-[#22C55E] hover:text-[#23352b] hover:border-[#22C55E] transition-all"
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
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#22C55E] " />
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-2 text-white/50 hover:text-[#22C55E] transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5 text-white/25" />
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
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#22C55E] " />
                        </h4>
                        <ul className="space-y-3">
                            {services.map((svc) => (
                                <li key={svc}>
                                    <a
                                        href="#services"
                                        className="flex items-center gap-2 text-white/50 hover:text-[#22C55E] transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5 text-white/25" />
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
                            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#22C55E] " />
                        </h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                                <span className="text-white/50 leading-relaxed">
                                    <br />
                                    Deoria Sadar R.S Deoria,<br />
                                    Uttar Pradesh
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                <a href="tel:+91123456789" className="text-white/50 hover:text-[#22C55E] transition-colors">
                                    +91-91123456789
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                                <a href="mailto:newRKRmanpowerconsultant@gmail.com"
                                    className="text-white/50 hover:text-[#22C55E] transition-colors break-all">
                                    newRKRmanpowerconsultant@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-white/35">
                        &copy; 2026{" "}
                        <strong ><a className="text-white/60" target='_blank' href="https://snine.online">SNINEFUTURE</a></strong>. All Rights Reserved.

                    </p>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-xs text-white/35 bg-white/5 px-4 py-2 border border-white/10">
                            <span className="w-2 h-2 bg-[#22C55E] animate-pulse" />
                            RA License:  B-3395/UP/COM/
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
