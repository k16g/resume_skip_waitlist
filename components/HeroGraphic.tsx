"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export function HeroGraphic() {
  return (
    <div className="relative hidden aspect-square w-full items-center justify-center lg:flex">
      {/* ambient glow */}
      <div className="absolute h-[70%] w-[70%] rounded-full bg-accent/[0.08] blur-[100px]" />

      {/* rotating dashed ring */}
      <motion.div
        className="absolute h-[85%] w-[85%] rounded-full border border-dashed border-accent/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      {/* 3x3 decorative dot grid */}
      <div className="absolute left-[8%] top-[10%] grid grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-1 w-1 rounded-full bg-accent/30" />
        ))}
      </div>

      {/* center: the resume, as a single source */}
      <div className="relative flex h-40 w-32 flex-col gap-2 rounded-2xl border border-border bg-card p-3 shadow-xl">
        <div className="h-2 w-14 rounded-full bg-foreground/80" />
        <div className="h-1.5 w-20 rounded-full bg-muted" />
        <div className="mt-1 h-1.5 w-full rounded-full bg-muted" />
        <div className="h-1.5 w-5/6 rounded-full bg-muted" />
        <div className="h-1.5 w-full rounded-full bg-muted" />
        <div className="h-1.5 w-2/3 rounded-full bg-muted" />
        <span className="mt-auto rounded-md bg-accent/10 px-2 py-1 text-center font-sans text-[9px] font-semibold uppercase tracking-wider text-accent">
          Your resume
        </span>
      </div>

      {/* floating match card, top right */}
      <motion.div
        className="absolute right-[6%] top-[14%] flex w-40 flex-col gap-1.5 rounded-xl border border-border bg-card p-3 shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between">
          <span className="font-sans text-xs font-semibold text-foreground">Product Designer</span>
          <span className="rounded-full bg-accent/10 px-1.5 py-0.5 font-sans text-[9px] font-semibold text-accent">96%</span>
        </div>
        <div className="h-1.5 w-3/4 rounded-full bg-muted" />
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Sparkles className="h-3 w-3 text-accent" />
          <span className="font-sans text-[9px] font-medium">resume tailored</span>
        </div>
      </motion.div>

      {/* floating applied card, bottom left */}
      <motion.div
        className="absolute bottom-[12%] left-[2%] flex w-36 items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-secondary">
          <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
        </span>
        <div className="flex flex-col gap-1">
          <span className="font-sans text-xs font-semibold text-foreground">Applied</span>
          <span className="font-sans text-[9px] font-medium text-muted-foreground">while you slept</span>
        </div>
      </motion.div>

      {/* corner accent block */}
      <div className="absolute -bottom-3 -right-3 h-14 w-14 rounded-2xl bg-gradient-to-br from-accent to-accent-secondary shadow-accent-lg" />
    </div>
  );
}
