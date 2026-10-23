"use client";

import { ReactNode } from "react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

interface ListingEnquiryButtonProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function ListingEnquiryButton({
  title,
  children,
  className = "",
}: ListingEnquiryButtonProps) {
  const { openEnquiryModal } = useEnquiryModal();

  return (
    <button
      type="button"
      onClick={() => openEnquiryModal(title)}
      className={className}
      aria-label={`Enquire about ${title}`}
    >
      {children}
    </button>
  );
}