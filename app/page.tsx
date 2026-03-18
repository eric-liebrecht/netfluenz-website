import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBadge } from "@/components/trust-badge"
import { VideoDemo } from "@/components/video-demo"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { Pricing } from "@/components/pricing"
import { About } from "@/components/about"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBadge />
      <VideoDemo />
      <Features />
      <HowItWorks />
      <Benefits />
      <Pricing />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  )
}
