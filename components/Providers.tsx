"use client";

import React, { ReactNode } from "react";
import { EnquiryModalProvider } from "@/context/EnquiryModalContext";
import EnquiryModal from "@/components/EnquiryModal";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <EnquiryModalProvider>
      {children}
      <EnquiryModal />
    </EnquiryModalProvider>
  );
}
