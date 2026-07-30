import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Microscope,
  BarChart3,
  ShieldCheck,
  FileText,
  Sparkles,
  Factory,
  BookOpen,
  LineChart,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type MenuItem = {
  to: string;
  hash?: string;
  label: string;
  desc: string;
  icon: LucideIcon;
};

const solutionsMenu: MenuItem[] = [
  {
    to: "/solutions",
    hash: "ai-recommendation-analysis",
    label: "AI Recommendation Analysis",
    desc: "How AI describes and recommends you today.",
    icon: Microscope,
  },
  {
    to: "/solutions",
    hash: "competitive-ai-benchmark",
    label: "Competitive AI Benchmark",
    desc: "Where you stand against named competitors.",
    icon: BarChart3,
  },
  {
    to: "/solutions",
    hash: "commercial-authority-positioning",
    label: "Commercial Authority Positioning",
    desc: "Build the authority signals AI trusts.",
    icon: ShieldCheck,
  },
  {
    to: "/solutions",
    hash: "content-strategy",
    label: "Content Strategy",
    desc: "Assets engineered to be cited by AI.",
    icon: FileText,
  },
  {
    to: "/solutions",
    hash: "ai-trust-infrastructure",
    label: "AI Trust Infrastructure",
    desc: "Entities, schema, citations, and reviews.",
    icon: Sparkles,
  },
  {
    to: "/industries",
    label: "Industries we serve",
    desc: "Commercial solar and adjacent energy markets.",
    icon: Factory,
  },
];

const researchMenu: MenuItem[] = [
  {
    to: "/research",
    label: "Commercial Solar AI Research",
    desc: "Ongoing studies across five AI platforms.",
    icon: LineChart,
  },
  {
    to: "/research",
    hash: "key-findings",
    label: "Key findings",
    desc: "What the data says right now.",
    icon: BarChart3,
  },
  {
    to: "/resources",
    label: "Resources",
    desc: "Guides, frameworks, and explainers.",
    icon: BookOpen,
  },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md hairline-b">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/favicon.png" alt="Rebate Intel" className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight text-black">Rebate Intel</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <MegaItem label="Solutions" items={solutionsMenu} />
          <MegaItem label="Research" items={researchMenu} />
          <Link
            to="/about"
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md"
            activeProps={{ className: "px-3 py-2 text-sm text-foreground rounded-md" }}
          >
            About
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/"
            hash="free-check"
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Free AI check
          </Link>
          <a
            href="/book"
            className="liquid-glass inline-flex items-center justify-center px-5 py-2 text-sm font-semibold"
          >
            Book Strategy Call
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden hairline-t max-h-[80vh] overflow-y-auto">
          <div className="container-page py-3 flex flex-col">
            <MobileGroup
              label="Solutions"
              items={solutionsMenu}
              open={mobileGroup === "Solutions"}
              onToggle={() => setMobileGroup((g) => (g === "Solutions" ? null : "Solutions"))}
              onNavigate={() => setOpen(false)}
            />
            <MobileGroup
              label="Research"
              items={researchMenu}
              open={mobileGroup === "Research"}
              onToggle={() => setMobileGroup((g) => (g === "Research" ? null : "Research"))}
              onNavigate={() => setOpen(false)}
            />
            <Link to="/about" onClick={() => setOpen(false)} className="py-2.5 text-sm text-foreground">
              About
            </Link>
            <Link
              to="/"
              hash="free-check"
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-foreground"
            >
              Free AI check
            </Link>
            <a
              href="/book"
              onClick={() => setOpen(false)}
              className="liquid-glass mt-3 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaItem({ label, items }: { label: string; items: MenuItem[] }) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
        <div className="rounded-2xl border border-border bg-background p-3 shadow-elevated">
          <div className="grid grid-cols-2 gap-1">
            {items.map((i) => (
              <Link
                key={i.label}
                to={i.to}
                hash={i.hash}
                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
              >
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-brand">
                  <i.icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-foreground">{i.label}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground leading-relaxed">
                    {i.desc}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between rounded-xl bg-surface px-4 py-3">
            <span className="text-xs text-muted-foreground">
              Not sure where to start? Run the free AI recommendation check.
            </span>
            <Link to="/" hash="free-check" className="text-xs font-medium text-brand">
              Start free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileGroup({
  label,
  items,
  open,
  onToggle,
  onNavigate,
}: {
  label: string;
  items: MenuItem[];
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="hairline-b">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-2.5 text-sm text-foreground"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-2">
          {items.map((i) => (
            <Link
              key={i.label}
              to={i.to}
              hash={i.hash}
              onClick={onNavigate}
              className="block py-2 pl-1 text-sm text-muted-foreground"
            >
              {i.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
