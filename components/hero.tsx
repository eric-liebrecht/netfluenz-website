import { ArrowRight, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background glow blobs */}
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.62 0.27 305), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.65 0.25 340), transparent 70%)" }}
      />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6 backdrop-blur-sm">
        <TrendingUp className="w-3.5 h-3.5" />
        AI-Powered Performance Marketing
      </div>

      {/* Headline */}
      <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance max-w-4xl mx-auto">
        Scale Influencer Campaigns{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(135deg, oklch(0.62 0.27 305), oklch(0.65 0.25 340))",
          }}
        >
          with AI
        </span>
      </h1>

      {/* Subheadline */}
      <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
        AI-driven influencer matching, automated tracking, and end-to-end campaign automation — so you can focus on growth, not spreadsheets.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#cta"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-primary-foreground text-sm transition-all shadow-[0_0_28px_rgba(147,51,234,0.5)] hover:shadow-[0_0_40px_rgba(147,51,234,0.7)] hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, oklch(0.62 0.27 305), oklch(0.55 0.25 320))",
          }}
        >
          Start for Free
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href="#demo"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-foreground text-sm border border-border/60 hover:border-primary/50 backdrop-blur-sm bg-muted/30 transition-all hover:bg-muted/50"
        >
          Watch Demo
        </a>
      </div>

      {/* Stats row */}
      <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-10 max-w-xl mx-auto">
        {[
          { value: "10x", label: "ROI Average" },
          { value: "500+", label: "E-commerce Brands" },
          { value: "2M+", label: "Creators Indexed" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="font-serif font-bold text-2xl sm:text-3xl text-foreground">{stat.value}</span>
            <span className="text-xs text-muted-foreground mt-1 text-center">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
