import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV, COMPANY } from "@/data/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

function Logo({ light }) {
  return (
    <Link to="/" data-testid="nav-logo" className="flex items-center gap-3">
      <img src="/logo.png" alt={COMPANY.name} loading="lazy" className="h-10 w-10 object-contain drop-shadow" />
      <span className={`flex flex-col font-display leading-tight ${light ? "text-white" : "text-[#0B121C]"}`}>

        <span className="text-lg font-extrabold tracking-tight">{COMPANY.shortName}</span>
        <span className="font-mono text-[9px] font-normal uppercase tracking-[0.2em] text-[#FF6B4A]">Prosthetics &amp; Orthotic</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useLeadModal();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const handleNav = (to) => {
    if (to === "__academy__") { window.open(COMPANY.academyPdf, "_blank"); return; }
    navigate(to);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${
        scrolled ? "border-b border-[#E2E8F0]/80 bg-white/80 backdrop-blur-xl" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo light={!scrolled} />

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
                className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-[#FF6B4A] ${scrolled ? "text-[#0B121C]" : "text-white/90"}`}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className={scrolled ? "text-[#94A3B8]" : "text-white/60"} />}
              </button>
              <AnimatePresence>
                {item.children && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full w-64 pt-2"
                  >
                    <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-1.5 shadow-xl shadow-[#0B121C]/5">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          data-testid={`nav-sub-${c.to.replace(/\//g, "")}`}
                          className="block rounded-xl px-3.5 py-2.5 text-sm text-[#4A5568] transition-colors hover:bg-[#F8F9FA] hover:text-[#0B4D95]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => open("partner")}
            data-testid="nav-partner-btn"
            className="hidden rounded-full bg-[#FF6B4A] px-5 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#e8532f] sm:block"
          >
            Partner With Us
          </button>

          {/* Mobile */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button data-testid="mobile-menu-btn" className={`rounded-full border p-2.5 xl:hidden ${scrolled ? "border-[#E2E8F0] bg-white" : "border-white/25 bg-white/10 backdrop-blur"}`}>
                <Menu size={20} className={scrolled ? "text-[#0B121C]" : "text-white"} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0 z-[100]">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4 pr-14">
                <Logo light={false} />
              </div>
              <div className="px-4 py-4">
                {NAV.map((item) => (
                  <MobileItem key={item.label} item={item} onNav={handleNav} />
                ))}
                <button
                  onClick={() => { setMobileOpen(false); open("partner"); }}
                  data-testid="mobile-partner-btn"
                  className="mt-4 w-full rounded-full bg-[#FF6B4A] py-3 font-display text-sm font-semibold text-white"
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
                <Link key={c.to} to={c.to} className="block py-2 text-sm text-[#4A5568]">{c.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
