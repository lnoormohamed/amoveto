import { redirect } from "next/navigation";
import Link from "next/link";

const destinations = [
  {
    region: "Europe",
    country: "Portugal",
    city: "Lisbon",
    fit: "Families and founders seeking EU access, lifestyle quality, and predictable relocation timelines.",
    focus: ["Residency pathways", "Schooling map", "Neighborhood fit"],
  },
  {
    region: "Middle East",
    country: "United Arab Emirates",
    city: "Dubai",
    fit: "Entrepreneurs and executives optimizing for infrastructure, mobility, and tax positioning.",
    focus: ["Company setup coordination", "Residency planning", "Property sourcing"],
  },
  {
    region: "Europe",
    country: "Switzerland",
    city: "Zug",
    fit: "Ultra-high-net-worth families prioritizing stability, discretion, and premium services.",
    focus: ["Permit strategy", "Cantonal coordination", "Private relocation logistics"],
  },
  {
    region: "Asia",
    country: "Singapore",
    city: "Singapore",
    fit: "Globally mobile households building an Asia base with education and safety as top priorities.",
    focus: ["Employment pass strategy", "School admissions planning", "Family setup"],
  },
];

const pillars = [
  {
    title: "Strategic Shortlisting",
    description:
      "We narrow options using your timeline, tax constraints, family needs, and lifestyle preferences before you commit resources.",
  },
  {
    title: "Advisor Coordination",
    description:
      "We work alongside legal and tax professionals so your move sequence, documents, and decision points stay aligned.",
  },
  {
    title: "Relocation Execution",
    description:
      "From neighborhood targeting to move-in readiness, we coordinate the practical steps that usually slow families down.",
  },
];

const process = [
  {
    step: "01",
    title: "Private Intake",
    text: "A focused consultation to understand household goals, business structure, constraints, and target timing.",
  },
  {
    step: "02",
    title: "Country Comparison",
    text: "We produce a short list with tradeoffs across residency viability, lifestyle fit, and operational complexity.",
  },
  {
    step: "03",
    title: "Move Blueprint",
    text: "You receive an execution sequence covering permits, advisors, property, and relocation milestones.",
  },
  {
    step: "04",
    title: "Concierge Support",
    text: "We coordinate local partners and keep the process moving while you focus on family and business priorities.",
  },
];

