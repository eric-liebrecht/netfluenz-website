import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Glow */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.62 0.27 305), oklch(0.65 0.25 340) 60%, transparent)",
          }}
        />

        <div
          className="rounded-3xl border border-primary/30 p-10 sm:p-16"
          style={{
            background:
              "linear-gradient(145deg, oklch(0.62 0.27 305 / 0.08), oklch(0.13 0.04 280 / 0.8))",
          }}
        >
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-foreground text-balance mb-4">
            Ready to 10x your influencer ROI?
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Join 500+ e-commerce brands already scaling with InfluenceAI. Set up your first campaign in under 10 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-primary-foreground text-base transition-all shadow-[0_0_40px_rgba(147,51,234,0.5)] hover:shadow-[0_0_60px_rgba(147,51,234,0.7)] hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.62 0.27 305), oklch(0.65 0.25 340))",
              }}
            >
              Start for Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-foreground text-base border border-border/60 hover:border-primary/40 bg-muted/20 hover:bg-muted/40 transition-all"
            >
              Book a Demo
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            14-day free trial — No credit card required
          </p>
        </div>
      </div>
    </section>
  )
}
