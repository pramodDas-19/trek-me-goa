"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

// Clean custom icons matching the reference image
function TreksTrailsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 8c0-3-2.5-5-5-5-1 0-3 .5-4 2 2 1 3 2.5 3 4" />
      <path d="M8 8c0-3 2.5-5 5-5 1 0 3 .5 4 2-2 1-3 2.5-3 4" />
      <path d="M10 8v13" />
      <path d="M6 14c1.5-1 3-1 4.5 0" />
      <path d="M14 17l4-4 4 4" />
      <path d="M16 21l2-2" />
    </svg>
  );
}

function HiddenBeachesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="7" r="3" />
      <path d="M2 15c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
      <path d="M2 19c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
    </svg>
  );
}

function CampingSpotsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 21L12 5 5 21h14z" />
      <path d="M12 5v16" />
      <path d="M9 21l3-6 3 6" />
    </svg>
  );
}

export default function HeroSection() {
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
      id="hero"
      className="relative h-[100dvh] max-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#10291E] text-white pt-20 sm:pt-24 pb-4 sm:pb-6"
      aria-label="Trek Me @ Goa Hero Section"
    >
      {/* Background Image: Lone Hiker Beside Jungle Waterfall */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Lone hiker beside wild Goan jungle waterfall"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />

        {/* Soft dark vignette on the left to ensure crisp text contrast matching reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent w-full md:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </motion.div>

      {/* Main Hero Content (Left-aligned, vertically centered within viewport) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-2xl">
          {/* Eyebrow Label */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-1.5"
          >
            <span className="text-[11px] sm:text-xs font-body font-semibold tracking-[0.26em] text-[#E8E3D8]/90 uppercase">
              TREK ME @ GOA
            </span>
          </motion.div>

          {/* Main Headline matching reference layout */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.4rem] tracking-tight leading-[0.92] uppercase"
          >
            <span className="block text-white">GO BEYOND</span>
            <span className="block text-[#F36B12] drop-shadow-md">THE USUAL GOA.</span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-[#F8F6F0]/90 font-body max-w-lg leading-relaxed"
          >
            Discover hidden trails, wild waterfalls and authentic local experiences with Trek Me @ Goa.
          </motion.p>

          {/* Buttons matching reference: Orange pill + Outlined pill */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3.5"
          >
            {/* Primary Orange Pill Button */}
            <a
              href="#services"
              onClick={handleScrollToServices}
              className="inline-flex items-center gap-2 bg-[#F36B12] hover:bg-[#dc5e0c] text-white font-body font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-white group"
            >
              <span>Explore Adventures</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Outlined Pill Button */}
            <button
              type="button"
              onClick={() => openEnquiryModal("General Adventure Enquiry")}
              className="inline-flex items-center justify-center border border-white/50 hover:border-white text-white hover:bg-white/10 font-body font-semibold text-xs sm:text-sm px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-[#F36B12]"
            >
              <span>Plan Your Trip</span>
            </button>
          </motion.div>

          {/* Three Feature Highlights Row: Treks & Trails | Hidden Beaches | Camping Spots */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 sm:mt-7 pt-4 flex flex-wrap items-center gap-5 sm:gap-8 border-t border-white/15"
          >
            <div className="flex items-center gap-2 text-white/90">
              <div className="p-1 rounded-md bg-white/10 text-white">
                <TreksTrailsIcon className="w-4 h-4" />
              </div>
              <span className="font-body text-xs sm:text-sm font-medium tracking-wide">
                Treks & Trails
              </span>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <div className="p-1 rounded-md bg-white/10 text-white">
                <HiddenBeachesIcon className="w-4 h-4" />
              </div>
              <span className="font-body text-xs sm:text-sm font-medium tracking-wide">
                Hidden Beaches
              </span>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <div className="p-1 rounded-md bg-white/10 text-white">
                <CampingSpotsIcon className="w-4 h-4" />
              </div>
              <span className="font-body text-xs sm:text-sm font-medium tracking-wide">
                Camping Spots
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Scroll Down (Left) and Script Badge (Right) - Sits inside 100vh */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-end justify-between pt-2">
        {/* Scroll Down Indicator */}
        <motion.a
          href="#services"
          onClick={handleScrollToServices}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group focus-visible:ring-2 focus-visible:ring-[#F36B12] rounded-full p-1"
          aria-label="Scroll down to services"
        >
          {/* Oval mouse capsule icon */}
          <div className="w-4 h-7 rounded-full border-2 border-white/60 flex items-start justify-center p-0.5 group-hover:border-white transition-colors">
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-white group-hover:bg-[#F36B12] rounded-full transition-colors"
            />
          </div>
          <span className="text-[11px] font-body tracking-wider text-white/80 group-hover:text-white">
            Scroll Down
          </span>
        </motion.a>

        {/* Artistic Script Badge: "Explore Nature Experience Goa" with orange brush stroke */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="hidden sm:flex flex-col items-end text-right select-none pr-16 lg:pr-20"
        >
          <div className="font-script text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide leading-tight drop-shadow-md">
            Explore <br />
            Nature <br />
            Experience <br />
            Goa
          </div>
          {/* Orange brush underline stroke */}
          <svg
            className="w-24 sm:w-28 h-2.5 text-[#F36B12] mt-0.5"
            viewBox="0 0 150 12"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M2 7c25-3 50-4 75-3 24 1 48 3 71 2-20 3-45 4-70 3-26-1-51-1-76-2z" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
