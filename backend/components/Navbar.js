"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV, COMPANY } from "@/lib/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

function Logo({ light }) {
  return (
    <Link href="/" data-testid="nav-logo" className="flex items-center gap-2.5 group">
      <img src="/logo.webp" alt={COMPANY.name} loading="eager" className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
      <span className={`flex flex-col font-display leading-tight ${light ? "text-white" : "text-[#0B121C]"}`}>
        <span className="text-lg font-extrabold tracking-tight">{COMPANY.shortName}</span>
        <span className={`font-mono text-[9px] font-semibold uppercase tracking-[0.2em] ${light ? "text-cyan-400" : "text-[#0B4D95]"}`}>Prosthetics &amp; Orthotics</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useLeadModal();
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin") {
    return null;
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const handleNav = (to) => {
    if (to === "__academy__") { window.open(COMPANY.academyPdf, "_blank"); return; }
    router.push(to);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-[80] transition-all duration-500 py-3 px-4 sm:px-6 lg:px-8 pointer-events-none"
      data-testid="navbar"
    >
      <nav
        className={`pointer-events-auto mx-auto flex h-[64px] max-w-7xl items-center justify-between px-6 rounded-full transition-all duration-500 ${
          scrolled
            ? "border border-white/60 bg-white/80 backdrop-blur-2xl shadow-xl shadow-[#0284C7]/10 ring-1 ring-slate-900/5 text-slate-900"
            : "border border-white/20 bg-[#0B121C]/60 backdrop-blur-xl shadow-lg shadow-black/10 text-white"
        }`}
      >
        <Logo light={!scrolled} />

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                data-testid={`nav-${item.label.toLowerCase().replace(/[\s&]+/g, "-")}`}
                onClick={() => handleNav(item.to)}
                className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-slate-800 hover:text-[#0284C7] hover:bg-slate-100/70"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{item.label}</span>
                {item.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      openMenu === item.label ? "rotate-180 text-[#0284C7]" : scrolled ? "text-slate-400" : "text-white/60"
                    }`}
                  />
                )}
              </button>

              <AnimatePresence>
                {item.children && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-full w-64 pt-3"
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/40 bg-white/90 p-2 shadow-2xl shadow-slate-900/15 backdrop-blur-2xl ring-1 ring-black/5">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          href={c.to}
                          data-testid={`nav-sub-${c.to.replace(/\//g, "")}`}
                          className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-[#0284C7]/10 hover:text-[#0284C7]"
                        >
                          <span>{c.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => open("partner")}
            data-testid="nav-partner-btn"
            className="hidden rounded-full bg-gradient-to-r from-[#0284C7] via-[#0052CC] to-[#0284C7] bg-size-200 px-6 py-2.5 font-display text-sm font-semibold text-white shadow-lg shadow-[#0284C7]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#0284C7]/40 sm:block cursor-pointer"
          >
            Partner With Us
          </motion.button>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                data-testid="mobile-menu-btn"
                className={`rounded-full border p-2.5 transition-all duration-300 xl:hidden ${
                  scrolled
                    ? "border-slate-200 bg-white/90 text-slate-900 shadow-sm"
                    : "border-white/20 bg-white/10 text-white backdrop-blur-md"
                }`}
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm border-l border-white/20 bg-white/95 backdrop-blur-2xl p-0 z-[100]">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 pr-14">
                <Logo light={false} />
              </div>
              <div className="px-4 py-4">
                {NAV.map((item) => (
                  <MobileItem key={item.label} item={item} onNav={handleNav} />
                ))}
                <button
                  onClick={() => { setMobileOpen(false); open("partner"); }}
                  data-testid="mobile-partner-btn"
                  className="mt-6 w-full rounded-full bg-gradient-to-r from-[#0284C7] to-[#0052CC] py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-[#0284C7]/30"
                >
                  Partner With Us
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

function MobileItem({ item, onNav }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-[#F1F5F9]">
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNav(item.to)}
          className="flex-1 py-3 text-left font-display text-[15px] font-semibold text-[#0B121C]"
        >
          {item.label}
        </button>
        {item.children && (
          <button onClick={() => setExpanded((e) => !e)} className="p-2" aria-label="expand">
            <ChevronDown size={18} className={`text-[#94A3B8] transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      <AnimatePresence>
        {item.children && expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="pb-2 pl-3">
              {item.children.map((c) => (
                <Link key={c.to} href={c.to} className="block py-2 text-sm text-[#4A5568]">{c.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
