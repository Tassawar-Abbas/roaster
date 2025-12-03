import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getPlayerById, getTeamById, getSportById, getPlayersByTeam } from "@/lib/data"
import { PlayerCardEnhanced } from "@/components/player-card-enhanced"
import Link from "next/link"
import {
  ChevronRight,
  Instagram,
  Twitter,
  MapPin,
  GraduationCap,
  Ruler,
  Weight,
  Calendar,
  Users,
  Share2,
  ExternalLink,
  Trophy,
  TrendingUp,
  Heart,
  MessageCircle,
  Bookmark,
} from "lucide-react"
import { FavoritePlayerButton } from "@/components/favorite-player-button"
import { Button } from "@/components/ui/button"

interface PlayerPageProps {
  params: Promise<{ playerId: string }>
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const { playerId } = await params
  const player = getPlayerById(playerId)

  if (!player) {
    notFound()
  }

  const team = getTeamById(player.teamId)
  const sport = team ? getSportById(team.sportId) : null
  const teammates = getPlayersByTeam(player.teamId)
    .filter((p) => p.id !== player.id)
    .slice(0, 4)

  const playerStats = {
    gamesPlayed: 45,
    points: 1245,
    assists: 312,
    rebounds: 189,
    avgPoints: 27.7,
    avgAssists: 6.9,
    avgRebounds: 4.2,
    winRate: 68,
  }

  const recentMatches = [
    { opponent: "Lakers", date: "Dec 1, 2025", result: "W", score: "112-105", points: 32, assists: 8 },
    { opponent: "Celtics", date: "Nov 28, 2025", result: "L", score: "98-102", points: 24, assists: 5 },
    { opponent: "Heat", date: "Nov 25, 2025", result: "W", score: "118-110", points: 29, assists: 11 },
    { opponent: "Bulls", date: "Nov 22, 2025", result: "W", score: "125-108", points: 35, assists: 7 },
  ]

