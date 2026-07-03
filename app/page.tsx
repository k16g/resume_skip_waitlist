import { Search, FileText, Send, Clock, ScrollText, ClipboardList, RefreshCw } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SectionLabel } from "@/components/SectionLabel";
import { NavCta } from "@/components/NavCta";
import { WaitlistForm } from "@/components/WaitlistForm";
import { HeroGraphic } from "@/components/HeroGraphic";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Tell us your dream job",
    body: "Share your resume, your target roles, and what you won't compromise on — location, salary, seniority. Takes about two minutes.",
  },
  {
    number: "02",
    title: "We hunt and tailor, all day",
    body: "Resume Skip scans new postings that match your spec and rewrites your resume for each one, so it speaks that job's language.",
  },
  {
    number: "03",
    title: "You just show up",
    body: "Applications go out under your name, logged and tracked. You spend your five hours on interviews, not on search tabs.",
  },
];

const features = [
  {
    icon: Search,
    title: "Smart job matching",
    body: "We scan new postings continuously and filter for roles that actually fit your dream spec, not just keyword overlap.",
  },
  {
    icon: FileText,
    title: "A resume for every role",
    body: "Every application gets its own version of your resume, rewritten around what that specific job is asking for.",
  },
  {
    icon: Send,
    title: "Applications, handled",
    body: "No portals, no forms, no copy-pasting your own work history for the tenth time. We apply on your behalf and keep the receipts.",
  },
];

const grindBreakdown = [
  { icon: ScrollText, label: "Scrolling job boards" },
  { icon: RefreshCw, label: "Rewriting the same resume" },
  { icon: ClipboardList, label: "Filling out application forms" },
  { icon: Clock, label: "Repeating it all, tomorrow" },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Logo />
          <NavCta />
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-16 sm:pt-20 lg:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(0,82,255,0.08),transparent)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-28">
          <div>
            <Reveal>
              <SectionLabel pulse>Pre-launch · Limited early spots</SectionLabel>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display font-extrabold text-[2.75rem] leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-[5.25rem]">
                Get back{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">5 hours a day</span>
                  <span
                    className="absolute -bottom-1 left-0 h-3 w-full rounded-sm md:-bottom-2 md:h-4"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0,82,255,0.15), rgba(77,124,255,0.1))",
                    }}
                  />
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Tell Resume Skip your dream role. We&apos;ll find the jobs that match it,
                rewrite your resume for each one, and apply — so the daily job-hunting
                grind stops being your job.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8" id="waitlist-hero">
                <WaitlistForm />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <HeroGraphic />
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>How it works</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-xl font-display font-extrabold text-3xl leading-[1.15] tracking-[-0.02em] sm:text-[3.25rem]">
              Three steps. <span className="gradient-text">Zero grind.</span>
            </h2>
          </Reveal>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-secondary font-sans text-sm font-bold text-white shadow-accent">
                    {step.number}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.01em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>What you get</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-xl font-display font-extrabold text-3xl leading-[1.15] tracking-[-0.02em] sm:text-[3.25rem]">
              Built to replace the grind, <span className="gradient-text">not add to it.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:gap-6 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary shadow-accent transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-5 w-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="relative mt-6 text-xl font-semibold tracking-[-0.01em]">
                    {feature.title}
                  </h3>
                  <p className="relative mt-3 leading-relaxed text-muted-foreground">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inverted: the math */}
      <section className="relative overflow-hidden bg-foreground px-6 py-24 text-white sm:py-28">
        <div className="dot-pattern pointer-events-none absolute inset-0 opacity-[0.03]" />
        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-accent/[0.15] blur-[150px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-accent-secondary/[0.12] blur-[150px]" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel dark>The math</SectionLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-2xl font-display font-extrabold text-3xl leading-[1.15] tracking-[-0.02em] sm:text-[3.25rem]">
              The average job search eats{" "}
              <span className="gradient-text">five hours a day.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-xl leading-relaxed text-white/60">
              That&apos;s where it usually goes. Resume Skip takes over every piece of
              it except the part that&apos;s actually yours to do — the interview.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {grindBreakdown.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="border-l border-white/15 pl-4">
                  <item.icon className="h-5 w-5 text-accent-secondary" strokeWidth={1.75} />
                  <p className="mt-4 text-sm leading-snug text-white/80">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-16 border-t border-white/10 pt-10" id="waitlist">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                Join the waitlist
              </p>
              <h3 className="mt-3 max-w-md font-display font-bold text-2xl leading-tight tracking-[-0.02em] sm:text-3xl">
                Be first in when we open the doors.
              </h3>
              <div className="mt-7">
                <WaitlistForm dark />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Resume Skip. Built to give you your time back.
          </p>
        </div>
      </footer>
    </main>
  );
}
