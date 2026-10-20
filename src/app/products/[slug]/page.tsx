import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import EnquiryForm from "@/components/EnquiryForm";
import { CheckIcon, WhatsAppIcon } from "@/components/Icons";
import ProductCard from "@/components/ProductCard";
import { categoryLabel, getProduct, products } from "@/data/products";
import { formatPrice, site, whatsappLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return {
    title: `${p.name} – ${p.size} | Price from ${formatPrice(p.price)}`,
    description: p.short,
    openGraph: { images: [p.image] },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).concat(
    products.filter((p) => p.category !== product.category),
  ).slice(0, 3);

  const specs = [
    ["Size", product.size],
    ["Working capacity", product.capacity],
    ["Body", "MS frame with powder coating / ACP panels"],
    ["Lighting", "LED strip + spot lights (12V / 220V)"],
    ["Build time", "10–15 working days after design approval"],
    ["Delivery", "PAN India from Agra factory"],
  ];

  return (
    <>
      <div className="bg-white border-b border-black/5">
        <nav className="container-x py-4 text-sm text-black/50" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-ink">Home</Link> /{" "}
          <Link href="/products" className="hover:text-ink">Products</Link> /{" "}
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="py-12">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-ink ring-1 ring-black/5">
            <Image src={product.image} alt={product.name} fill priority sizes="(min-width:1024px) 580px, 100vw" className="object-cover" />
            {product.badge && <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-bold text-ink">{product.badge}</span>}
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">{categoryLabel(product.category)}</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-extrabold">{product.name}</h1>
            <p className="mt-4 text-black/65 leading-relaxed">{product.description}</p>

            <div className="mt-6 flex flex-wrap items-end gap-6 rounded-2xl bg-white p-5 ring-1 ring-black/5">
              <div>
                <p className="text-xs uppercase tracking-wide text-black/45">Starting from</p>
                <p className="font-display text-4xl font-extrabold">{formatPrice(product.price)}</p>
                <p className="text-xs text-black/45">+ GST · delivery extra as per city</p>
              </div>
              <div className="flex gap-2 text-sm">
                <span className="rounded-full bg-cream px-3 py-1.5 font-medium">{product.size}</span>
                <span className="rounded-full bg-cream px-3 py-1.5 font-medium">{product.capacity}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappLink(`Hi, I'm interested in the ${product.name} (${product.size}, from ${formatPrice(product.price)}). Please share full details.`)} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-full bg-wa px-6 py-3.5 font-semibold text-white hover:brightness-110">
                <WhatsAppIcon /> Enquire on WhatsApp
              </a>
              <a href={`tel:+${site.phoneRaw}`} className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-full bg-ink px-6 py-3.5 font-semibold text-white hover:bg-brand hover:text-ink transition">
                Call {site.phone}
              </a>
            </div>

            <h2 className="mt-10 text-lg font-bold">What&apos;s included</h2>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-dark" /> {f}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-lg font-bold">Perfect for</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.idealFor.map((t) => (
                <span key={t} className="rounded-full bg-brand-soft px-3 py-1.5 text-sm font-medium text-ink">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 sm:p-8 ring-1 ring-black/5">
            <h2 className="text-xl font-bold">Specifications</h2>
            <dl className="mt-5 divide-y divide-black/5">
              {specs.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[140px_1fr] gap-4 py-3 text-sm">
                  <dt className="text-black/50">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-black/45">Size, material and equipment can be changed as per your need.</p>
          </div>
          <div className="rounded-3xl bg-ink p-6 sm:p-8 text-white">
            <h2 className="text-xl font-bold">Get the best price for this model</h2>
            <p className="mt-2 mb-6 text-sm text-white/60">Share a few details and we&apos;ll reply on WhatsApp with design and final price.</p>
            <EnquiryForm dark defaultProduct={product.name} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x">
          <h2 className="text-2xl md:text-3xl font-bold">You may also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
