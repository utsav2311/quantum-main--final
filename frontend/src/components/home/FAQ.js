import { Reveal } from "@/components/Reveal";
import { FAQS } from "@/data/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PhoneCall } from "lucide-react";

export default function FAQ() {
  const { open } = useLeadModal();
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 lg:px-8" data-testid="faq">
      <Reveal>
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">FAQ</p>
        <h2 className="mt-3 text-center font-display text-4xl font-extrabold text-[#0B121C] sm:text-5xl">Questions, answered.</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-12 space-y-3" data-testid="faq-accordion">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white px-5 data-[state=open]:border-[#0B4D95]/30">
              <AccordionTrigger data-testid={`faq-trigger-${i}`} className="py-5 text-left font-display text-base font-semibold text-[#0B121C] hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[15px] leading-relaxed text-[#4A5568]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>

      <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-[#0B121C] p-10 text-center">
        <h3 className="font-display text-2xl font-bold text-white">Still have questions?</h3>
        <p className="max-w-md text-white/70">Book a call with our clinical team and we'll walk you through the right pathway.</p>
        <button onClick={() => open("consultation")} data-testid="faq-schedule-btn" className="mt-2 flex items-center gap-2 rounded-full bg-[#FF6B4A] px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#e8532f]">
          <PhoneCall size={16} /> Schedule a Call
        </button>
      </div>
    </section>
  );
}
