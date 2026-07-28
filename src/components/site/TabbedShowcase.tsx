import { useState } from "react";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type ShowcaseTab = {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  panelTitle: string;
  rows: { label: string; value: string; strong?: boolean }[];
};

export function TabbedShowcase({ tabs }: { tabs: ShowcaseTab[] }) {
  const [active, setActive] = useState(tabs[0].id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Capabilities"
        className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === active}
            onClick={() => setActive(t.id)}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors",
              t.id === active
                ? "border-brand bg-brand-muted text-brand font-medium"
                : "border-border bg-background text-muted-foreground hover:text-foreground",
            )}
          >
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-6 items-stretch">
        <div key={tab.id} className="fade-up rounded-2xl border border-border bg-background p-7 md:p-9">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">{tab.title}</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">{tab.description}</p>
          <ul className="mt-6 space-y-3">
            {tab.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div key={`${tab.id}-panel`} className="fade-up rounded-2xl border border-border bg-surface p-7 md:p-9">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {tab.panelTitle}
          </div>
          <div className="mt-5 divide-y divide-border">
            {tab.rows.map((r) => (
              <div key={r.label} className="flex items-center justify-between gap-6 py-3.5">
                <span className="text-sm text-muted-foreground">{r.label}</span>
                <span
                  className={cn(
                    "text-sm font-medium tabular-nums",
                    r.strong ? "text-brand" : "text-foreground",
                  )}
                >
                  {r.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
