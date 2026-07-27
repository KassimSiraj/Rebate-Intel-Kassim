import { createFileRoute } from "@tanstack/react-router";
import { Microscope, BarChart3, ShieldCheck, FileText, Sparkles, Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Rebate Intel" },
      { name: "description", content: "Five disciplines that make commercial solar companies recommended by ChatGPT, Gemini, Claude, and Perplexity." },
      { property: "og:title", content: "Solutions — Rebate Intel" },
      { property: "og:description", content: "AI Recommendation Analysis, Competitive AI Benchmark, Commercial Authority Positioning, Content Strategy, and AI Trust Infrastructure." },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

const solutions = [
  {
    icon: Microscope,
    title: "AI Recommendation Analysis",
    summary: "Analyze how AI systems currently understand and recommend your business.",
    points: [
      "Per-platform recommendation share (ChatGPT, Gemini, Claude, Perplexity)",
      "Prompt-level analysis of how your company is described",
      "Gap report against the citations AI is choosing today",
    ],
  },
  {
    icon: BarChart3,
    title: "Competitive AI Benchmark",
    summary: "Benchmark your visibility against direct competitors inside AI search.",
    points: [
      "Side-by-side recommendation share by region and segment",
      "Which sources AI cites when recommending competitors",
      "Strategic moves to close — and exceed — the gap",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Commercial Authority Positioning",
    summary: "Develop AI-citable assets that compound your recommendation likelihood.",
    points: [
      "Original research and data assets AI can quote",
      "Third-party references, citations, and inbound trust",
      "Entity consistency across the open web",
    ],
  },
  {
    icon: FileText,
    title: "Content Strategy",
    summary: "Educational content engineered for AI ingestion and citation.",
    points: [
      "Topic architecture mapped to real buyer prompts",
      "Structured, retrieval-friendly long-form content",
      "Editorial calendar tuned to your sales cycle",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Trust Infrastructure",
    summary: "Reviews, citations, structured data, and entity optimization.",
    points: [
      "Schema and structured data implementation",
      "Review and reputation programs that AI surfaces",
      "Consistent NAP, entity, and knowledge-graph alignment",
    ],
  },
];

function SolutionsPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <div className="eyebrow mb-4">Solutions</div>
          <h1 className="text-4xl md:text-6xl font-semibold text-foreground text-balance">
            Everything you need to be the answer AI gives.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            A complete operating system for AI visibility — built for the realities of commercial solar sales cycles.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-background p-6 md:p-10 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-brand">
                  <s.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">{s.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{s.summary}</p>
              </div>
              <div className="md:col-span-8 flex flex-col justify-center">
                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                      <span className="text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
