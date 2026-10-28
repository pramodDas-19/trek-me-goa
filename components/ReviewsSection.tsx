"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { CUSTOMER_REVIEWS } from "@/lib/data";

// Decorative Palm Leaf Illustration matching reference image
function PalmLeafLeft() {
  return (
    <svg
      className="w-28 sm:w-44 h-auto text-leaf-green/20 pointer-events-none select-none"
      viewBox="0 0 160 220"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10,220 C20,180 40,140 70,100 C100,60 130,30 160,10 C140,40 115,80 85,120 C55,160 30,195 10,220 Z" />
      <path d="M30,190 C60,165 95,145 130,130 C95,150 65,175 30,190 Z" />
      <path d="M50,150 C85,125 125,105 155,90 C120,110 85,135 50,150 Z" />
      <path d="M70,110 C100,85 135,65 158,50 C130,70 95,95 70,110 Z" />
    </svg>
  );
}

function PalmLeafRight() {
  return (
    <svg
      className="w-28 sm:w-44 h-auto text-leaf-green/20 pointer-events-none select-none rotate-180"
      viewBox="0 0 160 220"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10,220 C20,180 40,140 70,100 C100,60 130,30 160,10 C140,40 115,80 85,120 C55,160 30,195 10,220 Z" />
      <path d="M30,190 C60,165 95,145 130,130 C95,150 65,175 30,190 Z" />
      <path d="M50,150 C85,125 125,105 155,90 C120,110 85,135 50,150 Z" />
      <path d="M70,110 C100,85 135,65 158,50 C130,70 95,95 70,110 Z" />
    </svg>
  );
}

