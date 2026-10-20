import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import { ArrowIcon, CheckIcon, FeatureIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { categories, products } from "@/data/products";
import { site, whatsappLink } from "@/lib/site";

const features = [
  { icon: "diamond", title: "Premium Design", text: "Modern looks with LED lighting that pull customers from far away." },
  { icon: "shield", title: "Strong & Durable", text: "Heavy MS / steel frame, powder coating and quality wheels built for daily use." },
  { icon: "brush", title: "Custom Branding", text: "Your logo, colours, menu board and brand name on every panel." },
  { icon: "truck", title: "Easy to Move", text: "Balanced design, smooth wheels and tow options for trailers." },
  { icon: "users", title: "Best for Business", text: "Layouts planned with chefs so 1–2 people can work fast." },
  { icon: "map", title: "PAN India Delivery", text: "Safely packed and delivered from our Agra factory to your city." },
] as const;

const steps = [
  { n: "01", title: "Share your idea", text: "Tell us what you sell, your budget and the size you need on WhatsApp or call." },
  { n: "02", title: "Get free design", text: "We share a 3D design with your brand name, colours and menu for approval." },
  { n: "03", title: "Built in Agra", text: "Our team builds your cart in our factory and sends you progress photos and videos." },
  { n: "04", title: "Delivered to you", text: "We pack it safely and deliver anywhere in India, ready to start business." },
];

const customItems = [
  "Your brand name in 3D lit letters",
  "Any colour theme and wrap design",
  "Menu board with your prices",
  "LED strip, pendant and logo lights",
  "Size from 4 ft carts to 12 ft trailers",
  "Counter layout for your equipment",
];

// Sample testimonials for the demo — to be replaced with real client reviews from Hamza.
const testimonials = [
  {
    name: "Sushil",
    biz: "Momo cart owner",
    city: "Uttar Pradesh",
    text: "Jaisa design dikhaya tha, cart bilkul waisa hi mila. LED lights ki wajah se shaam ko customers door se aate hain.",
  },
  {
    name: "Ankit Verma",
    biz: "Cafe trailer owner",
    city: "Jaipur",
    text: "Delivery time par hui aur build quality bahut strong hai. Customers trailer ke saath photos lete hain, free marketing ho jaati hai.",
  },
  {
    name: "Priya Singh",
    biz: "Pani puri brand",
    city: "Delhi NCR",
    text: "Budget mein premium look chahiye tha. Hamza team ne branding se lekar menu board tak sab kuch design karke diya.",
  },
];

const faqs = [
  { q: "How much does a food cart cost?", a: "Simple carts start around ₹50,000. LED kiosks and 2-chef carts are ₹90,000 – ₹1.6 lakh, and food trailers start from ₹1.45 lakh. The final price depends on size, material and equipment." },
  { q: "How many days does it take to build?", a: "Most carts are ready in 10–15 working days after design approval. Trailers and large kiosks take 20–30 days." },
  { q: "Do you deliver outside Uttar Pradesh?", a: "Yes. We deliver PAN India from our factory in Agra. Delivery charges depend on your city and are shared before booking." },
  { q: "Can I put my own brand name and colours?", a: "Yes, every cart is custom-branded with your name, logo, colours and menu board at no extra design cost." },
  { q: "How do I book my cart?", a: "Finalise the design on WhatsApp, pay a booking advance, and pay the balance when your cart is ready. We share photos and videos at every stage." },
];

const gallery = [
  "/carts/hamza-pink-kiosk.jpg",
  "/carts/led-black-cart.jpg",
  "/carts/momo-kiosk.jpg",
  "/carts/court-side-trailer.jpg",
  "/carts/green-cafe-kiosk.jpg",
  "/carts/night-momo-carts.jpg",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand/10 blur-[100px]" />
        <div className="container-x relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Factory in Agra · Delivering across India
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Apna Cart. Apna Brand. <span className="text-brand glow-text">Apni Pehchaan.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70 leading-relaxed">
              India&apos;s trusted manufacturer of custom food carts, kiosks, cycle carts and food trailers — designed with your
              brand and built to make your business stand out.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-ink hover:bg-brand-dark transition">
                Explore Products <ArrowIcon />
              </Link>
              <a href={whatsappLink("Hi, I want a free design and price for my food cart.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/10 transition">
                <WhatsAppIcon /> Free Design & Quote
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              {[
                [site.stats.clients, "Happy clients"],
                [site.stats.followers, "Instagram family"],
                ["All India", "Delivery"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl sm:text-3xl font-bold text-white">{v}</dt>
                  <dd className="text-xs sm:text-sm text-white/55">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative grid grid-cols-5 grid-rows-6 gap-3 h-[420px] sm:h-[520px]">
            <div className="relative col-span-3 row-span-6 overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image src="/carts/hamza-pink-kiosk.jpg" alt="Hamza signature LED food kiosk" fill priority sizes="(min-width:1024px) 360px, 60vw" className="object-cover" />
            </div>
            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image src="/carts/lotus-cafe-trailer.jpg" alt="Lotus Cafe mini food trailer" fill priority sizes="240px" className="object-cover" />
            </div>
            <div className="relative col-span-2 row-span-3 overflow-hidden rounded-3xl ring-1 ring-white/10">
              <Image src="/carts/amtala-momo-cart.jpg" alt="Momo food cart" fill sizes="240px" className="object-cover object-bottom" />
            </div>
            <div className="absolute -bottom-4 left-4 sm:-left-6 rounded-2xl bg-white text-ink px-4 py-3 shadow-2xl flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-brand-dark">
                <FeatureIcon name="bolt" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold">Ready in 10–15 days</span>
                <span className="block text-xs text-black/55">with free 3D design</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-black/5 bg-white">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-sm font-medium text-black/60">
          {["GST Registered Business", "Make in India", "Own factory in Agra", "Free 3D design", "Photos & videos of every stage"].map((t) => (
            <span key={t} className="inline-flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-brand-dark" /> {t}
            </span>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="What we build" title="A cart for every food business" sub="From a budget cycle cart to a walk-in cafe trailer — pick a category or ask us for something completely custom." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link key={c.id} href={`/products?category=${c.id}`} className="group relative h-80 overflow-hidden rounded-2xl bg-ink">
                <Image src={c.image} alt={c.label} fill sizes="(min-width:1024px) 280px, 50vw" className="object-cover opacity-90 group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-xl font-bold">{c.label}</h3>
                  <p className="mt-1 text-sm text-white/75">{c.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    View models <ArrowIcon />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading eyebrow="Popular models" title="Bestselling carts & kiosks" sub="Transparent starting prices. Final price depends on size, material and equipment you choose." />
            <Link href="/products" className="inline-flex items-center gap-2 font-semibold hover:text-brand-dark shrink-0">
              View all products <ArrowIcon />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-ink text-white">
        <div className="container-x">
          <SectionHeading dark center eyebrow="Why Hamza Food Cart" title="Built for business, not just for looks" sub="1,000+ food entrepreneurs across India started their business with a Hamza cart." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-brand/50 transition">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-ink">
                  <FeatureIcon name={f.icon} />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM BRANDING */}
      <section id="custom" className="py-20 scroll-mt-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src="/carts/puricrave-cycle-cart.jpg" alt="Custom branded pani puri cycle cart" fill sizes="(min-width:1024px) 280px, 45vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mt-10">
              <Image src="/carts/green-cafe-kiosk.jpg" alt="Custom branded green cafe kiosk" fill sizes="(min-width:1024px) 280px, 45vw" className="object-cover" />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Custom branding" title={<>Your brand, built into <span className="text-brand-dark">every panel</span></>} sub="We don't sell plain carts. Every Hamza cart is designed around your brand, so customers remember your name — not just your food." />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {customItems.map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-black/5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-dark">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <a href={whatsappLink("Hi, I want a custom branded cart. Can you share a free design?")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-semibold text-white hover:bg-brand hover:text-ink transition">
              Get my free 3D design <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 bg-white scroll-mt-28">
        <div className="container-x">
          <SectionHeading center eyebrow="How it works" title="From idea to your doorstep in 4 steps" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.n} className="relative rounded-2xl bg-cream p-6">
                <span className="font-display text-5xl font-extrabold text-brand/40">{s.n}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-black/60 leading-relaxed">{s.text}</p>
                {i < steps.length - 1 && (
                  <ArrowIcon className="hidden md:block absolute -right-5 top-1/2 h-5 w-5 text-brand-dark z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading eyebrow="Our work" title="Fresh from the Hamza factory" sub={`Follow ${site.stats.followers}+ food entrepreneurs on Instagram for new designs every day.`} />
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-5 py-3 text-sm font-semibold text-white shrink-0">
              <InstagramIcon /> @hamza_food_cart_india
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((src, i) => (
              <div key={src} className={`relative overflow-hidden rounded-2xl bg-ink ${i === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"}`}>
                <Image src={src} alt="Hamza Food Cart project" fill sizes="(min-width:768px) 380px, 50vw" className="object-cover hover:scale-105 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="Happy clients" title="1,000+ businesses started with a Hamza cart" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-cream p-6 ring-1 ring-black/5">
                <div className="text-brand text-lg tracking-widest">★★★★★</div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-black/75">&ldquo;{t.text}&rdquo;</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-ink font-bold text-brand">{t.name[0]}</span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-xs text-black/50">{t.biz} · {t.city}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 scroll-mt-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="FAQs" title="Questions buyers ask us every day" sub="Still have a question? Message us on WhatsApp — we reply fast." />
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-5 ring-1 ring-black/5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-dark text-xl transition">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section className="py-20 bg-ink text-white relative overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/15 blur-[120px]" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading dark eyebrow="Start your business" title={<>Get your <span className="text-brand">free design & quote</span> today</>} sub="Tell us what you want to sell and your budget. Our team will share a design and the best price on WhatsApp." />
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a href={`tel:+${site.phoneRaw}`} className="rounded-full border border-white/20 px-5 py-3 font-semibold hover:bg-white/10">Call {site.phone}</a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <EnquiryForm dark />
          </div>
        </div>
      </section>
    </>
  );
}
