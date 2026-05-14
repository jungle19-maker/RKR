import Image from "next/image";
import { CheckCircle2, Award, Globe, Factory } from "lucide-react";
import AnimatedHeading from "./AnimatedHeading";

const points = [
  "Rigorous vetting process guaranteeing highly qualified, background-verified professionals.",
  "100% adherence to global legal standards and Government of India compliance.",
  "Comprehensive mobilization support including visa processing, attestation, and emigration.",
  "Dedicated post-deployment support to ensure seamless integration and retention.",
];

const statBadges = [
  { icon: <Award className="w-5 h-5" />, value: "10+", label: "Years Experience" },
  { icon: <Globe className="w-5 h-5" />, value: "20+", label: "Countries Served" },
  { icon: <Factory className="w-5 h-5" />, value: "15+", label: "Industries Covered" },
];

export default function About({ showCertificate = true }: { showCertificate?: boolean }) {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left: Image */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative overflow-hidden shadow-2xl z-10 w-full h-[350px] md:h-[520px] rounded-2xl">
              <Image
                src="/images/modern_indian_recruitment.png"
                alt="RKR Global Path HR Expert Recruitment Team"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Blue overlay tint */}
              <div className="absolute inset-0 bg-[#004A99]/10" />
            </div>

            {/* Stat badges row */}
            <div className="absolute -bottom-6 left-2 right-2 md:left-4 md:right-4 z-20 flex gap-2 sm:gap-3">
              {statBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex-1 bg-white text-[#333333] p-2 sm:p-4 shadow-xl text-center border-t-4 border-[#004A99] rounded-b-xl"
                >
                  <div className="flex justify-center text-[#D90429] mb-1">{badge.icon}</div>
                  <div className="text-lg sm:text-2xl font-extrabold text-[#004A99]">{badge.value}</div>
                  <div className="text-[8px] sm:text-[10px] font-bold text-[#555555] uppercase tracking-wide leading-tight">
                    {badge.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative background */}
            <div className="absolute top-10 -left-8 w-full h-full bg-[#F5F5F5] -z-10 rounded-2xl" />
            {/* Orange accent corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F28C28] rounded-2xl -z-5 opacity-20" />
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 space-y-8 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#004A99]/08 rounded-full border border-[#004A99]/20">
              <span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse" />
              <span className="text-xs font-bold text-[#004A99] tracking-widest uppercase">
                About RKR Global Path
              </span>
            </div>

            <AnimatedHeading
              text="Your Strategic Partner in [Global Talent Acquisition]"
              className="text-[#333333] text-4xl lg:text-5xl font-bold leading-tight"
            />

            <p className="text-[#555555] leading-relaxed text-lg">
              RKR Global Path HR & Manpower is a premier global manpower agency specializing in the deployment of top-tier talent across high-growth sectors, including construction, oil & gas, healthcare, hospitality, and IT. Backed by rigorous compliance standards and an expansive candidate network, we ensure{" "}
              <strong className="text-[#004A99]">seamless, ethical, and efficient hiring</strong>{" "}
              for multinational organizations worldwide.
            </p>

            <ul className="space-y-3">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#004A99] flex-shrink-0 mt-0.5" />
                  <span className="text-[#555555] text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            {/* Slogan Banner */}
            <div className="bg-gradient-to-r from-[#004A99] to-[#D90429] rounded-xl p-4 text-white">
              <p className="font-bold text-sm tracking-wide">
                🌐 &ldquo;Empowering Businesses with Skilled Talent — Worldwide&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/services" className="btn-primary">
                Our Services
              </a>
              <a href="/contact-info" className="btn-secondary-dark">
                Get in Touch
              </a>
            </div>
          </div>

        </div>

        {/* ── Certificate Section ── */}
        {showCertificate && (
          <div className="mt-24 border-t-2 border-[#DDDDDD] pt-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#004A99]/08 rounded-full border border-[#004A99]/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#D90429] animate-pulse" />
                  <span className="text-xs font-bold text-[#004A99] tracking-widest uppercase">
                    Govt. Approved
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#333333] mb-4">
                  Official <span className="text-[#D90429]">License</span>
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed mb-6">
                  RKR Global Path HR & Manpower is officially certified and licensed by the Ministry of External Affairs, Government of India, guaranteeing a secure and reliable recruitment process.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] border border-[#DDDDDD] rounded-xl">
                  <Award className="w-5 h-5 text-[#004A99]" />
                  <span className="text-sm font-bold text-[#333333]">License: B-3395/UP/COM/</span>
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="overflow-hidden border-2 border-[#004A99]/20 shadow-xl relative w-full h-[400px] md:h-[500px] rounded-2xl">
                  <Image
                    src="/images/license_certificate.png"
                    alt="MEA License Certificate — RKR Global Path"
                    fill
                    className="object-contain bg-white hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
