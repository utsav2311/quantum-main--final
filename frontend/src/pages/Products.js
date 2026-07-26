import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import PageHero from "@/components/PageHero";
import { Stagger, itemVariants } from "@/components/Reveal";
import { DEVICES, CATEGORIES, IMAGES, COMPANY } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("cat") || "All";
  const [filter, setFilter] = useState(CATEGORIES.includes(initial) ? initial : "All");

  useEffect(() => {
    const c = params.get("cat");
    if (c && CATEGORIES.includes(c)) setFilter(c);
  }, [params]);

  const filtered = useMemo(
    () => (filter === "All" ? DEVICES : DEVICES.filter((d) => d.category === filter)),
    [filter]
  );

  const setCat = (c) => {
    setFilter(c);
    if (c === "All") setParams({});
    else setParams({ cat: c });
  };

  return (
    <div data-testid="products-page">
      <Helmet>
        <title>{`Products & Clinical Solutions | ${COMPANY.name}`}</title>
        <meta name="description" content="Explore our complete clinical portfolio of custom orthotics, prosthetics, pediatric care, and mobility systems engineered with 3D precision." />
      </Helmet>
      <PageHero
        label="Clinical Portfolio"
        title="Digitally engineered devices for every clinical indication."
        subtitle="Explore our full portfolio of custom orthotics, prosthetics, pediatric bracing and mobility solutions — fabricated in-house to CAD/CAM precision."
        image={IMAGES.tools}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap gap-2.5" data-testid="product-filters">
          {["All", ...CATEGORIES].map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              data-testid={`filter-${c.toLowerCase()}`}
              className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-all ${
                filter === c ? "bg-[#0B4D95] text-white" : "border border-[#E2E8F0] bg-white text-[#0B121C] hover:border-[#0B4D95]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <Stagger key={filter} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <motion.div key={d.slug} variants={itemVariants}>
              <Link to={`/${d.slug}`} data-testid={`product-card-${d.slug}`} className="group block h-full overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img src={IMAGES[d.img]} alt={d.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0B4D95] backdrop-blur">{d.category}</span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold leading-tight text-[#0B121C]">{d.title}</h3>
                    <ArrowUpRight size={18} className="mt-1 shrink-0 text-[#94A3B8] transition-colors group-hover:text-[#FF6B4A]" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{d.tagline}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
