"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamCard } from "@/components/team-card"
import { PlayerCard } from "@/components/player-card"
import { useFavorites } from "@/context/favorites-context"
import { getTeamById, getPlayerById } from "@/lib/data"
import { Heart, Users, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AuthDialog } from "@/components/auth-dialog"
import { useState } from "react"

export default function FavoritesPage() {
  const { favoriteTeams, favoritePlayers, isAuthenticated } = useFavorites()
  const [authOpen, setAuthOpen] = useState(false)

  const teams = favoriteTeams.map((id) => getTeamById(id)).filter(Boolean)
  const players = favoritePlayers.map((id) => getPlayerById(id)).filter(Boolean)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="font-display text-5xl md:text-6xl tracking-wider flex items-center gap-4">
              <Heart className="w-12 h-12 text-primary" />
              MY FAVORITES
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Your personalized collection of favorite teams and players. Sign in to start building your feed.
            </p>
          </div>

          {!isAuthenticated ? (
            <div className="text-center py-20 bg-card border border-border rounded-xl">
              <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Sign in to save favorites</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Create an account to save your favorite teams and players for quick access.
              </p>
              <Button size="lg" onClick={() => setAuthOpen(true)}>
                Sign In
              </Button>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Favorite Teams */}
              <section>
                <h2 className="font-display text-3xl tracking-wider mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  TEAMS ({teams.length})
                </h2>
                {teams.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teams.map((team) => team && <TeamCard key={team.id} team={team} />)}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-card border border-border rounded-xl">
                    <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No favorite teams yet. Browse sports to add some!</p>
                  </div>
                )}
              </section>

              {/* Favorite Players */}
              <section>
                <h2 className="font-display text-3xl tracking-wider mb-6 flex items-center gap-3">
                  <User className="w-8 h-8 text-primary" />
                  PLAYERS ({players.length})
                </h2>
                {players.length > 0 ? (
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {players.map((player) => player && <PlayerCard key={player.id} player={player} />)}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-card border border-border rounded-xl">
                    <User className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No favorite players yet. Browse teams to add some!</p>
                  </div>
                )}
              </section>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
    </div>
  )
}
