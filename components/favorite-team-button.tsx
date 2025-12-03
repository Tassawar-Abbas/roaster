"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/context/favorites-context"
import { cn } from "@/lib/utils"

interface FavoriteTeamButtonProps {
  teamId: string
}

export function FavoriteTeamButton({ teamId }: FavoriteTeamButtonProps) {
  const { toggleFavoriteTeam, isFavoriteTeam, isAuthenticated } = useFavorites()
  const isFavorite = isFavoriteTeam(teamId)

  if (!isAuthenticated) return null

  return (
    <Button
      variant={isFavorite ? "default" : "outline"}
      size="lg"
      onClick={() => toggleFavoriteTeam(teamId)}
      className="gap-2"
    >
      <Heart className={cn("w-5 h-5", isFavorite && "fill-current")} />
      {isFavorite ? "Favorited" : "Add to Favorites"}
    </Button>
  )
}
