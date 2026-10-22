"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ServiceCategory } from "@/lib/data";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface ServiceCardProps {
  category: ServiceCategory;
  compact?: boolean;
}

export default function ServiceCard({ category, compact = false }: ServiceCardProps) {
  const { openEnquiryModal } = useEnquiryModal();

  if (compact) {
    return (
      <article className="group flex flex-col justify-between w-full h-full bg-white rounded-xl overflow-hidden border border-[#E8E3D8] shadow-sm hover:shadow-md transition-all duration-200 select-none">
        {/* Category Image */}
        <div className="relative h-28 sm:h-36 w-full overflow-hidden bg-[#173B2B]/10">
          <Image
            src={category.image}
            alt={category.title}
            fill
            sizes="(max-width: 640px) 180px, 240px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10 gap-1">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-body font-semibold tracking-wider uppercase bg-[#173B2B]/90 backdrop-blur-md text-white border border-white/10 line-clamp-1">
              {category.tag}
            </span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-body font-bold bg-[#F36B12] text-white shrink-0">
              {category.listingCount}
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col flex-1 justify-between bg-white">
          <div>
            <h3 className="font-heading font-extrabold text-base text-[#173B2B] leading-tight line-clamp-1">
              {category.title}
            </h3>
            <p className="mt-1 text-[11px] font-body text-[#242A25]/75 leading-tight line-clamp-2">
              {category.description}
            </p>
          </div>

          <div className="mt-2.5 pt-2 border-t border-[#E8E3D8]">
            <button
              type="button"
              onClick={() => openEnquiryModal(category.title)}
              className="w-full inline-flex items-center justify-center gap-1.5 bg-[#173B2B] hover:bg-[#F36B12] text-white font-body font-semibold text-[11px] py-1.5 px-2 rounded-lg transition-colors active:scale-95"
              aria-label={`Enquire about ${category.title}`}
            >
              <MessageCircle className="w-3 h-3 fill-[#F36B12] text-transparent" />
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between w-[310px] sm:w-[350px] shrink-0 bg-white rounded-2xl overflow-hidden border border-[#E8E3D8] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-[#F36B12] select-none mx-3">
      {/* Category Image */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#173B2B]/10">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 640px) 310px, 350px"
          className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-body font-semibold tracking-wider uppercase bg-[#173B2B]/85 backdrop-blur-md text-white border border-white/10">
            {category.tag}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-bold bg-[#F36B12] text-white shadow-sm">
            {category.listingCount} {category.listingCount === 1 ? "Listing" : "Listings"}
          </span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Bottom image highlight banner */}
        <div className="absolute bottom-3 left-3 right-3">
          <span className="text-xs font-body font-medium text-[#E8E3D8] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded inline-block">
            {category.highlight}
          </span>
        </div>
      </div>

      {/* Card Content (Bullet points removed as requested) */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          <h3 className="font-heading font-extrabold text-2xl text-[#173B2B] group-hover:text-[#F36B12] transition-colors leading-tight line-clamp-1">
            {category.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm font-body text-[#242A25]/80 leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>

        {/* Card CTA Action */}
        <div className="mt-5 pt-3.5 border-t border-[#E8E3D8]">
          <button
            type="button"
            onClick={() => openEnquiryModal(category.title)}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#173B2B] hover:bg-[#F36B12] text-white hover:text-white font-body font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl transition-all duration-200 group/btn shadow-sm active:scale-98"
            aria-label={`Enquire about ${category.title} on WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 fill-[#F36B12] text-transparent group-hover/btn:fill-white transition-colors" />
            <span>Enquire on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
}
