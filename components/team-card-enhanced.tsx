"use client"

import Link from "next/link"
import { Heart, Users, MapPin, ArrowRight } from "lucide-react"
import { type Team, getPlayersByTeam } from "@/lib/data"
import { useFavorites } from "@/context/favorites-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TeamCardEnhancedProps {
  team: Team
}

export function TeamCardEnhanced({ team }: TeamCardEnhancedProps) {
  const { toggleFavoriteTeam, isFavoriteTeam, isAuthenticated } = useFavorites()
  const players = getPlayersByTeam(team.id)
  const isFavorite = isFavoriteTeam(team.id)

  return (
    <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
      {/* Team color accent */}
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${team.primaryColor}, ${team.secondaryColor})` }}
      />

      <Link href={`/team/${team.id}`} className="block p-6">
        {/* Logo and basic info */}
        <div className="flex items-start gap-4">
          <div
            className="w-20 h-20 rounded-xl flex items-center justify-center p-3 transition-transform group-hover:scale-105"
            style={{ backgroundColor: team.primaryColor + "15" }}
          >
            <img
              src={team.logo || `/placeholder.svg?height=80&width=80&query=${team.name} logo`}
              alt={team.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors truncate">
              {team.name}
            </h3>
            <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
              <MapPin className="w-3 h-3" />
              {team.city}
            </div>
            {(team.conference || team.division) && (
              <span className="inline-block mt-2 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                {team.conference} {team.division}
              </span>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{players.length} players</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            View Roster <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>

      {isAuthenticated && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 h-8 w-8 bg-background/50 hover:bg-background/80"
          onClick={(e) => {
            e.preventDefault()
            toggleFavoriteTeam(team.id)
          }}
        >
          <Heart
            className={cn(
              "w-4 h-4 transition-colors",
              isFavorite ? "fill-primary text-primary" : "text-muted-foreground",
            )}
          />
        </Button>
      )}
    </div>
  )
}
