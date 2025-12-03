"use client"

import Link from "next/link"
import { Heart, Instagram, ArrowUpRight } from "lucide-react"
import { type Player, getTeamById } from "@/lib/data"
import { useFavorites } from "@/context/favorites-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PlayerCardEnhancedProps {
  player: Player
  showTeam?: boolean
  teamColor?: string
}

export function PlayerCardEnhanced({ player, showTeam = true, teamColor }: PlayerCardEnhancedProps) {
  const { toggleFavoritePlayer, isFavoritePlayer, isAuthenticated } = useFavorites()
  const team = getTeamById(player.teamId)
  const isFavorite = isFavoritePlayer(player.id)
  const color = teamColor || team?.primaryColor || "#10b981"

  const playerImage = `/placeholder.svg?height=400&width=300&query=${encodeURIComponent(player.name)} ${encodeURIComponent(player.position)} professional athlete portrait photo`

  return (
    <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      <Link href={`/player/${player.id}`} className="block">
        {/* Player Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={playerImage || "/placeholder.svg"}
            alt={player.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          {/* Position Badge with team color */}
          <div
            className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-lg text-white"
            style={{ backgroundColor: color }}
          >
            {player.position}
          </div>

          {/* Player Number */}
          <div className="absolute top-4 right-14 font-display text-3xl text-white/60">#{player.number}</div>

          {/* View indicator */}
          <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>

        {/* Player Info */}
        <div className="p-5">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {player.name}
          </h3>

          {showTeam && team && (
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: team.primaryColor }} />
              {team.name}
            </p>
          )}

          {/* Stats row */}
          <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
            {player.height && <span>{player.height}</span>}
            {player.weight && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{player.weight}</span>
              </>
            )}
            {player.age && (
              <>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{player.age} yrs</span>
              </>
            )}
          </div>

          {/* Social indicator */}
          {player.instagramHandle && (
            <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
              <Instagram className="w-3 h-3" />
              <span>@{player.instagramHandle}</span>
            </div>
          )}
        </div>
      </Link>

      {isAuthenticated && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 h-9 w-9 bg-background/80 hover:bg-background backdrop-blur-sm"
          onClick={(e) => {
            e.preventDefault()
            toggleFavoritePlayer(player.id)
          }}
        >
          <Heart
            className={cn("w-4 h-4 transition-colors", isFavorite ? "fill-primary text-primary" : "text-foreground")}
          />
        </Button>
      )}
    </div>
  )
}
