"use client"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/context/favorites-context"
import { cn } from "@/lib/utils"

interface FavoritePlayerButtonProps {
  playerId: string
}

export function FavoritePlayerButton({ playerId }: FavoritePlayerButtonProps) {
  const { toggleFavoritePlayer, isFavoritePlayer, isAuthenticated } = useFavorites()
  const isFavorite = isFavoritePlayer(playerId)

  if (!isAuthenticated) return null

  return (
    <Button
      variant={isFavorite ? "default" : "outline"}
      size="lg"
      onClick={() => toggleFavoritePlayer(playerId)}
      className="gap-2"
    >
      <Heart className={cn("w-5 h-5", isFavorite && "fill-current")} />
      {isFavorite ? "Favorited" : "Add to Favorites"}
    </Button>
  )
}
