import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rebate Intel" },
      { name: "description", content: "An AI visibility agency for commercial solar companies. We research how AI platforms evaluate and recommend businesses." },
      { property: "og:title", content: "About — Rebate Intel" },
      { property: "og:description", content: "Helping outstanding commercial solar companies become as visible online as they are successful in real life." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">About</div>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground text-balance">
            We study how AI decides which companies to recommend.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Rebate Intel is a specialist agency built for a single inflection point: the moment commercial buyers stopped starting on Google and started asking AI. We research how ChatGPT, Gemini, Claude, and Perplexity evaluate, describe, and recommend businesses — and we translate that research into measurable visibility for commercial solar companies.
          </p>
        </div>
      </Section>

      <Section surface>
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Our mission" title="Make great solar companies as visible online as they are in real life." />
          </div>
          <div className="lg:col-span-7 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The best commercial solar companies in the country are losing pipeline because AI doesn't know enough about them. They have stronger references, better operations, and longer track records than the names AI keeps citing — but none of that travels through a language model on its own.
            </p>
            <p>
              We exist to close that gap. Through audits, authority building, and citable content, we help operators become the default recommendation when a buyer asks an AI which solar company they should trust.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { k: "Research-led", v: "Every engagement starts with platform-level evidence — not opinions." },
            { k: "Specialist", v: "We focus on commercial solar and the adjacent energy categories your buyers compare you to." },
            { k: "Measured", v: "Recommendation share, not vanity metrics. We report what changed across every AI platform." },
          ].map((p) => (
            <div key={p.k} className="rounded-2xl border border-border bg-background p-6">
              <div className="text-sm font-semibold text-brand">{p.k}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.v}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
