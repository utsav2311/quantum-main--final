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
  return {
    title: `${device.title} | ${COMPANY.name}`,
    description: device.tagline || (device.condition ? device.condition.slice(0, 160) : ""),
  };
}

export default function DynamicDevicePage({ params }) {
  const device = getDevice(params.slug);

  if (!device) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-[70px] text-center">
        <h1 className="font-display text-3xl font-bold text-[#0B121C]">Page not found</h1>
        <Link href="/products" className="mt-4 rounded-full bg-[#0B4D95] px-6 py-3 font-display text-sm font-semibold text-white">Back to Products</Link>
      </div>
    );
  }

  const img = IMAGES[device.img] || IMAGES.lab;

  return (
    <DeviceContent device={device} img={img} />
  );
}
