import { INSTAGRAM_URL } from "../data";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background mandala */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/hero-mandala.jpg"
          alt=""
          className="absolute right-0 top-0 h-full w-full object-cover object-right opacity-70 md:w-3/5 spin-slow-disabled"
        />
        {/* gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(178,31,35,0.18),transparent_55%)]" />
      </div>

      {/* vertical IG tag */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-90 font-oswald text-[10px] uppercase tracking-[0.4em] text-neutral-500 transition-colors hover:text-blood-light xl:block"
      >
        @rampstattoo
      </a>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="reveal mb-5 flex items-center gap-3 font-oswald text-xs uppercase tracking-[0.4em] text-blood-light">
            <span className="h-px w-8 bg-blood" />
            Tattoo Artist · Lettering
          </p>

          <h1 className="reveal flicker font-metal text-7xl leading-[0.82] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)] sm:text-8xl md:text-[11rem]">
            RAMP<span className="text-blood">$</span>
          </h1>

          <p className="reveal mt-2 font-pirata text-2xl uppercase tracking-[0.5em] text-neutral-300 sm:text-3xl">
            Tattoo Artist
          </p>

          <p className="reveal mt-8 max-w-md font-oswald text-base uppercase leading-relaxed tracking-[0.12em] text-neutral-400 sm:text-lg">
            Arte em forma de pele.
            <br />
            Cada traço é identidade.
          </p>

          <div className="reveal mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 rounded-md bg-blood px-8 py-4 font-oswald text-sm uppercase tracking-[0.18em] text-white shadow-[0_0_40px_-10px_rgba(178,31,35,1)] transition-all hover:-translate-y-0.5 hover:bg-blood-light"
            >
              Solicitar orçamento
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>

        </div>
      </div>


    </section>
  );
}