  const socialPosts = [
    {
      id: 1,
      platform: "instagram",
      image: `/placeholder.svg?height=400&width=400&query=${player.name} training basketball gym workout`,
      caption: "Early morning grind never stops. Championship mindset every day 💪🏀",
      likes: 245000,
      comments: 3200,
      date: "2 hours ago",
    },
    {
      id: 2,
      platform: "instagram",
      image: `/placeholder.svg?height=400&width=400&query=${player.name} game winning shot celebration`,
      caption: "That game winner feeling hits different! Thank you to the best fans in the league 🙏",
      likes: 512000,
      comments: 8100,
      date: "1 day ago",
    },
    {
      id: 3,
      platform: "twitter",
      image: `/placeholder.svg?height=400&width=400&query=${player.name} charity event kids community`,
      caption: "Amazing day giving back to the community. These kids inspire me every day ❤️",
      likes: 89000,
      comments: 1500,
      date: "3 days ago",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <section className="relative overflow-hidden">
          {/* Gradient background with team colors */}
          <div
            className="absolute inset-0 h-[550px]"
            style={{
              background: `linear-gradient(135deg, ${team?.primaryColor || "#333"}50, ${team?.secondaryColor || "#666"}30, transparent)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />

          <div className="container mx-auto px-4 pt-8 pb-16 relative">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={`/sport/${team?.sportId}`} className="hover:text-foreground transition-colors">
                {sport?.shortName}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href={`/team/${team?.id}`} className="hover:text-foreground transition-colors">
                {team?.name}
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-primary">{player.name}</span>
            </nav>

            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Player Image - Large with image */}
              <div className="lg:col-span-2 relative">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-border shadow-2xl">
                  <img
                    src={`/.jpg?height=600&width=450&query=${player.name} ${player.position} professional athlete high quality portrait photo`}
                    alt={player.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Position badge */}
                  <div
                    className="absolute top-6 left-6 text-sm font-bold px-4 py-2 rounded-xl text-white shadow-lg"
                    style={{ backgroundColor: team?.primaryColor || "#3b82f6" }}
                  >
                    {player.position}
                  </div>

                  {/* Jersey number */}
                  <div className="absolute top-6 right-6 font-display text-5xl text-white/70 drop-shadow-lg">
                    #{player.number}
                  </div>

                  {/* Team logo overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: team?.primaryColor }}
                      >
                        {team?.shortName?.charAt(0)}
                      </span>
                      <span className="text-white font-semibold">{team?.name}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Player Info */}
              <div className="lg:col-span-3 space-y-8">
                {/* Name and Team */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h1 className="font-display text-5xl md:text-7xl tracking-wider text-foreground">
                        {player.name.toUpperCase()}
                      </h1>
                      {team && (
                        <Link
                          href={`/team/${team.id}`}
                          className="inline-flex items-center gap-2 mt-4 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <span className="w-5 h-5 rounded-full" style={{ backgroundColor: team.primaryColor }} />
                          <span className="text-lg">{team.name}</span>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <FavoritePlayerButton playerId={player.id} />
                      <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Player Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {player.height && (
                    <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <Ruler className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Height</p>
                      <p className="font-semibold text-lg text-foreground">{player.height}</p>
                    </div>
                  )}
                  {player.weight && (
                    <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                        <Weight className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-sm text-muted-foreground">Weight</p>
                      <p className="font-semibold text-lg text-foreground">{player.weight}</p>
                    </div>
                  )}
                  {player.age && (
                    <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-3">
                        <Calendar className="w-5 h-5 text-destructive" />
                      </div>
                      <p className="text-sm text-muted-foreground">Age</p>
                      <p className="font-semibold text-lg text-foreground">{player.age} years</p>
                    </div>
                  )}
                  {player.college && (
                    <div className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <GraduationCap className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">College</p>
                      <p className="font-semibold text-lg text-foreground truncate">{player.college}</p>
                    </div>
                  )}
                </div>

                {/* Additional Info */}
                {player.stateOfBirth && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Born in {player.stateOfBirth}</span>
                  </div>
                )}

                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  {player.instagramHandle && (
                    <a
                      href={`https://instagram.com/${player.instagramHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-card border border-border hover:border-primary/50 px-5 py-3 rounded-xl transition-all hover:shadow-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Instagram</p>
                        <p className="font-medium text-foreground">@{player.instagramHandle}</p>
                      </div>
                    </a>
                  )}
                  {player.twitterHandle && (
                    <a
                      href={`https://twitter.com/${player.twitterHandle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-card border border-border hover:border-primary/50 px-5 py-3 rounded-xl transition-all hover:shadow-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                        <Twitter className="w-5 h-5 text-background" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Twitter / X</p>
                        <p className="font-medium text-foreground">@{player.twitterHandle}</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-display text-3xl tracking-wider">SEASON STATS</h2>
                <p className="text-sm text-muted-foreground">2024-25 Season Performance</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              <div className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/50 transition-colors">
                <p className="text-3xl font-bold text-primary">{playerStats.gamesPlayed}</p>
                <p className="text-sm text-muted-foreground mt-1">Games</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 text-center hover:border-accent/50 transition-colors">
                <p className="text-3xl font-bold text-accent">{playerStats.points}</p>
                <p className="text-sm text-muted-foreground mt-1">Total Points</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 text-center hover:border-destructive/50 transition-colors">
                <p className="text-3xl font-bold text-destructive">{playerStats.assists}</p>
                <p className="text-sm text-muted-foreground mt-1">Assists</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5 text-center hover:border-primary/50 transition-colors">
                <p className="text-3xl font-bold text-primary">{playerStats.rebounds}</p>
                <p className="text-sm text-muted-foreground mt-1">Rebounds</p>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-5 text-center text-white">
                <p className="text-3xl font-bold">{playerStats.avgPoints}</p>
                <p className="text-sm opacity-90 mt-1">PPG</p>
              </div>
              <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-5 text-center text-white">
                <p className="text-3xl font-bold">{playerStats.avgAssists}</p>
                <p className="text-sm opacity-90 mt-1">APG</p>
              </div>
              <div className="bg-gradient-to-br from-destructive to-destructive/80 rounded-2xl p-5 text-center text-white">
                <p className="text-3xl font-bold">{playerStats.avgRebounds}</p>
                <p className="text-sm opacity-90 mt-1">RPG</p>
              </div>
              <div className="bg-gradient-to-br from-primary via-accent to-destructive rounded-2xl p-5 text-center text-white">
                <p className="text-3xl font-bold">{playerStats.winRate}%</p>
                <p className="text-sm opacity-90 mt-1">Win Rate</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-display text-3xl tracking-wider">RECENT MATCHES</h2>
                <p className="text-sm text-muted-foreground">Latest game performances</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recentMatches.map((match, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-5 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{match.date}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        match.result === "W" ? "bg-accent/20 text-accent" : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      {match.result}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                      <span className="font-bold text-foreground">{match.opponent.substring(0, 3).toUpperCase()}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">vs {match.opponent}</p>
                      <p className="text-sm text-muted-foreground">{match.score}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                      <p className="text-xl font-bold text-primary">{match.points}</p>
                      <p className="text-xs text-muted-foreground">PTS</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-accent">{match.assists}</p>
                      <p className="text-xs text-muted-foreground">AST</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-display text-3xl tracking-wider">SOCIAL FEED</h2>
                <p className="text-sm text-muted-foreground">Latest posts from {player.name}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Social post"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="flex gap-4 text-white">
                        <span className="flex items-center gap-1">
                          <Heart className="w-5 h-5" />
                          {(post.likes / 1000).toFixed(0)}K
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-5 h-5" />
                          {(post.comments / 1000).toFixed(1)}K
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={`/.jpg?height=40&width=40&query=${player.name} face portrait`}
                        alt={player.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-primary"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-foreground text-sm">{player.name}</p>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          post.platform === "instagram"
                            ? "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"
                            : "bg-foreground"
                        }`}
                      >
                        {post.platform === "instagram" ? (
                          <Instagram className="w-4 h-4 text-white" />
                        ) : (
                          <Twitter className="w-4 h-4 text-background" />
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.caption}</p>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-muted-foreground">
                      <button className="flex items-center gap-1 hover:text-destructive transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{(post.likes / 1000).toFixed(0)}K</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">{(post.comments / 1000).toFixed(1)}K</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-accent transition-colors ml-auto">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Teammates */}
        {teammates.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl tracking-wider">TEAMMATES</h2>
                    <p className="text-sm text-muted-foreground">Players on {team?.name}</p>
                  </div>
                </div>
                <Link
                  href={`/team/${team?.id}`}
                  className="text-primary hover:underline text-sm font-medium flex items-center gap-1"
                >
                  View Full Roster <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {teammates.map((teammate) => (
                  <PlayerCardEnhanced
                    key={teammate.id}
                    player={teammate}
                    showTeam={false}
                    teamColor={team?.primaryColor}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
