import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Proven average 10x ROAS across all campaigns",
  "Access to 2M+ vetted, performance-tracked creators",
  "Automated contracts, payments, and compliance",
  "Real-time attribution down to individual posts",
  "Scale from 1 to 1,000 creators without added headcount",
  "Data-driven creative briefs powered by AI insights",
  "Fraud detection and audience quality scoring",
  "Dedicated campaign success manager included",
]

export function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary mb-4">
              Value Proposition
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground text-balance mb-6">
              Stop guessing. Start scaling with data.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Traditional influencer marketing relies on gut feel. InfluenceAI replaces guesswork with AI-powered precision — every creator, every campaign, every euro tracked to measurable results.
            </p>
            <a
              href="#cta"
              className="inline-block px-7 py-3.5 rounded-full font-medium text-primary-foreground text-sm shadow-[0_0_24px_rgba(147,51,234,0.4)] hover:opacity-90 transition-all"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.27 305), oklch(0.55 0.25 320))",
              }}
            >
              Start for Free
            </a>
          </div>

          {/* Right: benefit list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <CheckCircle2
                  className="w-5 h-5 mt-0.5 shrink-0"
                  style={{ color: "oklch(0.62 0.27 305)" }}
                />
                <span className="text-sm text-foreground leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
