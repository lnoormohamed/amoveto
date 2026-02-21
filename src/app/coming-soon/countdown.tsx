"use client";

import { useState } from "react";

export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to email service (Resend, Mailchimp, etc.)
    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-4 text-sm font-medium text-emerald-400">
        <span className="text-lg">✓</span>
        You&apos;re on the list — we&apos;ll be in touch soon!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-white/30 outline-none backdrop-blur-sm focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20"
      />
      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-95"
      >
        Get Early Access
      </button>
    </form>
  );
}
