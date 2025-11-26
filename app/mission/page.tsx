import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-16">
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">Our Mission</h1>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">
              To create intelligent robotic systems that enhance human capabilities and improve quality of life across
              the globe
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent rounded-3xl" />
            <div className="relative p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Innovation First</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pl-20">
                  We believe in pushing boundaries and challenging conventional thinking. Every project we undertake
                  aims to advance the field of robotics and set new standards for the industry.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-accent-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Human-Centric Design</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pl-20">
                  Technology should serve humanity, not replace it. Our robots are designed to augment human abilities,
                  working alongside people to achieve more than either could alone.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Sustainable Future</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed pl-20">
                  We're committed to creating sustainable solutions that minimize environmental impact. Our robots are
                  designed for longevity, energy efficiency, and responsible manufacturing.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Patents Filed</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
