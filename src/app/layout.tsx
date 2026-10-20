import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Hamza Food Cart India | Food Cart, Kiosk & Food Trailer Manufacturer in Agra",
    template: "%s | Hamza Food Cart India",
  },
  description:
    "India's trusted food cart manufacturer. Custom food carts, kiosks, cycle carts and food trailers built in Agra with your branding. PAN India delivery, 1000+ happy clients.",
  keywords: [
    "food cart manufacturer",
    "food cart Agra",
    "momo cart price",
    "food kiosk",
    "food trailer India",
    "pani puri cart",
    "Hamza Food Cart",
  ],
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
