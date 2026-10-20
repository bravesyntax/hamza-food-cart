export default function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-brand/20 blur-[110px]" />
      <div className="container-x relative py-14 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">{title}</h1>
        {sub && <p className="mt-4 max-w-2xl text-white/65 text-lg">{sub}</p>}
      </div>
    </section>
  );
}
