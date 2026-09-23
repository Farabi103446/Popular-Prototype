import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  Banknote,
  HeartPulse,
  GraduationCap,
  Clock,
  MapPin,
  BriefcaseBusiness,
  Upload,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import JobApplicationForm from "./JobApplicationForm";
import { getAllJobs } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Careers at Popular Pharmaceuticals PLC — open roles across manufacturing, quality, marketing and international business, with benefits built around people and growth.",
  alternates: { canonical: "/career" },
};

/** "We Offer" pillars — BRAC-IT-style grouped benefits, in Popular's voice. */
const OFFER_GROUPS = [
  {
    icon: HeartPulse,
    title: "A workplace built on care",
    points: [
      "Group life insurance for you and your dependents",
      "Medical assistance coverage",
      "Safe, GMP-grade working environment",
      "Subsidized canteen and transport at the Dhamrai campus",
    ],
  },
  {
    icon: Banknote,
    title: "Financial rewards that matter",
    points: [
      "Competitive, benchmarked salary",
      "Provident fund and gratuity",
      "Festival bonus and allowances",
      "Performance-linked increments",
    ],
  },
  {
    icon: GraduationCap,
    title: "Learning & career growth",
    points: [
      "Structured training and GMP development programs",
      "Cross-functional rotation opportunities",
      "Management trainee pathway for young scientists",
      "Promotion from within — most unit heads grew here",
    ],
  },
];

const HRD_MISSION = [
  "Valuing, encouraging, and supporting our workforce.",
  "Continually improving individual and organizational effectiveness.",
  "Anticipating and meeting the changing needs of the workforce.",
  "Championing career and professional growth.",
];

export default function CareerPage() {
  const jobs = getAllJobs();

  return (
    <>
      <PageHero
        title="Career"
        subtitle="Ready to make an impact for health? Build your career where medicines that reach millions are made — from the labs of Dhaka to the production lines of Dhamrai."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
      />

      {/* Purpose statement — BRAC-IT's "if you care about..." beat */}
      <section className="section" aria-label="Why Popular">
        <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Why Popular</p>
            <h2 className="h-section">Everything we do is anchored in patient impact</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Yes, we run validation batches, monitor cleanrooms, audit suppliers and ship
                export consignments — all the machinery of a pharmaceutical company. But every
                one of those tasks traces back to a single outcome: a patient somewhere gets the
                medicine they need, at a price they can afford.
              </p>
              <p>
                If that kind of impact matters to you, you&apos;re in the right place. Our people
                are the most valuable intangible asset of the company, and the Human Resources
                mission is written around that: recruit, develop and retain a high-performing
                workforce in a healthy, safe and productive environment.
              </p>
            </div>
            <Button variant="tertiary" className="mt-7" asChild>
              <Link href="#jobs">
                See open roles
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <Card className="self-start bg-accent">
            <CardContent className="p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                HRD Mission
              </p>
              <ul className="mt-4 space-y-3">
                {HRD_MISSION.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-primary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* We Offer — three benefit pillars, BRAC-IT structure */}
      <section className="border-y bg-secondary/60 py-14 sm:py-20" aria-label="Benefits">
        <div className="container-x">
          <p className="eyebrow">We offer</p>
          <h2 className="h-section">Benefits designed around people</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3 2xl:gap-8">
            {OFFER_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="rounded-xl border bg-card p-7 shadow-card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-foreground">{group.title}</h3>
                  <Separator className="my-4" />
                  <ul className="space-y-2.5">
                    {group.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tertiary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles — BRAC-IT-style role cards with meta chips */}
      <section id="jobs" className="section scroll-mt-24" aria-label="Open roles">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Open roles</p>
              <h2 className="h-section">Current vacancies</h2>
            </div>
            <Badge variant="tertiary">{jobs.length} open positions</Badge>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-6">
            {jobs.map((job) => (
                <Card
                  key={job.slug}
                  className="group flex h-full flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-base font-extrabold leading-snug text-foreground 2xl:text-lg">
                      {job.title}
                    </h3>
                    <Badge variant="tertiary">{job.type}</Badge>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">{job.department}</p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-tertiary" aria-hidden="true" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BriefcaseBusiness className="h-3.5 w-3.5 text-tertiary" aria-hidden="true" />
                      {job.level} level
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {job.description}
                  </p>

                  <Separator className="my-4" />

                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
                      Apply by{" "}
                      {new Date(job.deadline).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <Button variant="tertiary" size="sm" asChild>
                      <Link
                        href={`/career/${job.slug}`}
                        aria-label={`See details for ${job.title}`}
                      >
                        See Details
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Talent pool — BRAC-IT's "can't find the role?" band */}
      <section className="border-t bg-primary py-14 text-primary-foreground sm:py-16" aria-label="Talent pool">
        <div className="container-x flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-start gap-5">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 sm:flex">
              <Upload className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl">Can&apos;t find the role you&apos;re looking for?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/75">
                The right opportunity may not be open yet, but great talent is always welcome.
                Send us your CV and we&apos;ll reach out when a role matches your profile.
              </p>
            </div>
          </div>
          <Button variant="tertiary" size="lg" className="shrink-0" asChild>
            <a href="#apply">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Drop your CV
            </a>
          </Button>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="section scroll-mt-24" aria-label="Apply">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Apply today</p>
            <h2 className="h-section">Let&apos;s build a career together</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Submit your resume for a listed position, or into our talent pool. Our HR team
              reviews every application and responds to shortlisted candidates within 15 working
              days.
            </p>
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
