import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MessageSquare, User, Sparkles, Check, MapPin } from "lucide-react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import { WHATSAPP_CONFIG } from "@/lib/config";
import { SERVICE_CATEGORIES, LOCAL_EXPERIENCES } from "@/lib/data";
import { SERVICE_LISTINGS, ServiceListing } from "@/lib/listings";

const GROUP_SIZES = [
  "1 Person",
  "2 People",
  "3-5 People",
  "6-10 People",
  "10+ Group",
];

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.64 13.5 14.48 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.54 14.67C13.4 14.84 13.26 14.86 13.01 14.73C12.76 14.61 11.96 14.34 11.01 13.49C10.27 12.83 9.77 12.02 9.63 11.77C9.49 11.52 9.62 11.39 9.74 11.26C9.86 11.15 10 10.98 10.12 10.84C10.25 10.7 10.29 10.6 10.37 10.43C10.45 10.27 10.41 10.12 10.35 10C10.29 9.87 9.8 8.67 9.6 8.18C9.4 7.7 9.2 7.77 9.05 7.76C8.91 7.75 8.75 7.75 8.58 7.75C8.42 7.75 8.15 7.81 7.93 8.05C7.7 8.3 7.07 8.89 7.07 10.09C7.07 11.29 7.95 12.45 8.07 12.61C8.19 12.78 9.79 15.24 12.24 16.3C12.82 16.55 13.28 16.7 13.63 16.81C14.21 17 14.74 16.97 15.16 16.91C15.63 16.84 16.61 16.32 16.81 15.75C17.02 15.17 17.02 14.69 16.95 14.58C16.89 14.47 16.73 14.41 16.48 14.28L16.57 14.39Z" />
    </svg>
  );
}

// Group listings by category for categorized selection
const WATERFALL_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "waterfall-treks");
const OFFBEAT_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "offbeat-trekking");
const KAYAKING_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "kayaking");
const WATERSPORTS_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "watersports-surfing");
const DUDHSAGAR_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "dudhsagar-waterfall");
const SCUBA_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "scuba-diving");
const ATV_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "atv-booking");
const FARM_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "farm-picnic");
const HERITAGE_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "churches-chapels");
const MOUNTAIN_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "mountain-treks");
const CAVE_LISTINGS = SERVICE_LISTINGS.filter((l) => l.serviceId === "cave-exploration");

