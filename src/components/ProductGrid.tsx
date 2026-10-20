"use client";

import { useMemo, useState } from "react";
import { categories, products, type Category } from "@/data/products";
import ProductCard from "./ProductCard";

type Sort = "popular" | "low" | "high";

export default function ProductGrid({ initialCategory }: { initialCategory?: Category }) {
  const [active, setActive] = useState<Category | "all">(initialCategory ?? "all");
  const [sort, setSort] = useState<Sort>("popular");

  const list = useMemo(() => {
    const filtered = active === "all" ? products : products.filter((p) => p.category === active);
    if (sort === "low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [active, sort]);

  const tabs: { id: Category | "all"; label: string }[] = [{ id: "all", label: "All Products" }, ...categories];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="-mx-4 px-4 md:mx-0 md:px-0 flex gap-2 overflow-x-auto pb-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                active === t.id ? "bg-ink text-white" : "bg-white text-black/70 ring-1 ring-black/10 hover:ring-black/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-black/60">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="rounded-lg bg-white px-3 py-2 ring-1 ring-black/10 text-ink"
          >
            <option value="popular">Popular</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </label>
      </div>

      <p className="mt-5 text-sm text-black/50">{list.length} products</p>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
