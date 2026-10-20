import Image from "next/image";
import Link from "next/link";
import { categoryLabel, type Product } from "@/data/products";
import { formatPrice, whatsappLink } from "@/lib/site";
import { ArrowIcon, WhatsAppIcon } from "./Icons";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-ink">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-bold text-ink shadow">
            {product.badge}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {product.size}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-dark">{categoryLabel(product.category)}</p>
        <h3 className="mt-1 text-lg font-semibold leading-snug">
          <Link href={`/products/${product.slug}`} className="hover:text-brand-dark">{product.name}</Link>
        </h3>
        <p className="mt-2 text-sm text-black/60 line-clamp-2">{product.short}</p>

        <div className="mt-auto pt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-black/45">Starting from</p>
            <p className="font-display text-2xl font-bold">{formatPrice(product.price)}</p>
          </div>
          <div className="flex gap-2">
            <a
              href={whatsappLink(`Hi, I'm interested in the ${product.name} (${product.size}). Please share price and details.`)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
              className="grid h-11 w-11 place-items-center rounded-full bg-wa text-white hover:brightness-110"
            >
              <WhatsAppIcon />
            </a>
            <Link
              href={`/products/${product.slug}`}
              aria-label={`View ${product.name}`}
              className="grid h-11 w-11 place-items-center rounded-full bg-ink text-white hover:bg-brand hover:text-ink transition"
            >
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
