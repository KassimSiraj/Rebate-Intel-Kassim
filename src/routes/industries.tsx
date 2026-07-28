import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { Sun, Factory, Leaf, BatteryCharging, Building2, Wrench } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Rebate Intel" },
      { name: "description", content: "AI visibility for commercial solar, industrial energy, renewable energy, storage, construction, and facility management." },
      { property: "og:title", content: "Industries — Rebate Intel" },
      { property: "og:description", content: "Where we work: energy and the built environment." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  { icon: Sun, name: "Commercial Solar", desc: "EPCs, developers, and installers serving commercial and industrial buyers." },
  { icon: Factory, name: "Industrial Energy", desc: "Behind-the-meter generation, demand management, and process electrification." },
  { icon: Leaf, name: "Renewable Energy", desc: "Wind, solar, and hybrid developers building authority at category scale." },
  { icon: BatteryCharging, name: "Energy Storage", desc: "BESS integrators and battery solutions for commercial and utility sites." },
  { icon: Building2, name: "Commercial Construction", desc: "GCs and design-build firms adjacent to the renewable transition." },
  { icon: Wrench, name: "Facility Management", desc: "Operators evaluating solar, storage, and electrification across portfolios." },
];

function IndustriesPage() {
  return (
    <>
      <Section>
        <SectionHeader
          eyebrow="Industries"
          title="Where we work."
          description="Deep specialization in commercial solar with adjacent fluency across energy and the built environment."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((i) => (
            <div key={i.name} className="rounded-2xl border border-border bg-background p-6 card-lift">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-brand">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{i.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCTA />
    </>
  );
}
