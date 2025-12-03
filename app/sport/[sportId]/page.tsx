import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamCardEnhanced } from "@/components/team-card-enhanced"
import { getSportById, getTeamsBySport } from "@/lib/data"
import Link from "next/link"
import { ChevronRight, Trophy } from "lucide-react"

interface SportPageProps {
  params: Promise<{ sportId: string }>
}

export default async function SportPage({ params }: SportPageProps) {
  const { sportId } = await params
  const sport = getSportById(sportId)

  if (!sport) {
    notFound()
  }

  const teams = getTeamsBySport(sportId)

  // Group teams by conference/division
  const groupedTeams = teams.reduce(
    (acc, team) => {
      const group = team.conference || team.division || "All Teams"
      if (!acc[group]) acc[group] = []
      acc[group].push(team)
      return acc
    },
    {} as Record<string, typeof teams>,
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <section className="relative h-80 md:h-96 overflow-hidden">
          <img
            src={
              sport.image ||
              `/placeholder.svg?height=600&width=1920&query=${sport.name} professional sports action shot`
            }
            alt={sport.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/sports" className="hover:text-foreground transition-colors">
                  Sports
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-primary">{sport.shortName}</span>
              </nav>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <h1 className="font-display text-6xl md:text-8xl tracking-wider text-foreground">
                    {sport.shortName}
                  </h1>
                  <p className="text-muted-foreground mt-2 text-lg">{sport.name}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="font-display text-3xl text-primary">{sport.teamsCount}</p>
                    <p className="text-xs text-muted-foreground">Teams</p>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="text-center">
                    <p className="font-display text-3xl text-primary">{Object.keys(groupedTeams).length}</p>
                    <p className="text-xs text-muted-foreground">Conferences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {Object.entries(groupedTeams).map(([group, groupTeams]) => (
              <div key={group} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl tracking-wider">{group.toUpperCase()}</h2>
                    <p className="text-sm text-muted-foreground">{groupTeams.length} teams</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {groupTeams.map((team) => (
                    <TeamCardEnhanced key={team.id} team={team} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
