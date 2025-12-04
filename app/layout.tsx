import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"
import { FavoritesProvider } from "@/context/favorites-context"
import { ThemeProvider } from "@/context/theme-context"

const inter = Inter({ subsets: ["latin"] })
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Roaster - Your Sports Hub",
  description:
    "Track your favorite athletes across NFL, NBA, MLB, NHL, MLS, and WNBA. Get the latest updates, social content, and player movements.",
  keywords: ["sports", "athletes", "NFL", "NBA", "MLB", "NHL", "MLS", "WNBA", "player tracking"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${bebasNeue.variable} font-sans antialiased`}>
        <ThemeProvider>
          <FavoritesProvider>{children}</FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
