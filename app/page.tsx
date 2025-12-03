import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SportCard } from "@/components/sport-card"
import { FeaturedPlayers } from "@/components/featured-players"
import { TrendingNews } from "@/components/trending-news"
import { FanReviews } from "@/components/fan-reviews"
import { sports } from "@/lib/data"
import { ArrowRight, TrendingUp, Users, Heart, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const featuredSport = sports[0]
  const otherSports = sports.slice(1)

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        {/* Hero Section with background image */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/epic-sports-stadium-night-atmosphere-with-crowd-an.jpg"
              alt="Sports atmosphere"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground font-medium">Your Ultimate Sports Destination</span>
              </div>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider leading-none">
                <span className="text-foreground">FOLLOW</span>
                <br />
                <span className="gradient-text">YOUR STARS</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-lg leading-relaxed">
                Track your favorite athletes across NFL, NBA, MLB, NHL, MLS, and WNBA. Get real-time updates, social
                content, and exclusive player insights.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 border-0"
                  asChild
                >
                  <Link href="/sports">
                    Explore Sports
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 text-foreground bg-transparent"
                  asChild
                >
                  <Link href="/favorites">
                    <Heart className="w-4 h-4 mr-2" />
                    My Favorites
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 hidden lg:flex flex-col gap-4">
            <div className="glass-card gradient-border rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display text-2xl text-foreground">5000+</p>
                <p className="text-xs text-muted-foreground">Athletes</p>
              </div>
            </div>
            <div className="glass-card gradient-border rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-secondary/60 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display text-2xl text-foreground">6</p>
                <p className="text-xs text-muted-foreground">Major Leagues</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-border overflow-hidden section-gradient-blue isolate z-20">
          <img
            src="/sports-stadium-panoramic-view-with-lights-and-fiel.jpg"
            alt="Stadium"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-card/80 dark:bg-card/90 z-0" />
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <p className="font-display text-5xl md:text-6xl gradient-text">6</p>
                <p className="text-sm text-foreground mt-2 font-medium">Major Leagues</p>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl md:text-6xl gradient-text">165+</p>
                <p className="text-sm text-foreground mt-2 font-medium">Teams</p>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl md:text-6xl gradient-text">5000+</p>
                <p className="text-sm text-foreground mt-2 font-medium">Athletes</p>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl md:text-6xl gradient-text">24/7</p>
                <p className="text-sm text-foreground mt-2 font-medium">Updates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Choose Your Sport Section */}
        <section className="py-20 section-gradient-green relative isolate overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-between mb-10 relative z-20 pb-4">
              <div className="relative z-30">
                <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground">CHOOSE YOUR SPORT</h2>
                <p className="text-muted-foreground mt-2">Explore teams and players across all major leagues</p>
              </div>
              <Link
                href="/sports"
                className="hidden md:flex items-center gap-1 text-primary hover:underline font-medium relative z-30"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

           

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
              {otherSports.map((sport) => (
                <SportCard key={sport.id} sport={sport} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Players */}
        <FeaturedPlayers />

        {/* Trending News */}
        <TrendingNews />

        <section className="py-20 relative overflow-hidden section-gradient-mixed">
          <img
            src="/abstract-sports-action-blur-motion-background.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-5"
          />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="font-display text-5xl md:text-6xl tracking-wider text-foreground">WHY ROASTER?</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
                Everything you need to stay connected with your favorite athletes in one place.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all gradient-border shadow-lg">
                <div className="aspect-video relative">
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">Real-Time Updates</h3>
                  <p className="text-muted-foreground">
                    Track player movements, trades, and career progressions as they happen across all major leagues.
                  </p>
                </div>
              </div>

              <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-secondary/50 transition-all gradient-border shadow-lg">
                <div className="aspect-video relative">
                  <img
                    src="/athlete-social-media-instagram-posts-feed.jpg"
                    alt="Social integration"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/60 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">Social Integration</h3>
                  <p className="text-muted-foreground">
                    See the latest Instagram posts and social updates from your favorite athletes all in one feed.
                  </p>
                </div>
              </div>

              <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all gradient-border shadow-lg">
                <div className="aspect-video relative">
                  <img
                    src="/personalized-sports-feed-favorites-collection-list.jpg"
                    alt="Personal favorites"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">Personal Favorites</h3>
                  <p className="text-muted-foreground">
                    Build your personalized feed by following teams and players you care about most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fan Reviews */}
        <FanReviews />

        {/* CTA Section */}
        <section className="py-20 section-gradient-blue">
          <div className="container mx-auto px-4">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/sports-fans-celebrating-victory-crowd-cheering-sta.jpg"
                alt="Sports celebration"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent flex items-center">
                <div className="px-8 md:px-16 max-w-xl">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full px-4 py-2 mb-4">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground font-medium">Join 100K+ Fans</span>
                  </div>
                  <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-wider">
                    NEVER MISS A MOMENT
                  </h2>
                  <p className="text-muted-foreground mt-4 text-lg">
                    Sign up to save your favorites and get personalized updates about your athletes.
                  </p>
                  <Button
                    size="lg"
                    className="mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 border-0"
                  >
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
