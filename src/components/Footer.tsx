import { INSTAGRAM_URL } from "../data";
import Wordmark from "./Wordmark";
import { InstaIcon } from "./Navbar";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <Wordmark className="text-4xl text-white" />

        <p className="order-3 text-center font-oswald text-[11px] uppercase tracking-[0.2em] text-neutral-600 md:order-2">
          © {new Date().getFullYear()} RAMP Tattoo Artist · Todos os direitos
          reservados
        </p>

        <div className="order-2 flex items-center gap-3 md:order-3">
          {[
            { label: "Instagram", href: INSTAGRAM_URL, icon: <InstaIcon className="h-4 w-4" /> },
            { label: "TikTok", href: INSTAGRAM_URL, icon: <span className="text-xs font-bold">TT</span> },
            { label: "WhatsApp", href: INSTAGRAM_URL, icon: <span className="text-xs font-bold">WA</span> },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all hover:border-blood hover:bg-blood/10 hover:text-blood-light"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
