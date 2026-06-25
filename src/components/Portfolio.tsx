import { useMemo, useState } from "react";
import { cn } from "../utils/cn";
import { works, type Category } from "../data";

const filters: ("Todos" | Category)[] = [
  "Todos",
  "Lettering",
  "Blackwork",
  "Flash",
  "Projetos",
];

export default function Portfolio() {
  const [active, setActive] = useState<"Todos" | Category>("Todos");

  const filtered = useMemo(
    () =>
      active === "Todos"
        ? works
        : works.filter((w) => w.category === active),
    [active]
  );

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-3 font-oswald text-xs uppercase tracking-[0.35em] text-blood-light">
              <span className="h-px w-8 bg-blood" /> Galeria
            </p>
            <h2 className="font-bebas text-6xl leading-none text-white sm:text-7xl">
              Portfólio
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-md border px-4 py-2 font-oswald text-xs uppercase tracking-[0.16em] transition-all",
                  active === f
                    ? "border-blood bg-blood text-white shadow-[0_0_20px_-6px_rgba(178,31,35,0.9)]"
                    : "border-white/10 text-neutral-400 hover:border-white/30 hover:text-white"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry via CSS columns */}
        <div className="columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4 [&>*]:mb-3 sm:[&>*]:mb-4">
          {filtered.map((w) => (
            <figure
              key={w.src}
              className="group relative block break-inside-avoid overflow-hidden rounded-lg border border-white/5 bg-neutral-900"
            >
              <img
                src={w.src}
                alt={w.title}
                loading="lazy"
                className="w-full object-cover grayscale-[0.25] transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-oswald text-[10px] uppercase tracking-[0.2em] text-blood-light">
                  {w.category}
                </span>
                <p className="font-bebas text-2xl leading-none text-white">
                  {w.title}
                </p>
              </figcaption>
              <span className="absolute right-3 top-3 rounded-full border border-blood/0 bg-blood/0 p-2 text-blood-light opacity-0 transition-all duration-500 group-hover:border-blood/40 group-hover:bg-ink/60 group-hover:opacity-100">
                ↗
              </span>
            </figure>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 font-oswald text-sm uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-white"
          >
            Ver mais trabalhos
            <span className="h-px w-10 bg-blood transition-all duration-300 group-hover:w-16" />
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
