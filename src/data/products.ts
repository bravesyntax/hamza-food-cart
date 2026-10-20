export type Category = "food-cart" | "kiosk" | "food-trailer" | "cycle-cart";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  image: string;
  price: number;
  size: string;
  capacity: string;
  idealFor: string[];
  short: string;
  description: string;
  features: string[];
  badge?: string;
};

export const categories: { id: Category; label: string; blurb: string; image: string }[] = [
  {
    id: "food-cart",
    label: "Food Carts",
    blurb: "Wheel carts for momos, chaat, burgers and more",
    image: "/carts/amtala-momo-cart.jpg",
  },
  {
    id: "kiosk",
    label: "Food Kiosks",
    blurb: "Premium LED kiosks for malls, markets and events",
    image: "/carts/hamza-pink-kiosk.jpg",
  },
  {
    id: "food-trailer",
    label: "Food Trailers",
    blurb: "Mini cafes on wheels, ready to tow anywhere",
    image: "/carts/lotus-cafe-trailer.jpg",
  },
  {
    id: "cycle-cart",
    label: "Cycle Carts",
    blurb: "Low-cost, easy-to-move carts for street vending",
    image: "/carts/puricrave-cycle-cart.jpg",
  },
];

// NOTE: Only the Lotus Cafe trailer price (₹1,45,000 / 7x4) is taken from Hamza's own post.
// All other prices are demo placeholders, to be confirmed by the Hamza team.
export const products: Product[] = [
  {
    slug: "lotus-cafe-mini-food-trailer",
    name: "Lotus Cafe Mini Food Trailer",
    category: "food-trailer",
    image: "/carts/lotus-cafe-trailer.jpg",
    price: 145000,
    size: "7 x 4 ft",
    capacity: "1–2 staff",
    idealFor: ["Coffee", "Bakery", "Shakes", "Snacks"],
    short: "Retro van-style cafe trailer with warm LED lighting and serving window.",
    description:
      "A head-turning retro trailer built for coffee and snack brands. Wooden-finish counter, hanging planters, menu board, LED strip lighting and a full-width serving window. Tow it to markets, colleges and events.",
    features: [
      "Retro van body with custom paint colour",
      "Lift-up serving window with awning",
      "Wooden-finish counter and shelving",
      "Warm LED strip and pendant lighting",
      "Menu board and branding included",
      "Tow hitch with heavy-duty wheels",
    ],
    badge: "Bestseller",
  },
  {
    slug: "amtala-momo-food-cart",
    name: "Momo Food Cart (6x4)",
    category: "food-cart",
    image: "/carts/amtala-momo-cart.jpg",
    price: 95000,
    size: "6 x 4 ft",
    capacity: "2 chefs together",
    idealFor: ["Momos", "Chinese", "Fast food"],
    short: "Spacious red-and-white cart where 2 chefs can work side by side.",
    description:
      "Built for busy momo and fast-food counters. Two side flaps open up into serving shelves, the roof carries your lit brand name, and the fluted LED front makes your cart visible from far away.",
    features: [
      "Room for 2 chefs at the same time",
      "Fold-out side serving shelves",
      "Lit 3D brand name on the roof",
      "Fluted panel front with vertical LED bars",
      "Pendant lights inside",
      "Heavy-duty wheels with stand",
    ],
    badge: "2 Chef",
  },
  {
    slug: "pani-puri-cycle-cart",
    name: "Pani Puri Cycle Cart",
    category: "cycle-cart",
    image: "/carts/puricrave-cycle-cart.jpg",
    price: 48000,
    size: "5 x 2.5 ft",
    capacity: "1 person",
    idealFor: ["Pani puri", "Chaat", "Juice"],
    short: "Pedal-powered cart with display glass, menu board and full branding.",
    description:
      "Move your business wherever the crowd is. Glass display for puris, 5-flavour pani dispensers, hanging lights, a big menu board and a branded storage box on the back.",
    features: [
      "Pedal cycle with rear storage box",
      "Glass display box for puris",
      "Side menu board",
      "Two hanging lamps",
      "Full-wrap custom branding",
      "Stainless steel serving top",
    ],
    badge: "Budget",
  },
  {
    slug: "hamza-signature-led-kiosk",
    name: "Signature LED Food Kiosk",
    category: "kiosk",
    image: "/carts/hamza-pink-kiosk.jpg",
    price: 115000,
    size: "6 x 4 ft",
    capacity: "1–2 staff",
    idealFor: ["Burgers", "Pizza", "Shakes", "Cafes"],
    short: "Curved-roof kiosk with glowing edges, menu board and logo panel.",
    description:
      "A premium kiosk that looks like a brand store. Curved roof, glowing edge lighting all around, built-in menu board, display shelves and a round logo panel at the front.",
    features: [
      "Curved designer roof",
      "Edge LED lighting all around",
      "Built-in menu board and shelves",
      "Round illuminated logo panel",
      "Castor wheels for easy shifting",
      "Any colour, any brand theme",
    ],
    badge: "Premium",
  },
  {
    slug: "court-side-premium-food-trailer",
    name: "Premium Cafe Trailer",
    category: "food-trailer",
    image: "/carts/court-side-trailer.jpg",
    price: 325000,
    size: "10 x 6 ft",
    capacity: "2–3 staff",
    idealFor: ["Cafe", "Coffee", "Fine snacks"],
    short: "Walk-in trailer cafe with door, windows and wooden lower panel.",
    description:
      "A complete cafe on wheels. Staff walk in through the side door, serve from a wide window and work under warm pendant lights. Perfect for premium coffee brands and event catering.",
    features: [
      "Walk-in body with side door",
      "Glass windows and serving hatch",
      "Wooden-finish lower panelling",
      "Outline LED lighting",
      "Space for coffee machine and fridge",
      "Road-ready axle and tow hitch",
    ],
  },
  {
    slug: "momo-and-more-kiosk",
    name: "Momo & More Kiosk",
    category: "kiosk",
    image: "/carts/momo-kiosk.jpg",
    price: 135000,
    size: "8 x 5 ft",
    capacity: "2 staff",
    idealFor: ["Momos", "Dimsums", "Food courts"],
    short: "Food-court style kiosk with steamer section, display and billing counter.",
    description:
      "Designed for malls and food courts. A glass display for steamers, a dedicated sauces and cups section, billing counter space and a lit canopy with your full menu.",
    features: [
      "Glass-front steamer display",
      "Separate sauce and packaging section",
      "Billing counter space",
      "Lit canopy with globe lights",
      "Side panel for food photos",
      "Steel work tops",
    ],
  },
  {
    slug: "black-glow-led-food-cart",
    name: "Black Glow LED Food Cart",
    category: "food-cart",
    image: "/carts/led-black-cart.jpg",
    price: 72000,
    size: "5 x 3 ft",
    capacity: "1–2 staff",
    idealFor: ["Shawarma", "Burgers", "Chaat", "Tea"],
    short: "Matte black cart with golden LED strips that glows at night.",
    description:
      "Simple, strong and impossible to miss at night. Matte black body, golden LED strip front and roof, round logo light on top and a glass-side cabin.",
    features: [
      "Matte black powder-coated body",
      "Golden LED strips on roof and front",
      "Round logo light on top",
      "Glass side panels",
      "Car-style alloy wheels",
      "Lockable storage below",
    ],
  },
  {
    slug: "green-cafe-kiosk",
    name: "Green Garden Cafe Kiosk",
    category: "kiosk",
    image: "/carts/green-cafe-kiosk.jpg",
    price: 165000,
    size: "8 x 6 ft",
    capacity: "2 staff",
    idealFor: ["Cafe", "Juice", "Healthy food"],
    short: "Two-level kiosk with planters, lit menu and wooden interiors.",
    description:
      "A cafe-style kiosk with a green and gold theme, hanging plants on top, a lit menu board and a fully wooden interior that makes customers stop and click photos.",
    features: [
      "Two-level design with roof planters",
      "Lit menu board",
      "Wooden interior shelving",
      "Planter boxes on the counter",
      "Warm LED lighting",
      "Custom slogan panels",
    ],
  },
  {
    slug: "classic-street-food-cart",
    name: "Classic Street Food Cart",
    category: "food-cart",
    image: "/carts/night-momo-carts.jpg",
    price: 58000,
    size: "5 x 3 ft",
    capacity: "1 person",
    idealFor: ["Momos", "Chaat", "Snacks"],
    short: "Our most popular starter cart in red and white, with LED name board.",
    description:
      "The cart most of our first-time owners start with. Compact, light to push, with a lit name board on top and a steel counter inside.",
    features: [
      "Compact and light to push",
      "Lit name board on the roof",
      "Steel counter inside",
      "Fold-out side shelf",
      "Two large wheels with stand",
      "Any colour and brand name",
    ],
    badge: "Starter",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function categoryLabel(id: Category) {
  return categories.find((c) => c.id === id)?.label ?? id;
}
