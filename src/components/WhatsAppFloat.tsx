import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-wa text-white shadow-lg shadow-black/25 hover:scale-105 transition"
    >
      <span className="absolute inset-0 rounded-full bg-wa animate-ping opacity-30" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
