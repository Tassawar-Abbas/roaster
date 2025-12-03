"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, User, Users } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { searchPlayers, teams, getTeamById, type Player, type Team } from "@/lib/data"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [playerResults, setPlayerResults] = useState<Player[]>([])
  const [teamResults, setTeamResults] = useState<Team[]>([])
  const router = useRouter()

  useEffect(() => {
    if (query.length > 1) {
      const players = searchPlayers(query).slice(0, 5)
      const matchedTeams = teams
        .filter(
          (team) =>
            team.name.toLowerCase().includes(query.toLowerCase()) ||
            team.city.toLowerCase().includes(query.toLowerCase()),
        )
        .slice(0, 5)

      setPlayerResults(players)
      setTeamResults(matchedTeams)
    } else {
      setPlayerResults([])
      setTeamResults([])
    }
  }, [query])

  const handlePlayerClick = (playerId: string) => {
    onOpenChange(false)
    setQuery("")
    router.push(`/player/${playerId}`)
  }

  const handleTeamClick = (teamId: string) => {
    onOpenChange(false)
    setQuery("")
    router.push(`/team/${teamId}`)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Search Players & Teams</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, position, college..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>

          {(playerResults.length > 0 || teamResults.length > 0) && (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {playerResults.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Players
                  </h4>
                  <div className="space-y-1">
                    {playerResults.map((player) => {
                      const team = getTeamById(player.teamId)
                      return (
                        <button
                          key={player.id}
                          onClick={() => handlePlayerClick(player.id)}
                          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors text-left"
                        >
                          <img
                            src={player.image || "/placeholder.svg"}
                            alt={player.name}
                            className="w-10 h-10 rounded-full object-cover bg-muted"
                          />
                          <div>
                            <p className="font-medium">{player.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {team?.name} · {player.position}
                            </p>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {teamResults.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Teams
                  </h4>
                  <div className="space-y-1">
                    {teamResults.map((team) => (
                      <button
                        key={team.id}
                        onClick={() => handleTeamClick(team.id)}
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-secondary transition-colors text-left"
                      >
                        <img
                          src={team.logo || "/placeholder.svg"}
                          alt={team.name}
                          className="w-10 h-10 rounded object-cover bg-muted"
                        />
                        <div>
                          <p className="font-medium">{team.name}</p>
                          <p className="text-xs text-muted-foreground">{team.city}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {query.length > 1 && playerResults.length === 0 && teamResults.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No results found for &quot;{query}&quot;</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
