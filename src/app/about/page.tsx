import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, FeatureIcon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us – Food Cart Factory in Agra",
  description: "Hamza Food Cart India by Hamza International is a food cart, kiosk and food trailer manufacturer in Agra with 1000+ clients across India.",
};

const values = [
  { icon: "factory", title: "Own factory", text: "Every cart is built in-house in Agra by our fabrication, painting and electrical team." },
  { icon: "shield", title: "Honest pricing", text: "Clear quotes with no hidden charges. You see photos and videos at every stage." },
  { icon: "brush", title: "Design first", text: "Free 3D design before we start, so you know exactly what you're getting." },
  { icon: "truck", title: "Delivered safely", text: "Packed and shipped to your city anywhere in India." },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Helping India start food businesses" sub="Hamza Food Cart India is a Make in India manufacturer of food carts, kiosks and food trailers, based in Agra." />

      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink">
            <Image src="/carts/led-black-cart.jpg" alt="Hamza Food Cart factory in Agra" fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 backdrop-blur">
              <p className="text-sm font-bold">{site.company}</p>
              <p className="text-xs text-black/55">Factory & workshop · {site.location} · GST Registered</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Our story" title="From one workshop to 1,000+ carts across India" />
            <div className="mt-6 space-y-4 text-black/70 leading-relaxed">
              <p>
                Hamza Food Cart India was started by {site.owner} with a simple idea: a small food business deserves a cart that
                looks as good as a big brand&apos;s outlet. A great-looking cart brings more customers, and more customers means a
                stronger business.
              </p>
              <p>
                Today our team in Agra designs and builds momo carts, chai carts, pani puri cycle carts, LED kiosks and full food
                trailers for entrepreneurs across India. More than {site.stats.followers} people follow our work on Instagram, and over{" "}
                {site.stats.clients} business owners run their dream on a Hamza cart.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {[[site.stats.clients, "Clients"], [site.stats.followers, "Followers"], [site.stats.posts, "Designs shared"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl bg-white p-4 ring-1 ring-black/5 text-center">
                  <dt className="font-display text-2xl font-extrabold">{v}</dt>
                  <dd className="text-xs text-black/50">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="Our promise" title="Why owners trust Hamza" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-cream p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-brand"><FeatureIcon name={v.icon} /></span>
                <h3 className="mt-5 font-semibold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-ink hover:bg-brand-dark">
              See our products <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
