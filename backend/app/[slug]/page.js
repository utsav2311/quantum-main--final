import { getDevice, DEVICES, IMAGES, COMPANY } from "@/lib/site";
import PageHero from "@/components/PageHero";
import DeviceContent from "./DeviceContent";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return DEVICES.map((d) => ({
    slug: d.slug,
  }));
}

export async function generateMetadata({ params }) {
  const device = getDevice(params.slug);
  if (!device) {
    return {
      title: `Page Not Found | ${COMPANY.name}`,
    };
  }

  const title = `${device.title} | ${COMPANY.name} — Abu Dhabi, UAE`;
  const description = device.condition || device.tagline || `Advanced ${device.title} custom fabricated with 3D CAD/CAM technology in Abu Dhabi, UAE.`;
  const url = `https://quantumuae.ae/${params.slug}`;
  const img = IMAGES[device.img] || IMAGES.lab;

  return {
    title,
    description,
    keywords: [
      device.title,
      `${device.title} Abu Dhabi`,
      `${device.title} UAE`,
      `${device.category} Dubai`,
      "Quantum Medical UAE",
      "prosthetics Abu Dhabi",
      "orthotics UAE",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY.name,
      locale: "en_AE",
      type: "article",
      images: [
        {
          url: img,
          width: 1200,
          height: 630,
          alt: `${device.title} — ${COMPANY.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img],
    },
  };
}

export default function DynamicDevicePage({ params }) {
  const device = getDevice(params.slug);

  if (!device) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-[90px] text-center">
        <h1 className="font-display text-3xl font-bold text-[#0B121C]">Page not found</h1>
        <Link href="/products" className="mt-4 rounded-full bg-[#0B4D95] px-6 py-3 font-display text-sm font-semibold text-white">Back to Products</Link>
      </div>
    );
  }

  const img = IMAGES[device.img] || IMAGES.lab;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalDevice",
    "name": device.title,
    "description": device.condition || device.tagline,
    "image": `https://quantumuae.ae${img}`,
    "category": device.category,
    "manufacturer": {
      "@type": "Organization",
      "name": COMPANY.name,
      "url": "https://quantumuae.ae",
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AED",
      "availability": "https://schema.org/InStock",
      "url": `https://quantumuae.ae/${params.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <DeviceContent device={device} img={img} />
    </>
  );
}
