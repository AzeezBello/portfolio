import React from "react";

import { Ade } from "@/assets";
import { cn } from "@/lib/utils";

export const LogoMark = ({ className }) => (
  <span
    className={cn(
      "relative flex h-10 w-10 shrink-0 items-end justify-center overflow-hidden rounded-xl border border-ember/40 bg-background",
      className
    )}
    aria-hidden="true"
  >
    <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(241,99,52,0.45),transparent_65%)]" />
    <img src={Ade} alt="" className="relative h-[88%] w-auto object-contain object-bottom" />
  </span>
);

const Logo = ({ className, compact = false }) => (
  <span className={cn("flex items-center gap-3", className)}>
    <LogoMark />
    <span className="flex flex-col leading-none">
      <span className="text-[17px] font-bold tracking-tight text-white">
        Ademola<span className={compact ? "hidden sm:inline" : undefined}> Bello</span>
        <span className="text-ember">.</span>
      </span>
      <span className="mt-1 hidden text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
        Design &amp; Development
      </span>
    </span>
  </span>
);

export default Logo;
