"use client"

import { ArrowRight, Clock, TrendingUp, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const trendingNews = [
  {
    id: 1,
    title: "Patrick Mahomes Signs Record-Breaking Extension",
    category: "NFL",
    team: "chiefs",
    player: "mahomes",
    image: "/patrick-mahomes-kansas-city-chiefs-contract-signin.jpg",
    time: "2 hours ago",
    type: "contract",
  },
  {
    id: 2,
    title: "LeBron James Reaches 40,000 Career Points Milestone",
    category: "NBA",
    team: "lakers",
    player: "lebron",
    image: "/lebron-james-lakers-40000-points-milestone-celebra.jpg",
    time: "5 hours ago",
    type: "milestone",
  },
  {
    id: 3,
    title: "Shohei Ohtani Named Player of the Month",
    category: "MLB",
    team: "dodgers",
    player: "ohtani",
    image: "/shohei-ohtani-dodgers-baseball-award-ceremony.jpg",
    time: "8 hours ago",
    type: "award",
  },
  {
    id: 4,
    title: "Caitlin Clark Breaks WNBA Rookie Assist Record",
    category: "WNBA",
    team: "fever",
    player: "clark",
    image: "/caitlin-clark-wnba-indiana-fever-basketball-passin.jpg",
    time: "1 day ago",
    type: "record",
  },
  {
    id: 5,
    title: "Inter Miami Announces New Stadium Plans",
    category: "MLS",
    team: "intermiami",
    player: "messi",
    image: "/inter-miami-soccer-stadium-architectural-rendering.jpg",
    time: "1 day ago",
    type: "news",
  },
]

export function TrendingNews() {
  const featuredNews = trendingNews[0]
  const otherNews = trendingNews.slice(1)

  return (
    <section className="py-20 section-gradient-mixed">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground">TRENDING NEWS</h2>
              <p className="text-muted-foreground mt-1">Latest roster moves and player updates</p>
            </div>
          </div>
          <Link href="/news" className="hidden md:flex items-center gap-1 text-primary hover:underline font-medium">
            All News <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured News */}
          <Link
            href={`/player/${featuredNews.player}`}
            className="group relative rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="aspect-[4/3] relative">
              <img
                src={featuredNews.image || "/placeholder.svg"}
                alt={featuredNews.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-gradient-to-r from-primary to-primary/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {featuredNews.category}
                </span>
                <span className="bg-gradient-to-r from-accent to-accent/80 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {featuredNews.type}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl md:text-3xl text-white tracking-wide">{featuredNews.title}</h3>
                <div className="flex items-center gap-4 mt-3 text-white/70 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredNews.time}
                  </span>
                  <span className="flex items-center gap-1 text-white group-hover:text-secondary transition-colors">
                    Read More <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Other News Grid */}
          <div className="grid gap-4">
            {otherNews.map((news) => (
              <Link
                key={news.id}
                href={`/player/${news.player}`}
                className="group flex gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all shadow-md gradient-border"
              >
                <div className="w-24 h-24 md:w-32 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary">{news.category}</span>
                    <span className="text-xs text-accent uppercase font-medium">{news.type}</span>
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {news.time}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
