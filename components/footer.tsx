import { Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-serif font-bold text-sm text-foreground">
            Influence<span className="text-primary">AI</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} InfluenceAI GmbH. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
