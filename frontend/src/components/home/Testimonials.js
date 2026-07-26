import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const n = TESTIMONIALS.length;

  const go = useCallback((d) => { setDir(d); setI((p) => (p + d + n) % n); }, [n]);

  useEffect(() => {
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [go]);

  const t = TESTIMONIALS[i];

  return (
    <section className="bg-[#F8F9FA] py-24" data-testid="testimonials">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">Trusted by Partners</p>
          <h2 className="mt-3 text-center font-display text-4xl font-extrabold text-[#0B121C] sm:text-5xl">What clinicians say.</h2>
        </Reveal>

        <div className="relative mt-14 min-h-[300px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={i}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-[#E2E8F0] bg-white p-8 sm:p-12"
              data-testid="testimonial-card"
            >
              <Quote size={40} className="text-[#FF6B4A]" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={18} className="fill-[#FF6B4A] text-[#FF6B4A]" />)}
              </div>
              <p className="mt-5 font-display text-xl font-medium leading-relaxed text-[#0B121C] sm:text-2xl">“{t.quote}”</p>
              <div className="mt-7 flex items-center gap-4">
                <img src={t.img} alt={t.name} loading="lazy" className="h-14 w-14 rounded-full object-cover" />
                <div>

                  <p className="font-display font-bold text-[#0B121C]">{t.name}</p>
                  <p className="text-sm text-[#4A5568]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} data-testid="testimonial-prev" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#0B121C] transition-colors hover:border-[#0B4D95] hover:text-[#0B4D95]"><ChevronLeft size={20} /></button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, d) => (
              <button key={d} onClick={() => { setDir(d > i ? 1 : -1); setI(d); }} className={`h-2 rounded-full transition-all ${d === i ? "w-8 bg-[#FF6B4A]" : "w-2 bg-[#CBD5E1]"}`} aria-label={`testimonial ${d + 1}`} />
            ))}
          </div>
          <button onClick={() => go(1)} data-testid="testimonial-next" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#0B121C] transition-colors hover:border-[#0B4D95] hover:text-[#0B4D95]"><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  );
}
