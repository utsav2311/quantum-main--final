import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Cpu, Box, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IMAGES, HERO_CALLOUTS } from "@/data/site";

const lineReveal = {
  hidden: { y: "110%" },
  show: (i) => ({ y: 0, transition: { duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
};

const calloutIcons = [Cpu, Box, Users];

export default function Hero() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 120]);
  const imgScale = useTransform(scrollY, [0, 600], [1, 1.12]);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % HERO_CALLOUTS.length), 3200);
    return () => clearInterval(t);
  }, []);

  const lines = [
    { text: "Transforming" },
    { text: "Healthcare —" },
    { pre: "Join the ", hl: "B2B" },
    { text: "Revolution." },
  ];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0B121C]" data-testid="hero">
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img src={IMAGES.lab} alt="Clinical manufacturing laboratory" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B121C] via-[#0B121C]/85 to-[#0B121C]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B121C] via-transparent to-[#0B121C]/40" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A]"
        >
          <span className="h-px w-8 bg-[#FF6B4A]" /> Prosthetics &amp; Orthotics · B2B
        </motion.p>

        <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {lines.map((line, i) => (
            <span key={i} className="line-mask">
              <motion.span custom={i} variants={lineReveal} initial="hidden" animate="show" className="block">
                {line.hl ? (
                  <span>{line.pre}<span className="text-[#FF6B4A]">{line.hl}</span></span>
                ) : line.text}
              </motion.span>
            </span>
          ))}
        </h1>


        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Tailored prosthetic &amp; orthotic solutions for hospitals and clinics — engineered with GAIT analysis, CAD/CAM design and in-house 3D printing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => navigate("/b2b-innovation-hub")}
            data-testid="hero-b2b-btn"
            className="group flex items-center gap-2 rounded-full bg-[#FF6B4A] px-7 py-4 font-display text-sm font-semibold text-white transition-colors hover:bg-[#e8532f]"
          >
            Discover Our B2B Innovation Hub
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button onClick={() => navigate("/products")} data-testid="hero-products-btn" className="rounded-full border border-white/25 px-7 py-4 font-display text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Explore Devices
          </button>
        </motion.div>

        {/* Rotating callouts */}
        <div className="mt-14 max-w-2xl">
          <div className="flex gap-2">
            {HERO_CALLOUTS.map((_, i) => (
              <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-10 bg-[#FF6B4A]" : "w-5 bg-white/25"}`} />
            ))}
          </div>
          <div className="relative mt-4 h-14">
            {HERO_CALLOUTS.map((c, i) => {
              const Icon = calloutIcons[i];
              return (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex items-center gap-3"
                  animate={{ opacity: i === active ? 1 : 0, y: i === active ? 0 : 12 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 backdrop-blur"><Icon size={20} className="text-[#FF6B4A]" /></span>
                  <p className="font-display text-base font-medium text-white sm:text-lg">{c}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
