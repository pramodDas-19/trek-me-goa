"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { GALLERY_PHOTOS } from "@/lib/data";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function CustomerGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { openEnquiryModal } = useEnquiryModal();

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! === 0 ? GALLERY_PHOTOS.length - 1 : prev! - 1));
  }, [selectedPhotoIndex]);

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! === GALLERY_PHOTOS.length - 1 ? 0 : prev! + 1));
  }, [selectedPhotoIndex]);

  // Keyboard accessibility: Escape to close, Left/Right arrows to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") {
        handleCloseLightbox();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhotoIndex, handleCloseLightbox, handlePrev, handleNext]);

  return (
    <section
      id="gallery"
      className="relative bg-forest-green text-white pt-16 pb-20 overflow-hidden"
      aria-label="Happy Customers Adventure Photo Gallery"
    >
      {/* Top Ripped / Brush Edge Divider matching reference image */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none select-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 38"
          preserveAspectRatio="none"
          className="w-full h-7 sm:h-10 text-warm-ivory fill-current"
          aria-hidden="true"
        >
          <path d="M0,0 L1440,0 L1440,24 C1390,12 1340,32 1290,18 C1240,6 1190,28 1140,16 C1090,4 1040,26 990,14 C940,3 890,26 840,15 C790,5 740,28 690,17 C640,6 590,27 540,16 C490,5 440,27 390,16 C340,5 290,27 240,15 C190,5 140,28 90,16 C40,5 15,22 0,16 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        {/* Section Header matching reference image */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 sm:pb-12">
          {/* Left Title & Eyebrow */}
          <div>
            <motion.span
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm font-body font-semibold text-sand/85 uppercase tracking-[0.22em] block mb-2"
            >
              OUR HAPPY EXPLORERS
            </motion.span>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative inline-block"
            >
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95]">
                MOMENTS <span className="text-adventure-orange">FROM OUR</span> JOURNEYS
              </h2>

              {/* Orange brush underline stroke under "FROM OUR" */}
              <svg
                className="w-28 sm:w-36 h-3 text-adventure-orange mt-1 ml-40 sm:ml-52"
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
            className="text-sm sm:text-base text-sand/85 font-body max-w-md leading-relaxed lg:text-right"
          >
            A glimpse of our amazing travellers enjoying the treks, beaches and local experiences.
          </motion.p>
        </div>

        {/* 9-Photo 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              onClick={() => handleOpenLightbox(index)}
              className="group relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer border border-leaf-green/40 hover:border-adventure-orange/80 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-adventure-orange bg-[#10291E]"
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${photo.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenLightbox(index);
                }
              }}
            >
              {/* Photo Image */}
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
              />

              {/* Gradient Scrim on Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Bottom Caption on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-adventure-orange block">
                  {photo.category}
                </span>
                <span className="text-xs font-heading font-bold text-white block leading-tight truncate">
                  {photo.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered "View More Photos" Outlined Pill Button matching reference */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => openEnquiryModal("Photo Gallery & Upcoming Trek Dates")}
            className="inline-flex items-center gap-2 border border-adventure-orange text-adventure-orange hover:bg-adventure-orange hover:text-forest-green font-body font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm cursor-pointer"
          >
            <span>View More Photos & Dates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-adventure-orange hover:text-forest-green text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close Lightbox (Escape)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-adventure-orange hover:text-forest-green text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Previous image (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-adventure-orange hover:text-forest-green text-white transition-colors focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Next image (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-2xl overflow-hidden bg-black/50 border border-white/15">
              <Image
                src={GALLERY_PHOTOS[selectedPhotoIndex].image}
                alt={GALLERY_PHOTOS[selectedPhotoIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Caption & Details */}
            <div className="mt-4 text-center max-w-xl">
              <div className="flex items-center justify-center gap-3">
                <span className="text-xs font-body text-adventure-orange font-semibold uppercase tracking-wider">
                  {GALLERY_PHOTOS[selectedPhotoIndex].category}
                </span>
                <span className="text-xs text-white/50">•</span>
                <span className="text-xs font-body text-white/70">
                  {selectedPhotoIndex + 1} of {GALLERY_PHOTOS.length}
                </span>
              </div>

              <h4 className="mt-1 font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {GALLERY_PHOTOS[selectedPhotoIndex].title}
              </h4>

              <p className="mt-2 text-sm font-body text-sand/85">
                {GALLERY_PHOTOS[selectedPhotoIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
