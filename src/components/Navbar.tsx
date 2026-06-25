import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { INSTAGRAM_URL } from "../data";
import Wordmark from "./Wordmark";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-white/5 py-3"
          : "py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <Wordmark className="text-3xl text-white" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-oswald text-sm uppercase tracking-[0.18em] text-neutral-300 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-blood transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md border border-blood/60 bg-blood/90 px-4 py-2.5 font-oswald text-xs uppercase tracking-[0.18em] text-white shadow-[0_0_22px_-6px_rgba(178,31,35,0.9)] transition-all hover:bg-blood hover:shadow-[0_0_30px_-4px_rgba(178,31,35,1)] sm:flex"
          >
            <InstaIcon className="h-4 w-4" />
            Falar no Instagram
            <span className="text-[10px]">↗</span>
          </a>

          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white lg:hidden"
          >
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-all",
                  open && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-all",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-all",
                  open && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/5 bg-ink/95 backdrop-blur-md transition-all duration-500 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 font-oswald text-sm uppercase tracking-[0.18em] text-neutral-300 transition-colors hover:text-blood-light"
            >
              {l.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-md bg-blood px-4 py-3 font-oswald text-xs uppercase tracking-[0.18em] text-white"
          >
            <InstaIcon className="h-4 w-4" />
            Falar no Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}

export function InstaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
