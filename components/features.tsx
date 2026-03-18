import { Brain, BarChart3, Workflow } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Creator Matching",
    description:
      "Our AI analyses millions of profiles to surface creators whose audience perfectly aligns with your brand — guaranteed performance fit.",
    accent: "purple",
  },
  {
    icon: BarChart3,
    title: "Automated Tracking",
    description:
      "Real-time attribution, UTM tracking, and automated reporting across every channel. Know your exact ROI at every stage.",
    accent: "pink",
  },
  {
    icon: Workflow,
    title: "End-to-End Automation",
    description:
      "From outreach and contracts to payments and performance reports — every step automated so your team can focus on strategy.",
    accent: "purple",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary mb-4">
            Core Features
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground text-balance max-w-xl mx-auto">
            Everything you need to win at influencer marketing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon
            const isPurple = f.accent === "purple"
            return (
              <div
                key={f.title}
                className="relative rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm p-6 sm:p-8 flex flex-col gap-4 group hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                {/* Glow bg */}
                <div
                  aria-hidden
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-35 transition-opacity"
                  style={{
                    background: isPurple
                      ? "oklch(0.62 0.27 305)"
                      : "oklch(0.65 0.25 340)",
                  }}
                />
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: isPurple
                      ? "oklch(0.62 0.27 305 / 0.15)"
                      : "oklch(0.65 0.25 340 / 0.15)",
                  }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{
                      color: isPurple
                        ? "oklch(0.72 0.27 305)"
                        : "oklch(0.72 0.25 340)",
                    }}
                  />
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
