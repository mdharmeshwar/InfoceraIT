import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/70 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-pearl text-ink shadow-[0_0_32px_rgba(255,255,255,.18)] hover:-translate-y-0.5 hover:bg-white",
        glow:
          "border border-cyan/35 bg-cyan/10 text-cyan hover:-translate-y-0.5 hover:border-cyan/70 hover:bg-cyan/15 hover:shadow-glow",
        ghost:
          "border border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]"
      },
      size: {
        md: "h-11 px-5",
        lg: "h-12 px-7 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
