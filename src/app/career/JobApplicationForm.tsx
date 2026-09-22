"use client";

import { useRef, useState } from "react";
import { CheckCircle2, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface JobOption {
  slug: string;
  title: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  position?: string;
  coverLetter?: string;
  resume?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{6,20}$/;

export default function JobApplicationForm({ jobs }: { jobs: JobOption[] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [resumeError, setResumeError] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const fileRef = useRef<HTMLInputElement>(null);

  const onFile = (f: File | null) => {
    setResumeError("");
    if (!f) {
      setResumeName("");
      return;
    }
    const okType = f.type === "application/pdf" || /\.(pdf|doc|docx)$/i.test(f.name);
    if (!okType) {
      setResumeError("Please attach a PDF or Word document.");
      setResumeName("");
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setResumeError("File must be under 5 MB.");
      setResumeName("");
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    setResumeName(f.name);
  };

  const validate = (): boolean => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your full name.";
    if (!EMAIL_RE.test(email)) e.email = "Please enter a valid email address.";
    if (!PHONE_RE.test(phone)) e.phone = "Please enter a valid phone number.";
    if (!position) e.position = "Please select a position.";
    if (coverLetter.trim().length < 30)
      e.coverLetter = "Please write a short cover letter (min. 30 characters).";
    if (!resumeName) e.resume = "Please attach your resume (PDF or Word, max 5 MB).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1000);
  };

  if (status === "sent") {
    return (
      <div
        className="rounded-lg border border-tertiary/30 bg-tertiary/10 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-tertiary" aria-hidden="true" />
        <p className="text-lg font-bold text-foreground">Application received!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you, {name.split(" ")[0]}. Your application for{" "}
          <strong>{jobs.find((j) => j.slug === position)?.title ?? position}</strong> has been
          submitted. Our HR team will contact shortlisted candidates within 15 working days.
        </p>
        <Button
          variant="link"
          className="mt-4"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setPhone("");
            setPosition("");
            setCoverLetter("");
            setResumeName("");
          }}
        >
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="ja-name">Full name *</Label>
          <Input
            id="ja-name"
            type="text"
            className={cn("mt-1.5", errors.name && "border-destructive focus-visible:ring-destructive")}
            value={name}
            maxLength={80}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            autoComplete="name"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="ja-email">Email *</Label>
          <Input
            id="ja-email"
            type="email"
            className={cn("mt-1.5", errors.email && "border-destructive focus-visible:ring-destructive")}
            value={email}
            maxLength={120}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="ja-phone">Phone *</Label>
          <Input
            id="ja-phone"
            type="tel"
            className={cn("mt-1.5", errors.phone && "border-destructive focus-visible:ring-destructive")}
            value={phone}
            maxLength={20}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+880 1XXX XXXXXX"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="ja-position">Position *</Label>
          <Select value={position} onValueChange={setPosition}>
            <SelectTrigger
              id="ja-position"
              className={cn("mt-1.5", errors.position && "border-destructive")}
              aria-label="Select a position"
            >
              <SelectValue placeholder="Select a position..." />
            </SelectTrigger>
            <SelectContent>
              {jobs.map((j) => (
                <SelectItem key={j.slug} value={j.slug}>
                  {j.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.position && (
            <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
              {errors.position}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="ja-cover">Cover letter *</Label>
        <Textarea
          id="ja-cover"
          rows={5}
          className={cn("mt-1.5", errors.coverLetter && "border-destructive focus-visible:ring-destructive")}
          value={coverLetter}
          maxLength={3000}
          onChange={(e) => setCoverLetter(e.target.value)}
          placeholder="Tell us why you are a great fit for this role..."
          aria-invalid={!!errors.coverLetter}
        />
        {errors.coverLetter && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.coverLetter}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="ja-resume">Resume / CV * (PDF or Word, max 5 MB)</Label>
        <label
          htmlFor="ja-resume"
          className={cn(
            "mt-1.5 flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed px-4 py-5 text-sm transition-colors",
            resumeName
              ? "border-tertiary/50 bg-tertiary/10"
              : "border-input bg-muted/40 hover:border-primary hover:bg-accent"
          )}
        >
          <UploadCloud
            className={cn("h-5 w-5", resumeName ? "text-tertiary" : "text-muted-foreground")}
            aria-hidden="true"
          />
          {resumeName ? (
            <span className="font-semibold text-tertiary">{resumeName}</span>
          ) : (
            <span className="text-muted-foreground">Click to upload your resume</span>
          )}
        </label>
        <input
          id="ja-resume"
          ref={fileRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf"
          className="sr-only"
          onChange={(e) => onFile(e.target.files?.[0] ?? null)}
        />
        {(resumeError || errors.resume) && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {resumeError || errors.resume}
          </p>
        )}
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="ja-website">Website</Label>
        <Input id="ja-website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" variant="tertiary" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Submitting..." : "Submit Application"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Prototype form — submissions are simulated and no data leaves your browser.
      </p>
    </form>
  );
}
