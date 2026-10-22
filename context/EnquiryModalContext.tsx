"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface EnquiryModalContextType {
  isOpen: boolean;
  selectedService: string;
  openEnquiryModal: (serviceName?: string) => void;
  closeEnquiryModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(undefined);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Offbeat Trekking Expeditions");

  const openEnquiryModal = (serviceName?: string) => {
    setSelectedService(serviceName || "Offbeat Trekking Expeditions");
    setIsOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryModalContext.Provider
      value={{
        isOpen,
        selectedService,
        openEnquiryModal,
        closeEnquiryModal,
      }}
    >
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return context;
}
