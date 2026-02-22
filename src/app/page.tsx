import Link from "next/link";

const destinations = [
  {
    country: "Portugal",
    city: "Lisbon",
    angle: "EU lifestyle and family-friendly coastal living",
    residency: "D7 / D8 / Golden Visa-adjacent planning",
    profile: "Founders, remote operators, young families",
  },
  {
    country: "United Arab Emirates",
    city: "Dubai",
    angle: "Tax-efficient base with premium infrastructure",
    residency: "Employment, company setup, investor pathways",
    profile: "Entrepreneurs, executives, global investors",
  },
  {
    country: "Switzerland",
    city: "Zug",
    angle: "Privacy, stability, and world-class services",
    residency: "Cantonal planning and permit coordination",
    profile: "UHNW families, principals, holding structures",
  },
  {
    country: "Singapore",
    city: "Singapore",
    angle: "Asia hub for safety, education, and mobility",
    residency: "Employment Pass and investor planning",
    profile: "Regional operators, family offices, expats",
  },
  {
    country: "Italy",
    city: "Milan",
    angle: "Lifestyle relocation with tax regime optimization",
    residency: "Elective residence and investor routes",
    profile: "Retirees, creatives, international families",
  },
  {
    country: "New Zealand",
    city: "Auckland",
    angle: "Long-term stability and high quality of life",
    residency: "Skilled and investor migration strategies",
    profile: "Families planning a multi-year move",
  },
];

const services = [
  {
    title: "Residency Strategy",
    desc: "Country shortlisting, visa path mapping, timeline planning, and document coordination with local counsel.",
  },
  {
    title: "Tax & Structure Coordination",
    desc: "Cross-border tax planning support with your advisors to align residency, entity structures, and reporting.",
  },
  {
    title: "Property & Area Search",
    desc: "Neighborhood selection, viewing planning, leasing/purchase support, and relocation-ready move-in setup.",
  },
  {
    title: "Family Transition",
    desc: "Schooling research, healthcare access, staffing support, and practical relocation logistics for dependents.",
  },
];

const clientTypes = [
  "Entrepreneurs building a tax-efficient global base",
  "Families prioritizing safety, schools, and long-term residency",
  "Retirees seeking lifestyle upgrades with legal clarity",
  "Investors evaluating residency-by-investment pathways",
];

const processSteps = [
  "Consultation: goals, constraints, budget, and timeline",
  "Country shortlist: compare fit across legal, tax, and lifestyle factors",
  "Action plan: permits, advisors, property, and move sequence",
  "Execution support: local partners and concierge coordination",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100" style={{ fontFamily: "var(--font-geist-sans)" }}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(245,158,11,0.18),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.16),transparent_42%),linear-gradient(to_bottom,#0c0a09,#111827)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-stone-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight sm:text-xl">
            AMove<span className="text-amber-400">To</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
            <Link href="#destinations" className="transition hover:text-white">
              Destinations
            </Link>
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#process" className="transition hover:text-white">
              Process
            </Link>
          </nav>
          <Link
            href="#consult"
            className="rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-300/20"
          >
            Book Consultation
          </Link>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">
                Private Relocation Advisory
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Move to the right country with strategy, not guesswork.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
                AMoveTo helps affluent individuals and families plan international moves with confidence. We combine
                destination intelligence, residency planning, and white-glove relocation coordination.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#consult"
                  className="rounded-xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
                >
                  Start a Private Consultation
                </Link>
                <Link
                  href="#destinations"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Destinations
                </Link>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                {[
                  ["50+", "Countries assessed"],
                  ["1:1", "Advisory support"],
                  ["Global", "Partner network"],
                  ["Private", "Client process"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-lg font-semibold text-white">{value}</p>
                    <p className="text-xs text-stone-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-xl border border-white/10 bg-stone-900/80 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Client Brief</p>
                    <p className="mt-1 text-sm font-semibold text-white">Family relocation profile</p>
                  </div>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
                    In Review
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-stone-400">Objectives</p>
                    <p className="mt-1 text-white">Tax efficiency, English-speaking schools, high safety, Europe access</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-stone-400">Timeline</p>
                      <p className="mt-1 text-white">Move within 6-9 months</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <p className="text-stone-400">Household</p>
                      <p className="mt-1 text-white">Couple + 2 children</p>
                    </div>
                  </div>
                  <div className="rounded-lg border border-amber-300/20 bg-amber-300/10 p-3">
                    <p className="text-xs uppercase tracking-[0.16em] text-amber-200">Top Matches</p>
                    <p className="mt-1 font-medium text-white">Portugal, UAE, Italy (tax/lifestyle split analysis in progress)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="destinations" className="border-b border-white/10 py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Destination Intelligence</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Countries we help clients evaluate
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-stone-400">
                Shortlisting is based on legal viability, tax implications, education, healthcare, mobility access,
                lifestyle preferences, and long-term fit.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {destinations.map((destination) => (
                <article key={`${destination.country}-${destination.city}`} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-400">{destination.country}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{destination.city}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-300">{destination.angle}</p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-stone-400">Residency focus</dt>
                      <dd className="text-white">{destination.residency}</dd>
                    </div>
                    <div>
                      <dt className="text-stone-400">Typical client fit</dt>
                      <dd className="text-white">{destination.profile}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-white/10 py-14 sm:py-18">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Services</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                End-to-end relocation support for complex moves
              </h2>
              <p className="mt-4 text-sm leading-6 text-stone-300">
                We do not replace your lawyer or tax advisor. We coordinate the process, structure decisions, and help
                you move faster with the right local experts.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-medium text-white">Best fit for AMoveTo</p>
                <ul className="mt-3 space-y-2 text-sm text-stone-300">
                  {clientTypes.map((clientType) => (
                    <li key={clientType} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
                      <span>{clientType}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-300">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-b border-white/10 py-14 sm:py-18">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Process</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                A structured relocation workflow built for discretion
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {processSteps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="consult" className="py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl shadow-black/20 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Next Step</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Start with a private relocation consultation
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-300 sm:text-base">
                We will define your relocation goals, shortlist suitable countries, and outline a practical execution
                path tailored to your family, business, and timeline.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="mailto:hello@amoveto.com"
                  className="rounded-xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
                >
                  hello@amoveto.com
                </Link>
                <Link
                  href="/coming-soon"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Coming Soon Page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
