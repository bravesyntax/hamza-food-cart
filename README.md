# Hamza Food Cart India — Demo Website (by Bravesyntax)

Next.js 15 + Tailwind CSS v4 demo website pitched to Hamza Food Cart India (Agra).

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — Home: hero, categories, featured products, why us, custom branding, process, gallery, testimonials, FAQ, enquiry form
- `/products` — Catalogue with category filter + price sort (`?category=kiosk` etc.)
- `/products/[slug]` — Product detail with price, specs, features, WhatsApp enquiry
- `/about`, `/contact`

## Where to edit

- Business info, phone, socials: `src/lib/site.ts`
- Products, prices, images: `src/data/products.ts`
- Images: `public/carts/` (cropped from Hamza's Instagram posts for the demo)

## Before going live (if the client converts)

- Replace demo prices (only Lotus Cafe ₹1,45,000 is real) and sample testimonials
- Get original high-res photos from the client (some current images are low-res crops)
- Add real factory address, GSTIN, Google Maps pin, domain + `metadataBase`
- Optional: admin panel / CMS for products, lead storage, Hindi version
