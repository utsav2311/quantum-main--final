import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadModal from "@/components/LeadModal";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "sonner";
import { COMPANY } from "@/lib/site";

export const metadata = {
  metadataBase: new URL("https://quantumuae.ae"),
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: "Tailored prosthetic & orthotic solutions for hospitals and clinics — engineered with GAIT analysis, CAD/CAM design and in-house 3D printing.",
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  verification: {
    google: "CArl1yGcVkr2Q5LqFedH5t6m3CzeiUvHWQTqOsxv_NA",
  },
  openGraph: {
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description: "Tailored prosthetic & orthotic solutions for hospitals and clinics — engineered with GAIT analysis, CAD/CAM design and in-house 3D printing.",
    url: "https://quantumuae.ae",
    siteName: COMPANY.name,
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} Logo`,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
