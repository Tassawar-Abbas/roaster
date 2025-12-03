"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface FavoritesContextType {
  favoriteTeams: string[]
  favoritePlayers: string[]
  toggleFavoriteTeam: (teamId: string) => void
  toggleFavoritePlayer: (playerId: string) => void
  isFavoriteTeam: (teamId: string) => boolean
  isFavoritePlayer: (playerId: string) => boolean
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  user: { name: string; email: string; image: string } | null
  setUser: (user: { name: string; email: string; image: string } | null) => void
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteTeams, setFavoriteTeams] = useState<string[]>([])
  const [favoritePlayers, setFavoritePlayers] = useState<string[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string; image: string } | null>(null)

  useEffect(() => {
    const savedTeams = localStorage.getItem("favoriteTeams")
    const savedPlayers = localStorage.getItem("favoritePlayers")
    const savedAuth = localStorage.getItem("isAuthenticated")
    const savedUser = localStorage.getItem("user")

    if (savedTeams) setFavoriteTeams(JSON.parse(savedTeams))
    if (savedPlayers) setFavoritePlayers(JSON.parse(savedPlayers))
    if (savedAuth) setIsAuthenticated(JSON.parse(savedAuth))
    if (savedUser) setUser(JSON.parse(savedUser))
  }, [])

  useEffect(() => {
    localStorage.setItem("favoriteTeams", JSON.stringify(favoriteTeams))
  }, [favoriteTeams])

  useEffect(() => {
    localStorage.setItem("favoritePlayers", JSON.stringify(favoritePlayers))
  }, [favoritePlayers])

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated))
  }, [isAuthenticated])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])

  const toggleFavoriteTeam = (teamId: string) => {
    setFavoriteTeams((prev) => (prev.includes(teamId) ? prev.filter((id) => id !== teamId) : [...prev, teamId]))
  }

  const toggleFavoritePlayer = (playerId: string) => {
    setFavoritePlayers((prev) => (prev.includes(playerId) ? prev.filter((id) => id !== playerId) : [...prev, playerId]))
  }

  const isFavoriteTeam = (teamId: string) => favoriteTeams.includes(teamId)
  const isFavoritePlayer = (playerId: string) => favoritePlayers.includes(playerId)

  return (
    <FavoritesContext.Provider
      value={{
        favoriteTeams,
        favoritePlayers,
        toggleFavoriteTeam,
        toggleFavoritePlayer,
        isFavoriteTeam,
        isFavoritePlayer,
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
