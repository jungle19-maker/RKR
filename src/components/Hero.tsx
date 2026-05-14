"use client";

import { ArrowRight, Briefcase, ShieldCheck, Globe, CheckCircle, Users } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedCounter from "./AnimatedCounter";

const trustBadges = [
    { icon: <ShieldCheck className="w-4 h-4" />, text: "MEA Registered Partner" },
    { icon: <CheckCircle className="w-4 h-4" />, text: "100% Compliant & Ethical" },
    { icon: <Globe className="w-4 h-4" />, text: "20+ Countries Served" },
    { icon: <Users className="w-4 h-4" />, text: "10,000+ Placements" },
];

export default function Hero() {
    return (
        <>
            {/* ── HERO ── */}
            <section
                id="home"
                className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden mt-[128px] sm:mt-[128px] lg:mt-[140px]"
            >
                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/hero_city_buildings.png')" }}
                />

                {/* Deep Blue → Navy gradient overlay */}
                <div className="absolute inset-0 hero-overlay" />

                {/* Decorative animated globe SVG */}
                <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none animate-float hidden lg:block">
                    <svg width="550" height="550" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="95" stroke="#F28C28" strokeWidth="1.5" strokeDasharray="4 4"/>
                        <circle cx="100" cy="100" r="70" stroke="#004A99" strokeWidth="1" strokeDasharray="6 3"/>
                        <circle cx="100" cy="100" r="45" stroke="#D90429" strokeWidth="0.8" strokeDasharray="3 5"/>
                        <line x1="100" y1="5" x2="100" y2="195" stroke="#ffffff" strokeWidth="0.5" opacity="0.4"/>
                        <line x1="5" y1="100" x2="195" y2="100" stroke="#ffffff" strokeWidth="0.5" opacity="0.4"/>
                        <ellipse cx="100" cy="100" rx="95" ry="40" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>
                        <ellipse cx="100" cy="100" rx="95" ry="70" stroke="#ffffff" strokeWidth="0.5" opacity="0.2"/>
                        <ellipse cx="100" cy="100" rx="45" ry="95" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>
                    </svg>
                </div>

                {/* Left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#004A99] via-[#D90429] to-[#F28C28]" />

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F5] to-transparent z-10" />

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-24">

                    {/* Eyebrow */}
                    <div className="inline-flex items-center justify-center gap-2 mb-8 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-[#F28C28] animate-pulse" />
                        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                            Ministry of External Affairs Approved · MEA Licensed
                        </span>
                    </div>

                    {/* Heading */}
                    <AnimatedHeading
                        element="h1"
                        text="Your Trusted [Global] Recruitment Partner"
                        className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-4 tracking-tight"
                        highlightClass="text-[#F28C28]"
                    />

                    <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
                        <span className="text-[#F28C28] font-semibold">Connecting Talent with Opportunity</span> — 
                        Empowering businesses worldwide with skilled manpower since 2014.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up delay-300">
                        <a
                            href="/contact-info"
                            id="hero-hire-workforce"
                            className="btn-primary text-base px-8 py-4"
                        >
                            <Briefcase className="w-5 h-5" />
                            Hire Skilled Workforce
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/services"
                            id="hero-apply-jobs"
                            className="btn-secondary text-base px-8 py-4"
                        >
                            Apply for Overseas Jobs
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up delay-400">
                        {trustBadges.map((badge, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 px-4 py-2.5 glass rounded-full text-white text-sm font-semibold border border-white/15"
                            >
                                <span className="text-[#F28C28]">{badge.icon}</span>
                                {badge.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Social Icons Sidebar ── */}
                <div className="hidden md:flex fixed right-0 top-[50%] -translate-y-1/2 flex-col z-[100] gap-1 px-2">
                    <a
                        href="https://facebook.com"
                        target="_blank" rel="noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-[#1877F2] rounded-full shadow-lg flex items-center justify-center text-white hover:-translate-x-1 transition-transform"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 md:w-6 md:h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank" rel="noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-[#1DA1F2] rounded-full shadow-lg flex items-center justify-center text-white hover:-translate-x-1 transition-transform"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 md:w-6 md:h-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank" rel="noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4] rounded-full shadow-lg flex items-center justify-center text-white hover:-translate-x-1 transition-transform"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank" rel="noreferrer"
                        className="w-10 h-10 md:w-12 md:h-12 bg-[#0A66C2] rounded-full shadow-lg flex items-center justify-center text-white hover:-translate-x-1 transition-transform"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-5 h-5 md:w-6 md:h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <div id="stats" className="bg-[#004A99] py-14 relative overflow-hidden">
                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.04]"
                    style={{
                        backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)',
                        backgroundSize: '32px 32px'
                    }}
                />
                {/* Red accent line top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D90429] via-[#F28C28] to-[#D90429]" />

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <p className="text-center text-white/50 text-xs font-bold tracking-[0.3em] uppercase mb-8">
                        Building Careers Worldwide
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
                        {[
                            { end: 500, suffix: "+", label: "Global Clients" },
                            { end: 10000, suffix: "+", label: "Placements Made" },
                            { end: 20, suffix: "+", label: "Countries Served" },
                            { end: 15, suffix: "+", label: "Industries Covered" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all duration-500 shadow-xl hover:-translate-y-2 group"
                            >
                                <div className="text-3xl md:text-4xl font-extrabold text-[#F28C28] mb-2 group-hover:scale-110 transition-transform">
                                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                                </div>
                                <div className="text-xs font-bold text-white/80 tracking-widest uppercase">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── BRAND SLOGANS BANNER ── */}
            <div className="bg-white border-y border-[#DDDDDD] py-5 overflow-hidden">
                <div className="flex items-center gap-12 whitespace-nowrap animate-none">
                    <div className="flex gap-12 items-center text-sm font-bold text-[#555555] flex-wrap justify-center px-6 w-full">
                        {[
                            "🌍 Connecting Talent with Opportunity",
                            "🤝 Your Trusted Global Recruitment Partner",
                            "🚀 Building Careers Worldwide",
                            "💼 Empowering Businesses with Skilled Talent",
                        ].map((slogan, i) => (
                            <span key={i} className="flex items-center gap-2">
                                <span className="text-[#004A99]">{slogan}</span>
                                {i < 3 && <span className="text-[#D90429] font-black">·</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
