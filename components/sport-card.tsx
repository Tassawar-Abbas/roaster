"use client"

import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import type { Sport } from "@/lib/data"

interface SportCardProps {
  sport: Sport
  featured?: boolean
}

export function SportCard({ sport, featured = false }: SportCardProps) {
  if (featured) {
    return (
      <Link
        href={`/sport/${sport.id}`}
        className="group relative overflow-hidden rounded-2xl aspect-[16/9] md:aspect-[21/9] shadow-2xl gradient-border"
      >
        <img
          src={
            sport.image ||
            `/placeholder.svg?height=600&width=1600&query=${sport.name || "/placeholder.svg"} professional sports action stadium`
          }
          alt={sport.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="text-white text-sm font-semibold uppercase tracking-wider">{sport.teamsCount} Teams</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-wider">{sport.shortName}</h2>
          <p className="text-white/80 mt-3 hidden md:block max-w-md text-lg">{sport.description}</p>
          <div className="flex items-center gap-2 mt-6 text-white group-hover:gap-3 transition-all">
            <span className="text-sm font-semibold">Explore Teams</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={`/sport/${sport.id}`}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-xl transition-all"
    >
      <img
        src={sport.image || `/placeholder.svg?height=400&width=300&query=${sport.name} sports action`}
        alt={sport.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <div className="flex items-center gap-1 text-white text-xs font-semibold uppercase tracking-wider mb-1">
          <Users className="w-3 h-3" />
          {sport.teamsCount} Teams
        </div>
        <h3 className="font-display text-2xl md:text-3xl text-white tracking-wider">{sport.shortName}</h3>
        <div className="flex items-center gap-1 mt-2 text-white/80 group-hover:text-white transition-colors">
          <span className="text-xs font-medium">View All</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
