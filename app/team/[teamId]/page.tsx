import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PlayerCardEnhanced } from "@/components/player-card-enhanced"
import { getTeamById, getPlayersByTeam, getSportById } from "@/lib/data"
import Link from "next/link"
import { ChevronRight, MapPin, Users, Building } from "lucide-react"
import { FavoriteTeamButton } from "@/components/favorite-team-button"

interface TeamPageProps {
  params: Promise<{ teamId: string }>
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { teamId } = await params
  const team = getTeamById(teamId)

  if (!team) {
    notFound()
  }

  const players = getPlayersByTeam(teamId)
  const sport = getSportById(team.sportId)

  // Group players by position
  const positions = [...new Set(players.map((p) => p.position))]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <section className="relative overflow-hidden">
          {/* Background with team colors */}
          <div
            className="absolute inset-0 h-96"
            style={{
              background: `linear-gradient(135deg, ${team.primaryColor}30, ${team.secondaryColor}15, transparent)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

          {/* Team pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <img
              src={team.logo || "/placeholder.svg"}
              alt=""
              className="absolute -right-32 -top-32 w-96 h-96 object-contain"
            />
          </div>

          <div className="container mx-auto px-4 py-16 relative">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={`/sport/${team.sportId}`} className="hover:text-foreground transition-colors">
                {sport?.shortName}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary">{team.name}</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              {/* Team Logo */}
              <div
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl flex items-center justify-center p-4 border border-border"
                style={{ backgroundColor: team.primaryColor + "15" }}
              >
                <img
                  src={team.logo || `/placeholder.svg?height=120&width=120&query=${team.name} team logo`}
                  alt={team.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Team Info */}
              <div className="flex-1">
                <h1 className="font-display text-5xl md:text-7xl tracking-wider text-foreground">
                  {team.name.toUpperCase()}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {team.city}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {players.length} Players
                  </span>
                  {(team.conference || team.division) && (
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Building className="w-4 h-4" />
                      {team.conference} {team.division}
                    </span>
                  )}
                </div>

                {/* Team color indicator */}
                <div className="flex items-center gap-3 mt-6">
                  <span className="text-sm text-muted-foreground">Team Colors:</span>
                  <div
                    className="w-8 h-8 rounded-full border-2 border-border"
                    style={{ backgroundColor: team.primaryColor }}
                  />
                  <div
                    className="w-8 h-8 rounded-full border-2 border-border"
                    style={{ backgroundColor: team.secondaryColor }}
                  />
                </div>
              </div>

              {/* Favorite Button */}
              <FavoriteTeamButton teamId={team.id} />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-4xl tracking-wider">TEAM ROSTER</h2>
                  <p className="text-sm text-muted-foreground">{players.length} active players</p>
                </div>
              </div>

              {/* Position filters */}
              <div className="hidden md:flex items-center gap-2">
                {positions.slice(0, 5).map((pos) => (
                  <span key={pos} className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground">
                    {pos}
                  </span>
                ))}
              </div>
            </div>

            {players.length > 0 ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {players.map((player) => (
                  <PlayerCardEnhanced key={player.id} player={player} teamColor={team.primaryColor} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-card border border-border rounded-2xl">
                <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground/30" />
                <p className="text-xl text-muted-foreground">No players found for this team yet.</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Check back soon for roster updates.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
