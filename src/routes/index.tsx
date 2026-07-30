import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Search,
  BarChart3,
  ShieldCheck,
  FileText,
  Sparkles,
  Check,
  X,
  Microscope,
  Plus,
} from "lucide-react";
import heroImage from "@/assets/hero-network.png";
import { Section, SectionHeader } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { VisibilityChecker } from "@/components/site/VisibilityChecker";
import { TabbedShowcase, type ShowcaseTab } from "@/components/site/TabbedShowcase";
import { Plans } from "@/components/site/Plans";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rebate Intel — Winning the project starts before the RFP." },
      {
        name: "description",
        content:
          "Buyers are asking AI which commercial solar companies to trust. RebateIntel positions your company as the recommendation they see first.",
      },
      { property: "og:title", content: "Rebate Intel — Winning the project starts before the RFP." },
      {
        property: "og:description",
        content:
          "Buyers are asking AI which commercial solar companies to trust. RebateIntel positions your company as the recommendation they see first.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <Capabilities />
      <Process />
      <WhyAIRecommends />
      <PlansSection />
      <Proof />
      <FAQ />
      <NewsletterSection />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-backdrop opacity-70" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] brand-glow" />
      <div className="relative container-page pt-16 pb-20 md:pt-24 md:pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-xs text-muted-foreground shadow-card">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            AI visibility for commercial solar
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground text-balance leading-[1.02]">
            Winning the project increasingly starts <span className="text-brand">before the RFP</span>.
          </h1>
          <div className="mt-6 space-y-4 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            <p>
              Buyers are asking AI which commercial solar companies they should trust. Those
              recommendations shape who makes the shortlist—and who never gets considered.
            </p>
            <p>RebateIntel helps position your company as the recommendation buyers see first.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              Book an AI Positioning strategy call. <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/research"
              className="liquid-glass-light inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-semibold text-foreground"
            >
              See the research
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-brand" /> Commercial solar focus
            </div>
          </div>
        </div>
        <div className="lg:col-span-5" id="free-check">
          <div className="relative fade-up">
            <div aria-hidden className="absolute -inset-6 rounded-full bg-brand/10 blur-3xl" />
            <img
              src={heroImage}
              alt="AI platforms connecting to a trusted commercial solar business"
              width={1280}
              height={1024}
              className="relative w-full h-auto"
            />
            <div className="relative mt-6">
              <VisibilityChecker />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const aiPlatforms = ["ChatGPT", "Google AI", "Gemini", "Claude", "Perplexity"];

function TrustBar() {
  const loop = [...aiPlatforms, ...aiPlatforms, ...aiPlatforms, ...aiPlatforms];
  return (
    <section className="hairline-t hairline-b bg-surface">
      <div className="container-page py-10">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          Helping companies prepare for the future of AI-powered buying
        </p>
      </div>
      <div className="relative overflow-hidden pb-10 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track gap-14 pr-14">
          {loop.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="shrink-0 text-base md:text-lg font-semibold text-foreground/60 tracking-tight"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const problemQueries = [
  "Best commercial solar company in Arizona",
  "Who installs solar for manufacturing facilities?",
  "Commercial solar ROI for a 200,000 sq ft warehouse",
  "Most trusted commercial solar EPCs in the Southwest",
];

function Problem() {
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeader
              eyebrow="The shift"
              title="The way businesses buy has changed."
              description="Decision makers no longer start on Google. They ask an AI model. The platform picks a short list — and many outstanding solar companies never appear on it."
            />
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-background p-6 md:p-8 shadow-card">
              <div className="text-xs font-medium text-muted-foreground">
                Real prompts buyers are typing today
              </div>
              <div className="mt-5 space-y-3">
                {problemQueries.map((q) => (
                  <div
                    key={q}
                    className="flex items-start gap-3 rounded-lg bg-surface px-4 py-3 hairline-b last:border-b-0"
                  >
                    <Search className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                    <span className="text-sm text-foreground">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Stat number="63%" label="of B2B buyers now use AI tools during research" />
              <Stat number="3–5" label="companies the average AI answer cites" />
              <Stat number="0" label="paid placements — AI picks who it trusts" />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-5 card-lift">
      <div className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">{number}</div>
      <div className="mt-2 text-xs text-muted-foreground leading-relaxed">{label}</div>
    </div>
  );
}

const capabilityTabs: ShowcaseTab[] = [
  {
    id: "analysis",
    label: "AI Recommendation Analysis",
    icon: Microscope,
    title: "See exactly how AI describes your company today.",
    description:
      "We run structured buyer prompts across ChatGPT, Gemini, Claude, Perplexity, and Google AI, then score how often — and how confidently — your company appears.",
    bullets: [
      "Prompt library built from real commercial solar buying language",
      "Mention rate, sentiment, and accuracy scored per platform",
      "Every claim AI makes about you, sourced back to its origin",
    ],
    panelTitle: "Sample readout",
    rows: [
      { label: "Prompts tested", value: "120" },
      { label: "Platforms covered", value: "5" },
      { label: "Mention rate before", value: "8%" },
      { label: "Accuracy of AI claims", value: "Reviewed line by line", strong: true },
    ],
  },
  {
    id: "benchmark",
    label: "Competitive AI Benchmark",
    icon: BarChart3,
    title: "Know who AI recommends instead of you — and why.",
    description:
      "We benchmark your recommendation share against the competitors you actually lose to, and isolate the signals separating you from them.",
    bullets: [
      "Head-to-head recommendation share by market and prompt",
      "Signal gap analysis: citations, entities, third-party coverage",
      "A prioritized list of what to close first",
    ],
    panelTitle: "Benchmark snapshot",
    rows: [
      { label: "Named competitors tracked", value: "Up to 8" },
      { label: "Markets benchmarked", value: "Per region" },
      { label: "Reporting cadence", value: "Monthly" },
      { label: "Primary metric", value: "Recommendation share", strong: true },
    ],
  },
  {
    id: "authority",
    label: "Commercial Authority Positioning",
    icon: ShieldCheck,
    title: "Build the authority AI needs before it will vouch for you.",
    description:
      "Models recommend companies they can verify. We create and place the evidence — data, references, and third-party corroboration — that makes you verifiable.",
    bullets: [
      "Proof assets: project data, references, and outcomes",
      "Placement across the sources AI models actually read",
      "Consistent positioning language across every surface",
    ],
    panelTitle: "Authority workstream",
    rows: [
      { label: "Evidence assets per quarter", value: "6–10" },
      { label: "Third-party placements", value: "Ongoing" },
      { label: "Positioning system", value: "One source of truth" },
      { label: "Compounding effect", value: "Quarter over quarter", strong: true },
    ],
  },
  {
    id: "content",
    label: "Content Strategy",
    icon: FileText,
    title: "Content engineered to be quoted, not just ranked.",
    description:
      "Educational, structured, and specific content that answers the questions buyers put to AI — written so models can extract and cite it cleanly.",
    bullets: [
      "Topic map derived from live buyer prompts",
      "Answer-first structure with extractable claims",
      "Refreshed as platforms and buyer language change",
    ],
    panelTitle: "Content system",
    rows: [
      { label: "Pieces per month", value: "4–8" },
      { label: "Format", value: "Answer-first, sourced" },
      { label: "Review", value: "SME-validated" },
      { label: "Goal", value: "Citable by AI", strong: true },
    ],
  },
  {
    id: "trust",
    label: "AI Trust Infrastructure",
    icon: Sparkles,
    title: "The technical layer that makes your company machine-legible.",
    description:
      "Entity definition, structured data, review signals, and citation hygiene so every AI platform resolves your company to the same confident answer.",
    bullets: [
      "Entity and knowledge-graph alignment",
      "Schema and structured data across key pages",
      "Review, directory, and citation consistency",
    ],
    panelTitle: "Infrastructure checklist",
    rows: [
      { label: "Entity consistency", value: "Audited + fixed" },
      { label: "Structured data", value: "Site-wide" },
      { label: "Citation hygiene", value: "Monitored" },
      { label: "Outcome", value: "One consistent answer", strong: true },
    ],
  },
];

function Capabilities() {
  return (
    <Section surface>
      <Reveal>
        <SectionHeader
          eyebrow="What we do"
          title="A complete system for AI visibility."
          description="Five disciplines that work together to make your company the obvious recommendation when buyers ask an AI model."
        />
      </Reveal>
      <Reveal delay={80}>
        <div className="mt-12">
          <TabbedShowcase tabs={capabilityTabs} />
        </div>
      </Reveal>
      <div className="mt-8">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand"
        >
          Explore all solutions <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Section>
  );
}

const processSteps = [
  {
    step: "Step 1",
    title: "AI Recommendation Assessment",
    desc: "We benchmark how ChatGPT, Gemini, Perplexity, and Google AI currently understand and recommend your company compared with your competitors.",
  },
  {
    step: "Step 2",
    title: "Opportunity Roadmap",
    desc: "We identify the highest-impact opportunities preventing your company from being consistently recommended.",
  },
  {
    step: "Step 3",
    title: "Implementation",
    desc: "Our team implements the approved improvements across your digital presence to strengthen AI recommendation signals.",
  },
  {
    step: "Step 4",
    title: "Continuous Monitoring",
    desc: "We monitor recommendation trends and refine your AI presence as platforms evolve.",
  },
];

function Process() {
  return (
    <Section>
      <Reveal>
        <SectionHeader
          eyebrow="How it works"
          title="A research-led engagement, start to finish."
          description="No guesswork. Every step is grounded in what the platforms actually return for your buyers' prompts."
        />
      </Reveal>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {processSteps.map((s, i) => (
          <Reveal key={s.title} delay={i * 70}>
            <div className="h-full rounded-2xl border border-border bg-background p-6 card-lift">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">{s.step}</div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function WhyAIRecommends() {
  return (
    <Section surface>
      <Reveal>
        <SectionHeader
          eyebrow="Why AI picks one over another"
          title="Being the Better Installer Doesn't Guarantee Being Recommended."
          description="AI models look for signals of authority and clarity. Excellence in operations alone doesn't translate into recommendations."
        />
      </Reveal>
      <div className="mt-12 grid md:grid-cols-2 gap-5">
        <Reveal>
          <ComparisonCard
            variant="muted"
            tag="Company A"
            headline="Excellent installer. Hard for AI to trust."
            rows={[
              { ok: true, text: "Strong reputation with customers" },
              { ok: true, text: "Excellent project execution" },
              { ok: false, text: "AI has limited confidence in recommending the company" },
              { ok: false, text: "Competitors have stronger digital authority" },
            ]}
            outcome="Rarely appears in AI recommendations."
            outcomeNeg
          />
        </Reveal>
        <Reveal delay={90}>
          <ComparisonCard
            variant="brand"
            tag="Company B"
            headline="Excellent installer. Easy for AI to recommend."
            rows={[
              { ok: true, text: "Strong reputation" },
              { ok: true, text: "Clearly understood across AI platforms" },
              { ok: true, text: "Strong digital authority" },
              { ok: true, text: "Consistent recognition across trusted sources" },
            ]}
            outcome="Frequently recommended."
          />
        </Reveal>
      </div>
    </Section>
  );
}

function ComparisonCard({
  tag,
  headline,
  rows,
  outcome,
  outcomeNeg,
  variant,
}: {
  tag: string;
  headline: string;
  rows: { ok: boolean; text: string }[];
  outcome: string;
  outcomeNeg?: boolean;
  variant: "muted" | "brand";
}) {
  return (
    <div
      className={`h-full rounded-2xl border p-6 md:p-8 ${
        variant === "brand" ? "border-brand/30 bg-background shadow-elevated" : "border-border bg-background"
      }`}
    >
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{tag}</div>
      <h3 className="mt-3 text-2xl font-semibold text-foreground">{headline}</h3>
      <ul className="mt-6 space-y-3">
        {rows.map((r) => (
          <li key={r.text} className="flex items-start gap-3 text-sm">
            {r.ok ? (
              <Check className="h-4 w-4 mt-0.5 text-brand shrink-0" />
            ) : (
              <X className="h-4 w-4 mt-0.5 text-muted-foreground shrink-0" />
            )}
            <span className={r.ok ? "text-foreground" : "text-muted-foreground"}>{r.text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 pt-5 hairline-t">
        <div className="text-xs text-muted-foreground">Outcome</div>
        <div className={`mt-1 text-lg font-semibold ${outcomeNeg ? "text-muted-foreground" : "text-brand"}`}>
          {outcome}
        </div>
      </div>
    </div>
  );
}

function PlansSection() {
  return (
    <Section>
      <Reveal>
        <SectionHeader
          eyebrow="Engagements"
          title="Start with evidence. Scale into category leadership."
          description="Every engagement begins with the same benchmark, then expands only as far as your markets require."
        />
      </Reveal>
      <Reveal delay={80}>
        <div className="mt-12">
          <Plans />
        </div>
      </Reveal>
    </Section>
  );
}

function Proof() {
  return (
    <Section surface>
      <Reveal>
        <SectionHeader
          eyebrow="What operators say"
          title="Research they can act on."
        />
      </Reveal>
      <Reveal delay={80}>
        <div className="mt-12">
          <Testimonials />
        </div>
      </Reveal>
    </Section>
  );
}

const faqs = [
  {
    q: "What exactly is AI positioning?",
    a: "It's the work of making your company legible, credible, and citable to AI models — so that when a buyer asks ChatGPT, Gemini, Claude, or Perplexity for a commercial solar partner, your company is part of the answer.",
  },
  {
    q: "How is this different from SEO?",
    a: "SEO competes for a list of blue links. AI positioning competes for a single recommendation. The signals overlap, but the strategy, the assets, and the way success is measured are different.",
  },
  {
    q: "How do you measure results?",
    a: "We benchmark recommendation share per platform and per buyer prompt, then track how it moves over time against your named competitors.",
  },
  {
    q: "Who is this for?",
    a: "Commercial solar EPCs, developers, and installers with real project execution behind them — companies that deserve to be recommended but aren't yet.",
  },
  {
    q: "How quickly do things change?",
    a: "The assessment lands in weeks. Recommendation movement follows the authority work, which compounds over a few months rather than overnight.",
  },
];

function FAQ() {
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow="FAQ" title="Questions we hear most." />
        </div>
        <div className="lg:col-span-8 divide-y divide-border border-t border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                <span className="text-base md:text-lg font-medium text-foreground">{f.q}</span>
                <Plus className="h-4 w-4 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

function NewsletterSection() {
  return (
    <section className="pb-4">
      <div className="container-page">
        <Reveal>
          <Newsletter />
        </Reveal>
      </div>
    </section>
  );
}
