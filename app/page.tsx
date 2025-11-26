import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RobotHero } from "@/components/robot-hero"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <RobotHero />
      </main>
      <Footer />
    </div>
  )
}
