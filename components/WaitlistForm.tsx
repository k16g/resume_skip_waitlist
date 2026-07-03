"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "./Button";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  dark = false,
  align = "left",
}: {
  dark?: boolean;
  align?: "left" | "center";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading" || status === "success") return;
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Couldn't reach the server. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex items-center gap-3 rounded-xl border px-5 py-3.5 ${
          dark
            ? "border-white/15 bg-white/5 text-white"
            : "border-accent/20 bg-accent/5 text-foreground"
        } ${align === "center" ? "mx-auto max-w-md justify-center" : ""}`}
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-secondary">
          <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
        </span>
        <p className="text-sm">
          You&apos;re on the list. We&apos;ll email you the moment we open the doors.
        </p>
      </div>
    );
  }

  return (
    <div className={align === "center" ? "mx-auto max-w-md" : ""}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-start"
        noValidate
      >
        <div className="flex-1">
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>
          <input
            id="waitlist-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className={`h-12 w-full rounded-xl border px-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
              dark
                ? "border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:ring-offset-foreground"
                : "border-border bg-white text-foreground placeholder:text-muted-foreground/60 focus:ring-offset-background"
            }`}
          />
        </div>
        <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto group">
          {status === "loading" ? "Joining..." : "Join the waitlist"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </form>
      {status === "error" && (
        <p className={`mt-2 text-xs ${dark ? "text-white/70" : "text-muted-foreground"}`}>
          {message}
        </p>
      )}
      <p className={`mt-2.5 text-xs ${dark ? "text-white/50" : "text-muted-foreground"}`}>
        No spam. One email when we launch.
      </p>
    </div>
  );
}
