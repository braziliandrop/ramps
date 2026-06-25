export default function About() {
  return (
    <section
      id="sobre"
      className="relative border-t border-white/5 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/5">
              <img
                src="/images/work-eye-mandala.jpg"
                alt="Mural de caligrafia de RAMP"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-blood/30 bg-ink/90 px-6 py-4 backdrop-blur sm:block">
              <p className="font-bebas text-4xl leading-none text-blood">Mandala</p>
              <p className="font-oswald text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Única
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="reveal mb-4 flex items-center gap-3 font-oswald text-xs uppercase tracking-[0.35em] text-blood-light">
              <span className="h-px w-8 bg-blood" /> O artista
            </p>
            <h2 className="reveal font-bebas text-6xl leading-none text-white sm:text-7xl">
              Sobre <span className="font-metal text-white">RAMP<span className="text-blood">$</span></span>
            </h2>
            <p className="reveal mt-8 max-w-lg text-lg leading-relaxed text-neutral-300">
              RAMP cria tatuagens que misturam{" "}
              <span className="text-white">tipografia, emoção e identidade
              visual</span>. Cada peça é única e feita para o corpo de quem vive
              a arte.
            </p>
            <p className="reveal mt-5 max-w-lg leading-relaxed text-neutral-500">
              Do lettering autoral às grandes peças em blackwork, o traço carrega
              caligrafia, movimento e alma de rua. A arte também ganha as
              paredes — em murais de caligraffiti que transformam ambientes em
              experiências vivas.
            </p>

            <p className="reveal mt-8 font-metal text-5xl text-white/70">
              RAMP<span className="text-blood/80">$</span>
            </p>

            <div className="reveal mt-8 flex flex-wrap gap-3">
              {[
                "Lettering",
                "Caligrafia",
                "Blackwork",
                "Murais",
                "Freehand",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-4 py-1.5 font-oswald text-xs uppercase tracking-[0.16em] text-neutral-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Wall works strip */}
        <div className="mt-20">
          <div className="reveal mb-6 flex items-end justify-between">
            <h3 className="font-bebas text-4xl text-white sm:text-5xl">
              Trabalhos em Parede
            </h3>
            <span className="font-oswald text-xs uppercase tracking-[0.2em] text-neutral-500">
              Murais · Caligraffiti
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="reveal group relative overflow-hidden rounded-xl border border-white/5">
              <img
                src="/images/work-red-mandala.jpg"
                alt="Mural caligraffiti vermelho"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 font-bebas text-2xl text-white opacity-0 transition-opacity group-hover:opacity-100">
                Mural Solar
              </figcaption>
            </figure>
            <figure className="reveal group relative overflow-hidden rounded-xl border border-white/5">
              <img
                src="/images/rampsporta.jpeg"
                alt="Mural caligrafia espiral"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-4 font-bebas text-2xl text-white opacity-0 transition-opacity group-hover:opacity-100">
                Espiral Sagrada
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
