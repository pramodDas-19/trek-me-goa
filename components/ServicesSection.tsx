"use client";

import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Compass, MessageSquare, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/data";
import ServiceCard from "./ServiceCard";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

// Divide the 11 categories into 2 balanced rows for desktop marquee
const ROW_1_CATEGORIES = SERVICE_CATEGORIES.slice(0, 6); // 6 categories
const ROW_2_CATEGORIES = SERVICE_CATEGORIES.slice(6); // 5 categories

// Duplicate arrays for seamless infinite marquee loop on desktop
const ROW_1_DUPLICATED = [...ROW_1_CATEGORIES, ...ROW_1_CATEGORIES, ...ROW_1_CATEGORIES];
const ROW_2_DUPLICATED = [...ROW_2_CATEGORIES, ...ROW_2_CATEGORIES, ...ROW_2_CATEGORIES, ...ROW_2_CATEGORIES];

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();
  const { openEnquiryModal } = useEnquiryModal();
  const mobileSliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (mobileSliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = mobileSliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleMobileScroll = (direction: "left" | "right") => {
    if (mobileSliderRef.current) {
      const containerWidth = mobileSliderRef.current.clientWidth;
      const scrollAmount = direction === "left" ? -containerWidth * 0.85 : containerWidth * 0.85;
      mobileSliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-16 md:py-28 bg-[#F8F6F0] relative overflow-hidden"
      aria-label="Trekking and Adventure Services"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#49634B]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#F36B12]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      {/* Guaranteed CSS Keyframes for Marquee */}
      <style>{`
        @keyframes slideRowLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes slideRowRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-row-left {
          display: flex !important;
          width: max-content !important;
          animation: slideRowLeft 26s linear infinite !important;
        }
        .marquee-row-right {
          display: flex !important;
          width: max-content !important;
          animation: slideRowRight 26s linear infinite !important;
        }
        .marquee-row-left:hover,
        .marquee-row-right:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-10 md:mb-14">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-body font-bold text-[#F36B12] uppercase tracking-wider mb-2.5 px-3 py-1 rounded-full bg-white border border-[#E8E3D8] shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F36B12]" />
          <span>All 11 Adventure Categories • 30 Listings</span>
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#173B2B] tracking-tight uppercase"
        >
          Our Adventure Services
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm sm:text-lg text-[#242A25]/80 font-body max-w-2xl mx-auto leading-relaxed"
        >
          Explore all 11 curated expedition styles across Goa&apos;s wildest waterfalls, mountain peaks,
          and coastal waterways.
        </motion.p>
      </div>

      {/* MOBILE VIEW: Single Manual Slider showing 2 cards at once (Auto-play OFF) */}
      <div className="block md:hidden max-w-7xl mx-auto px-4 relative z-10">
        {/* Navigation Controls Row */}
        <div className="flex items-center justify-between mb-3.5">
          <span className="text-xs font-body font-semibold text-[#173B2B] uppercase tracking-wider">
            All 11 Categories (2 at once)
          </span>

          {/* Left & Right Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleMobileScroll("left")}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-full bg-white border border-[#E8E3D8] flex items-center justify-center shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#F36B12] ${
                canScrollLeft
                  ? "text-[#173B2B] hover:bg-[#173B2B] hover:text-white active:scale-95"
                  : "text-[#D4CDBC] opacity-50 cursor-not-allowed"
              }`}
              aria-label="Previous categories"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleMobileScroll("right")}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-full bg-white border border-[#E8E3D8] flex items-center justify-center shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#F36B12] ${
                canScrollRight
                  ? "text-[#173B2B] hover:bg-[#173B2B] hover:text-white active:scale-95"
                  : "text-[#D4CDBC] opacity-50 cursor-not-allowed"
              }`}
              aria-label="Next categories"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 2-Card Horizontal Scrollable Track */}
        <div
          ref={mobileSliderRef}
          onScroll={checkScrollPosition}
          className="flex gap-3 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SERVICE_CATEGORIES.map((category) => (
            <div
              key={`mobile-${category.id}`}
              className="snap-start shrink-0 w-[calc(50%-6px)] min-w-[155px] max-w-[210px]"
            >
              <ServiceCard category={category} compact />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW: Continuous Dual Marquee Sliders */}
      <div className="hidden md:block relative w-full overflow-hidden space-y-6 sm:space-y-8">
        {/* Left & Right Gradient Blur Edges for Elegant Fade In/Out */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#F8F6F0] via-[#F8F6F0]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#F8F6F0] via-[#F8F6F0]/80 to-transparent z-20" />

        {/* Slider 1: Moving Right to Left */}
        <div className="flex overflow-hidden py-2">
          <div className="marquee-row-left py-1">
            {ROW_1_DUPLICATED.map((category, idx) => (
              <ServiceCard key={`row1-${category.id}-${idx}`} category={category} />
            ))}
          </div>
        </div>

        {/* Slider 2: Moving Left to Right (Opposite Direction) */}
        <div className="flex overflow-hidden py-2">
          <div className="marquee-row-right py-1">
            {ROW_2_DUPLICATED.map((category, idx) => (
              <ServiceCard key={`row2-${category.id}-${idx}`} category={category} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Custom Booking Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-14">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E8E3D8] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#173B2B]/5 text-[#F36B12] shrink-0 hidden sm:block">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#173B2B] uppercase">
                Looking for a customized group trek or corporate expedition?
              </h3>
              <p className="mt-1 text-sm font-body text-[#242A25]/80 max-w-xl">
                We organize private trail logistics, pickups across North & South Goa, certified safety gear, and local Goan meals.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openEnquiryModal("Custom Group / Corporate Trek")}
            className="inline-flex items-center gap-2 bg-[#F36B12] hover:bg-[#dc5e0c] text-white font-body font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire Custom Dates</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
