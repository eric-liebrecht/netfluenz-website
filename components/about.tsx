import { Users, Globe, Award } from "lucide-react"

const stats = [
  { icon: Users, value: "50+", label: "Team members across Europe" },
  { icon: Globe, value: "12", label: "Countries supported" },
  { icon: Award, value: "€50M+", label: "Creator payments processed" },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary mb-4">
                About Us
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground text-balance mb-4">
                Built by performance marketers, for performance marketers.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                InfluenceAI was founded in 2021 by a team of performance marketing veterans and AI engineers who saw how broken the influencer ecosystem was. We set out to fix it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today we power campaigns for hundreds of leading e-commerce brands across Europe, combining cutting-edge AI with deep industry expertise to deliver consistent, measurable results.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {stats.map((s) => {
                const Icon = s.icon
                return (
                  <div key={s.label} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "oklch(0.62 0.27 305 / 0.15)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "oklch(0.72 0.27 305)" }} />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-xl text-foreground">{s.value}</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
