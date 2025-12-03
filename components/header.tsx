"use client"

import Link from "next/link"
import { useState } from "react"
import {
  Search,
  Menu,
  X,
  Heart,
  User,
  LogOut,
  Zap,
  Sun,
  Moon,
  Trophy,
  Users,
  ChevronDown,
  CalendarDays,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useFavorites } from "@/context/favorites-context"
import { useTheme } from "@/context/theme-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SearchDialog } from "./search-dialog"
import { AuthDialog } from "./auth-dialog"
import { sports, teams } from "@/lib/data"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const { isAuthenticated, user, setIsAuthenticated, setUser, favoriteTeams, favoritePlayers } = useFavorites()
  const { theme, toggleTheme } = useTheme()

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  const getTeamsBySport = (sportId: string) => {
    return teams.filter((team) => team.sportId === sportId).slice(0, 4)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - renamed FANZONE to ROASTER */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-destructive rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl tracking-wider hidden sm:block text-foreground">ROASTER</span>
            </Link>

            {/* Desktop Navigation - Updated tabs: Sports, Leagues, Events, Teams */}
            <nav className="hidden md:flex items-center gap-1">
              {/* Sports Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Sports
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {sports.map((sport) => (
                    <DropdownMenuItem key={sport.id} asChild>
                      <Link href={`/sport/${sport.id}`} className="cursor-pointer flex items-center gap-2">
                        {sport.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Leagues Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    Leagues
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {sports.map((sport) => (
                    <DropdownMenuItem key={sport.id} asChild>
                      <Link href={`/sport/${sport.id}`} className="cursor-pointer flex items-center gap-2">
                        {sport.shortName}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Events Tab */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    Events
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/events/upcoming" className="cursor-pointer">
                      Upcoming Games
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/events/live" className="cursor-pointer">
                      Live Now
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/events/results" className="cursor-pointer">
                      Recent Results
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/events/playoffs" className="cursor-pointer">
                      Playoffs & Finals
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/events/all-star" className="cursor-pointer">
                      All-Star Events
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Teams Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Teams
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 max-h-80 overflow-y-auto">
                  {sports.map((sport) => (
                    <div key={sport.id}>
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50">
                        {sport.shortName}
                      </div>
                      {getTeamsBySport(sport.id).map((team) => (
                        <DropdownMenuItem key={team.id} asChild>
                          <Link href={`/team/${team.id}`} className="cursor-pointer">
                            {team.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuItem asChild>
                        <Link href={`/sport/${sport.id}`} className="cursor-pointer text-primary text-xs">
                          View all {sport.shortName} teams →
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Favorites */}
              <Link
                href="/favorites"
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all flex items-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Favorites
                {(favoriteTeams.length > 0 || favoritePlayers.length > 0) && (
                  <span className="bg-destructive text-destructive-foreground text-xs px-2 py-0.5 rounded-full font-bold">
                    {favoriteTeams.length + favoritePlayers.length}
                  </span>
                )}
              </Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary rounded-full"
                onClick={toggleTheme}
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary rounded-full"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
              </Button>

              {isAuthenticated && user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-9 w-9 rounded-full ring-2 ring-primary/20 hover:ring-primary/50 transition-all"
                    >
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={user.image || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium text-foreground">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/favorites" className="cursor-pointer">
                        <Heart className="mr-2 h-4 w-4" />
                        My Favorites
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  size="sm"
                  className="hidden sm:flex bg-gradient-to-r from-primary via-accent to-destructive hover:opacity-90 transition-opacity text-white"
                  onClick={() => setAuthOpen(true)}
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Updated with new tabs */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <div className="text-xs font-semibold text-muted-foreground px-4 pt-2">SPORTS</div>
              {sports.map((sport) => (
                <Link
                  key={sport.id}
                  href={`/sport/${sport.id}`}
                  className="text-sm font-medium py-2 px-4 rounded-lg hover:bg-secondary transition-colors text-foreground flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {sport.name}
                </Link>
              ))}
              <div className="border-t border-border my-2" />
              <div className="text-xs font-semibold text-muted-foreground px-4 pt-2">EVENTS</div>
              <Link
                href="/events/upcoming"
                className="text-sm font-medium py-2 px-4 rounded-lg hover:bg-secondary transition-colors text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Upcoming Games
              </Link>
              <Link
                href="/events/live"
                className="text-sm font-medium py-2 px-4 rounded-lg hover:bg-secondary transition-colors text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Live Now
              </Link>
              <div className="border-t border-border my-2" />
              <Link
                href="/favorites"
                className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors flex items-center gap-2 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Heart className="w-4 h-4" />
                Favorites
              </Link>
              <button
                className="text-sm font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors flex items-center gap-2 text-left text-foreground"
                onClick={toggleTheme}
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
              {!isAuthenticated && (
                <Button
                  className="w-full mt-2 bg-gradient-to-r from-primary via-accent to-destructive text-white"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setAuthOpen(true)
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              )}
            </nav>
          </div>
        )}
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
    </>
  )
}
