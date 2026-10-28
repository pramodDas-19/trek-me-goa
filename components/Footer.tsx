"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_CONFIG } from "@/lib/config";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.64 13.5 14.48 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.54 14.67C13.4 14.84 13.26 14.86 13.01 14.73C12.76 14.61 11.96 14.34 11.01 13.49C10.27 12.83 9.77 12.02 9.63 11.77C9.49 11.52 9.62 11.39 9.74 11.26C9.86 11.15 10 10.98 10.12 10.84C10.25 10.7 10.29 10.6 10.37 10.43C10.45 10.27 10.41 10.12 10.35 10C10.29 9.87 9.8 8.67 9.6 8.18C9.4 7.7 9.2 7.77 9.05 7.76C8.91 7.75 8.75 7.75 8.58 7.75C8.42 7.75 8.15 7.81 7.93 8.05C7.7 8.3 7.07 8.89 7.07 10.09C7.07 11.29 7.95 12.45 8.07 12.61C8.19 12.78 9.79 15.24 12.24 16.3C12.82 16.55 13.28 16.7 13.63 16.81C14.21 17 14.74 16.97 15.16 16.91C15.63 16.84 16.61 16.32 16.81 15.75C17.02 15.17 17.02 14.69 16.95 14.58C16.89 14.47 16.73 14.41 16.48 14.28L16.57 14.39Z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const QUICK_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Experiences", href: "#experiences" },
  { name: "Reviews", href: "#reviews" },
  { name: "Gallery", href: "#gallery" },
];

export default function Footer() {
  const { openEnquiryModal } = useEnquiryModal();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#0E291C] text-white relative py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 4-Column Grid matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Column 1: Brand Logo & Title */}
          <div className="lg:col-span-4 flex items-center gap-3.5">
            <Link
              href="#hero"
              onClick={handleScrollToTop}
              className="flex items-center gap-3.5 group focus-visible:ring-2 focus-visible:ring-adventure-orange rounded-lg transition-transform"
              aria-label="Trek Me @ Goa — Scroll to top"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-adventure-orange bg-adventure-orange shrink-0 shadow-md">
                <Image
                  src="/logo.jpg"
                  alt="Trek Me @ Goa Official Logo"
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="font-satisfy text-3xl sm:text-4xl text-white group-hover:text-adventure-orange transition-colors leading-none select-none tracking-wide">
                Trek me @ goa
              </span>
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-body font-bold text-base sm:text-lg text-white mb-3 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 font-body text-sm text-white/80">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-adventure-orange transition-colors inline-block focus-visible:ring-2 focus-visible:ring-adventure-orange rounded"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="lg:col-span-3">
            <h4 className="font-body font-bold text-base sm:text-lg text-white mb-3 tracking-wide">
              Connect With Us
            </h4>
            <div className="space-y-3 font-body text-sm">
              {/* WhatsApp Enquiry Button */}
              <button
                type="button"
                onClick={() => openEnquiryModal("General Goa Trek & Tour Enquiry")}
                className="flex items-center gap-2.5 text-white/85 hover:text-white group transition-colors focus-visible:ring-2 focus-visible:ring-adventure-orange rounded py-0.5 cursor-pointer text-left"
                aria-label="Enquire on WhatsApp"
              >
                <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 text-white shadow-sm group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                </div>
                <span>Enquire on WhatsApp</span>
              </button>

              {/* Instagram Link */}
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-white/85 hover:text-white group transition-colors focus-visible:ring-2 focus-visible:ring-adventure-orange rounded py-0.5"
                aria-label="Follow on Instagram"
              >
                <div className="w-6 h-6 rounded-md border border-adventure-orange text-adventure-orange flex items-center justify-center shrink-0 group-hover:bg-adventure-orange group-hover:text-white transition-all">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 4: Trek Me @ Goa Info */}
          <div className="lg:col-span-3">
            <h4 className="font-body font-bold text-base sm:text-lg text-white mb-3 tracking-wide">
              Trek Me @ Goa
            </h4>
            <p className="text-sm font-body text-white/80 leading-relaxed">
              We organise tours and treks in Goa at most exotic locations | camping location | shooting location | hidden beaches and waterfalls treks | tours.
            </p>
          </div>
        </div>

        {/* Horizontal Divider Line & Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-body text-white/70">
          <p>&copy; 2026 Trek Me @ Goa. All rights reserved.</p>

          <div className="flex items-center gap-1.5 text-white/75">
            <span>Explore Nature. Experience Goa.</span>
            <span role="img" aria-label="palm tree" className="text-base select-none">
              🌴
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
