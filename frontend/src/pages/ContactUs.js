import { useState } from "react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import PageHero from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { COMPANY, IMAGES, waLink } from "@/data/site";
import { api, formatApiError } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, Loader2, MessageCircle } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(form.email) || form.phone.trim().length < 5) {
      toast.error("Please provide your name, a valid email and phone.");
      return;
    }
    setLoading(true);
    try {
      await api.post("/leads", { ...form, lead_type: "general" });
      toast.success("Message sent — we'll be in touch soon!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail) || "Failed to send");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <Helmet>
        <title>{`Contact Us | ${COMPANY.name}`}</title>
        <meta name="description" content={`Get in touch with ${COMPANY.name} for clinical consultations, device inquiries, or B2B facility partnerships.`} />
      </Helmet>
      <PageHero label="Get in Touch" title="We're here to answer clinical and partner inquiries." subtitle="Whether you're a patient seeking a consultation or a clinical leader building a P&O program — reach out to our team." image={IMAGES.lab} />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-4">
              <a href={`tel:${COMPANY.phoneRaw}`} data-testid="contact-phone" className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-colors hover:border-[#0B4D95]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B4D95]/10"><Phone size={20} className="text-[#0B4D95]" /></span>
                <div><p className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">Call</p><p className="font-display font-semibold text-[#0B121C]">{COMPANY.phone}</p></div>
              </a>
              <a href={`mailto:${COMPANY.email}`} data-testid="contact-email" className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-colors hover:border-[#0B4D95]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B4D95]/10"><Mail size={20} className="text-[#0B4D95]" /></span>
                <div><p className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">Email</p><p className="font-display font-semibold text-[#0B121C]">{COMPANY.email}</p></div>
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp" className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-colors hover:border-[#25D366]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10"><MessageCircle size={20} className="text-[#25D366]" /></span>
                <div><p className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">WhatsApp</p><p className="font-display font-semibold text-[#0B121C]">Chat with us</p></div>
              </a>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {COMPANY.addresses.map((a) => (
                  <a key={a.label} href={a.maps} target="_blank" rel="noopener noreferrer" data-testid={`contact-address-${a.label}`} className="rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-colors hover:border-[#FF6B4A]">
                    <div className="flex items-center gap-2 text-[#FF6B4A]"><MapPin size={15} /><span className="font-display text-xs font-semibold uppercase tracking-wide">{a.label}</span></div>
                    <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{a.value}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0]">
              <iframe
                title="location map"
                data-testid="contact-map"
                src="https://maps.google.com/maps?q=Al+Danah,+Abu+Dhabi,+United+Arab+Emirates&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} className="space-y-4 rounded-3xl border border-[#E2E8F0] bg-white p-7 sm:p-9" data-testid="contact-form">
              <h2 className="font-display text-2xl font-bold text-[#0B121C]">Send a message</h2>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-[#4A5568]">Full Name *</Label>
                <Input data-testid="contact-name" value={form.name} onChange={set("name")} placeholder="Jane Doe" className="h-11 rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95]" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-[#4A5568]">Email *</Label>
                  <Input data-testid="contact-email-input" type="email" value={form.email} onChange={set("email")} placeholder="you@org.com" className="h-11 rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95]" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-[#4A5568]">Phone *</Label>
                  <Input data-testid="contact-phone-input" value={form.phone} onChange={set("phone")} placeholder="+1 234 567 890" className="h-11 rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-[#4A5568]">Message</Label>
                <Textarea data-testid="contact-message" value={form.message} onChange={set("message")} rows={5} placeholder="How can we help?" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95]" />
              </div>
              <button type="submit" disabled={loading} data-testid="contact-submit-btn" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B4A] py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#e8532f] disabled:opacity-60">
                {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={16} />} {loading ? "Sending…" : "Submit"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