export default function ReviewsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Slide by 1 card at a time through the 6 reviews
  const totalReviews = CUSTOMER_REVIEWS.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalReviews);
  };

  // Get 3 consecutive reviews (wrapping around array)
  const visibleReviews = [
    CUSTOMER_REVIEWS[startIndex],
    CUSTOMER_REVIEWS[(startIndex + 1) % totalReviews],
    CUSTOMER_REVIEWS[(startIndex + 2) % totalReviews],
  ];

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-warm-ivory relative overflow-hidden"
      aria-label="Customer Reviews & Guest Experiences"
    >
      {/* Decorative Palm Leaves on Left & Right Margins */}
      <div className="absolute left-0 bottom-4 pointer-events-none">
        <PalmLeafLeft />
      </div>
      <div className="absolute right-0 top-6 pointer-events-none">
        <PalmLeafRight />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching reference image */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12">
          {/* Left Title & Eyebrow */}
          <div>
            <motion.span
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-body font-semibold text-charcoal-muted uppercase tracking-[0.2em] block mb-2"
            >
              TRAVELLERS LOVE US
            </motion.span>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative inline-block"
            >
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-forest-green tracking-tight uppercase leading-[0.95]">
                REAL STORIES, <span className="text-adventure-orange">REAL</span> ADVENTURES
              </h2>

              {/* Orange brush underline stroke under "REAL" */}
              <svg
                className="w-24 sm:w-28 h-2.5 text-adventure-orange mt-1 ml-56 sm:ml-72"
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
            className="text-sm sm:text-base text-charcoal/80 font-body max-w-md leading-relaxed lg:text-right"
          >
            Here&apos;s what our travellers have to say about their experiences with Trek Me @ Goa.
          </motion.p>
        </div>

        {/* Carousel Container with Left/Right Arrows */}
        <div className="relative flex items-center">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-0 sm:-left-6 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-charcoal/30 hover:border-forest-green hover:bg-forest-green text-forest-green hover:text-white flex items-center justify-center shadow-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-adventure-orange active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Container */}
          <div className="w-full px-11 sm:px-6">
            {/* MOBILE VIEW: Exactly 1 Review Card at a time (Auto-stacking eliminated) */}
            <div className="block md:hidden">
              <AnimatePresence mode="wait">
                <motion.article
                  key={`mobile-review-${CUSTOMER_REVIEWS[startIndex].id}`}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-sand shadow-sm flex flex-col justify-between min-h-62.5"
                >
                  <div>
                    {/* Top Row: Avatar, Name, Stars, and Quote Icon */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-sand/60">
                      <div className="flex items-center gap-3">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-sand shrink-0 bg-sand/50">
                          <Image
                            src={CUSTOMER_REVIEWS[startIndex].avatar}
                            alt={CUSTOMER_REVIEWS[startIndex].name}
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="font-heading font-extrabold text-lg text-forest-green leading-tight">
                            {CUSTOMER_REVIEWS[startIndex].name}
                          </h3>

                          {/* 5 Orange Stars */}
                          <div className="flex items-center gap-1 mt-1" aria-label="5 out of 5 stars">
                            {[...Array(CUSTOMER_REVIEWS[startIndex].rating)].map((_, s) => (
                              <Star
                                key={s}
                                className="w-3.5 h-3.5 fill-adventure-orange text-adventure-orange"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <Quote className="w-6 h-6 text-sand-dark fill-sand-dark/30 shrink-0" />
                    </div>

                    {/* Review Quote Body */}
                    <p className="mt-4 text-xs sm:text-sm font-body text-charcoal/85 leading-relaxed italic">
                      &lsquo;{CUSTOMER_REVIEWS[startIndex].review}&rsquo;
                    </p>
                  </div>

                  {/* Trip Tag & Slide Indicator */}
                  <div className="mt-4 pt-3 border-t border-sand/60 flex items-center justify-between">
                    <span className="text-xs font-body font-semibold text-adventure-orange">
                      {CUSTOMER_REVIEWS[startIndex].trip}
                    </span>
                    <span className="text-[11px] font-body text-charcoal-muted">
                      {startIndex + 1} of {totalReviews}
                    </span>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* DESKTOP/TABLET VIEW: 3 Reviews Side-by-Side Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {visibleReviews.map((review, i) => (
                  <motion.article
                    key={`review-${review.id}-${startIndex}-${i}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-sand shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Row: Avatar, Name, Stars, and Quote Icon */}
                      <div className="flex items-center justify-between pb-4 border-b border-sand/60">
                        <div className="flex items-center gap-3.5">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-sand shrink-0 bg-sand/50">
                            <Image
                              src={review.avatar}
                              alt={review.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>

                          <div>
                            <h3 className="font-heading font-extrabold text-xl text-forest-green leading-tight">
                              {review.name}
                            </h3>

                            {/* 5 Orange Stars matching reference */}
                            <div className="flex items-center gap-1 mt-1" aria-label="5 out of 5 stars">
                              {[...Array(review.rating)].map((_, s) => (
                                <Star
                                  key={s}
                                  className="w-4 h-4 fill-adventure-orange text-adventure-orange"
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Double Quote Icon matching reference */}
                        <Quote className="w-7 h-7 text-sand-dark fill-sand-dark/30 shrink-0" />
                      </div>

                      {/* Review Quote Body */}
                      <p className="mt-5 text-sm sm:text-base font-body text-charcoal/85 leading-relaxed italic">
                        &lsquo;{review.review}&rsquo;
                      </p>
                    </div>

                    {/* Trip Tag */}
                    <div className="mt-5 pt-3 border-t border-sand/60">
                      <span className="text-xs font-body font-semibold text-adventure-orange">
                        {review.trip}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-0 sm:-right-6 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-charcoal/30 hover:border-forest-green hover:bg-forest-green text-forest-green hover:text-white flex items-center justify-center shadow-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-adventure-orange active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-10 flex items-center justify-center gap-2" aria-label="Carousel pagination">
          {CUSTOMER_REVIEWS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setStartIndex(idx)}
              aria-label={`Go to review slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-adventure-orange ${
                startIndex === idx
                  ? "w-8 bg-adventure-orange"
                  : "w-2.5 bg-sand-dark hover:bg-forest-green"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
