const steps = [
  {
    number: "01",
    title: "Connect your store",
    description: "Integrate your e-commerce platform in minutes. We sync your product catalogue, audience data, and conversion goals automatically.",
  },
  {
    number: "02",
    title: "AI selects your creators",
    description: "Our engine analyses 2M+ creator profiles, engagement rates, audience demographics, and past performance to surface your perfect matches.",
  },
  {
    number: "03",
    title: "Launch with one click",
    description: "Approve creators, set your budget, and launch. Automated outreach, contracts, and briefings are sent instantly.",
  },
  {
    number: "04",
    title: "Track & optimise in real time",
    description: "Live dashboards show reach, clicks, conversions, and ROAS. Reallocate budget to top performers automatically.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary mb-4">
            How it Works
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground text-balance max-w-lg mx-auto">
            From setup to scale in four steps
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              {/* Connector line (desktop) */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-6 left-full w-full h-px z-0"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.62 0.27 305 / 0.4), transparent)",
                  }}
                />
              )}

              {/* Step number circle */}
              <div
                className="relative z-10 w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-sm font-serif font-bold text-primary"
                style={{ background: "oklch(0.62 0.27 305 / 0.1)" }}
              >
                {step.number}
              </div>

              <h3 className="font-serif font-bold text-lg text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
