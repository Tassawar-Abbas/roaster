import Link from "next/link"
import { Instagram, Twitter, Zap, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      {/* Newsletter Section */}
      <div className="border-b border-border section-gradient-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl tracking-wider text-foreground">STAY IN THE GAME</h3>
              <p className="text-muted-foreground mt-1">Get the latest updates on your favorite athletes</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-background border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white border-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl tracking-wider text-foreground">ROASTER</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Your ultimate hub for tracking favorite athletes across all major sports leagues. Real-time updates,
              social content, and more.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Sports</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/sport/nfl" className="hover:text-primary transition-colors">
                  NFL
                </Link>
              </li>
              <li>
                <Link href="/sport/nba" className="hover:text-primary transition-colors">
                  NBA
                </Link>
              </li>
              <li>
                <Link href="/sport/mlb" className="hover:text-primary transition-colors">
                  MLB
                </Link>
              </li>
              <li>
                <Link href="/sport/nhl" className="hover:text-primary transition-colors">
                  NHL
                </Link>
              </li>
              <li>
                <Link href="/sport/mls" className="hover:text-primary transition-colors">
                  MLS
                </Link>
              </li>
              <li>
                <Link href="/sport/wnba" className="hover:text-primary transition-colors">
                  WNBA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/favorites" className="hover:text-primary transition-colors">
                  My Favorites
                </Link>
              </li>
              <li>
                <Link href="/sports" className="hover:text-primary transition-colors">
                  All Sports
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trending News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shop Gear
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Get Tickets
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 ROASTER. All rights reserved.</p>
        
        </div>
      </div>
    </footer>
  )
}
