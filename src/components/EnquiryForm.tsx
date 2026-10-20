"use client";

import { useState } from "react";
import { categories, products } from "@/data/products";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const budgets = ["Under ₹50,000", "₹50,000 – ₹1 Lakh", "₹1 – 2 Lakh", "₹2 – 5 Lakh", "Above ₹5 Lakh"];

export default function EnquiryForm({ dark = false, defaultProduct = "" }: { dark?: boolean; defaultProduct?: string }) {
  const [form, setForm] = useState({ name: "", city: "", type: defaultProduct || categories[0].label, budget: budgets[1], note: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      "New enquiry from website",
      `Name: ${form.name}`,
      `City: ${form.city}`,
      `Looking for: ${form.type}`,
      `Budget: ${form.budget}`,
      form.note && `Details: ${form.note}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  }

  const field = `w-full rounded-xl px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-brand ${
    dark ? "bg-white/5 text-white ring-1 ring-white/15 placeholder:text-white/40" : "bg-white ring-1 ring-black/10"
  }`;
  const label = `mb-1.5 block text-xs font-semibold uppercase tracking-wide ${dark ? "text-white/60" : "text-black/55"}`;

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className={label} htmlFor="name">Your name</label>
        <input id="name" required value={form.name} onChange={set("name")} placeholder="Rahul Sharma" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="city">City</label>
        <input id="city" required value={form.city} onChange={set("city")} placeholder="Lucknow" className={field} />
      </div>
      <div>
        <label className={label} htmlFor="type">Looking for</label>
        <select id="type" value={form.type} onChange={set("type")} className={field}>
          <optgroup label="Category">
            {categories.map((c) => <option key={c.id} className="text-ink">{c.label}</option>)}
          </optgroup>
          <optgroup label="Model">
            {products.map((p) => <option key={p.slug} className="text-ink">{p.name}</option>)}
          </optgroup>
          <option className="text-ink">Fully custom design</option>
        </select>
      </div>
      <div>
        <label className={label} htmlFor="budget">Budget</label>
        <select id="budget" value={form.budget} onChange={set("budget")} className={field}>
          {budgets.map((b) => <option key={b} className="text-ink">{b}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={label} htmlFor="note">What will you sell? (optional)</label>
        <textarea id="note" rows={3} value={form.note} onChange={set("note")} placeholder="Momos and chowmein, need space for 2 people, brand name 'Momo King'" className={field} />
      </div>
      <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-wa px-6 py-3.5 font-semibold text-white hover:brightness-110 transition">
        <WhatsAppIcon /> Send Enquiry on WhatsApp
      </button>
      <p className={`sm:col-span-2 text-center text-xs ${dark ? "text-white/45" : "text-black/45"}`}>
        Free design consultation · Reply within 1 hour in working hours
      </p>
    </form>
  );
}
