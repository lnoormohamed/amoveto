import { redirect } from "next/navigation";
import Link from "next/link";

const features = [
  {
    icon: "📈",
    title: "Inflation Tracking",
    description: "Monitor real-time inflation rates and price trends across 195 countries with decades of historical data.",
  },
  {
    icon: "🌍",
    title: "Country Price Compare",
    description: "Find the cheapest country to buy any product — from iPhones to streaming subscriptions.",
  },
  {
    icon: "📊",
    title: "Subscription Index",
    description: "Track how Netflix, Spotify, Apple and others price services differently across markets.",
  },
  {
    icon: "⚡",
    title: "Developer API",
    description: "Integrate live and historical pricing data directly into your platform via REST API.",
  },
  {
    icon: "🔔",
    title: "Price Alerts",
    description: "Get notified instantly when a product price changes in any country you're tracking.",
  },
  {
    icon: "📁",
    title: "Data Exports",
    description: "Download structured datasets in CSV, JSON or Excel for offline analysis and research.",
  },
];

const heroPreview = [
  { country: "Turkey",  flag: "🇹🇷", monthly: "$2.99",  change: "-12%", up: false },
  { country: "India",   flag: "🇮🇳", monthly: "$2.50",  change: "+5%",  up: true  },
  { country: "Brazil",  flag: "🇧🇷", monthly: "$5.99",  change: "+8%",  up: true  },
  { country: "UK",      flag: "🇬🇧", monthly: "$17.99", change: "+14%", up: true  },
  { country: "USA",     flag: "🇺🇸", monthly: "$22.99", change: "+18%", up: true  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    desc: "For personal projects and exploration.",
    features: ["1,000 API calls/month", "10 countries", "Daily data refresh", "Community support"],
    cta: "Get Started Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    desc: "For startups and growing teams.",
    features: ["100K API calls/month", "All 195 countries", "Real-time data", "Webhooks & alerts", "Priority support"],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For large-scale data needs.",
    features: ["Unlimited API calls", "All 195 countries", "10+ years history", "Dedicated manager", "Custom SLA"],
    cta: "Contact Sales",
    featured: false,
  },
];

const stats = [
  { value: "195+", label: "Countries tracked" },
  { value: "50K+", label: "Products monitored" },
  { value: "12M+", label: "Price data points" },
  { value: "99.9%", label: "API uptime" },
];

