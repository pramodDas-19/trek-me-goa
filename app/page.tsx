import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ReviewsSection from "@/components/ReviewsSection";
import CustomerGallery from "@/components/CustomerGallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8F6F0] text-[#242A25]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
        {/* A. Hero Section */}
        <HeroSection />

        {/* B. Services Section (11 categories, 30 listings) */}
        <ServicesSection />

        {/* C. Local Experiences Section (5 authentic cultural activities) */}
        <ExperiencesSection />

        {/* D. Customer Reviews Section (Star ratings & verified slots) */}
        <ReviewsSection />

        {/* E. Happy Customers Gallery (Responsive grid with accessible lightbox) */}
        <CustomerGallery />

        {/* F. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* G. Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloat />
    </div>
  );
}
