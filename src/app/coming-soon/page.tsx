import { type Metadata } from "next";
import Link from "next/link";
import { NotifyForm } from "./countdown";

export const metadata: Metadata = {
  title: "Coming Soon — AMoveTo",
  description:
    "AMoveTo is launching soon. Join the list for early access to private international relocation advisory and destination intelligence.",
};

const servicePillars = [
  {
    title: "Residency Strategy",
    detail: "Pathway mapping, permit sequencing, and advisor coordination",
    icon: "🛂",
  },
  {
    title: "Property Positioning",
    detail: "Neighborhood fit, search support, and move-ready planning",
    icon: "🏡",
  },
  {
    title: "Family Transition",
    detail: "Schools, healthcare, staffing, and daily-life logistics",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Destination Intelligence",
    detail: "Country comparison across legal, tax, and lifestyle factors",
    icon: "🌍",
  },
];

const shortlist = [
  { country: "Portugal", tag: "Lifestyle + EU access" },
  { country: "UAE", tag: "Tax efficiency + infrastructure" },
  { country: "Switzerland", tag: "Stability + privacy" },
  { country: "Singapore", tag: "Asia base + safety" },
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
      <style>{`html, body { background-color: #08070a; }`}</style>
      <div
        className="relative min-h-[100dvh] overflow-hidden bg-[#08070a] text-stone-100"
        style={{ fontFamily: "var(--font-geist-sans)" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
          <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-amber-300/10 to-transparent" />
          <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="absolute right-0 top-12 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-7xl flex-col px-4 pb-6 pt-4 sm:px-6 sm:pt-6">
          <header className="mb-6 flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              AMove<span className="text-amber-300">To</span>
            </Link>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur transition hover:bg-white/10 hover:text-white"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </header>

          <main className="grid flex-1 grid-cols-1 gap-5 lg:grid-cols-[1.15fr_.85fr]">
            <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                Launching Soon
              </div>

              <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                A private relocation service
                <span className="mt-1 block bg-gradient-to-r from-amber-200 via-stone-100 to-sky-200 bg-clip-text text-transparent">
                  for globally mobile families.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
                AMoveTo is building a premium relocation experience for affluent individuals moving to a new country.
                We combine destination intelligence, residency strategy, and hands-on coordination so complex moves feel
                structured and discreet.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { value: "Private", label: "Advisory" },
                  { value: "Global", label: "Coverage" },
                  { value: "1:1", label: "Support" },
                  { value: "Concierge", label: "Execution" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/20 px-3 py-4 text-center"
                  >
                    <p className="truncate text-lg font-semibold leading-none text-white sm:text-xl">{item.value}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-stone-400">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Early Access</p>
                    <p className="mt-1 text-sm font-medium text-white">Get launch updates and consultation openings</p>
                  </div>
                  <p className="text-xs text-stone-400">No spam. High-signal updates only.</p>
                </div>
                <div className="mt-4">
                  <NotifyForm />
                </div>
              </div>

              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
                    Example Destination Shortlist
                  </p>
                  <span className="text-xs text-stone-500">Illustrative</span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {shortlist.map((item) => (
                    <div
                      key={item.country}
                      className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-white">{item.country}</p>
                      <p className="mt-1 text-xs leading-5 text-stone-400">{item.tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <aside className="flex flex-col gap-5">
              <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">What AMoveTo Covers</p>
                <div className="mt-4 space-y-3">
                  {servicePillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="grid grid-cols-[36px_1fr] items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-lg">
                        {pillar.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{pillar.title}</p>
                        <p className="mt-1 text-xs leading-5 text-stone-400">{pillar.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">How Launch Access Works</p>
                <ol className="mt-4 space-y-3">
                  {[
                    "Join the early access list",
                    "Receive launch updates and service announcements",
                    "Request a private consultation when bookings open",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-stone-200">
                        {index + 1}
                      </span>
                      <p className="pt-0.5 text-sm leading-6 text-stone-200">{step}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-5 flex flex-col gap-2 text-xs text-stone-400">
                  <Link href="/" className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center transition hover:bg-white/10 hover:text-white">
                    Visit Homepage
                  </Link>
                  <Link href="mailto:hello@amoveto.com" className="text-center transition hover:text-white">
                    hello@amoveto.com
                  </Link>
                </div>
              </section>
            </aside>
          </main>

          <footer className="mt-5 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-stone-400 sm:flex-row">
            <p>© 2026 AMoveTo. Private international relocation advisory.</p>
            <div className="flex items-center gap-4">
              {["Privacy", "Terms", "Contact"].map((item) => (
                <Link key={item} href="#" className="transition hover:text-white">
                  {item}
                </Link>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
