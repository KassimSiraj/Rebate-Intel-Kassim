import { Link } from "@tanstack/react-router";


export function SiteFooter() {
  return (
    <footer className="hairline-t bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img src="/favicon.png" alt="Rebate Intel" className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tight text-black">
                Rebate Intel
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Helping commercial solar companies become more likely to be recommended during AI-assisted buying decisions.
            </p>
          </div>

          <FooterCol title="Company">
            <FooterLink to="/about">About</FooterLink>
          </FooterCol>

          <FooterCol title="Solutions">
            <FooterLink to="/solutions">AI Recommendation Analysis</FooterLink>
            <FooterLink to="/solutions">Competitive AI Benchmark</FooterLink>
            <FooterLink to="/solutions">Commercial Authority Positioning</FooterLink>
            <FooterLink to="/solutions">Content Strategy</FooterLink>
          </FooterCol>

          <FooterCol title="Resources">
            <FooterLink to="/research">Research</FooterLink>
            <FooterLink to="/resources">Articles</FooterLink>
            <FooterLink to="/industries">Industries</FooterLink>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          </FooterCol>

        </div>

        <div className="mt-14 pt-6 hairline-t flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2026 RebateIntel. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs font-semibold tracking-widest uppercase text-foreground">{title}</h4>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
      {children}
    </Link>
  );
}
