"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

interface ListingCardMediaProps {
  title: string;
  image: string;
  images?: string[];
  location?: string;
}

export default function ListingCardMedia({
  title,
  image,
  images,
  location,
}: ListingCardMediaProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaList = images && images.length > 0 ? images : [image];
  const hasMultiple = mediaList.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-56 shrink-0 overflow-hidden bg-[#E9E8DF] sm:h-60 group/media">
      {/* Active Image */}
      <Image
        src={mediaList[currentIndex]}
        alt={`${title} - image ${currentIndex + 1}`}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 pointer-events-none" />

      {/* Location Badge */}
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
          <MapPin className="h-3.5 w-3.5 text-[#FFAB70]" />
          {location || "Goa, India"}
        </span>
      </div>

      {/* Multiple Images Navigation Controls */}
      {hasMultiple && (
        <>
          {/* Photo Counter Pill */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/10 shadow-sm">
              {currentIndex + 1} / {mediaList.length}
            </span>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-[#F36B12] active:scale-95 shadow-md"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-[#F36B12] active:scale-95 shadow-md"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5">
            {mediaList.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                aria-label={`Jump to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "w-5 bg-[#F36B12]"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