export default function HomePage() {
  redirect("/coming-soon");
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#09090b] text-stone-100" style={{ fontFamily: "var(--font-geist-sans)" }}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(251,191,36,0.14),transparent_38%),radial-gradient(circle_at_86%_16%,rgba(56,189,248,0.14),transparent_42%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            AMove<span className="text-amber-300">To</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
            <Link href="#destinations" className="transition hover:text-white">
              Destinations
            </Link>
            <Link href="#how" className="transition hover:text-white">
              How It Works
            </Link>
            <Link href="#consult" className="transition hover:text-white">
              Consult
            </Link>
          </nav>
          <Link
            href="/coming-soon"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Coming Soon
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 sm:pt-14">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                Private International Relocation Advisory
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Relocate with a plan built for your family, not a generic expat checklist.
              </h1>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
                AMoveTo helps affluent individuals and families move across borders with clarity. We combine destination
                intelligence, residency strategy, and high-touch coordination so major life decisions are made in the
                right order.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#consult"
                  className="rounded-2xl bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-amber-200"
                >
                  Start A Private Consultation
                </Link>
                <Link
                  href="#destinations"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Destination Profiles
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { value: "Private", label: "Advisory model" },
                  { value: "Global", label: "Partner network" },
                  { value: "1:1", label: "Client support" },
                  { value: "High-touch", label: "Execution" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 px-3 py-4">
                    <p className="truncate text-base font-semibold text-white sm:text-lg">{item.value}</p>
                    <p className="mt-1 text-xs text-stone-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-5 backdrop-blur-xl sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Client Brief Snapshot</p>
                    <p className="mt-1 text-lg font-semibold text-white">Family Relocation Mandate</p>
                  </div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                    Active Review
                  </span>
                </div>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-stone-400">Priorities</p>
                    <p className="mt-2 leading-6 text-stone-200">
                      Tax efficiency, high safety, strong schools, premium healthcare, and a predictable residency path.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-stone-400">Timeline</p>
                      <p className="mt-2 font-medium text-white">6-9 months</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-stone-400">Household</p>
                      <p className="mt-2 font-medium text-white">Couple + 2 children</p>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-amber-200">Current Shortlist</p>
                    <p className="mt-2 leading-6 text-white">Portugal, UAE, Singapore (legal and schooling track comparison underway)</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">What We Coordinate</p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {pillars.map((pillar) => (
                    <div key={pillar.title} className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:col-span-1">
                      <p className="text-sm font-semibold text-white">{pillar.title}</p>
                      <p className="mt-2 text-xs leading-5 text-stone-400">{pillar.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="destinations" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Destination Matrix</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Evaluate countries through a relocation lens
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-stone-400">
              We compare residency feasibility, education quality, healthcare access, tax posture, infrastructure, and
              day-to-day livability before recommending a move path.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {destinations.map((destination) => (
              <article key={`${destination.country}-${destination.city}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-stone-400">{destination.region}</p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">{destination.city}</h3>
                    <p className="mt-1 text-sm text-stone-400">{destination.country}</p>
                  </div>
                  <span className="inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-stone-300">
                    Client-fit profile
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-stone-200">{destination.fit}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {destination.focus.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-stone-300">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 backdrop-blur-xl sm:p-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">How It Works</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  A structured relocation process built for high-stakes moves
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-stone-400">
                Designed for families and principals who need clarity, speed, and discretion while coordinating multiple advisors and decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {process.map((item) => (
                <div key={item.step} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-stone-200">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-stone-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="consult" className="mx-auto max-w-7xl px-4 pb-14 pt-6 sm:px-6 sm:pb-20">
          <div className="grid grid-cols-1 gap-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl lg:grid-cols-[1.05fr_.95fr] sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">Consultation</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Start with a private relocation strategy session
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-300 sm:text-base">
                We will define your relocation goals, pressure-test your destination assumptions, and outline a practical next-step sequence for your family and advisors.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="mailto:hello@amoveto.com"
                  className="rounded-2xl bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-amber-200"
                >
                  hello@amoveto.com
                </Link>
                <Link
                  href="/coming-soon"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Coming Soon Experience
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Best Fit For</p>
              <ul className="mt-4 space-y-3 text-sm text-stone-200">
                {[
                  "Entrepreneurs relocating a family while managing business continuity",
                  "International families optimizing for schools, safety, and long-term residency",
                  "Investors comparing jurisdictions before property or permit commitments",
                  "Principals seeking discreet, coordinated execution with local partner support",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-300" />
                    <span className="leading-6">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight text-white">
              AMove<span className="text-amber-300">To</span>
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-stone-400">
              Private international relocation advisory for affluent individuals and families planning cross-border moves with clarity and discretion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Explore</p>
              <div className="mt-3 flex flex-col gap-2 text-stone-300">
                <Link href="#destinations" className="transition hover:text-white">
                  Destinations
                </Link>
                <Link href="#how" className="transition hover:text-white">
                  How It Works
                </Link>
                <Link href="/coming-soon" className="transition hover:text-white">
                  Coming Soon
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Contact</p>
              <div className="mt-3 flex flex-col gap-2 text-stone-300">
                <Link href="mailto:hello@amoveto.com" className="transition hover:text-white">
                  hello@amoveto.com
                </Link>
                <Link href="#consult" className="transition hover:text-white">
                  Consultation
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Legal</p>
              <div className="mt-3 flex flex-col gap-2 text-stone-300">
                <Link href="#" className="transition hover:text-white">
                  Privacy
                </Link>
                <Link href="#" className="transition hover:text-white">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-stone-500 sm:px-6 md:flex-row md:items-center md:justify-between">
            <p>© 2026 AMoveTo. All rights reserved.</p>
            <p>Built for private, cross-border relocation planning.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
