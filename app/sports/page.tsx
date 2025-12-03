import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SportCard } from "@/components/sport-card"
import { sports } from "@/lib/data"

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="font-display text-5xl md:text-6xl tracking-wider">ALL SPORTS</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Explore all major professional sports leagues. Choose your sport to browse teams and discover athletes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport) => (
              <SportCard key={sport.id} sport={sport} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
