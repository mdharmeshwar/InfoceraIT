import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function Section({ id, eyebrow, title, copy, children, className }) {
  return (
    <section id={id} className={cn("relative px-5 py-20 sm:px-8 lg:px-10 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || copy) && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-12 max-w-3xl"
          >
            {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>}
            {title && <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{title}</h2>}
            {copy && <p className="mt-5 text-lg leading-8 text-slate-300">{copy}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
