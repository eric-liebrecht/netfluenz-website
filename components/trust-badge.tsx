export function TrustBadge() {
  const brands = ["Shopware", "ABOUT YOU", "Zalando", "Gymshark", "HelloFresh", "Myprotein"]

  return (
    <section className="py-12 border-y border-border/40 bg-muted/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-8 font-medium">
          Trusted by leading e-commerce brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {brands.map((brand) => (
            <span
              key={brand}
              className="text-muted-foreground/60 font-serif font-semibold text-sm sm:text-base tracking-wide hover:text-muted-foreground transition-colors"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
