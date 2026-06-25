import { featured } from "../data";

export default function Featured() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-12 text-center">
          <p className="mb-3 font-oswald text-xs uppercase tracking-[0.4em] text-blood-light">
            Featured Work
          </p>
          <h2 className="font-bebas text-5xl leading-none text-white sm:text-6xl">
            Peças em <span className="text-blood">Destaque</span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((w, i) => (
            <figure
              key={w.src}
              className="reveal group relative overflow-hidden rounded-xl border border-white/5"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <span className="absolute left-5 top-5 font-metal text-5xl text-white/15 transition-colors group-hover:text-blood/40">
                0{i + 1}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-oswald text-[11px] uppercase tracking-[0.25em] text-blood-light">
                  {w.category}
                </span>
                <p className="mt-1 font-bebas text-3xl leading-none text-white">
                  {w.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
