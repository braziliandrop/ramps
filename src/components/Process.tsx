const steps = [
  {
    n: "01",
    title: "Ideia",
    desc: "Entendemos sua ideia, referência e o que deseja expressar.",
    icon: (
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    ),
  },
  {
    n: "02",
    title: "Criação",
    desc: "Desenvolvemos o desenho exclusivo para a sua tattoo.",
    icon: (
      <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    ),
  },
  {
    n: "03",
    title: "Ajuste",
    desc: "Ajustamos juntos até ficar perfeito para o seu corpo e estilo.",
    icon: (
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    n: "04",
    title: "Execução",
    desc: "Com técnica, precisão e arte, transformamos em pele.",
    icon: (
      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    ),
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="relative border-t border-white/5 py-24 sm:py-32"
    >
      {/* subtle bg glyph */}
      <span className="pointer-events-none absolute right-6 top-10 select-none font-metal text-[12rem] leading-none text-white/[0.02]">
        R
      </span>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-oswald text-xs uppercase tracking-[0.4em] text-blood-light">
            Como funciona
          </p>
          <h2 className="font-bebas text-6xl leading-none text-white sm:text-7xl">
            Processo
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal group relative"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* connector */}
              {i < steps.length - 1 && (
                <span className="absolute right-[-1.25rem] top-16 hidden h-px w-10 bg-gradient-to-r from-blood/60 to-transparent lg:block" />
              )}
              <span className="font-metal text-6xl text-gold/70 transition-colors group-hover:text-gold">
                {s.n}
              </span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-blood-light transition-all group-hover:border-blood group-hover:bg-blood/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  {s.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-bebas text-3xl uppercase tracking-wide text-white">
                {s.title}
              </h3>
              <p className="mt-2 max-w-xs leading-relaxed text-neutral-500">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
