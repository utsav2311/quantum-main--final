import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, itemVariants } from "@/components/Reveal";
import { getDevice, IMAGES, COMPANY } from "@/data/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { Check, ScanLine, PenTool, Printer, BadgeCheck, ArrowLeft, CalendarCheck, ShieldCheck, Activity, Zap, Sparkles, HeartPulse, ChevronRight } from "lucide-react";

const WF_ICONS = { scan: ScanLine, "pen-tool": PenTool, printer: Printer, "badge-check": BadgeCheck };

export default function DevicePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const device = getDevice(slug);
  const { open } = useLeadModal();

  if (!device) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-[70px] text-center">
        <h1 className="font-display text-3xl font-bold text-[#0B121C]">Page not found</h1>
        <Link to="/products" className="mt-4 rounded-full bg-[#0B4D95] px-6 py-3 font-display text-sm font-semibold text-white">Back to Products</Link>
      </div>
    );
  }

  const img = IMAGES[device.img] || IMAGES.lab;

  return (
    <div data-testid="device-page">
      <Helmet>
        <title>{`${device.title} | ${COMPANY.name}`}</title>
        <meta name="description" content={device.tagline || device.condition.slice(0, 160)} />
      </Helmet>
      <PageHero label={device.category} title={device.title} subtitle={device.tagline} image={img}>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => open("consultation")}
          data-testid="device-consult-hero-btn"
          className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FF886B] px-8 py-4 font-display text-sm font-semibold text-white shadow-lg shadow-[#FF6B4A]/25 transition-all hover:shadow-xl hover:shadow-[#FF6B4A]/35"
        >
          <CalendarCheck size={18} /> Book a Consultation
        </motion.button>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0B4D95]/20 bg-[#0B4D95]/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-[#0B4D95]">
                <Activity size={14} className="animate-pulse text-[#FF6B4A]" /> The Need
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#0B121C] sm:text-4xl">What it addresses</h2>
              <p className="mt-5 leading-relaxed text-[#4A5568]">{device.condition}</p>

              <h3 className="mt-10 font-display text-xl font-bold text-[#0B121C]">Key Benefits</h3>
              <ul className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {device.benefits.map((b) => (
                  <motion.li
                    key={b}
                    whileHover={{ scale: 1.02, x: 3 }}
                    className="flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-4 text-sm font-medium text-[#0B121C] shadow-sm transition-all hover:border-[#FF6B4A]/40 hover:shadow-md"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6B4A]/10 text-[#FF6B4A]">
                      <Check size={15} />
                    </span>
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#FF6B4A] to-[#0B4D95] opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40" />
              <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-xl">
                <img src={img} alt={device.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-[#0B121C]/80 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">

                  Digitally Engineered
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Digital workflow */}
        <div className="mt-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0B4D95]/20 bg-[#0B4D95]/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-[#0B4D95]">
              <Zap size={14} className="text-[#FF6B4A]" /> Digital Workflow
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0B121C]">How it's made</h2>
          </Reveal>
          <Stagger className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {device.workflow.map((w, i) => {
              const Icon = WF_ICONS[w.icon] || ScanLine;
              return (
                <motion.div
                  key={w.t}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#0B4D95]/40 hover:shadow-xl"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#0B4D95]/5 transition-transform group-hover:scale-150" />
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B4D95] to-[#083a72] text-white shadow-md shadow-[#0B4D95]/20 transition-transform group-hover:scale-110">
                      <Icon size={22} />
                    </span>
                    <span className="font-mono text-sm font-bold text-[#CBD5E1] group-hover:text-[#FF6B4A]">0{i + 1}</span>
                  </div>
                  <p className="mt-5 font-display text-lg font-bold text-[#0B121C]">{w.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{w.d}</p>
                </motion.div>
              );
            })}
          </Stagger>
        </div>

        {/* Rich Structured Content */}
        {device.richContent && (
          <div className="mt-24 space-y-24 border-t border-[#E2E8F0] pt-20">
            {/* Overview & Core Focus */}
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-gradient-to-b from-white to-[#F8FAFC] p-8 shadow-lg sm:p-12">
                <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#FF6B4A]/5 blur-3xl" />
                <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-[#FF6B4A] via-[#0B4D95] to-[#FF6B4A]" />
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">Clinical Foundations</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0B121C] sm:text-4xl">Institutional Scope &amp; Biomechanics</h2>
                <div className="mt-6 space-y-4 leading-relaxed text-[#4A5568] text-base">
                  {device.richContent.introParagraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#0B121C] via-[#0F1B2D] to-[#083a72] p-8 text-white shadow-2xl">
                  <div className="flex items-center gap-2 text-[#FF6B4A]">
                    <Sparkles size={18} />
                    <p className="font-mono text-xs uppercase tracking-widest">Core Engineering Focus</p>
                  </div>
                  <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                    {device.richContent.focusPillars.map((fp) => (
                      <div
                        key={fp}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-bold backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6B4A]/50 hover:bg-white/15"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FF6B4A] text-white">
                          <Check size={14} />
                        </span>
                        <span>{fp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>


            {/* Role in Modern Rehabilitation */}
            {device.richContent.rehabilitationRole && (
              <Reveal>
                <div className="space-y-10">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#0B4D95]/20 bg-[#0B4D95]/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-[#0B4D95]">
                      <HeartPulse size={14} className="text-[#FF6B4A]" /> Rehabilitation Strategy
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0B121C] sm:text-4xl">{device.richContent.rehabilitationRole.title}</h2>
                    <p className="mt-4 max-w-3xl leading-relaxed text-[#4A5568]">{device.richContent.rehabilitationRole.description}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="rounded-3xl border border-[#BAE6FD] bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-center gap-3 text-[#0369A1]">
                        <ShieldCheck size={24} />
                        <h3 className="font-display text-xl font-bold text-[#0C4A6E]">Clinically Supports Recovery By</h3>
                      </div>
                      <ul className="mt-6 space-y-4">
                        {device.richContent.rehabilitationRole.supportsRecovery.map((sr) => (
                          <li key={sr} className="flex items-start gap-3.5 text-sm font-medium text-[#0C4A6E] transition-transform duration-200 hover:translate-x-1">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0284C7] text-white shadow-sm"><Check size={14} /></span>
                            <span>{sr}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-3xl border border-[#FED7AA] bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-center gap-3 text-[#C2410C]">
                        <Zap size={24} />
                        <h3 className="font-display text-xl font-bold text-[#7C2D12]">Protocol Benefits</h3>
                      </div>
                      <ul className="mt-6 space-y-4">
                        {device.richContent.rehabilitationRole.protocolBenefits.map((pb) => (
                          <li key={pb} className="flex items-start gap-3.5 text-sm font-medium text-[#7C2D12] transition-transform duration-200 hover:translate-x-1">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EA580C] text-white shadow-sm"><Check size={14} /></span>
                            <span>{pb}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Clinical Orthotic Systems */}
            {device.richContent.systems?.length > 0 && (
              <Reveal>
                <div className="space-y-10">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#0B4D95]/20 bg-[#0B4D95]/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-[#0B4D95]">
                      Clinical Portfolio
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0B121C] sm:text-4xl">Spinal Orthotic Systems for Clinical Practice</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-8">
                    {device.richContent.systems.map((sys, idx) => (
                      <div
                        key={sys.title}
                        className="group overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0B4D95]/30 hover:shadow-xl sm:p-10"
                      >
                        <div className="flex flex-col justify-between gap-3 border-b border-[#E2E8F0] pb-6 sm:flex-row sm:items-center">
                          <div>
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B4A]">System 0{idx + 1}</span>
                            <h3 className="mt-1 font-display text-2xl font-bold text-[#0B121C]">{sys.title}</h3>
                            {sys.subtitle && <p className="mt-1 text-sm font-semibold text-[#0B4D95]">{sys.subtitle}</p>}
                          </div>
                          <span className="self-start rounded-full bg-[#0B4D95]/10 px-4 py-1.5 font-mono text-xs font-semibold text-[#0B4D95]">Institutional Grade</span>
                        </div>

                        {sys.description && <p className="mt-5 leading-relaxed text-[#4A5568]">{sys.description}</p>}

                        {/* Indications */}
                        {sys.indications?.length > 0 && (
                          <div className="mt-6">
                            <p className="font-display text-sm font-bold text-[#0B121C]">Common Indications:</p>
                            <div className="mt-3 flex flex-wrap gap-2.5">
                              {sys.indications.map((ind) => (
                                <span
                                  key={ind}
                                  className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-xs font-semibold text-[#0B121C] transition-all duration-200 hover:border-[#FF6B4A]/50 hover:bg-[#FF6B4A]/10 hover:text-[#FF6B4A]"
                                >
                                  {ind}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Examples & Benefits */}
                        {sys.examples?.length > 0 && (
                          <div className="mt-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                            <p className="font-display text-xs font-bold uppercase tracking-wider text-[#0B4D95]">System Formats:</p>
                            <p className="mt-1.5 text-sm font-medium text-[#0B121C]">{sys.examples.join(" · ")}</p>
                          </div>
                        )}

                        {sys.benefits?.length > 0 && (
                          <div className="mt-6 rounded-2xl border border-[#BAE6FD] bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE] p-6">
                            <p className="font-display text-xs font-bold uppercase tracking-wider text-[#0284C7]">Clinical Benefits</p>
                            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                              {sys.benefits.map((b) => (
                                <div key={b} className="flex items-center gap-2.5 text-xs font-semibold text-[#0C4A6E]">
                                  <Check size={15} className="text-[#0284C7]" /> {b}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Subsections (Rigid / Semi-Rigid) */}
                        {sys.subsections?.length > 0 && (
                          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {sys.subsections.map((sub) => (
                              <div key={sub.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <h4 className="font-display text-lg font-bold text-[#FF6B4A]">{sub.title}</h4>
                                <p className="mt-2 text-xs leading-relaxed text-white/70">{sub.description}</p>
                                <div className="mt-4 space-y-2">
                                  {sub.indications.map((ind) => (
                                    <div key={ind} className="flex items-center gap-2 text-xs font-medium text-white/90">
                                      <ChevronRight size={14} className="text-[#FF6B4A]" /> {ind}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Devices (Chairback / Raney) */}
                        {sys.devices?.length > 0 && (
                          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {sys.devices.map((dev) => (
                              <div key={dev.name} className="rounded-2xl border border-[#FED7AA] bg-gradient-to-br from-[#FFF7ED] to-[#FFEDD5] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1">
                                <h4 className="font-display text-lg font-bold text-[#9A3412]">{dev.name}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-[#7C2D12]">{dev.description}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {sys.note && <p className="mt-5 font-mono text-xs text-[#94A3B8]">{sys.note}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Clinical Precision & Institutional Alignment */}
            {device.richContent.clinicalPrecision && (
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-[#0B4D95]/30 bg-gradient-to-br from-[#0B121C] via-[#0F1B2D] to-[#0B4D95] p-8 text-white shadow-2xl sm:p-12">
                  <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#FF6B4A]/10 blur-3xl" />
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A]">Institutional Care</p>
                  <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">{device.richContent.clinicalPrecision.title}</h2>
                  <p className="mt-4 max-w-3xl leading-relaxed text-white/80">{device.richContent.clinicalPrecision.description}</p>

                  <div className="mt-10 space-y-4">
                    <p className="font-display text-sm font-bold text-white">Quantum Medical Supports Institutional Teams Through:</p>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {device.richContent.clinicalPrecision.supportPillars.map((sp, idx) => (
                        <div
                          key={sp}
                          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-5 font-semibold backdrop-blur-md transition-all duration-300 hover:border-[#FF6B4A]/50 hover:bg-white/15 hover:translate-x-1"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF6B4A] to-[#FF886B] text-sm font-extrabold text-white shadow-md">
                            0{idx + 1}
                          </span>
                          <span className="text-sm">{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
                    <p className="text-sm font-semibold text-[#FF6B4A]">{device.richContent.clinicalPrecision.summary}</p>
                  </div>
                </div>
              </Reveal>
            )}

          </div>
        )}

        {/* Anchors */}
        {device.anchors?.length > 0 && (
          <div className="mt-20 space-y-6">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">Within this category</p>
            </Reveal>
            {device.anchors.map((a) => (
              <Reveal key={a.id}>
                <div id={a.id} className="scroll-mt-24 rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm">
                  <h3 className="font-display text-xl font-bold text-[#0B121C]">{a.label}</h3>
                  <p className="mt-2 max-w-3xl leading-relaxed text-[#4A5568]">
                    Custom {a.label.toLowerCase()} designed from a 3D scan and fabricated in-house — engineered to the individual's anatomy, activity level and clinical goals.
                  </p>
                  <button onClick={() => open("consultation")} className="mt-4 font-display text-sm font-semibold text-[#FF6B4A] hover:underline" data-testid={`anchor-consult-${a.id}`}>Book a consultation →</button>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <div className="mt-24 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#0B4D95] to-[#083a72] p-10 shadow-xl sm:flex-row sm:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Ready to prescribe {device.title.toLowerCase()}?</h3>
            <p className="mt-2 text-white/70">Book a consultation and we'll design the right device for your patient.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => open("consultation")}
            data-testid="device-consult-btn"
            className="shrink-0 rounded-full bg-gradient-to-r from-[#FF6B4A] to-[#FF886B] px-8 py-4 font-display text-sm font-semibold text-white shadow-lg transition-colors hover:shadow-xl"
          >
            Book a Consultation
          </motion.button>
        </div>

        <Link to="/products" className="mt-10 inline-flex items-center gap-2 font-display text-sm font-semibold text-[#0B4D95] hover:underline"><ArrowLeft size={16} /> All products</Link>
      </section>
    </div>
  );
}
