import { motion } from "motion/react";

export function FloatingShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-(--color-gold)/25 blur-2xl"
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[-6rem] top-1/3 h-56 w-56 rounded-full bg-(--color-accent)/15 blur-2xl"
        animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-(--color-canvas-alt) blur-xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
