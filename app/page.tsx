export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Startup Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Automated Weekly Metric Reports —{" "}
          <span className="text-[#58a6ff]">Stop Drowning in Dashboards</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect Stripe, Google Analytics, and your database once. Every Monday morning, get a crisp digest with AI-powered insights and actionable recommendations delivered to your inbox.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <p className="text-2xl font-bold text-white">3 sources</p>
            <p className="text-sm text-[#8b949e] mt-1">Stripe, GA4, DB</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Weekly</p>
            <p className="text-sm text-[#8b949e] mt-1">Auto-delivered</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">AI insights</p>
            <p className="text-sm text-[#8b949e] mt-1">Not just numbers</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl p-8 bg-[#161b22] text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Connect Stripe, Google Analytics & PostgreSQL",
              "Weekly digest delivered every Monday",
              "AI-generated insights & recommendations",
              "MRR, churn, traffic & conversion trends",
              "Email delivery — no login required",
              "Cancel anytime"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Start Your First Report
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my data sources?",
              a: "After subscribing you'll receive a setup link. You provide read-only API keys for Stripe and Google Analytics, plus a read-only database connection string. Setup takes under 10 minutes."
            },
            {
              q: "What metrics are included in each report?",
              a: "MRR, new subscribers, churn rate, website sessions, top acquisition channels, conversion rates, and a plain-English AI summary highlighting what changed and why it matters."
            },
            {
              q: "Can I cancel if I don't find it useful?",
              a: "Absolutely. Cancel anytime from your billing portal — no questions asked, no lock-in."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Startup Metrics Weekly Digest. All rights reserved.
      </footer>
    </main>
  );
}
