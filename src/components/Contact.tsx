"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#EAEAEA]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#004A99]/08 rounded-full border border-[#004A99]/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse" />
                        <span className="text-xs font-bold text-[#004A99] tracking-widest uppercase">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#333333] mb-4 tracking-tight">
                        Contact Information
                    </h2>
                    <p className="text-[#555555] text-base leading-relaxed">
                        Reach out via phone or email to discuss your global manpower requirements or international job opportunities.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 shadow-xl border border-[#DDDDDD] rounded-3xl relative overflow-hidden">
                    {/* Decorative element */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#004A99] via-[#D90429] to-[#F28C28]" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="flex flex-col items-center text-center gap-4 bg-[#F5F5F5] p-8 border border-[#DDDDDD] rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#D90429]/30">
                            <div className="w-14 h-14 bg-white shadow-sm border border-[#DDDDDD] rounded-full flex items-center justify-center text-[#D90429]">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-[#004A99] text-xl mb-3">Office Address</div>
                                <div className="text-[#555555] leading-relaxed text-sm">
                                    <br />
                                    Deoria Sadar R.S Deoria,<br />
                                    Uttar Pradesh
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-4 bg-[#F5F5F5] p-8 border border-[#DDDDDD] rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#D90429]/30">
                            <div className="w-14 h-14 bg-white shadow-sm border border-[#DDDDDD] rounded-full flex items-center justify-center text-[#D90429]">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-[#004A99] text-xl mb-3">Phone Number</div>
                                <a href="tel:+91123456789" className="text-[#555555] text-sm hover:text-[#D90429] transition-colors">
                                    +91-91123456789
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-4 bg-[#F5F5F5] p-8 border border-[#DDDDDD] rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#D90429]/30">
                            <div className="w-14 h-14 bg-white shadow-sm border border-[#DDDDDD] rounded-full flex items-center justify-center text-[#D90429]">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-[#004A99] text-xl mb-3">Email Address</div>
                                <a href="mailto:newrkrmanpowerconsultant@gmail.com" className="text-[#555555] text-sm hover:text-[#D90429] transition-colors break-all">
                                    newrkrmanpowerconsultant@gmail.com
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
