"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();
  const { openEnquiryModal } = useEnquiryModal();

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesEl = document.querySelector("#services");
    if (servicesEl) {
      const navOffset = 80;
      const elementPosition = servicesEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-[460px] sm:min-h-[500px] flex items-center overflow-hidden bg-[#0E291C] py-12 sm:py-20"
      aria-label="Book Your Goa Expedition"
    >
      {/* Background Image: Golden Hour Tropical Shoreline */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.png"
          alt="Golden hour tropical shoreline in Goa"
          fill
          sizes="100vw"
          className="object-cover object-[25%_center] sm:object-center select-none"
        />

        {/* Subtle, soft scrim on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent hidden sm:block w-full md:w-[55%]" />
      </div>

      {/* Section Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Information & CTAs (Wrapped in a stunning frosted glass card on mobile for crystal-clear readability) */}
          <div className="max-w-2xl bg-white/90 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none rounded-3xl p-6 sm:p-0 border border-white/60 sm:border-none shadow-2xl sm:shadow-none">
            {/* Vibrant Eyebrow Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-2"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F36B12]/15 text-[#F36B12] text-xs font-body font-bold tracking-wider uppercase shadow-xs">
                READY FOR YOUR NEXT ADVENTURE?
              </span>
            </motion.div>

            {/* Headline with Orange Underline */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative inline-block"
            >
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#173B2B] tracking-tight uppercase leading-[0.98]">
                EXPLORE THE REAL GOA <br />
                WITH TREK ME @ GOA
              </h2>

              {/* Orange brush underline stroke */}
              <svg
                className="w-28 sm:w-44 h-3 text-[#F36B12] mt-1 ml-24 sm:ml-48"
                viewBox="0 0 150 12"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2 7c25-3 50-4 75-3 24 1 48 3 71 2-20 3-45 4-70 3-26-1-51-1-76-2z" />
              </svg>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-3.5 text-sm sm:text-base text-[#242A25] font-body max-w-xl leading-relaxed font-medium"
            >
              Get in touch with us for custom treks, group tours and unique local experiences.
            </motion.p>

            {/* Dual CTA Buttons: Full width on mobile for easy tapping, side-by-side on desktop */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              {/* Primary WhatsApp Pill Button */}
              <button
                type="button"
                onClick={() => openEnquiryModal("Custom Group / Corporate Trek")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F36B12] hover:bg-[#dc5e0c] text-white font-body font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg shadow-[#F36B12]/25 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-[#173B2B]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Enquire on WhatsApp</span>
              </button>

              {/* Secondary Outlined Pill Button */}
              <a
                href="#services"
                onClick={handleScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center border border-[#173B2B]/40 hover:border-[#173B2B] text-[#173B2B] hover:bg-white/90 bg-white/70 font-body font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full backdrop-blur-sm active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-[#F36B12]"
              >
                <span>Explore Services</span>
              </a>
            </motion.div>

            {/* Mobile Cursive Brand Signature */}
            <div className="mt-5 pt-3.5 border-t border-[#173B2B]/10 flex items-center justify-between sm:hidden select-none">
              <span className="font-satisfy text-lg text-[#173B2B]">
                Adventure • Nature • People • Goa
              </span>
            </div>
          </div>

          {/* Right-Aligned Cursive Script Badge for Desktop floating over golden shoreline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden sm:flex flex-col items-end text-right select-none pr-4 lg:pr-12"
          >


            {/* Orange brush underline stroke */}
            <svg
              className="w-28 sm:w-36 h-3 text-[#F36B12] mt-1"
              viewBox="0 0 150 12"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M2 7c25-3 50-4 75-3 24 1 48 3 71 2-20 3-45 4-70 3-26-1-51-1-76-2z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
