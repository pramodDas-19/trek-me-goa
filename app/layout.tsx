import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Caveat, Dancing_Script, Satisfy } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trek-me-goa.com"),
  title: "Trek Me @ Goa — Discover Hidden Trails & Wild Waterfalls",
  description:
    "Discover offbeat trekking expeditions, secret waterfalls, cave explorations, and authentic local Goan experiences with Trek Me @ Goa.",
  keywords: [
    "Goa trekking",
    "Goa waterfalls",
    "Dudhsagar trek",
    "adventure travel Goa",
    "Goa cave exploration",
    "authentic Goan experiences",
    "offbeat Goa tours",
  ],
  authors: [{ name: "Trek Me @ Goa" }],
  openGraph: {
    title: "Trek Me @ Goa — Wild Goa Adventure & Nature Expeditions",
    description:
      "Go beyond the usual Goa. Hidden trails, wild waterfalls, and authentic local Goan living.",
    images: ["/logo.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${dmSans.variable} ${caveat.variable} ${dancingScript.variable} ${satisfy.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#242A25] selection:bg-[#F36B12] selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
