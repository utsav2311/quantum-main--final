"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/site";


export default function WhatsAppButton() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float-btn"
      className="fixed bottom-4 right-4 z-[90] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white">
        <path d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.116.553 4.184 1.605 6.006L4 29l8.184-1.57a11.94 11.94 0 0 0 3.82.627h.004C22.63 28.057 28 22.674 28 16.05 28 8.383 22.625 3 16.004 3zm0 21.7h-.004a9.9 9.9 0 0 1-3.43-.606l-.246-.093-4.86.933.94-4.74-.16-.253a9.86 9.86 0 0 1-1.51-5.27c0-5.47 4.45-9.92 9.93-9.92 2.652 0 5.144 1.034 7.02 2.912a9.86 9.86 0 0 1 2.906 7.017c0 5.47-4.45 9.92-9.916 9.92zm5.44-7.42c-.297-.15-1.76-.868-2.033-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.76-1.653-2.057-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.242-.58-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.015-1.04 2.478 0 1.462 1.065 2.875 1.213 3.073.149.198 2.096 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.76-.719 2.008-1.413.247-.694.247-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      </svg>
    </motion.a>
  );
}
