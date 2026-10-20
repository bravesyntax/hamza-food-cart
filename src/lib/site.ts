export const site = {
  name: "Hamza Food Cart India",
  shortName: "Hamza Food Cart",
  tagline: "India's Trusted Food Cart Manufacturer",
  owner: "Faizan Khan",
  company: "Hamza International",
  phone: "+91 93682 75157",
  phoneRaw: "919368275157",
  location: "Agra, Uttar Pradesh",
  stats: {
    clients: "1000+",
    followers: "332K",
    posts: "1,800+",
  },
  social: {
    instagram: "https://www.instagram.com/hamza_food_cart_india/",
    youtube: "https://www.youtube.com/@hamzafoodcartindia",
  },
};

export function whatsappLink(message?: string) {
  const text = message ?? "Hi Hamza Food Cart, I want to know more about your food carts.";
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export function formatPrice(value: number) {
  return "₹" + value.toLocaleString("en-IN");
}
