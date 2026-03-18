"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export function VideoDemo() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border border-primary/30 bg-primary/10 text-primary mb-4">
            Platform Demo
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground text-balance">
            See InfluenceAI in Action
          </h2>
          <p className="mt-3 text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
            Watch how brands launch, track, and scale influencer campaigns in minutes — not months.
          </p>
        </div>

        {/* Video player */}
        <div
          className="relative rounded-2xl overflow-hidden border border-border/40 shadow-[0_0_60px_rgba(147,51,234,0.15)] group cursor-pointer"
          style={{ aspectRatio: "16/9" }}
          onClick={() => setPlaying(true)}
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm z-10" />

          {/* Background visual (mock dashboard) */}
          <div className="absolute inset-0 flex items-center justify-center bg-secondary">
            <DashboardMockup />
          </div>

          {/* Play button overlay */}
          {!playing && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4">
              <button
                aria-label="Play demo video"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-[0_0_40px_rgba(147,51,234,0.6)]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.62 0.27 305), oklch(0.65 0.25 340))",
                }}
                onClick={() => setPlaying(true)}
              >
                <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-white ml-1" />
              </button>
              <span className="text-sm text-muted-foreground">Watch 2-min overview</span>
            </div>
          )}

          {/* Actual video (YouTube embed) – shown after click */}
          {playing && (
            <iframe
              className="absolute inset-0 w-full h-full z-30"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="InfluenceAI Platform Demo"
            />
          )}
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className="w-full h-full p-4 sm:p-8 flex flex-col gap-3 select-none pointer-events-none opacity-60">
      {/* Top bar */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-24 h-3 rounded-full bg-muted-foreground/30" />
        <div className="w-16 h-3 rounded-full bg-muted-foreground/20" />
        <div className="ml-auto w-10 h-3 rounded-full bg-primary/40" />
      </div>
      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[
          { label: "Total Reach", val: "12.4M", color: "primary" },
          { label: "Conversions", val: "4,821", color: "accent" },
          { label: "ROAS", val: "8.3x", color: "primary" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl bg-card/80 border border-border/40 p-2 sm:p-3"
          >
            <div className="text-[10px] text-muted-foreground/60 mb-1">{s.label}</div>
            <div
              className={`font-serif font-bold text-sm sm:text-base ${
                s.color === "primary" ? "text-primary" : "text-accent"
              }`}
            >
              {s.val}
            </div>
          </div>
        ))}
      </div>
      {/* Graph bar mockup */}
      <div className="flex-1 rounded-xl bg-card/80 border border-border/40 p-3 flex flex-col justify-end gap-1">
        <div className="flex items-end gap-1 h-12">
          {[35, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                height: `${h}%`,
                background:
                  i % 2 === 0
                    ? "oklch(0.62 0.27 305 / 0.7)"
                    : "oklch(0.65 0.25 340 / 0.5)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