function EnquiryForm({
  initialActivity,
  onClose,
}: {
  initialActivity: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [activity, setActivity] = useState(initialActivity || SERVICE_LISTINGS[0].title);
  const [date, setDate] = useState("");
  const [groupSize, setGroupSize] = useState("2 People");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialActivity) {
      setActivity(initialActivity);
    }
  }, [initialActivity]);

  // Find matching details for the currently selected activity
  const matchedListing = SERVICE_LISTINGS.find(
    (l) => l.title.toLowerCase() === activity.toLowerCase() || l.id === activity
  );
  const matchedExperience = LOCAL_EXPERIENCES.find(
    (e) => e.title.toLowerCase() === activity.toLowerCase() || e.id === activity
  );
  const matchedCategory = SERVICE_CATEGORIES.find(
    (c) => c.title.toLowerCase() === activity.toLowerCase() || c.id === activity
  );

  const displayImage =
    matchedListing?.image || matchedExperience?.image || matchedCategory?.image;
  const displayLocation =
    matchedListing?.location || matchedExperience?.locationNote;
  const displayPrice = matchedListing?.price
    ? `₹${matchedListing.price.toLocaleString("en-IN")}${
        matchedListing.priceUnit ? ` / ${matchedListing.priceUnit.replace("per ", "")}` : ""
      }`
    : matchedListing?.pricingOptions?.[0]
    ? `From ₹${matchedListing.pricingOptions[0].price.toLocaleString("en-IN")}`
    : null;
  const displayGroupLabel = matchedListing?.groupLabel;

  // Check if current activity is already represented in standard options
  const isCustomOption =
    !matchedListing &&
    !matchedExperience &&
    !matchedCategory &&
    ![
      "Custom Group / Corporate Trek",
      "General Adventure Enquiry",
      "Quick Goa Trek Enquiry",
      "Photo Gallery & Upcoming Trek Dates",
    ].includes(activity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name to proceed.");
      return;
    }

    setError("");

    // Build the formatted WhatsApp message with clean markdown & details
    const messageLines = [
      `🌿 *Trek Me @ Goa — Expedition Enquiry*`,
      ``,
      `👤 *Name:* ${name.trim()}`,
      `📍 *Enquiring For:* ${activity}`,
    ];

    if (matchedListing?.location) {
      messageLines.push(`🗺️ *Location:* ${matchedListing.location}`);
    } else if (matchedExperience?.locationNote) {
      messageLines.push(`🗺️ *Location:* ${matchedExperience.locationNote}`);
    }

    if (matchedListing?.price) {
      messageLines.push(
        `💰 *Package Price:* ₹${matchedListing.price.toLocaleString("en-IN")} ${
          matchedListing.priceUnit || ""
        }`
      );
    } else if (matchedListing?.pricingOptions?.length) {
      const optionsText = matchedListing.pricingOptions
        .map((o) => `${o.label}: ₹${o.price.toLocaleString("en-IN")}`)
        .join(" | ");
      messageLines.push(`💰 *Pricing:* ${optionsText}`);
    }

    messageLines.push(`📅 *Preferred Date:* ${date ? date : "Flexible / Upcoming Dates"}`);
    messageLines.push(`👥 *Group Size:* ${groupSize}`);

    if (notes.trim()) {
      messageLines.push(`💬 *Special Requests / Notes:* ${notes.trim()}`);
    }

    messageLines.push(``);
    messageLines.push(`Could you please confirm slot availability, pickup options, and details? Thanks!`);

    const fullMessage = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Close the modal
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto max-h-[calc(90vh-90px)]">
      {/* Error Alert */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-body flex items-center gap-2">
          <span>⚠️ {error}</span>
        </div>
      )}

      {/* 🌟 Highlighted "Enquiring For" Card */}
      <div className="bg-forest-green/5 border-2 border-forest-green/20 rounded-2xl p-3 sm:p-3.5 flex items-center gap-3.5 relative overflow-hidden transition-all">
        {displayImage ? (
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-forest-green/15 shadow-sm bg-white">
            <Image
              src={displayImage}
              alt={activity}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-xl bg-adventure-orange/15 border border-adventure-orange/30 flex items-center justify-center shrink-0 text-adventure-orange">
            <Sparkles className="w-6 h-6" />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-body font-bold tracking-wider uppercase bg-adventure-orange text-white shadow-xs">
              Enquiring For
            </span>
            {displayLocation && (
              <span className="text-[11px] font-body text-charcoal-muted truncate font-medium flex items-center gap-0.5">
                <MapPin className="w-3 h-3 text-forest-green/70 shrink-0" />
                <span className="truncate">{displayLocation}</span>
              </span>
            )}
          </div>

          <h3 className="font-heading font-extrabold text-sm sm:text-base text-forest-green leading-snug line-clamp-2">
            {activity}
          </h3>

          {(displayPrice || displayGroupLabel) && (
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              {displayPrice && (
                <span className="text-xs font-body font-bold text-adventure-orange">
                  {displayPrice}
                </span>
              )}
              {displayGroupLabel && (
                <span className="text-[10px] font-body text-charcoal-muted truncate">
                  • {displayGroupLabel}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Field 1: Your Name */}
      <div>
        <label className="block text-xs font-body font-bold text-forest-green uppercase tracking-wider mb-1.5">
          Your Name <span className="text-adventure-orange">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal-muted">
            <User className="w-4 h-4" />
          </div>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError("");
            }}
            placeholder="Enter your full name"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-sand text-charcoal placeholder:text-charcoal/40 text-sm font-body focus:border-adventure-orange focus:ring-2 focus:ring-adventure-orange/20 transition-all outline-none"
          />
        </div>
      </div>

      {/* Field 2: Select Activity / Service (Full Catalog List) */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="block text-xs font-body font-bold text-forest-green uppercase tracking-wider">
            Select Activity / Expedition
          </label>
          <span className="text-[11px] text-charcoal-muted font-body">
            32+ Treks & Adventures
          </span>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-adventure-orange">
            <Sparkles className="w-4 h-4" />
          </div>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-white border border-sand text-charcoal text-sm font-body font-medium focus:border-adventure-orange focus:ring-2 focus:ring-adventure-orange/20 transition-all outline-none appearance-none cursor-pointer"
          >
            {/* Custom or selected activity not in standard list */}
            {isCustomOption && (
              <option value={activity}>
                {activity}
              </option>
            )}

            {/* WATERFALL TREKS */}
            <optgroup label="🌊 Waterfall Treks (8 Expeditions)">
              {WATERFALL_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(₹${l.price.toLocaleString("en-IN")}${l.priceUnit ? `/${l.priceUnit.replace("per ", "")}` : ""})` : ""}
                </option>
              ))}
            </optgroup>

            {/* OFFBEAT & COASTAL TREKS */}
            <optgroup label="🧗 Offbeat Coastal & Forest Treks (7 Expeditions)">
              {OFFBEAT_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(₹${l.price.toLocaleString("en-IN")}${l.priceUnit ? `/${l.priceUnit.replace("per ", "")}` : ""})` : ""}
                </option>
              ))}
            </optgroup>

            {/* KAYAKING & WATERWAY SAFARIS */}
            <optgroup label="🚣 Kayaking & Boat Safaris (4 Expeditions)">
              {KAYAKING_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(₹${l.price.toLocaleString("en-IN")}${l.priceUnit ? `/${l.priceUnit.replace("per ", "")}` : ""})` : ""}
                </option>
              ))}
            </optgroup>

            {/* WATERSPORTS & SURFING */}
            <optgroup label="🏄 Watersports & Surfing Packages (2 Packages)">
              {WATERSPORTS_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(₹${l.price.toLocaleString("en-IN")}${l.priceUnit ? `/${l.priceUnit.replace("per ", "")}` : ""})` : ""}
                </option>
              ))}
            </optgroup>

            {/* DUDHSAGAR JEEP SAFARI */}
            <optgroup label="🚙 Dudhsagar Waterfall Tours">
              {DUDHSAGAR_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(₹${l.price.toLocaleString("en-IN")}${l.priceUnit ? `/${l.priceUnit.replace("per ", "")}` : ""})` : ""}
                </option>
              ))}
            </optgroup>

            {/* SCUBA DIVING */}
            <optgroup label="🤿 Scuba Diving Adventures">
              {SCUBA_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(₹${l.price.toLocaleString("en-IN")}${l.priceUnit ? `/${l.priceUnit.replace("per ", "")}` : ""})` : ""}
                </option>
              ))}
            </optgroup>

            {/* ATV QUAD BIKING */}
            <optgroup label="🏎️ ATV Off-Road Quad Biking">
              {ATV_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(from ₹${l.price.toLocaleString("en-IN")})` : ""}
                </option>
              ))}
            </optgroup>

            {/* FARM PICNIC */}
            <optgroup label="🐎 Farm Picnics & Stays (2 Experiences)">
              {FARM_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(₹${l.price.toLocaleString("en-IN")}${l.priceUnit ? `/${l.priceUnit.replace("per ", "")}` : ""})` : ""}
                </option>
              ))}
            </optgroup>

            {/* GOA HERITAGE SIGHTSEEING */}
            <optgroup label="🏛️ Goa Heritage Sightseeing (2 Tours)">
              {HERITAGE_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(₹${l.price.toLocaleString("en-IN")}${l.priceUnit ? `/${l.priceUnit.replace("per ", "")}` : ""})` : ""}
                </option>
              ))}
            </optgroup>

            {/* MOUNTAIN TREKS */}
            <optgroup label="⛰️ Sahyadri Mountain Treks (2 Peaks)">
              {MOUNTAIN_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(₹${l.price.toLocaleString("en-IN")}${l.priceUnit ? `/${l.priceUnit.replace("per ", "")}` : ""})` : ""}
                </option>
              ))}
            </optgroup>

            {/* CAVE EXPLORATION */}
            <optgroup label="🦇 Ancient Cave Exploration (2 Caverns)">
              {CAVE_LISTINGS.map((l) => (
                <option key={l.id} value={l.title}>
                  {l.title} {l.price ? `(₹${l.price.toLocaleString("en-IN")}${l.priceUnit ? `/${l.priceUnit.replace("per ", "")}` : ""})` : ""}
                </option>
              ))}
            </optgroup>

            {/* AUTHENTIC LOCAL EXPERIENCES */}
            <optgroup label="🥥 Authentic Local Goan Experiences">
              {LOCAL_EXPERIENCES.map((e) => (
                <option key={e.id} value={e.title}>
                  {e.title} ({e.locationNote})
                </option>
              ))}
            </optgroup>

            {/* GENERAL & CUSTOM */}
            <optgroup label="✨ General Categories & Custom Booking">
              <option value="Custom Group / Corporate Trek">
                Custom Group / Corporate Trek
              </option>
              <option value="General Adventure Enquiry">
                General Adventure Enquiry
              </option>
              <option value="Quick Goa Trek Enquiry">
                Quick Goa Trek Enquiry
              </option>
              <option value="Photo Gallery & Upcoming Trek Dates">
                Photo Gallery & Upcoming Trek Dates
              </option>
              {SERVICE_CATEGORIES.map((c) => (
                <option key={c.id} value={c.title}>
                  {c.title} (General Category)
                </option>
              ))}
            </optgroup>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-charcoal-muted">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Field 3: Preferred Date */}
      <div>
        <label className="block text-xs font-body font-bold text-forest-green uppercase tracking-wider mb-1.5">
          Preferred Date
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-charcoal-muted">
            <Calendar className="w-4 h-4" />
          </div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-sand text-charcoal text-sm font-body focus:border-adventure-orange focus:ring-2 focus:ring-adventure-orange/20 transition-all outline-none"
          />
        </div>
      </div>

      {/* Field 4: Group Size (Chips Selector) */}
      <div>
        <label className="block text-xs font-body font-bold text-forest-green uppercase tracking-wider mb-1.5">
          Group Size / Number of Trekkers
        </label>
        <div className="flex flex-wrap gap-2">
          {GROUP_SIZES.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setGroupSize(size)}
              className={`text-xs font-body font-medium px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                groupSize === size
                  ? "bg-forest-green text-white border-forest-green shadow-sm font-semibold"
                  : "bg-white text-charcoal/80 border-sand hover:border-forest-green"
              }`}
            >
              {groupSize === size && <Check className="w-3 h-3 text-adventure-orange" />}
              <span>{size}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Field 5: Special Requests / Notes (Optional) */}
      <div>
        <label className="block text-xs font-body font-bold text-forest-green uppercase tracking-wider mb-1.5">
          Special Notes / Pickup Location (Optional)
        </label>
        <div className="relative">
          <div className="absolute top-2.5 left-3 pointer-events-none text-charcoal-muted">
            <MessageSquare className="w-4 h-4" />
          </div>
          <textarea
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. North Goa pickup, beginner trekker, sunrise timing..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-sand text-charcoal placeholder:text-charcoal/40 text-sm font-body focus:border-adventure-orange focus:ring-2 focus:ring-adventure-orange/20 transition-all outline-none resize-none"
          />
        </div>
      </div>

      {/* Submit to WhatsApp Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3.5 px-6 rounded-2xl bg-adventure-orange hover:bg-adventure-orange-hover text-white font-body font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-adventure-orange/30 active:scale-98 transition-all focus-visible:ring-2 focus-visible:ring-forest-green cursor-pointer"
        >
          <WhatsAppIcon className="w-5 h-5 fill-white text-transparent" />
          <span>Send Enquiry to WhatsApp</span>
        </button>
        <p className="text-center text-[11px] text-charcoal-muted mt-2 font-body">
          Instant response from our verified local Goan guides • No spam guaranteed
        </p>
      </div>
    </form>
  );
}

export default function EnquiryModal() {
  const { isOpen, selectedService, closeEnquiryModal } = useEnquiryModal();

  // Prevent background scrolling and support Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeEnquiryModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeEnquiryModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeEnquiryModal}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-warm-ivory rounded-3xl shadow-2xl overflow-hidden z-10 border border-sand my-auto max-h-[92vh] flex flex-col"
          >
            {/* Header: Forest Green with Brand Accent */}
            <div className="bg-forest-green text-white p-5 sm:p-6 relative overflow-hidden shrink-0">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-adventure-orange/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-adventure-orange bg-adventure-orange shrink-0 shadow-sm">
                    <Image
                      src="/logo.jpg"
                      alt="Trek Me @ Goa Logo"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2
                      id="enquiry-modal-title"
                      className="font-heading font-extrabold text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight"
                    >
                      Plan Your Goa Adventure
                    </h2>
                    <p className="text-xs text-sand/80 font-body">
                      Submit details directly to our guides via WhatsApp
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  className="p-2 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-adventure-orange cursor-pointer"
                  aria-label="Close enquiry modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Form Body keyed by initial selectedService */}
            <EnquiryForm
              key={selectedService || "default"}
              initialActivity={selectedService}
              onClose={closeEnquiryModal}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

