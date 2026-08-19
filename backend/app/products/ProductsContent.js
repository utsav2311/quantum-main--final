"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Stagger, itemVariants } from "@/components/Reveal";
import { DEVICES, CATEGORIES, IMAGES } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const initial = searchParams.get("cat") || "All";
  const [filter, setFilter] = useState(CATEGORIES.includes(initial) ? initial : "All");

  useEffect(() => {
    const c = searchParams.get("cat");
    if (c && CATEGORIES.includes(c)) setFilter(c);
    else if (!c) setFilter("All");
  }, [searchParams]);

  const filtered = useMemo(
    () => (filter === "All" ? DEVICES : DEVICES.filter((d) => d.category === filter)),
    [filter]
  );

  const setCat = (c) => {
    setFilter(c);
    if (c === "All") {
      router.push(pathname);
    } else {
      router.push(`${pathname}?cat=${encodeURIComponent(c)}`);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap no-scrollbar" data-testid="product-filters">
        {["All", ...CATEGORIES].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            data-testid={`filter-${c.toLowerCase()}`}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-5 sm:py-2.5 sm:text-sm font-display ${
              filter === c ? "bg-[#0B4D95] text-white shadow-md shadow-[#0B4D95]/20" : "border border-[#E2E8F0] bg-white text-[#0B121C] hover:border-[#0B4D95]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <Stagger key={filter} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((d) => (
          <motion.div key={d.slug} variants={itemVariants}>
            <Link href={`/${d.slug}`} data-testid={`product-card-${d.slug}`} className="group block h-full overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGES[d.img]}
                  alt={`${d.title} — Custom ${d.category} Solution in Abu Dhabi UAE`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0B4D95] backdrop-blur">{d.category}</span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold leading-tight text-[#0B121C]">{d.title}</h3>
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-[#94A3B8] transition-colors group-hover:text-[#0284C7]" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{d.tagline}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
