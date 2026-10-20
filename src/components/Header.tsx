"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/#custom", label: "Custom Branding" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-brand text-ink text-center text-xs sm:text-sm font-medium py-1.5 px-4">
        PAN India Delivery · Factory in Agra · Call / WhatsApp{" "}
        <a href={`tel:+${site.phoneRaw}`} className="font-bold underline underline-offset-2">
          {site.phone}
        </a>
      </div>
      <nav className="bg-ink/95 backdrop-blur text-white border-b border-white/10">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="Hamza Food Cart India logo" width={44} height={44} className="rounded-full" priority />
            <span className="leading-tight">
              <span className="block font-display font-bold text-[15px]">Hamza Food Cart</span>
              <span className="block text-[11px] text-white/60 tracking-wider uppercase">India</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-7 text-sm">
            {links.map((l) => {
              const active = l.href === pathname;
              return (
                <li key={l.href}>
                  <Link href={l.href} className={`transition hover:text-brand ${active ? "text-brand" : "text-white/80"}`}>
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-wa px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition"
            >
              <WhatsAppIcon className="h-4 w-4" /> Get Price
            </a>
            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <ul className="lg:hidden border-t border-white/10 container-x py-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-white/85 hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-wa px-4 py-3 font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
