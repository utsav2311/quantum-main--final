import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadModal from "@/components/LeadModal";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "sonner";
import { COMPANY } from "@/lib/site";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B4D95",
};

export const metadata = {
  metadataBase: new URL("https://quantumuae.ae"),
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline} — Prosthetics & Orthotics Abu Dhabi, UAE`,
    template: `%s | ${COMPANY.name}`,
  },
  description: "Leading prosthetic & orthotic clinical facility in Abu Dhabi, UAE. Specialized in 3D-printed cranial helmets, scoliosis bracing, bionic limbs, GAIT analysis, and custom orthotic insoles.",
  keywords: [
    "prosthetics Abu Dhabi",
    "orthotics UAE",
    "cranial helmet Abu Dhabi",
    "plagiocephaly helmet UAE",
    "scoliosis bracing UAE",
    "custom orthotic insoles",
    "artificial limbs UAE",
    "pediatric prosthetics",
    "GAIT analysis Abu Dhabi",
    "3D printed prosthetics UAE",
    "Quantum Medical Abu Dhabi",
  ],
  authors: [{ name: "Quantum Medical UAE", url: "https://quantumuae.ae" }],
  creator: "Quantum Medical",
  publisher: "Quantum Medical",
  alternates: {
    canonical: "https://quantumuae.ae",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  verification: {
    google: "CArl1yGcVkr2Q5LqFedH5t6m3CzeiUvHWQTqOsxv_NA",
  },
  openGraph: {
    title: `${COMPANY.name} | ${COMPANY.tagline} — Advanced P&O Solutions`,
    description: "Personalized prosthetics & orthotics engineered with 3D CAD/CAM, GAIT analysis and in-house 3D printing in Abu Dhabi, UAE.",
    url: "https://quantumuae.ae",
    siteName: COMPANY.name,
    locale: "en_AE",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} — Prosthetic & Orthotic Healthcare in Abu Dhabi, UAE`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Advanced Prosthetics & Orthotics UAE`,
    description: "Leading P&O clinic in Abu Dhabi — 3D cranial helmets, scoliosis braces, bionic limbs, and GAIT analysis.",
    images: ["/logo.webp"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Quantum Medical",
  "legalName": "Quantum Medical Equipment Trading & Rehabilitation",
  "alternateName": "Quantum Medical UAE",
  "url": "https://quantumuae.ae",
  "logo": "https://quantumuae.ae/logo.webp",
  "image": "https://quantumuae.ae/logo.webp",
  "telephone": "+971558488759",
  "email": "info@quantumuae.ae",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Danah, Zone 1",
    "addressLocality": "Abu Dhabi",
    "addressRegion": "Abu Dhabi",
    "addressCountry": "AE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "24.4882",
    "longitude": "54.3644",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00",
    },
  ],
  "medicalSpecialty": [
    "Orthotics",
    "Prosthetics",
    "Pediatrics",
    "Rehabilitation",
  ],
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/quantum_uae/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="App min-h-screen bg-[#F8F9FA] flex flex-col justify-between">
        <Providers>
          <SmoothScroll />
          <Toaster position="top-center" richColors />
          <LeadModal />
          <Navbar />
          <main className="flex-1 min-h-[75vh]">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
