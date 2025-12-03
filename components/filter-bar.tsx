"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sports, colleges, states } from "@/lib/data"

interface FilterBarProps {
  onFilterChange: (filters: { college?: string; state?: string; sport?: string }) => void
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [college, setCollege] = useState<string>("")
  const [state, setState] = useState<string>("")
  const [sport, setSport] = useState<string>("")

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { college, state, sport }
    if (key === "college") {
      setCollege(value)
      newFilters.college = value
    }
    if (key === "state") {
      setState(value)
      newFilters.state = value
    }
    if (key === "sport") {
      setSport(value)
      newFilters.sport = value
    }
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    setCollege("")
    setState("")
    setSport("")
    onFilterChange({})
  }

  const hasFilters = college || state || sport

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-card border border-border rounded-xl">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filter by:</span>
      </div>

      <Select value={sport} onValueChange={(v) => handleFilterChange("sport", v)}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Sport" />
        </SelectTrigger>
        <SelectContent>
          {sports.map((s) => (
            <SelectItem key={s.id} value={s.id}>
              {s.shortName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={college} onValueChange={(v) => handleFilterChange("college", v)}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="College" />
        </SelectTrigger>
        <SelectContent>
          {colleges.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={state} onValueChange={(v) => handleFilterChange("state", v)}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="State of Birth" />
        </SelectTrigger>
        <SelectContent>
          {states.map((s) => (
            <SelectItem key={s} value={s}>
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {hasFilters && (
        <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
          <X className="w-3 h-3" />
          Clear
        </Button>
      )}
    </div>
  )
}
