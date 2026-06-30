import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Rebate Intel" },
      { name: "description", content: "AI visibility audits from real commercial solar companies." },
      { property: "og:title", content: "Case Studies — Rebate Intel" },
      { property: "og:description", content: "How commercial solar companies are building AI recommendation share." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

const studies = [
  {
    name: "Arizona Solar Wave",
    type: "Commercial AI Visibility Audit",
    location: "Phoenix, AZ",
    summary: "Mapping recommendation share across four AI platforms for an Arizona-based commercial EPC.",
  },
  {
    name: "Solar Electric Freedom",
    type: "Commercial AI Visibility Audit",
    location: "Southwest US",
    summary: "Identifying the authority gaps that kept a top-rated installer off AI shortlists.",
  },
  {
    name: "Net Zero Solar",
    type: "Commercial AI Visibility Audit",
    location: "Tucson, AZ",
    summary: "Building a citable knowledge base that AI models reference by name.",
  },
];

function CaseStudiesPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Case studies"
          title="What AI visibility looks like in practice."
          description="A growing library of audits and engagements from commercial solar companies."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {studies.map((s) => (
            <article key={s.name} className="group rounded-2xl border border-border bg-background overflow-hidden hover:shadow-card transition-shadow">
              <div className="aspect-[16/10] bg-gradient-to-br from-surface to-brand-muted/40 hairline-b" />
              <div className="p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-brand">{s.type}</span>
                  <span className="text-muted-foreground">{s.location}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-brand">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