export default function HomePage() {
  redirect("/coming-soon");
  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "var(--font-geist-sans)" }}>

      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            World<span className="text-blue-600">Price</span>Index
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {["Explore", "Compare", "API", "Pricing"].map((label) => (
              <Link
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="#" className="hidden text-sm font-medium text-slate-500 transition hover:text-slate-900 md:block">
              Sign in
            </Link>
            <Link
              href="#pricing"
              className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 sm:px-4 sm:text-sm"
            >
              Get API Access
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* Left: Text */}
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />
                Live data from 195 countries
              </span>
              <h1 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                The world&apos;s{" "}
                <span className="text-blue-600">price data</span>,{" "}
                at your fingertips.
              </h1>
              <p className="mb-6 text-base leading-relaxed text-slate-500 sm:text-lg">
                Track inflation, compare prices across every country, and uncover insights — from Netflix price hikes to the cheapest place to buy an iPhone.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#explore"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Explore Data →
                </Link>
                <Link
                  href="#api"
                  className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                >
                  View API Docs
                </Link>
              </div>
            </div>

            {/* Right: Data preview card */}
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
              <div className="border-b border-slate-100 px-4 py-3.5 sm:px-5 sm:py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Live Data</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-800">Netflix Standard — by Country</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
              </div>

              <div className="divide-y divide-slate-50">
                {heroPreview.map((row, i) => (
                  <div key={row.country} className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{row.flag}</span>
                      <div>
                        <p className="text-sm font-medium text-slate-800">{row.country}</p>
                        {i === 0 && <p className="text-xs font-medium text-emerald-600">Cheapest ↓</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="select-none font-mono text-sm font-semibold text-slate-900 blur-sm">$00.00</span>
                      <span className={`select-none rounded-md px-2 py-0.5 text-xs font-semibold blur-sm ${row.up ? "bg-red-50 text-red-500" : "bg-emerald-50 text-emerald-600"}`}>
                        {row.up ? "↑" : "↓"} 00%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Unlock overlay */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end rounded-b-2xl bg-gradient-to-t from-white via-white/95 to-transparent pb-5 pt-16">
                <p className="mb-3 text-xs font-medium text-slate-500">Subscribe to unlock live pricing data</p>
                <Link
                  href="#pricing"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
                >
                  View Plans →
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Stats strip — gap-px trick for clean grid borders */}
        <div className="border-t border-slate-100">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-slate-100 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-4 py-5 text-center sm:px-6 sm:py-6">
                <p className="text-xl font-extrabold text-slate-900 sm:text-2xl">{s.value}</p>
                <p className="mt-0.5 text-xs text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="explore" className="py-14 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 max-w-xl md:mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">Platform</p>
            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Everything you need to understand global pricing
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md sm:p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-xl sm:mb-4 sm:h-11 sm:w-11 sm:text-2xl">
                  {f.icon}
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-slate-900 sm:text-base">{f.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Data Table ── */}
      <section id="compare" className="border-y border-slate-100 bg-slate-50 py-14 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between md:mb-10">
            <div>
              <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-blue-600">Compare</p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Netflix Pricing by Country</h2>
              <p className="mt-1 text-sm text-slate-400">Standard plan · USD equivalent · Updated daily</p>
            </div>
            <Link
              href="#pricing"
              className="self-start rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50 sm:self-auto"
            >
              Unlock full data →
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-sm">
                <thead className="border-b border-slate-100 bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400 sm:px-6 sm:py-3.5">Country</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-400 sm:px-6 sm:py-3.5">Monthly</th>
                    <th className="hidden px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-400 sm:table-cell sm:px-6 sm:py-3.5">Annual</th>
                    <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-400 sm:px-6 sm:py-3.5">1Y Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { country: "Turkey",    flag: "🇹🇷", up: false },
                    { country: "India",     flag: "🇮🇳", up: true  },
                    { country: "Brazil",    flag: "🇧🇷", up: true  },
                    { country: "UK",        flag: "🇬🇧", up: true  },
                    { country: "USA",       flag: "🇺🇸", up: true  },
                    { country: "Australia", flag: "🇦🇺", up: true  },
                  ].map((row, i) => (
                    <tr key={row.country} className="transition hover:bg-slate-50">
                      <td className="px-4 py-3.5 sm:px-6 sm:py-4">
                        <span className="mr-2 text-base">{row.flag}</span>
                        <span className="font-medium text-slate-800">{row.country}</span>
                        {i === 0 && (
                          <span className="ml-2 hidden rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600 sm:inline">
                            Cheapest
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-right sm:px-6 sm:py-4">
                        <span className="inline-block select-none rounded font-mono font-semibold text-slate-900 blur-sm">$00.00</span>
                      </td>
                      <td className="hidden px-4 py-3.5 text-right sm:table-cell sm:px-6 sm:py-4">
                        <span className="inline-block select-none rounded font-mono text-slate-400 blur-sm">$000.00</span>
                      </td>
                      <td className="px-4 py-3.5 text-right sm:px-6 sm:py-4">
                        <span className={`inline-flex select-none items-center rounded-md px-2 py-0.5 text-xs font-semibold blur-sm sm:px-2.5 sm:py-1 ${row.up ? "bg-red-50 text-red-500" : "bg-emerald-50 text-emerald-600"}`}>
                          {row.up ? "↑" : "↓"} +00%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Unlock overlay */}
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end bg-gradient-to-t from-white via-white/95 to-transparent pb-6 pt-20">
              <p className="mb-3 text-xs font-medium text-slate-500">Subscribe to unlock live pricing data across 195 countries</p>
              <Link
                href="#pricing"
                className="rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                View Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── API Section ── */}
      <section id="api" className="py-14 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* Code block — shown second on mobile, first on desktop */}
            <div className="order-2 overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-xl lg:order-1">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5 sm:py-3.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
                </div>
                <span className="text-xs text-white/30">example.js</span>
                <span className="rounded bg-blue-500/20 px-2 py-0.5 text-xs font-medium text-blue-400">REST API</span>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-6 sm:p-6 sm:text-sm sm:leading-7">
                <code>
                  <span className="text-slate-500">{"// Get Netflix prices by country\n"}</span>
                  <span className="text-blue-400">{"const "}</span>
                  <span className="text-white">{"res = "}</span>
                  <span className="text-blue-400">{"await "}</span>
                  <span className="text-yellow-300">{"fetch"}</span>
                  <span className="text-white">{"(\n"}</span>
                  <span className="text-green-400">{"  'https://api.worldpriceindex.com/v1/prices',\n"}</span>
                  <span className="text-white">{"  {\n"}</span>
                  <span className="text-white">{"    headers: {\n"}</span>
                  <span className="text-white">{"      "}</span>
                  <span className="text-green-400">{"'Authorization'"}</span>
                  <span className="text-white">{": "}</span>
                  <span className="text-green-400">{"'Bearer YOUR_KEY'\n"}</span>
                  <span className="text-white">{"    },\n"}</span>
                  <span className="text-white">{"  }\n"}</span>
                  <span className="text-white">{");\n\n"}</span>
                  <span className="text-slate-500">{"// { prices: [\n"}</span>
                  <span className="text-slate-500">{'//   { country: "US", price: 22.99 },\n'}</span>
                  <span className="text-slate-500">{'//   { country: "TR", price: 2.99  },\n'}</span>
                  <span className="text-slate-500">{'//   { country: "IN", price: 2.50  }\n'}</span>
                  <span className="text-slate-500">{"// ]}"}</span>
                </code>
              </pre>
            </div>

            {/* Text — shown first on mobile */}
            <div className="order-1 lg:order-2">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                For Developers &amp; B2B
              </p>
              <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                Plug live price data into your product
              </h2>
              <p className="mb-6 text-base leading-relaxed text-slate-500 sm:text-lg">
                Our REST API delivers real-time and historical pricing data for 50,000+ products across 195 countries — used by fintech companies, research firms, and e-commerce platforms.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "RESTful JSON API with full documentation",
                  "Real-time & historical data — 10+ years",
                  "Webhooks for instant price change alerts",
                  "99.9% uptime SLA with dedicated support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600 sm:text-base">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="#pricing"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Get API Access →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="border-y border-slate-100 bg-slate-50 py-14 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 text-center md:mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">Pricing</p>
            <h2 className="mb-2 text-3xl font-bold text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
            <p className="text-base text-slate-500 sm:text-lg">Start free. Scale as you grow. No hidden fees.</p>
          </div>

          {/* pt-5 gives space for the absolute "Most Popular" badge */}
          <div className="grid grid-cols-1 gap-5 pt-5 sm:gap-6 md:grid-cols-3 md:pt-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-6 sm:p-8 ${
                  plan.featured
                    ? "border-blue-600 bg-blue-600 text-white shadow-2xl shadow-blue-500/25"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-amber-900">
                    Most Popular
                  </div>
                )}
                <div className="mb-5">
                  <p className={`mb-2 text-sm font-semibold ${plan.featured ? "text-blue-200" : "text-slate-400"}`}>
                    {plan.name}
                  </p>
                  <div className="mb-1 flex items-end gap-1">
                    <span className="text-4xl font-extrabold sm:text-5xl">{plan.price}</span>
                    {plan.period && (
                      <span className={`mb-1.5 text-sm ${plan.featured ? "text-blue-200" : "text-slate-400"}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm ${plan.featured ? "text-blue-200" : "text-slate-400"}`}>{plan.desc}</p>
                </div>
                <ul className="mb-6 space-y-2.5 sm:mb-8 sm:space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.featured ? "text-blue-50" : "text-slate-600"}`}>
                      <span className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold ${plan.featured ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-500"}`}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`block w-full rounded-lg py-3 text-center text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-14 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl bg-blue-600 px-6 py-10 text-center shadow-xl shadow-blue-500/20 sm:px-10 sm:py-14 md:px-16">
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Ready to explore global price data?
            </h2>
            <p className="mx-auto mb-7 max-w-xl text-base text-blue-100 sm:text-lg">
              Join thousands of analysts, developers and businesses making smarter decisions with WorldPriceIndex.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="#pricing"
                className="w-full rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-blue-600 shadow-sm transition hover:bg-blue-50 sm:w-auto"
              >
                Start for Free
              </Link>
              <Link
                href="#api"
                className="w-full rounded-lg border border-blue-400 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 sm:w-auto"
              >
                View API Docs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
            <div className="text-lg font-bold text-slate-900">
              World<span className="text-blue-600">Price</span>Index
            </div>
            <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-400 sm:gap-6">
              {["Privacy", "Terms", "API Docs", "Contact"].map((l) => (
                <Link key={l} href="#" className="transition hover:text-slate-700">{l}</Link>
              ))}
            </div>
            <p className="text-sm text-slate-400">© 2026 WorldPriceIndex.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
