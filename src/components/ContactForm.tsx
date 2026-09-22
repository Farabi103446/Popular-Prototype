"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type Category = "general" | "product" | "export";

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{6,20}$/;

function sanitize(s: string): string {
  return s.replace(/[<>]/g, "");
}

export default function ContactForm({
  defaultCategory = "general",
  defaultMessage = "",
  compact = false,
}: {
  defaultCategory?: Category;
  defaultMessage?: string;
  compact?: boolean;
}) {
  const [category, setCategory] = useState<Category>(defaultCategory);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(defaultMessage);
  const [honeypot, setHoneypot] = useState("");
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (): boolean => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your full name.";
    if (!EMAIL_RE.test(email)) e.email = "Please enter a valid email address.";
    if (phone && !PHONE_RE.test(phone)) e.phone = "Please enter a valid phone number.";
    if (message.trim().length < 10) e.message = "Please enter a message (min. 10 characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (honeypot) return;
    if (!validate()) return;
    if (!captchaChecked) {
      alert("Please confirm the reCAPTCHA checkbox before submitting. (Prototype placeholder)");
      return;
    }
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  if (status === "sent") {
    return (
      <div
        className="rounded-lg border border-tertiary/30 bg-tertiary/10 p-6 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto mb-3 h-11 w-11 text-tertiary" aria-hidden="true" />
        <p className="text-lg font-bold text-foreground">Thank you!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Your {category === "export" ? "export" : category === "product" ? "product" : "general"}{" "}
          inquiry has been received. Our team will get back to you within 2 working days.
        </p>
        <Button
          variant="link"
          className="mt-3"
          onClick={() => {
            setStatus("idle");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setCaptchaChecked(false);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  const nameField = (id: string) => (
    <div>
      <Label htmlFor={id}>Full name *</Label>
      <Input
        id={id}
        type="text"
        className={cn("mt-1.5", errors.name && "border-destructive focus-visible:ring-destructive")}
        value={name}
        maxLength={80}
        onChange={(e) => setName(sanitize(e.target.value))}
        placeholder="Your full name"
        autoComplete="name"
        aria-invalid={!!errors.name}
        aria-describedby={errors.name ? `${id}-error` : undefined}
      />
      {errors.name && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {errors.name}
        </p>
      )}
    </div>
  );

  const emailField = (id: string) => (
    <div>
      <Label htmlFor={id}>Email *</Label>
      <Input
        id={id}
        type="email"
        className={cn("mt-1.5", errors.email && "border-destructive focus-visible:ring-destructive")}
        value={email}
        maxLength={120}
        onChange={(e) => setEmail(sanitize(e.target.value))}
        placeholder="you@example.com"
        autoComplete="email"
        aria-invalid={!!errors.email}
        aria-describedby={errors.email ? `${id}-error` : undefined}
      />
      {errors.email && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {errors.email}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <span className="mb-2 block text-sm font-semibold">Inquiry type</span>
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Inquiry type">
          {(
            [
              ["general", "General"],
              ["product", "Product"],
              ["export", "Export / Partnership"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={category === value}
              onClick={() => setCategory(value)}
              className={cn(
                "cursor-pointer rounded-md border px-4 py-2 text-xs font-semibold transition-colors",
                category === value
                  ? "border-tertiary bg-tertiary text-white"
                  : "border-input bg-background text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {!compact ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {nameField("cf-name")}
          {emailField("cf-email")}
        </div>
      ) : (
        <>
          {nameField("cf-name-c")}
          {emailField("cf-email-c")}
        </>
      )}

      <div>
        <Label htmlFor="cf-phone">
          Phone <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="cf-phone"
          type="tel"
          className={cn("mt-1.5", errors.phone && "border-destructive focus-visible:ring-destructive")}
          value={phone}
          maxLength={20}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+880 1XXX XXXXXX"
          autoComplete="tel"
        />
        {errors.phone && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="cf-message">Message *</Label>
        <Textarea
          id="cf-message"
          rows={4}
          className={cn("mt-1.5", errors.message && "border-destructive focus-visible:ring-destructive")}
          value={message}
          maxLength={2000}
          onChange={(e) => setMessage(sanitize(e.target.value))}
          placeholder={
            category === "export"
              ? "Tell us about your market, products of interest and distribution capability..."
              : category === "product"
              ? "Which product or therapeutic area is your inquiry about?"
              : "How can we help you?"
          }
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <Label htmlFor="cf-company-url">Company URL</Label>
        <Input
          id="cf-company-url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* reCAPTCHA placeholder */}
      <div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-3.5">
        <Checkbox
          id="cf-captcha"
          checked={captchaChecked}
          onCheckedChange={(v) => setCaptchaChecked(v === true)}
        />
        <Label
          htmlFor="cf-captcha"
          className="text-xs font-normal text-muted-foreground"
        >
          I'm not a robot — reCAPTCHA{" "}
          <span className="text-muted-foreground/70">(placeholder for prototype)</span>
        </Label>
      </div>

      <Button type="submit" variant="tertiary" className="w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
