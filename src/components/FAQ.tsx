"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const faqs = [
    {
        q: "How Long Does The Placement Process Take?",
        a: "The timeline varies by role and destination. Typically, domestic placements take 2–4 weeks while overseas placements, including visa processing, can take 4–12 weeks depending on the country and employer requirements.",
    },
    {
        q: "How Does The Registration Process Work?",
        a: "Submit your CV through our portal or contact us directly. Our counselors will schedule a consultation to understand your background and match you with suitable global opportunities.",
    },
    {
        q: "Is There A Fee For Job Seekers?",
        a: "Basic registration and job matching are transparent. Specific overseas placement packages involving extensive visa and travel processing may have associated verified service fees.",
    },
    {
        q: "Which Countries Do You Place Candidates In?",
        a: "We primarily place candidates across the Middle East (UAE, Saudi Arabia, Qatar), Southeast Asia, and select European nations — matching specific industry expertise with regional demand.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-[#EAEAEA]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* LEFT */}
                    <div className="lg:sticky lg:top-28">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#004A99]/08 rounded-full border border-[#004A99]/20 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse" />
                            <span className="text-xs font-bold text-[#004A99] tracking-widest uppercase">
                                Usually Asked
                            </span>
                        </div>

                        <AnimatedHeading 
                            text="Discover Quick Answers\nTo Common Questions."
                            className="text-3xl md:text-4xl font-extrabold text-[#333333] leading-tight mb-5"
                        />

                        <p className="text-[#555555] text-sm leading-relaxed mb-8 max-w-xs">
                            Have more questions? Our team is always ready to help you navigate the recruitment journey.
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#004A99] hover:bg-[#D90429] text-white font-bold text-sm transition-all shadow hover:shadow-[#D90429]/30 hover:-translate-y-0.5 rounded-full"
                        >
                            See All FAQs <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-4">
                        {/* Image */}
                        <div className="relative w-full h-52 overflow-hidden shadow-lg mb-2 rounded-2xl border border-[#DDDDDD]">
                            <Image
                                src="/images/modern_indian_recruitment.png"
                                alt="Recruitment Office"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-[#004A99]/20" />
                        </div>

                        {/* Accordion */}
                        {faqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className={` rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                                        ? "border-[#004A99] bg-white shadow-lg"
                                        : "border-[#DDDDDD] bg-white hover:border-[#D90429]/50 hover:shadow-md"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                                        className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none group"
                                    >
                                        <span className={`text-sm font-bold leading-snug ${isOpen ? "text-[#004A99]" : "text-[#333333] group-hover:text-[#D90429]"
                                            }`}>
                                            {faq.q}
                                        </span>
                                        <span className={`flex-shrink-0 ml-3 w-6 h-6 flex items-center justify-center transition-colors rounded-full ${isOpen ? "bg-[#004A99] text-white" : "bg-[#F5F5F5] text-[#555555]"
                                            }`}>
                                            {isOpen
                                                ? <ChevronUp className="w-3.5 h-3.5" />
                                                : <ChevronDown className="w-3.5 h-3.5" />}
                                        </span>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                                        }`}>
                                        <p className="text-[#555555] text-sm leading-relaxed px-5">{faq.a}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
