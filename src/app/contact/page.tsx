import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { InstagramIcon, WhatsAppIcon, YoutubeIcon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact – Get a Free Food Cart Design & Quote",
  description: "Contact Hamza Food Cart India in Agra for a free food cart design and price. WhatsApp +91 93682 75157.",
};

export default function ContactPage() {
  const cards = [
    { title: "WhatsApp", value: site.phone, href: whatsappLink(), icon: <WhatsAppIcon className="h-6 w-6" />, accent: "bg-wa text-white" },
    { title: "Instagram", value: "@hamza_food_cart_india", href: site.social.instagram, icon: <InstagramIcon className="h-6 w-6" />, accent: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white" },
    { title: "YouTube", value: "@hamzafoodcartindia", href: site.social.youtube, icon: <YoutubeIcon className="h-6 w-6" />, accent: "bg-[#ff0000] text-white" },
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build your food cart" sub="Free design consultation. Share your idea and budget — we'll reply on WhatsApp with design and price." />

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {cards.map((c) => (
              <a key={c.title} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/5 hover:shadow-lg transition">
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${c.accent}`}>{c.icon}</span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-black/45">{c.title}</span>
                  <span className="block font-semibold">{c.value}</span>
                </span>
              </a>
            ))}
            <div className="rounded-2xl bg-ink p-6 text-white">
              <p className="text-xs uppercase tracking-wide text-brand">Factory</p>
              <p className="mt-2 font-semibold">{site.company}</p>
              <p className="text-white/65 text-sm">{site.location}, India</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-brand">Working hours</p>
              <p className="mt-1 text-sm text-white/80">Monday – Saturday, 9:00 AM – 8:00 PM</p>
              <p className="mt-4 text-xs text-white/50">Factory visits welcome — please WhatsApp before you come.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-black/5">
            <h2 className="text-2xl font-bold">Send an enquiry</h2>
            <p className="mt-1 mb-6 text-sm text-black/55">Takes 30 seconds. Opens WhatsApp with your details filled in.</p>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl ring-1 ring-black/5 h-80">
            <iframe
              title="Hamza Food Cart location – Agra"
              src="https://www.google.com/maps?q=Agra,Uttar+Pradesh&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
