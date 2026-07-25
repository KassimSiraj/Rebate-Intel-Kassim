import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, BarChart3, ShieldCheck, FileText, Sparkles, Check, X, Microscope, LineChart, Wrench, Activity } from "lucide-react";
import heroImage from "@/assets/hero-network.png";
import { Section, SectionHeader } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/CTA";

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
      <Services />
      <Process />
      <WhyAIRecommends />
    </>
  );
}
// removed sections below
function _Unused() { return null; }

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            AI visibility for commercial solar
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground text-balance leading-[1.02]">
            Winning the project increasingly starts <span className="text-brand">before the RFP</span>.
          </h1>
          <div className="mt-6 space-y-4 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            <p>
              Buyers are asking AI which commercial solar companies they should trust. Those recommendations shape who makes the shortlist—and who never gets considered.
            </p>
            <p>
              RebateIntel helps position your company as the recommendation buyers see first.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://cal.com/rebateintel/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Book an AI Positioning strategy call. <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><Check className="h-4 w-4 text-brand" /> Commercial solar focus</div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative">
            <img
              src={heroImage}
              alt="AI platforms connecting to a trusted commercial solar business"
              width={1280}
              height={1024}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const aiPlatforms = ["ChatGPT", "Google AI", "Gemini", "Claude", "Perplexity"];

function TrustBar() {
  return (
    <section className="hairline-t hairline-b bg-surface">
      <div className="container-page py-10">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
          Helping companies prepare for the future of AI-powered buying
        </p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-6 items-center">
          {aiPlatforms.map((p) => (
            <div
              key={p}
              className="text-center text-base md:text-lg font-semibold text-foreground/70 tracking-tight"
            >
              {p}
            </div>
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
          <SectionHeader
            eyebrow="The shift"
            title="The way businesses buy has changed."
            description="Decision makers no longer start on Google. They ask an AI model. The platform picks a short list — and many outstanding solar companies never appear on it."
          />
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border bg-background p-6 md:p-8 shadow-card">
            <div className="text-xs font-medium text-muted-foreground">Real prompts buyers are typing today</div>
            <div className="mt-5 space-y-3">
              {problemQueries.map((q) => (
                <div key={q} className="flex items-start gap-3 rounded-lg bg-surface px-4 py-3 hairline-b last:border-b-0">
                  <Search className="h-4 w-4 mt-0.5 text-brand shrink-0" />
                  <span className="text-sm text-foreground">{q}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <Stat number="63%" label="of B2B buyers now use AI tools during research" />
            <Stat number="3–5" label="companies the average AI answer cites" />
            <Stat number="0" label="paid placements — AI picks who it trusts" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <div className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">{number}</div>
      <div className="mt-2 text-xs text-muted-foreground leading-relaxed">{label}</div>
    </div>
  );
}

const services = [
  {
    icon: Microscope,
    title: "AI Recommendation Analysis",
    desc: "Analyze how leading AI systems currently understand, describe, and recommend your business.",
  },
  {
    icon: BarChart3,
    title: "Competitive AI Benchmark",
    desc: "Benchmark your visibility against competitors across the AI search environments your buyers use.",
  },
  {
    icon: ShieldCheck,
    title: "Commercial Authority Positioning",
    desc: "Develop AI-citable assets — research, data, and references — that raise your recommendation likelihood.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    desc: "Educational content engineered for AI ingestion: clear, structured, and confidently citable.",
  },
  {
    icon: Sparkles,
    title: "AI Trust Infrastructure",
    desc: "Reviews, citations, structured data, and entity optimization that compound your AI authority.",
  },
];

function Services() {
  return (
    <Section surface>
      <SectionHeader
        eyebrow="What we do"
        title="A complete system for AI visibility."
        description="Five disciplines that work together to make your company the obvious recommendation when buyers ask an AI model."
      />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-border bg-background p-6 md:p-7 hover:shadow-card transition-shadow"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-muted text-brand">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <Link
              to="/solutions"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
            >
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}

const processSteps = [
  {
    icon: Microscope,
    title: "AI Recommendation Assessment",
    desc: "We benchmark how ChatGPT, Gemini, Perplexity, and Google AI currently understand and recommend your company compared with your competitors.",
  },
  {
    icon: LineChart,
    title: "Opportunity Roadmap",
    desc: "We identify the highest-impact opportunities preventing your company from being consistently recommended. Notice we didn't say how.",
  },
  {
    icon: Wrench,
    title: "Implementation",
    desc: "Our team implements the approved improvements across your digital presence to strengthen AI recommendation signals. Still no secret.",
  },
  {
    icon: Activity,
    title: "Continuous Monitoring",
    desc: "We monitor recommendation trends and refine your AI presence as platforms evolve.",
  },
];

function Process() {
  return (
    <Section>
      <SectionHeader
        eyebrow="How it works"
        title="A clean four-step engagement."
        description="No guesswork, no fluff — a repeatable methodology designed for commercial solar."
      />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {processSteps.map((s, i) => (
          <div key={s.title} className="rounded-2xl border border-border bg-background p-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-background">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhyAIRecommends() {
  return (
    <Section surface>
      <SectionHeader
        eyebrow="Why AI picks one over another"
        title="Two solar companies. One gets recommended."
        description="AI models look for signals of authority and clarity. Excellence in operations alone doesn't translate into recommendations."
      />
      <div className="mt-12 grid md:grid-cols-2 gap-5">
        <ComparisonCard
          variant="muted"
          tag="Company A"
          headline="Great operations. Quiet online."
          rows={[
            { ok: true, text: "Strong installations & customer satisfaction" },
            { ok: false, text: "Few online authority signals" },
            { ok: false, text: "Minimal educational content" },
            { ok: false, text: "No structured data or entity optimization" },
          ]}
          outcome="Rarely recommended"
          outcomeNeg
        />
        <ComparisonCard
          variant="brand"
          tag="Company B"
          headline="Equally great. Visibly authoritative."
          rows={[
            { ok: true, text: "Educational content and original research" },
            { ok: true, text: "Documented case studies with measurable outcomes" },
            { ok: true, text: "Structured data and entity optimization" },
            { ok: true, text: "Citations and consistent third-party trust signals" },
          ]}
          outcome="Frequently recommended"
        />
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
      className={`rounded-2xl border p-6 md:p-8 ${
        variant === "brand"
          ? "border-brand/30 bg-background shadow-elevated"
          : "border-border bg-background"
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
        <div
          className={`mt-1 text-lg font-semibold ${
            outcomeNeg ? "text-muted-foreground" : "text-brand"
          }`}
        >
          {outcome}
        </div>
      </div>
    </div>
  );
}

