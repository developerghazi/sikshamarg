import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar          from "@/components/layout/Navbar";
import Footer          from "@/components/layout/Footer";
import WhatsAppButton  from "@/components/layout/WhatsAppButton";
import { siteConfig }  from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "admission counselling",
    "college counselling Lucknow",
    "college counselling Mumbai",
    "online admission counselling India",
    "SOP writing",
    "university shortlisting",
    "SikshaMarg",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type:        "website",
    locale:      "en_IN",
    url:         `https://${siteConfig.domain}`,
    siteName:    siteConfig.name,
    title:       `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card:        "summary_large_image",
    title:       `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 mt-[72px] md:mt-[100px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
