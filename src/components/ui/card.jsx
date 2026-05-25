import { cn } from "../../lib/utils";

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-white/10 bg-white/[0.055] shadow-premium backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
