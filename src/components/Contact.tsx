import { INSTAGRAM_URL } from "../data";
import { InstaIcon } from "./Navbar";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden border-t border-white/5 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/escrita-sec.jpg"
          alt=""
          className="h-full w-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(178,31,35,0.14),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="reveal font-bebas text-6xl leading-[0.9] text-white sm:text-7xl">
              Vamos criar
              <br />
              <span className="text-neutral-300">algo único?</span>
            </h2>
            <p className="reveal mt-6 max-w-md text-lg leading-relaxed text-neutral-400">
              Agende sua tattoo ou fale sobre seu projeto diretamente comigo
              pelo Instagram.
            </p>
          </div>

          <div className="reveal flex flex-col gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-xl bg-blood px-7 py-6 shadow-[0_0_50px_-12px_rgba(178,31,35,1)] transition-all hover:-translate-y-1 hover:bg-blood-light"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/15">
                  <InstaIcon className="h-6 w-6 text-white" />
                </span>
                <span className="font-bebas text-3xl leading-none tracking-wide text-white">
                  Agendar via Instagram
                </span>
              </span>
              <span className="text-2xl text-white transition-transform group-hover:translate-x-1">
                
              </span>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="truncate text-center font-oswald text-xs tracking-[0.1em] text-neutral-500 transition-colors hover:text-blood-light"
            >
              instagram.com/rampstattoo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
