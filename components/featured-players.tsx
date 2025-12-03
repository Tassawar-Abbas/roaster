"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, TrendingUp, Instagram, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { players, getTeamById } from "@/lib/data"
import Link from "next/link"

export function FeaturedPlayers() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const featuredPlayers = players.slice(0, 6)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPlayers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPlayers.length) % featuredPlayers.length)
  }

  const currentPlayer = featuredPlayers[currentIndex]
  const team = getTeamById(currentPlayer.teamId)

  const playerImages: Record<string, string> = {
    "Patrick Mahomes": "/patrick-mahomes-kansas-city-chiefs-quarterback-thr.jpg",
    "Travis Kelce": "/travis-kelce-kansas-city-chiefs-tight-end-catching.jpg",
    "LeBron James": "/lebron-james-lakers-basketball-dunking-action-shot.jpg",
    "Stephen Curry": "/stephen-curry-warriors-basketball-shooting-three-p.jpg",
    "Mike Trout": "/mike-trout-angels-baseball-hitting-home-run-swing.jpg",
    "Shohei Ohtani": "/shohei-ohtani-dodgers-baseball-pitcher-hitting-dua.jpg",
  }

  const getPlayerImage = (player: typeof currentPlayer) => {
    return (
      playerImages[player.name] ||
      `/placeholder.svg?height=400&width=300&query=${player.name} ${player.position} professional athlete action`
    )
  }

  return (
    <section className="py-20 section-gradient-blue">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-destructive flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground">TRENDING ATHLETES</h2>
              <p className="text-muted-foreground mt-1">Players making headlines right now</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Main Featured Player */}
          <Link
            href={`/player/${currentPlayer.id}`}
            className="group relative aspect-[4/5] md:aspect-auto md:row-span-2 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={getPlayerImage(currentPlayer) || "/placeholder.svg"}
              alt={currentPlayer.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white"
                  style={{ backgroundColor: team?.primaryColor }}
                >
                  {team?.name}
                </div>
                {currentPlayer.instagramHandle && (
                  <div className="flex items-center gap-1 text-xs text-white/70">
                    <Instagram className="w-3 h-3" />@{currentPlayer.instagramHandle}
                  </div>
                )}
              </div>
              <h3 className="font-display text-4xl md:text-6xl lg:text-7xl text-white tracking-wider">
                {currentPlayer.name.toUpperCase()}
              </h3>
              <p className="text-white/80 mt-3 text-lg">
                {currentPlayer.position} • #{currentPlayer.number}
              </p>
              {currentPlayer.latestPost && (
                <p className="text-white/60 mt-4 text-sm line-clamp-2 max-w-md">
                  &quot;{currentPlayer.latestPost.caption}&quot;
                </p>
              )}
              <div className="flex items-center gap-2 mt-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">View Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Side Players */}
          <div className="grid grid-cols-2 gap-4">
            {featuredPlayers.slice(1, 5).map((player) => {
              const playerTeam = getTeamById(player.teamId)
              return (
                <Link
                  key={player.id}
                  href={`/player/${player.id}`}
                  className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={getPlayerImage(player) || "/placeholder.svg"}
                    alt={player.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Team color accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: playerTeam?.primaryColor }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div
                      className="text-xs font-medium px-2 py-0.5 rounded inline-block mb-1 text-white"
                      style={{ backgroundColor: playerTeam?.primaryColor }}
                    >
                      {playerTeam?.name?.split(" ").pop()}
                    </div>
                    <h4 className="font-semibold text-white text-sm mt-1 line-clamp-1">{player.name}</h4>
                    <p className="text-white/60 text-xs mt-0.5">
                      {player.position} • #{player.number}
                    </p>
                  </div>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {featuredPlayers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-gradient-to-r from-primary to-secondary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
