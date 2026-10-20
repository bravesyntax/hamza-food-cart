export default function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl md:text-4xl font-bold leading-tight ${dark ? "text-white" : ""}`}>{title}</h2>
      {sub && <p className={`mt-4 text-base leading-relaxed ${dark ? "text-white/65" : "text-black/60"}`}>{sub}</p>}
    </div>
  );
}
