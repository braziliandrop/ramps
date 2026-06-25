const items = [
  "LETTERING",
  "CALIGRAFIA",
  "BLACKWORK",
  "FLASH",
  "FREEHAND",
  "PROJETOS AUTORAIS",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-gradient-to-r from-ink via-neutral-950 to-ink py-5">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-bebas text-3xl tracking-wide text-neutral-700">
              {t}
            </span>
            <span className="text-blood">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
