import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/site/Section";
import { ArrowRight, Mail, Calendar, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book an AI Positioning Strategy Call" },
      { name: "description", content: "Book a 30-minute AI Positioning strategy call with the Rebate Intel team." },
      { property: "og:title", content: "Contact — Rebate Intel" },
      { property: "og:description", content: "Book a 30-minute AI Positioning strategy call." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Section>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-4">Contact</div>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">
            Book an AI Positioning strategy call.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A 30-minute call with our team. We'll show you live how the major AI platforms describe your company today — and what it would take to become the recommendation buyers see first.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Live look at how 4 AI platforms describe your company",
              "Honest assessment of your AI recommendation share",
              "Clear next steps — no pressure, no pitch deck",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="h-4 w-4 mt-0.5 text-brand shrink-0" /> {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-3 text-sm">
            <a href="mailto:kassim@rebateintel.com" className="inline-flex items-center gap-2 text-foreground hover:text-brand">
              <Mail className="h-4 w-4" /> kassim@rebateintel.com
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" /> Response within one business day
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-border bg-background p-6 md:p-8 shadow-card"
          >
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-muted text-brand">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-foreground">Thanks — we'll be in touch.</h2>
                <p className="mt-2 text-sm text-muted-foreground">A member of our team will reach out within one business day to schedule your strategy call.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" required />
                <Field label="Role" name="role" />
                <Field label="Website" name="website" className="md:col-span-2" />
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-foreground">What would you like to discuss?</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="A short note about your company and goals."
                  />
                </div>
                <div className="md:col-span-2 mt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://cal.com/rebateintel/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background hover:bg-foreground/90"
                  >
                    Book an AI Positioning strategy call <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="text-xs text-muted-foreground">We reply within one business day.</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label, name, type = "text", required, className = "",
}: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
