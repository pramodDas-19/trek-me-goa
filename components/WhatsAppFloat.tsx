"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    const handleScroll = () => {
      // Reveal the floating button when user scrolls down past the hero
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick WhatsApp contact"
      className={`fixed bottom-5 right-5 z-40 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Clean Floating WhatsApp Action Button */}
      <button
        type="button"
        onClick={() => openEnquiryModal("Quick Goa Trek Enquiry")}
        className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F36B12] hover:bg-[#dc5e0c] text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 focus-visible:ring-4 focus-visible:ring-white border-2 border-white/20 cursor-pointer"
        aria-label="Instant WhatsApp Enquiry with Trek Me @ Goa"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-transparent" />
        <span className="sr-only">Contact us on WhatsApp</span>
      </button>
    </aside>
  );
}

