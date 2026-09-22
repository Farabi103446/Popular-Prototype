import type { Metadata } from "next";
import { Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Accordion from "@/components/Accordion";
import JobApplicationForm from "./JobApplicationForm";
import { getAllJobs } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Build your career with Popular Pharmaceuticals PLC — an employer of choice with a culture of innovation, competitive benefits and opportunities across manufacturing, quality, marketing and international business.",
  alternates: { canonical: "/career" },
};

const BENEFITS = [
  "Provident Fund",
  "Gratuity",
  "Group Life Insurance Coverage",
  "Medical Assistance",
  "Training & Development",
  "Performance-Driven Culture",
];

const HRD_MISSION = [
  "Valuing, Encouraging, and Supporting Workforce.",
  "Continually Improving Individual and Organizational Effectiveness.",
  "Anticipating and Meeting the Changing Needs of the Workforce.",
  "Championing Career and Professional Growth.",
];

export default function CareerPage() {
  const jobs = getAllJobs();

  return (
    <>
      <PageHero
        title="Career"
        subtitle="Employment with Popular Pharmaceuticals offers a wealth of opportunities to serve your community through healthcare while building a career in a culture of innovation."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
      />

      {/* Culture + benefits */}
      <section className="section" aria-label="Working at Popular">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Why Popular</p>
            <h2 className="h-section">An employer of choice</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We have a culture of innovation and an employee-friendly working environment. Our Human
              Resources Department commits to serving employees well with a competitive compensation
              program — valuing our people as the most valuable intangible asset of the company.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {BENEFITS.map((b) => (
                <Badge key={b} variant="tertiary">
                  {b}
                </Badge>
              ))}
            </div>
          </div>
          <Card>
            <CardContent className="p-7">
              <h3 className="font-extrabold text-foreground">HRD Mission Statement</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Through strategic partnerships and collaboration, the Human Resources Department
                recruits, develops and retains a high-performing workforce and fosters a healthy,
                safe and productive work environment to position Popular Pharmaceuticals as an
                employer of choice.
              </p>
              <Separator className="my-5" />
              <ul className="space-y-2.5">
                {HRD_MISSION.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex h-4.5 w-4.5 h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tertiary/15">
                      <Check className="h-3 w-3 h-3.5 w-3.5 text-tertiary" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Job board */}
      <section id="jobs" className="scroll-mt-24 border-y bg-secondary/60 py-14 sm:py-20" aria-label="Job board">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Job Board</p>
              <h2 className="h-section">Current vacancies</h2>
            </div>
            <Badge variant="tertiary">{jobs.length} open positions</Badge>
          </div>
          <Card className="mt-10 p-5 sm:p-7">
            <Accordion
              items={jobs.map((job) => ({
                title: `${job.title} — ${job.department}`,
                content: (
                  <div className="grid gap-5 md:grid-cols-[1fr_240px]">
                    <div>
                      <div className="mb-3 flex flex-wrap gap-2">
                        <Badge>{job.location}</Badge>
                        <Badge variant="tertiary">{job.type}</Badge>
                        <Badge variant="muted">{job.level} level</Badge>
                      </div>
                      <p className="leading-relaxed text-muted-foreground">{job.description}</p>
                      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                        Requirements
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {job.requirements.map((r, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tertiary" />
                            {r}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-xs text-muted-foreground/70">
                        Posted{" "}
                        {new Date(job.posted).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        · Deadline{" "}
                        {new Date(job.deadline).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-3 md:items-end">
                      <Button variant="tertiary" size="sm" asChild>
                        <a href="#apply">Apply Now</a>
                      </Button>
                      <p className="text-xs text-muted-foreground/70 md:text-right">
                        Reference: {job.slug.toUpperCase()}
                      </p>
                    </div>
                  </div>
                ),
              }))}
            />
          </Card>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="section scroll-mt-24" aria-label="Apply">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Apply Today</p>
            <h2 className="h-section">Let's build a career together</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Submit your resume and cover letter for a listed position. Our HR team reviews every
              application and responds to shortlisted candidates within 15 working days.
            </p>
            <Card className="mt-6 bg-accent">
              <CardContent className="p-5 text-sm text-primary">
                <p className="font-bold">Tip</p>
                <p className="mt-1 leading-relaxed">
                  Mention the position reference in your cover letter and attach your resume in PDF
                  format for the fastest processing.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardContent className="p-6 sm:p-8">
              <JobApplicationForm jobs={jobs.map((j) => ({ slug: j.slug, title: j.title }))} />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
