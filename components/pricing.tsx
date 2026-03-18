import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "€499",
    period: "/mo",
    description: "For brands launching their first influencer programme.",
    features: [
      "Up to 10 active creators",
      "AI matching engine",
      "Automated outreach",
      "Basic performance dashboard",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "€1,499",
    period: "/mo",
    description: "The go-to plan for scaling e-commerce brands.",
    features: [
      "Up to 100 active creators",
      "Advanced AI matching & scoring",
      "Automated contracts & payments",
      "Real-time attribution & ROAS",
      "Campaign automation rules",
      "Dedicated success manager",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For brands running campaigns at global scale.",
    features: [
      "Unlimited creators",
      "Custom AI model training",
      "White-label reporting",
      "API access & integrations",
      "SLA & priority support",
      "Custom contract terms",
    ],
    cta: "Talk to Sales",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary mb-4">
            Pricing
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground text-balance max-w-lg mx-auto">
            Transparent pricing. Measurable ROI.
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-lg mx-auto">
            Every plan includes a 14-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col gap-6 border transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary/60 shadow-[0_0_60px_rgba(147,51,234,0.2)]"
                  : "border-border/40 bg-card/40 hover:border-primary/30"
              }`}
              style={
                plan.highlighted
                  ? {
                      background:
                        "linear-gradient(145deg, oklch(0.62 0.27 305 / 0.1), oklch(0.13 0.04 280))",
                    }
                  : {}
              }
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium text-primary-foreground"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.62 0.27 305), oklch(0.65 0.25 340))",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest mb-2">
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className="font-serif font-bold text-4xl text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-base mb-1">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: "oklch(0.62 0.27 305)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`block text-center px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  plan.highlighted
                    ? "text-primary-foreground shadow-[0_0_24px_rgba(147,51,234,0.5)] hover:opacity-90"
                    : "text-foreground border border-border/60 hover:border-primary/40 bg-muted/20 hover:bg-muted/40"
                }`}
                style={
                  plan.highlighted
                    ? {
                        background:
                          "linear-gradient(135deg, oklch(0.62 0.27 305), oklch(0.55 0.25 320))",
                      }
                    : {}
                }
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
