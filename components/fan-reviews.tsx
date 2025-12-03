"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    id: 1,
    name: "Marcus Johnson",
    avatar: "/young-man-sports-fan-profile.jpg",
    rating: 5,
    review:
      "ROASTER has completely changed how I follow my favorite players. The real-time updates and social integration are incredible. I never miss a thing now!",
    team: "Lakers Fan",
    date: "Dec 2024",
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "/woman-sports-fan-smiling-profile.jpg",
    rating: 5,
    review:
      "As a die-hard Chiefs fan, this app is a dream come true. I can track every player, see their social posts, and stay updated on roster changes instantly.",
    team: "Chiefs Fan",
    date: "Nov 2024",
  },
  {
    id: 3,
    name: "David Chen",
    avatar: "/asian-man-casual-profile-photo.jpg",
    rating: 5,
    review:
      "The best sports platform I've ever used. Clean design, fast updates, and the favorites feature helps me keep track of players across different leagues.",
    team: "Yankees Fan",
    date: "Nov 2024",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    avatar: "/hispanic-woman-profile-sports.jpg",
    rating: 5,
    review:
      "Finally an app that treats women's sports equally! I love following my favorite WNBA players and getting the same quality updates as other leagues.",
    team: "Aces Fan",
    date: "Oct 2024",
  },
  {
    id: 5,
    name: "James Thompson",
    avatar: "/man-basketball-fan-profile.jpg",
    rating: 5,
    review:
      "Been using ROASTER for 6 months now. The player cards, stats, and social feed make it my go-to app for everything sports. Highly recommend!",
    team: "Celtics Fan",
    date: "Oct 2024",
  },
]

export function FanReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleReviews = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (reviews.length - visibleReviews + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - visibleReviews : prev - 1))
  }

  return (
    <section className="py-20 relative overflow-hidden section-gradient-green">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-chart-4/20 to-primary/20 border border-chart-4/30 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-chart-4 fill-chart-4" />
            <span className="text-sm text-foreground font-medium">Loved by 100K+ Fans</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider text-foreground">WHAT FANS SAY</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Join thousands of passionate sports fans who trust ROASTER for their daily sports updates.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {reviews.slice(currentIndex, currentIndex + visibleReviews).map((review) => (
              <div
                key={review.id}
                className="flex-1 min-w-[300px] bg-card border border-border rounded-2xl p-6 relative gradient-border shadow-lg"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.team}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-chart-4 fill-chart-4" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">{review.review}</p>

                <p className="text-xs text-muted-foreground mt-4">{review.date}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: reviews.length - visibleReviews + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-6 bg-gradient-to-r from-primary to-secondary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
