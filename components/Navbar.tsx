"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle, Compass } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Experiences", href: "#experiences" },
  { name: "Reviews", href: "#reviews" },
  { name: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#173B2B]/95 backdrop-blur-md shadow-md py-3.5 border-b border-white/10"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Cursive Treatment matching reference */}
            <Link
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-[#F36B12] rounded-lg transition-transform"
              aria-label="Trek Me @ Goa — Back to top"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#F36B12] shadow-sm shrink-0 bg-[#F36B12]">
                <Image
                  src="/logo.jpg"
                  alt="Trek Me @ Goa Logo"
                  fill
                  sizes="40px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <span className="font-satisfy text-2xl sm:text-[1.85rem] text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] group-hover:text-[#F36B12] transition-colors leading-none select-none">
                Trek me @ goa
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-9" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-body text-sm font-medium tracking-wide text-white/90 hover:text-[#F36B12] transition-colors relative py-1 focus-visible:ring-2 focus-visible:ring-[#F36B12] rounded"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop WhatsApp CTA Button matching reference */}
            <div className="hidden md:flex items-center">
              <button
                type="button"
                onClick={() => openEnquiryModal("General Adventure Enquiry")}
                className="inline-flex items-center gap-2.5 bg-[#F36B12] hover:bg-[#dc5e0c] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                aria-label="Enquire on WhatsApp with Trek Me @ Goa"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Enquire on WhatsApp</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => openEnquiryModal("Quick Goa Trek Enquiry")}
                className="bg-[#F36B12] text-white p-2.5 rounded-full focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                aria-label="Quick WhatsApp enquiry"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:text-[#F36B12] hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#F36B12]"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Animated Drawer Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#173B2B] z-50 md:hidden shadow-2xl flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out border-l border-[#49634B]/40 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Menu"
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#49634B]/40">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-[#F36B12]">
                <Image src="/logo.jpg" alt="Logo" fill sizes="36px" className="object-cover" />
              </div>
              <span className="font-satisfy text-2xl text-white drop-shadow-sm select-none">
                Trek me @ goa
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white rounded-lg focus-visible:ring-2 focus-visible:ring-[#F36B12]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-2 mt-6" aria-label="Mobile navigation links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-heading text-2xl font-bold tracking-wide text-white/90 hover:text-[#F36B12] hover:bg-white/5 px-4 py-3 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <Compass className="w-4 h-4 text-[#F36B12]/70" />
              </a>
            ))}
          </nav>
        </div>

        {/* Drawer Footer with WhatsApp Action */}
        <div className="pt-6 border-t border-[#49634B]/40 space-y-4">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              openEnquiryModal("Custom Adventure Booking");
            }}
            className="w-full flex items-center justify-center gap-2 bg-[#F36B12] text-white font-body font-bold py-3.5 px-4 rounded-full shadow-lg active:scale-98 transition-transform cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-white text-transparent" />
            <span>Enquire on WhatsApp</span>
          </button>
          <p className="text-xs text-center text-[#E8E3D8]/60 font-body">
            Wild Goa • Hidden Trails • Authentic Living
          </p>
        </div>
      </div>
    </>
  );
}

