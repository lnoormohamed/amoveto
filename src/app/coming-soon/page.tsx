import { type Metadata } from "next";
import Link from "next/link";
import { NotifyForm } from "./countdown";

export const metadata: Metadata = {
  title: "Coming Soon — WorldPriceIndex",
  description: "WorldPriceIndex is launching soon. Sign up to get early access to global price data and inflation insights.",
};

const features = [
  { icon: "📈", title: "Inflation Tracking",       desc: "195 countries, decades of history"          },
  { icon: "🌍", title: "Country Price Compare",    desc: "Find the cheapest place to buy anything"    },
  { icon: "📊", title: "Subscription Index",       desc: "Netflix, Spotify & more — tracked globally" },
  { icon: "⚡", title: "Developer API",            desc: "Real-time data for your platform"           },
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
      <style>{`html, body { background-color: #080c14; }`}</style>
    <div
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#080c14] text-white"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >

      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      {/* ── Header ── */}
      <header className="relative z-10 px-4 py-5 sm:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            World<span className="text-blue-400">Price</span>Index
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
          >
            ← Home
          </Link>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-8">
        <div className="w-full max-w-2xl text-center">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
            We&apos;re building something incredible
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Launching{" "}
            <span
              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent"
            >
              very soon.
            </span>
          </h1>

          <p className="mb-10 text-base leading-relaxed text-white/50 sm:text-lg">
            WorldPriceIndex is the global platform for price intelligence — track inflation,
            compare costs across 195 countries, and access real-time data via API.
          </p>

          {/* Stats */}
          <div className="mb-10 grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: "195+", label: "Countries" },
              { value: "50K+", label: "Products" },
              { value: "12M+", label: "Data points" },
              { value: "99.9%", label: "API uptime" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center backdrop-blur-sm">
                <p className="text-xl font-extrabold text-white sm:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-xs text-white/35">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Email form */}
          <div className="mb-10">
            <NotifyForm />
            <p className="mt-3 text-xs text-white/30">
              Join 2,400+ people on the early access list. No spam, ever.
            </p>
          </div>

          {/* Divider */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-xs text-white/25 uppercase tracking-widest">What&apos;s coming</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-left backdrop-blur-sm"
              >
                <span className="mb-2.5 block text-2xl">{f.icon}</span>
                <p className="mb-1 text-xs font-semibold text-white/80">{f.title}</p>
                <p className="text-xs leading-relaxed text-white/35">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="relative z-10 px-4 py-6 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/25">© 2026 WorldPriceIndex. All rights reserved.</p>

          {/* Socials */}
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
            {["Privacy", "Terms", "Contact"].map((l) => (
              <Link key={l} href="#" className="transition hover:text-white/60">{l}</Link>
            ))}
          </div>
        </div>
      </footer>

    </div>
    </>
  );
}
