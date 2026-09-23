import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  Clock3,
  MapPin,
  Tag,
} from "lucide-react";
import { getAllJobs, getJobBySlug } from "@/lib/jobs";
import JobApplicationForm from "@/app/career/JobApplicationForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function generateStaticParams() {
  return getAllJobs().map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "Job not found" };
  return {
    title: `${job.title} — Career`,
    description: job.description,
    alternates: { canonical: `/career/${job.slug}` },
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const others = getAllJobs().filter((j) => j.slug !== job.slug).slice(0, 3);

  return (
    <>
      <article>
        {/* Header band */}
        <header className="border-b bg-secondary/60">
          <div className="container-x py-12 sm:py-16 2xl:py-20">
            <nav aria-label="Breadcrumb" className="animate-heroup">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="transition-colors hover:text-foreground">Home</Link>
                </li>
                <li aria-hidden="true"><ArrowRight className="h-3.5 w-3.5 opacity-50" /></li>
                <li>
                  <Link href="/career" className="transition-colors hover:text-foreground">Career</Link>
                </li>
                <li aria-hidden="true"><ArrowRight className="h-3.5 w-3.5 opacity-50" /></li>
                <li>
                  <span aria-current="page" className="font-semibold text-foreground">{job.title}</span>
                </li>
              </ol>
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Badge variant="tertiary">{job.type}</Badge>
              <Badge>{job.department}</Badge>
            </div>

            <h1 className="animate-heroup mt-4 max-w-4xl text-balance text-3xl font-extrabold tracking-tight [animation-delay:90ms] sm:text-4xl 2xl:text-5xl">
              {job.title}
            </h1>

            <div className="animate-heroup mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground [animation-delay:180ms]">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-tertiary" aria-hidden="true" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4 text-tertiary" aria-hidden="true" />
                {job.level} level
              </span>
              <span className="flex items-center gap-2">
                <CalendarClock className="h-4 w-4 text-tertiary" aria-hidden="true" />
                Apply by {fmt(job.deadline)}
              </span>
              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-tertiary" aria-hidden="true" />
                Posted {fmt(job.posted)}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="tertiary" size="lg" asChild>
                <a href="#apply">
                  Apply Now
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/career">
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  All roles
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Body: overview + requirements sidebar (BRAC-IT layout) */}
        <div className="container-x grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_340px] 2xl:gap-14">
          <div>
            <h2 className="text-xl font-extrabold text-foreground">Role Overview</h2>
            <p className="mt-4 text-[15px] leading-7 text-foreground/85 sm:text-base sm:leading-8">
              {job.description}
            </p>

            <h2 className="mt-10 text-xl font-extrabold text-foreground">What you&apos;ll do</h2>
            <p className="mt-4 text-[15px] leading-7 text-foreground/85 sm:text-base sm:leading-8">
              You will join the <strong className="font-semibold text-foreground">{job.department}</strong> team
              at our {job.location.includes("Dhamrai") ? "Dhamrai manufacturing campus" : job.location}.
              Day to day, that means working to cGMP discipline alongside cross-functional
              colleagues — production, quality, regulatory and commercial — with clear targets,
              documented procedures and room to grow into larger scope as the business scales.
            </p>

            <h2 className="mt-10 text-xl font-extrabold text-foreground">Requirements</h2>
            <ul className="mt-4 space-y-3">
              {job.requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[15px] leading-7 text-foreground/85 sm:text-base">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tertiary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside>
            <Card className="sticky top-28">
              <CardContent className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Position details
                </p>
                <Separator className="my-4" />
                <dl className="space-y-4 text-sm">
                  {[
                    ["Department", job.department],
                    ["Location", job.location],
                    ["Employment type", job.type],
                    ["Experience level", `${job.level} level`],
                    ["Application deadline", fmt(job.deadline)],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{k}</dt>
                      <dd className="mt-1 font-semibold text-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
                <Separator className="my-5" />
                <Button variant="tertiary" className="w-full" asChild>
                  <a href="#apply">
                    Apply Now
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  Reference: {job.slug.toUpperCase()}
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Other roles */}
        <section className="border-t bg-secondary/60 py-14 sm:py-16" aria-label="Other roles">
          <div className="container-x">
            <p className="eyebrow">Other roles</p>
            <h2 className="h-section">More openings at Popular</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {others.map((j) => (
                <Link
                  key={j.slug}
                  href={`/career/${j.slug}`}
                  className="group rounded-xl border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Badge variant="tertiary">{j.type}</Badge>
                  <h3 className="mt-3 font-bold text-foreground transition-colors group-hover:text-primary">
                    {j.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {j.location}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Apply section — the same form, anchored here */}
        <section id="apply" className="section scroll-mt-24" aria-label="Apply">
          <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow">Apply now</p>
              <h2 className="h-section">Apply for this position</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                You&apos;re applying for <strong className="font-semibold text-foreground">{job.title}</strong> ({job.department}).
                Mention the position reference <strong className="font-semibold text-foreground">{job.slug.toUpperCase()}</strong> in
                your cover letter and attach your resume in PDF for the fastest processing.
              </p>
            </div>
            <JobApplicationForm jobs={[{ slug: job.slug, title: job.title }]} />
          </div>
        </section>
      </article>
    </>
  );
}
