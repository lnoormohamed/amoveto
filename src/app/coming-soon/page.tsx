import { type Metadata } from "next";
import Link from "next/link";
import { NotifyForm } from "./countdown";

export const metadata: Metadata = {
  title: "Coming Soon — AMoveTo",
  description:
    "AMoveTo is launching soon. Join the list for early access to private international relocation advisory and destination intelligence.",
};

const features = [
  { icon: "🛂", title: "Residency Planning", desc: "Visa and permit pathway strategy" },
  { icon: "🏡", title: "Property Search", desc: "Area shortlists and move-in support" },
  { icon: "👨‍👩‍👧‍👦", title: "Family Relocation", desc: "Schools, healthcare, and logistics" },
  { icon: "🌐", title: "Destination Intelligence", desc: "Country fit analysis for global moves" },
];

const socials = [
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ComingSoonPage() {
  return (
    <>
      <style>{`html, body { background-color: #0c0a09; }`}</style>
      <div
        className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-stone-950 text-white"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="absolute -top-32 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-amber-500/20 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[100px]" />
        </div>

        <header className="relative z-10 px-4 py-5 sm:px-8">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <Link href="/" className="text-lg font-bold tracking-tight">
              AMove<span className="text-amber-400">To</span>
            </Link>
            <Link
              href="/"
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
            >
              ← Home
            </Link>
          </div>
        </header>

        <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-8">
          <div className="w-full max-w-2xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-300" />
              AMoveTo is launching soon
            </div>

            <h1 className="mb-5 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Global relocation,
              <span className="block bg-gradient-to-r from-amber-300 via-yellow-200 to-sky-300 bg-clip-text text-transparent">
                handled with precision.
              </span>
            </h1>

            <p className="mb-10 text-base leading-relaxed text-white/55 sm:text-lg">
              We are building a private relocation platform for affluent individuals and families moving across borders
              with confidence, discretion, and expert coordination.
            </p>

            <div className="mb-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { value: "Private", label: "Advisory" },
                { value: "Global", label: "Partner network" },
                { value: "1:1", label: "Support model" },
                { value: "High-touch", label: "Execution" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex min-h-32 flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm"
                >
                  <p className="whitespace-nowrap text-xl leading-none font-extrabold text-white sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="text-xs leading-none text-white/35">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <NotifyForm />
              <p className="mt-3 text-xs text-white/30">
                Join the list for launch updates and early consultation access. No spam.
              </p>
            </div>

            <div className="mb-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/5" />
              <span className="text-xs uppercase tracking-widest text-white/25">What&apos;s included</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex min-h-36 flex-col items-center justify-center gap-2 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center backdrop-blur-sm"
                >
                  <span className="block text-2xl">{f.icon}</span>
                  <p className="text-xs font-semibold text-white/85">{f.title}</p>
                  <p className="text-xs leading-relaxed text-white/35">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer className="relative z-10 px-4 py-6 sm:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/25">© 2026 AMoveTo. All rights reserved.</p>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/40 transition hover:bg-white/10 hover:text-white"
                >
                  {s.icon}
                </Link>
              ))}
            </div>

            <div className="flex gap-5 text-xs text-white/30">
              {["Privacy", "Terms", "Contact"].map((label) => (
                <Link key={label} href="#" className="transition hover:text-white/60">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
