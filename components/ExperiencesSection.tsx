"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LOCAL_EXPERIENCES } from "@/lib/data";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

// Custom icons matching the reference image's circular badges
function FarmingLeafIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function HorseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 13V8l-3-4-4 2-3-2L8 8v5l3 3v5h4v-5l2-2h3l2-1z" />
      <circle cx="16" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

function ChefHatIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
      <line x1="6" y1="17" x2="18" y2="17" />
    </svg>
  );
}

function BakeryIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 10c0-3.3-2.7-6-6-6s-6 2.7-6 6c-2.2 0-4 1.8-4 4 0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5 0-2.2-1.8-4-4-4z" />
      <path d="M10 10c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5" />
    </svg>
  );
}

function BoatIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 17l2 4h16l2-4H2z" />
      <path d="M12 3v14" />
      <path d="M12 5l7 6h-7" />
    </svg>
  );
}

// Map each experience to its corresponding icon
const EXPERIENCE_ICONS = [
  FarmingLeafIcon,
  HorseIcon,
  ChefHatIcon,
  BakeryIcon,
  BoatIcon,
];

export default function ExperiencesSection() {
  const shouldReduceMotion = useReducedMotion();
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <section
      id="experiences"
      className="relative bg-[#173B2B] text-white pt-16 pb-20 overflow-hidden"
      aria-label="Authentic Goan Local Experiences"
    >
      {/* Top Ripped / Brush Edge Divider matching reference image */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none select-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 38"
          preserveAspectRatio="none"
          className="w-full h-7 sm:h-10 text-[#F8F6F0] fill-current"
          aria-hidden="true"
        >
          <path d="M0,0 L1440,0 L1440,24 C1390,12 1340,32 1290,18 C1240,6 1190,28 1140,16 C1090,4 1040,26 990,14 C940,3 890,26 840,15 C790,5 740,28 690,17 C640,6 590,27 540,16 C490,5 440,27 390,16 C340,5 290,27 240,15 C190,5 140,28 90,16 C40,5 15,22 0,16 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12">
          {/* Left Title & Eyebrow */}
          <div>
            <motion.span
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-body font-semibold text-[#E8E3D8]/85 uppercase tracking-[0.22em] block mb-2"
            >
              LOCAL EXPERIENCES
            </motion.span>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative inline-block"
            >
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95]">
                AUTHENTIC <span className="text-[#F36B12]">GOAN</span> EXPERIENCES
              </h2>

              {/* Orange brush underline stroke under "GOAN" */}
              <svg
                className="w-28 sm:w-36 h-3 text-[#F36B12] mt-1 ml-40 sm:ml-52"
                viewBox="0 0 150 12"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 7c25-3 50-4 75-3 24 1 48 3 71 2-20 3-45 4-70 3-26-1-51-1-76-2z" />
              </svg>
            </motion.div>
          </div>

          {/* Right Subtitle */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#E8E3D8]/85 font-body max-w-md leading-relaxed lg:text-right"
          >
            More than just treks — experience the real Goa with locals, food, culture and nature.
          </motion.p>
        </div>

        {/* 5-Column Responsive Cards Grid matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-4">
          {LOCAL_EXPERIENCES.map((exp, idx) => {
            const IconComponent = EXPERIENCE_ICONS[idx] || FarmingLeafIcon;
            return (
              <motion.article
                key={exp.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col justify-between bg-[#0E291C] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#49634B]/40 hover:border-[#F36B12]/60 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-[#F36B12]"
              >
                {/* Card Image */}
                <div className="relative h-60 sm:h-64 lg:h-56 w-full overflow-hidden bg-[#10291E]">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E291C] via-transparent to-black/20" />
                </div>

                {/* Floating Circular Icon Badge Overlapping Image Bottom */}
                <div className="relative px-5">
                  <div className="w-10 h-10 -mt-5 rounded-full bg-[#173B2B] border-2 border-[#0E291C] flex items-center justify-center text-white shadow-md z-10 group-hover:bg-[#F36B12] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Card Content & Circular Arrow CTA */}
                <div className="p-5 pt-3 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#F36B12] transition-colors leading-tight">
                      {exp.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm font-body text-[#E8E3D8]/80 leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>
                  </div>

                  {/* Circular Orange Arrow Button */}
                  <div className="mt-5 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => openEnquiryModal(exp.title)}
                      className="w-9 h-9 rounded-full bg-[#F36B12] hover:bg-[#dc5e0c] text-white flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-white"
                      aria-label={`Enquire about ${exp.title}`}
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Bottom Ripped / Brush Edge Divider matching reference image */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none select-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 38"
          preserveAspectRatio="none"
          className="w-full h-7 sm:h-10 text-[#F8F6F0] fill-current"
          aria-hidden="true"
        >
          <path d="M0,38 L1440,38 L1440,14 C1390,26 1340,6 1290,20 C1240,32 1190,10 1140,22 C1090,34 1040,12 990,24 C940,35 890,12 840,23 C790,33 740,10 690,21 C640,32 590,11 540,22 C490,33 440,11 390,22 C340,33 290,11 240,23 C190,33 140,10 90,22 C40,33 15,16 0,22 Z" />
        </svg>
      </div>
    </section>
  );
}
