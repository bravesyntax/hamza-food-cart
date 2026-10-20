import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";
import { site, whatsappLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon, YoutubeIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 pt-16 pb-24 sm:pb-10">
      <div className="container-x grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={48} height={48} className="rounded-full" />
            <span className="font-display font-bold text-white">Hamza Food Cart India</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {site.tagline}. Custom carts, kiosks and food trailers built in Agra and delivered across India.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-brand hover:text-ink transition">
              <InstagramIcon />
            </a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-brand hover:text-ink transition">
              <YoutubeIcon />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-wa hover:text-white transition">
              <WhatsAppIcon />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <Link href={`/products?category=${c.id}`} className="hover:text-brand">{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/about" className="hover:text-brand">About Us</Link></li>
            <li><Link href="/#custom" className="hover:text-brand">Custom Branding</Link></li>
            <li><Link href="/#process" className="hover:text-brand">How It Works</Link></li>
            <li><Link href="/#faq" className="hover:text-brand">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Factory & Contact</h4>
          <ul className="space-y-2.5 text-sm">
            <li>{site.company}</li>
            <li>{site.location}, India</li>
            <li><a href={`tel:+${site.phoneRaw}`} className="hover:text-brand">{site.phone}</a></li>
            <li>GST Registered Business</li>
            <li>Mon–Sat · 9:00 AM – 8:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-2 justify-between text-xs text-white/45">
        <p>© {new Date().getFullYear()} Hamza Food Cart India. All rights reserved.</p>
        <p>Demo website designed & developed by <span className="text-brand font-semibold">Bravesyntax</span></p>
      </div>
    </footer>
  );
}
