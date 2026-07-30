import { useState } from "react";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";

const platforms = ["ChatGPT", "Gemini", "Claude", "Perplexity", "Google AI"];

/**
 * Free lead-gen widget: a buyer-style prompt preview per AI platform.
 * Runs entirely client-side and hands off to the strategy call booking.
 */
export function VisibilityChecker({ compact = false }: { compact?: boolean }) {
  const [company, setCompany] = useState("");
  const [region, setRegion] = useState("");
  const [state, setState] = useState<"idle" | "running" | "done">("idle");

  function run(e: React.FormEvent) {
    e.preventDefault();
    if (!company.trim()) return;
    setState("running");
    window.setTimeout(() => setState("done"), 1600);
  }

  return (
    <div className="rounded-2xl border border-border bg-background p-6 md:p-7 shadow-elevated">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
        <Sparkles className="h-3.5 w-3.5" /> Free AI recommendation check
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        See the exact buyer prompts we will run against five AI platforms for your company.
      </p>

      <form onSubmit={run} className="mt-5 space-y-3">
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company name"
          aria-label="Company name"
          className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand"
        />
        {!compact && (
          <input
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            placeholder="Primary market (e.g. Arizona)"
            aria-label="Primary market"
            className="w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand"
          />
        )}
        <button
          type="submit"
          disabled={state === "running"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition-all hover:brightness-110 disabled:opacity-70"
        >
          {state === "running" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Checking platforms…
            </>
          ) : (
            <>
              Run the check <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {state === "done" && (
        <div className="mt-5 rounded-xl border border-border bg-surface p-4">
          <div className="text-xs font-medium text-muted-foreground">
            Prompts we will test for {company.trim()}
          </div>
          <ul className="mt-3 space-y-2 text-sm text-foreground">
            <li>“Best commercial solar company in {region.trim() || "your market"}”</li>
            <li>“Is {company.trim()} a trusted commercial solar EPC?”</li>
            <li>“Who should install solar on a 200,000 sq ft warehouse?”</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {platforms.map((p) => (
              <span
                key={p}
                className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-muted-foreground"
              >
                {p}
              </span>
            ))}
          </div>
          <a
            href="/book"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
          >
            Get the full results on a strategy call <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
