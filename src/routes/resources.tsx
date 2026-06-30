import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Rebate Intel" },
      { name: "description", content: "Articles and research on AI visibility for commercial solar and renewable energy companies." },
      { property: "og:title", content: "Resources — Rebate Intel" },
      { property: "og:description", content: "How AI search is reshaping commercial solar buying." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const articles = [
  { title: "Why ChatGPT recommends some solar companies and ignores others", read: "8 min", topic: "AI Search" },
  { title: "Commercial solar SEO vs. AI visibility: what's actually changing", read: "6 min", topic: "Strategy" },
  { title: "How AI is changing commercial solar buying", read: "9 min", topic: "Buying Behavior" },
  { title: "The future of AI search for renewable energy companies", read: "7 min", topic: "Outlook" },
  { title: "What commercial buyers ask AI before choosing a solar contractor", read: "10 min", topic: "Research" },
];

function ResourcesPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Resources"
          title="Research and writing on AI visibility."
          description="Practical thinking for executives navigating the shift from search engines to AI answers."
        />

        <Link to="/resources" className="mt-12 block group">
          <div className="rounded-2xl border border-border bg-background overflow-hidden grid md:grid-cols-2 hover:shadow-card transition-shadow">
            <div className="aspect-[16/10] md:aspect-auto bg-gradient-to-br from-surface to-brand-muted/40 hairline-b md:border-b-0 md:border-r" />
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-xs font-medium text-brand">Featured · {featured.topic}</div>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-foreground text-balance">{featured.title}</h2>
              <div className="mt-4 text-xs text-muted-foreground">{featured.read} read</div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-brand">
                Read article <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </Link>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          {rest.map((a) => (
            <Link key={a.title} to="/resources" className="group rounded-2xl border border-border bg-background p-6 hover:shadow-card transition-shadow">
              <div className="text-xs font-medium text-brand">{a.topic}</div>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{a.title}</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{a.read} read</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-brand" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
