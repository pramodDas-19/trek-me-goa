"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
      <article className="group flex flex-col justify-between w-full h-full bg-white rounded-xl overflow-hidden border border-sand shadow-sm hover:shadow-md transition-all duration-200 select-none">
        {/* Category Image */}
        <div className="relative h-28 sm:h-36 w-full overflow-hidden bg-forest-green/10">
          <Image
            src={category.image}
            alt={category.title}
            fill
            sizes="(max-width: 640px) 180px, 240px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10 gap-1">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-body font-semibold tracking-wider uppercase bg-forest-green/90 backdrop-blur-md text-white border border-white/10 line-clamp-1">
              {category.tag}
            </span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-body font-bold bg-adventure-orange text-white shrink-0">
              {category.listingCount}
            </span>
          </div>

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-3 flex flex-col flex-1 justify-between bg-white">
          <div>
            <h3 className="font-heading font-extrabold text-base text-forest-green leading-tight line-clamp-1">
              {category.title}
            </h3>
            <p className="mt-1 text-[11px] font-body text-charcoal/75 leading-tight line-clamp-2">
              {category.description}
            </p>
          </div>

        
<div className="mt-2.5 pt-2 border-t border-sand flex flex-col gap-1.5">
  <Link
    href={`/services/${category.id}`}
    className="w-full inline-flex items-center justify-center gap-1.5 bg-adventure-orange hover:bg-[#d95b0b] text-white font-body font-semibold text-[11px] py-1.5 px-2 rounded-lg transition-colors active:scale-95"
    aria-label={`View listings for ${category.title}`}
  >
    <span>View Listing</span>
    <ArrowRight className="w-3 h-3" />
  </Link>

  <button
    type="button"
    onClick={() => openEnquiryModal(category.title)}
    className="w-full inline-flex items-center justify-center gap-1.5 bg-forest-green hover:bg-[#244F3B] text-white font-body font-semibold text-[11px] py-1.5 px-2 rounded-lg transition-colors active:scale-95"
    aria-label={`Enquire about ${category.title}`}
  >
    <MessageCircle className="w-3 h-3 fill-adventure-orange text-transparent" />
    <span>Enquire</span>
  </button>
</div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between w-77.5 sm:w-87.5 shrink-0 bg-white rounded-2xl overflow-hidden border border-sand shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 focus-within:ring-2 focus-within:ring-adventure-orange select-none mx-3">
      {/* Category Image */}
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-forest-green/10">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 640px) 310px, 350px"
          className="object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-body font-semibold tracking-wider uppercase bg-forest-green/85 backdrop-blur-md text-white border border-white/10">
            {category.tag}
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-bold bg-adventure-orange text-white shadow-sm">
            {category.listingCount} {category.listingCount === 1 ? "Listing" : "Listings"}
          </span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

        {/* Bottom image highlight banner */}
        <div className="absolute bottom-3 left-3 right-3">
          <span className="text-xs font-body font-medium text-sand bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded inline-block">
            {category.highlight}
          </span>
        </div>
      </div>

      {/* Card Content (Bullet points removed as requested) */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-white">
        <div>
          <h3 className="font-heading font-extrabold text-2xl text-forest-green group-hover:text-adventure-orange transition-colors leading-tight line-clamp-1">
            {category.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm font-body text-charcoal/80 leading-relaxed line-clamp-2">
            {category.description}
          </p>
        </div>

       
        
{/* Card CTA Actions */}
<div className="mt-5 pt-3.5 border-t border-sand flex flex-col sm:flex-row gap-2">
  <Link
    href={`/services/${category.id}`}
    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-adventure-orange hover:bg-[#d95b0b] text-white font-body font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all duration-200 shadow-sm active:scale-95"
    aria-label={`View listings for ${category.title}`}
  >
    <span>View Listing</span>
    <ArrowRight className="w-3.5 h-3.5" />
  </Link>

  <button
    type="button"
    onClick={() => openEnquiryModal(category.title)}
    className="flex-1 inline-flex items-center justify-center gap-2 bg-forest-green hover:bg-[#244F3B] text-white font-body font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-all duration-200 shadow-sm active:scale-95"
    aria-label={`Enquire about ${category.title} on WhatsApp`}
  >
    <MessageCircle className="w-4 h-4 fill-adventure-orange text-transparent" />
    <span>Enquire</span>
  </button>
</div>
      </div>
    </article>
  );
}
