import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  surface = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  surface?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={cn("section-y", surface && "bg-surface hairline-t hairline-b", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
