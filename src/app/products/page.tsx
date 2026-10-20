import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductGrid from "@/components/ProductGrid";
import { categories, type Category } from "@/data/products";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Food Carts, Kiosks & Food Trailers with Price",
  description: "Browse Hamza food carts, LED kiosks, cycle carts and food trailers with sizes and starting prices. Custom branding and PAN India delivery.",
};

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const initial = categories.some((c) => c.id === category) ? (category as Category) : undefined;

  return (
    <>
      <PageHero eyebrow="Our products" title="Food carts, kiosks & trailers" sub="Starting prices for our most popular models. Every model can be customised in size, colour, equipment and branding." />
      <section className="py-14">
        <div className="container-x">
          <ProductGrid key={initial ?? "all"} initialCategory={initial} />

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 rounded-3xl bg-brand-soft p-8 ring-1 ring-brand/30">
            <div>
              <h2 className="text-2xl font-bold">Didn&apos;t find what you need?</h2>
              <p className="mt-2 text-black/65">Chai carts, juice carts, shawarma counters, food trucks — we build fully custom designs too.</p>
            </div>
            <a href={whatsappLink("Hi, I need a custom food cart design. Here's what I want:")} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-wa px-6 py-3.5 font-semibold text-white">
              <WhatsAppIcon /> Ask for a custom design
            </a>
          </div>
          <p className="mt-6 text-center text-xs text-black/45">
            * Prices shown are starting prices for the demo and may vary with size, material, equipment and delivery location.
          </p>
        </div>
      </section>
    </>
  );
}
