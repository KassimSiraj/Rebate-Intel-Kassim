import { useState } from "react";
import { Check, Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="rounded-3xl border border-border bg-surface px-7 py-10 md:px-12 md:py-14">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand">
            <Mail className="h-3.5 w-3.5" /> The AI Recommendation Brief
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-foreground text-balance">
            Monthly research on how AI recommends commercial solar companies.
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            Platform shifts, prompt benchmarks, and what changed in who gets cited. No noise.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!email.trim()) return;
            window.location.href = `mailto:kassim@rebateintel.com?subject=Subscribe%20to%20the%20AI%20Recommendation%20Brief&body=Please%20add%20${encodeURIComponent(email)}%20to%20the%20list.`;
            setSent(true);
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            aria-label="Work email"
            className="flex-1 rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand"
          />
          <button
            type="submit"
            className="liquid-glass inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold"
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" /> Subscribed
              </>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
