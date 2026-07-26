import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Stagger, itemVariants, Reveal } from "@/components/Reveal";
import { KIDS_TAGS } from "@/data/site";
import { Spline, Shield, Baby, Footprints, Moon, Layers, Activity, Target, Bone } from "lucide-react";

const ICONS = { spline: Spline, shield: Shield, baby: Baby, footprints: Footprints, moon: Moon, layers: Layers, activity: Activity, target: Target, bone: Bone };

export default function KidsGrid() {
  return (
    <section className="relative overflow-hidden bg-[#0B4D95] py-24" data-testid="kids-section">
      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#FF6B4A]/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A]">For Kids</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">Pediatric care that grows with every child.</h2>
          <p className="mt-4 max-w-xl text-white/70">Gentle 3D capture, playful designs, and fast re-fabrication as children develop.</p>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {KIDS_TAGS.map((t) => {
            const Icon = ICONS[t.icon] || Baby;
            return (
              <motion.div key={t.label} variants={itemVariants}>
                <Link
                  to={t.to}
                  data-testid={`kid-tag-${t.label.toLowerCase().replace(/[\s&]+/g, "-")}`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#FF6B4A]/50 hover:bg-white/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF6B4A]/15 transition-colors group-hover:bg-[#FF6B4A]">
                    <Icon size={22} className="text-[#FF6B4A] transition-colors group-hover:text-white" />
                  </span>
                  <span className="font-display text-[15px] font-semibold leading-tight text-white">{t.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
