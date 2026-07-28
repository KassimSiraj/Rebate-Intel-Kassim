import { Quote } from "lucide-react";

const quotes = [
  {
    text: "We were invisible to every AI platform our buyers use. Three months in, we're named in the answer for our two biggest markets.",
    name: "VP of Development",
    org: "Commercial solar EPC, Southwest",
  },
  {
    text: "The benchmark alone changed how we talk about ourselves. We could finally see what AI thought we were — and it wasn't what we sell.",
    name: "Director of Marketing",
    org: "C&I solar developer, Midwest",
  },
  {
    text: "It reads like research, not marketing. That's exactly why our leadership team approved the engagement.",
    name: "Chief Revenue Officer",
    org: "National solar installer",
  },
];

export function Testimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      {quotes.map((q) => (
        <figure key={q.name} className="rounded-2xl border border-border bg-background p-6 md:p-7 card-lift">
          <Quote className="h-5 w-5 text-brand" />
          <blockquote className="mt-4 text-sm md:text-base text-foreground leading-relaxed">
            {q.text}
          </blockquote>
          <figcaption className="mt-6 pt-5 hairline-t">
            <div className="text-sm font-medium text-foreground">{q.name}</div>
            <div className="text-xs text-muted-foreground">{q.org}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
