import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BarChart3 } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Commercial Solar AI Research — Rebate Intel" },
      {
        name: "description",
        content:
          "Ongoing research into how ChatGPT, Gemini, Google AI, Claude, and Perplexity recommend commercial solar companies.",
      },
      { property: "og:title", content: "Commercial Solar AI Research — Rebate Intel" },
      {
        property: "og:description",
        content:
          "Reports and findings on how AI platforms describe and recommend commercial solar companies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

const reports = [
  {
    title: "Arizona Commercial Solar AI Benchmark 2026",
    description: "We analyzed how AI recommends commercial solar companies in Arizona.",
  },
  {
    title: "Top AI Recommendation Signals",
    description: "What patterns do AI models consistently reward?",
  },
  {
    title: "Commercial Buyer Prompts",
    description: "The questions business owners ask AI before hiring a solar company.",
  },
];

const findings = [
  "Only 4–6 companies are consistently recommended by AI for most commercial solar searches.",
  "Many excellent installers rarely appear in AI recommendations.",
  "Companies with stronger online authority are recommended more often.",
];

const platforms = ["ChatGPT", "Gemini", "Claude", "Perplexity", "Google AI"];

function ResearchPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">Research</div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground text-balance">
            Commercial Solar <span className="text-brand">AI Research</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We continuously study how ChatGPT, Gemini, Google AI, Claude, and Perplexity
            recommend commercial solar companies.
          </p>
          <div className="mt-8">
            <a
              href="#latest-research"
              className="liquid-glass inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              View Latest Research <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Section>

      <Section id="latest-research" surface>
        <SectionHeader eyebrow="Latest Research" title="Reports, not blog posts." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reports.map((r) => (
            <div
              key={r.title}
              className="group flex flex-col rounded-2xl border border-border bg-background p-8 card-lift"
            >
              <BarChart3 className="h-6 w-6 text-brand" />
              <h3 className="mt-5 text-xl font-semibold text-foreground text-balance">{r.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {r.description}
              </p>
              <a
                href="/book"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-brand"
              >
                Read Report <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <span id="key-findings" className="block scroll-mt-24" />
        <SectionHeader eyebrow="Key Findings" title="What we keep seeing." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {findings.map((f, i) => (
            <div key={f} className="rounded-2xl border border-border bg-background p-8 card-lift">
              <div className="text-sm font-semibold text-brand">Finding #{i + 1}</div>
              <p className="mt-3 text-lg text-foreground leading-relaxed text-balance">{f}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section surface>
        <SectionHeader eyebrow="Coverage" title="AI platforms we track." align="center" />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {platforms.map((p) => (
            <span
              key={p}
              className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground"
            >
              {p}
            </span>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          We monitor how these AI systems describe and recommend commercial solar companies.
        </p>
      </Section>

      <section className="section-y">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-foreground text-background px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-semibold text-balance">
                Ready to become one of the companies AI recommends?
              </h2>
              <div className="mt-8">
                <a
                  href="/book"
                  className="liquid-glass inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                >
                  Book a 30-minute AI recommendation strategy call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div aria-hidden className="pointer-events-none absolute -right-32 -bottom-32 h-96 w-96 rounded-full border border-background/10" />
            <div aria-hidden className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full border border-background/10" />
          </div>
        </div>
      </section>
    </>
  );
}
