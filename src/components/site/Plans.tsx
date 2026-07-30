import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Benchmark",
    tagline: "Know exactly where you stand.",
    horizon: "One-time · 2–3 weeks",
    features: [
      "Recommendation testing across 5 AI platforms",
      "Named competitor benchmark",
      "Prompt-level visibility scoring",
      "Opportunity roadmap readout",
    ],
    cta: "Start with a benchmark",
  },
  {
    name: "Positioning",
    tagline: "Build the signals AI trusts.",
    horizon: "Ongoing · quarterly cycles",
    featured: true,
    features: [
      "Everything in Benchmark",
      "Commercial authority positioning",
      "AI-citable content production",
      "Entity, schema, and trust infrastructure",
      "Monthly recommendation reporting",
    ],
    cta: "Book a strategy call",
  },
  {
    name: "Category Lead",
    tagline: "Own the answer in your markets.",
    horizon: "Ongoing · multi-market",
    features: [
      "Everything in Positioning",
      "Multi-market and multi-vertical coverage",
      "Original research and data programs",
      "Executive visibility and PR support",
      "Dedicated strategist",
    ],
    cta: "Talk about scope",
  },
];

export function Plans() {
  return (
    <div className="grid md:grid-cols-3 gap-5 items-start">
      {plans.map((p) => (
        <div
          key={p.name}
          className={cn(
            "relative rounded-2xl border p-7 card-lift",
            p.featured
              ? "border-brand/40 bg-background shadow-elevated"
              : "border-border bg-background",
          )}
        >
          {p.featured && (
            <div className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand-foreground">
              Most common
            </div>
          )}
          <div className="text-lg font-semibold text-foreground">{p.name}</div>
          <div className="mt-1 text-sm text-muted-foreground">{p.tagline}</div>
          <div className="mt-5 text-xs font-medium uppercase tracking-widest text-brand">{p.horizon}</div>
          <ul className="mt-6 space-y-3">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href="/book"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "mt-7 inline-flex w-full items-center justify-center px-5 py-3 text-sm font-semibold",
              p.featured
                ? "liquid-glass"
                : "liquid-glass-light border border-border text-foreground",
            )}
          >
            {p.cta}
          </a>
        </div>
      ))}
    </div>
  );
}
