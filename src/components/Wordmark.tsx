import { cn } from "../utils/cn";

/** Stylised gothic RAMP$ wordmark used in nav + footer */
export default function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-metal leading-none tracking-tight select-none",
        className
      )}
    >
      RAMP<span className="text-blood">$</span>
    </span>
  );
}
