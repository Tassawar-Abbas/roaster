export interface Sport {
  id: string
  name: string
  shortName: string
  image: string
  teamsCount: number
  description: string
}

export interface Team {
  id: string
  name: string
  city: string
  sportId: string
  logo: string
  primaryColor: string
  secondaryColor: string
  conference?: string
  division?: string
}

export interface Player {
  id: string
  name: string
  teamId: string
  position: string
  number: string
  image: string
  college?: string
  stateOfBirth?: string
  height?: string
  weight?: string
  age?: number
  instagramHandle?: string
  twitterHandle?: string
  latestPost?: {
    image: string
    caption: string
    date: string
  }
}

export const sports: Sport[] = [
  {
    id: "nfl",
    name: "National Football League",
    shortName: "NFL",
    image: "/nfl-football-stadium-action-shot.jpg",
    teamsCount: 32,
    description: "America's most popular sport",
  },
  {
    id: "nba",
    name: "National Basketball Association",
    shortName: "NBA",
    image: "/nba-basketball-game-slam-dunk.jpg",
    teamsCount: 30,
    description: "The world's premier basketball league",
  },
  {
    id: "mlb",
    name: "Major League Baseball",
    shortName: "MLB",
    image: "/mlb-baseball-pitcher-throwing.jpg",
    teamsCount: 30,
    description: "America's pastime",
  },
  {
    id: "nhl",
    name: "National Hockey League",
    shortName: "NHL",
    image: "/nhl-ice-hockey-game-action.jpg",
    teamsCount: 32,
    description: "The fastest game on ice",
  },
  {
    id: "mls",
    name: "Major League Soccer",
    shortName: "MLS",
    image: "/mls-soccer-match-goal-celebration.jpg",
    teamsCount: 29,
    description: "Soccer in America",
  },
  {
    id: "wnba",
    name: "Women's National Basketball Association",
    shortName: "WNBA",
    image: "/wnba-women-basketball-game.jpg",
    teamsCount: 12,
    description: "Elite women's basketball",
  },
]

export const teams: Team[] = [
  // NFL Teams
  {
    id: "chiefs",
    name: "Kansas City Chiefs",
    city: "Kansas City",
    sportId: "nfl",
    logo: "/kansas-city-chiefs-logo.png",
    primaryColor: "#E31837",
    secondaryColor: "#FFB81C",
    conference: "AFC",
    division: "West",
  },
  {
    id: "eagles",
    name: "Philadelphia Eagles",
    city: "Philadelphia",
    sportId: "nfl",
    logo: "/philadelphia-eagles-logo.jpg",
    primaryColor: "#004C54",
    secondaryColor: "#A5ACAF",
    conference: "NFC",
    division: "East",
  },
  {
    id: "cowboys",
    name: "Dallas Cowboys",
    city: "Dallas",
    sportId: "nfl",
    logo: "/dallas-cowboys-logo.jpg",
    primaryColor: "#003594",
    secondaryColor: "#869397",
    conference: "NFC",
    division: "East",
  },
  {
    id: "49ers",
    name: "San Francisco 49ers",
    city: "San Francisco",
    sportId: "nfl",
    logo: "/san-francisco-49ers-logo.jpg",
    primaryColor: "#AA0000",
    secondaryColor: "#B3995D",
    conference: "NFC",
    division: "West",
  },
  {
    id: "bills",
    name: "Buffalo Bills",
    city: "Buffalo",
    sportId: "nfl",
    logo: "/buffalo-bills-logo.jpg",
    primaryColor: "#00338D",
    secondaryColor: "#C60C30",
    conference: "AFC",
    division: "East",
  },
  {
    id: "ravens",
    name: "Baltimore Ravens",
    city: "Baltimore",
    sportId: "nfl",
    logo: "/baltimore-ravens-logo.jpg",
    primaryColor: "#241773",
    secondaryColor: "#9E7C0C",
    conference: "AFC",
    division: "North",
  },

  // NBA Teams
  {
    id: "lakers",
    name: "Los Angeles Lakers",
    city: "Los Angeles",
    sportId: "nba",
    logo: "/los-angeles-lakers-logo.png",
    primaryColor: "#552583",
    secondaryColor: "#FDB927",
    conference: "Western",
    division: "Pacific",
  },
  {
    id: "celtics",
    name: "Boston Celtics",
    city: "Boston",
    sportId: "nba",
    logo: "/boston-celtics-logo.png",
    primaryColor: "#007A33",
    secondaryColor: "#BA9653",
    conference: "Eastern",
    division: "Atlantic",
  },
  {
    id: "warriors",
    name: "Golden State Warriors",
    city: "San Francisco",
    sportId: "nba",
    logo: "/golden-state-warriors-logo.png",
    primaryColor: "#1D428A",
    secondaryColor: "#FFC72C",
    conference: "Western",
    division: "Pacific",
  },
  {
    id: "bucks",
    name: "Milwaukee Bucks",
    city: "Milwaukee",
    sportId: "nba",
    logo: "/milwaukee-bucks-logo.png",
    primaryColor: "#00471B",
    secondaryColor: "#EEE1C6",
    conference: "Eastern",
    division: "Central",
  },
  {
    id: "heat",
    name: "Miami Heat",
    city: "Miami",
    sportId: "nba",
    logo: "/miami-heat-logo.png",
    primaryColor: "#98002E",
    secondaryColor: "#F9A01B",
    conference: "Eastern",
    division: "Southeast",
  },
  {
    id: "nuggets",
    name: "Denver Nuggets",
    city: "Denver",
    sportId: "nba",
    logo: "/denver-nuggets-logo.png",
    primaryColor: "#0E2240",
    secondaryColor: "#FEC524",
    conference: "Western",
    division: "Northwest",
  },

  // MLB Teams
  {
    id: "yankees",
    name: "New York Yankees",
    city: "New York",
    sportId: "mlb",
    logo: "/new-york-yankees-logo.png",
    primaryColor: "#003087",
    secondaryColor: "#E4002C",
    division: "AL East",
  },
  {
    id: "dodgers",
    name: "Los Angeles Dodgers",
    city: "Los Angeles",
    sportId: "mlb",
    logo: "/los-angeles-dodgers-logo.jpg",
    primaryColor: "#005A9C",
    secondaryColor: "#EF3E42",
    division: "NL West",
  },
  {
    id: "redsox",
    name: "Boston Red Sox",
    city: "Boston",
    sportId: "mlb",
    logo: "/boston-red-sox-logo.png",
    primaryColor: "#BD3039",
    secondaryColor: "#0C2340",
    division: "AL East",
  },
  {
    id: "astros",
    name: "Houston Astros",
    city: "Houston",
    sportId: "mlb",
    logo: "/houston-astros-logo.png",
    primaryColor: "#002D62",
    secondaryColor: "#EB6E1F",
    division: "AL West",
  },

  // NHL Teams
  {
    id: "bruins",
    name: "Boston Bruins",
    city: "Boston",
    sportId: "nhl",
    logo: "/boston-bruins-logo.png",
    primaryColor: "#FFB81C",
    secondaryColor: "#000000",
    division: "Atlantic",
  },
  {
    id: "rangers",
    name: "New York Rangers",
    city: "New York",
    sportId: "nhl",
    logo: "/new-york-rangers-logo.png",
    primaryColor: "#0038A8",
    secondaryColor: "#CE1126",
    division: "Metropolitan",
  },
  {
    id: "avalanche",
    name: "Colorado Avalanche",
    city: "Denver",
    sportId: "nhl",
    logo: "/colorado-avalanche-logo.png",
    primaryColor: "#6F263D",
    secondaryColor: "#236192",
    division: "Central",
  },
  {
    id: "oilers",
    name: "Edmonton Oilers",
    city: "Edmonton",
    sportId: "nhl",
    logo: "/edmonton-oilers-logo.png",
    primaryColor: "#041E42",
    secondaryColor: "#FF4C00",
    division: "Pacific",
  },

  // MLS Teams
  {
    id: "lafc",
    name: "Los Angeles FC",
    city: "Los Angeles",
    sportId: "mls",
    logo: "/lafc-logo.jpg",
    primaryColor: "#000000",
    secondaryColor: "#C39E6D",
    conference: "Western",
  },
  {
    id: "intermiami",
    name: "Inter Miami CF",
    city: "Miami",
    sportId: "mls",
    logo: "/inter-miami-logo.png",
    primaryColor: "#F7B5CD",
    secondaryColor: "#231F20",
    conference: "Eastern",
  },
  {
    id: "atlanta",
    name: "Atlanta United FC",
    city: "Atlanta",
    sportId: "mls",
    logo: "/atlanta-united-logo.jpg",
    primaryColor: "#80000A",
    secondaryColor: "#A19060",
    conference: "Eastern",
  },
  {
    id: "sounders",
    name: "Seattle Sounders FC",
    city: "Seattle",
    sportId: "mls",
    logo: "/seattle-sounders-logo.jpg",
    primaryColor: "#005695",
    secondaryColor: "#658D1B",
    conference: "Western",
  },

  // WNBA Teams
  {
    id: "aces",
    name: "Las Vegas Aces",
    city: "Las Vegas",
    sportId: "wnba",
    logo: "/las-vegas-aces-logo.jpg",
    primaryColor: "#000000",
    secondaryColor: "#C4122E",
    conference: "Western",
  },
  {
    id: "storm",
    name: "Seattle Storm",
    city: "Seattle",
    sportId: "wnba",
    logo: "/placeholder.svg?height=100&width=100",
    primaryColor: "#2C5234",
    secondaryColor: "#FFC72C",
    conference: "Western",
  },
  {
    id: "liberty",
    name: "New York Liberty",
    city: "New York",
    sportId: "wnba",
    logo: "/placeholder.svg?height=100&width=100",
    primaryColor: "#6ECEB2",
    secondaryColor: "#000000",
    conference: "Eastern",
  },
  {
    id: "fever",
    name: "Indiana Fever",
    city: "Indianapolis",
    sportId: "wnba",
    logo: "/placeholder.svg?height=100&width=100",
    primaryColor: "#002D62",
    secondaryColor: "#E03A3E",
    conference: "Eastern",
  },
]

export const players: Player[] = [
  // Chiefs Players
  {
    id: "mahomes",
    name: "Patrick Mahomes",
    teamId: "chiefs",
    position: "QB",
    number: "15",
    image: "/placeholder.svg?height=400&width=300",
    college: "Texas Tech",
    stateOfBirth: "Texas",
    height: "6'3\"",
    weight: "230 lbs",
    age: 28,
    instagramHandle: "patrickmahomes",
    twitterHandle: "PatrickMahomes",
    latestPost: {
      image: "/placeholder.svg?height=400&width=400",
      caption: "Back to work! Championship mentality 🏆",
      date: "2025-01-15",
    },
  },
  {
    id: "kelce",
    name: "Travis Kelce",
    teamId: "chiefs",
    position: "TE",
    number: "87",
    image: "/placeholder.svg?height=400&width=300",
    college: "Cincinnati",
    stateOfBirth: "Ohio",
    height: "6'5\"",
    weight: "250 lbs",
    age: 35,
    instagramHandle: "killatrav",
    twitterHandle: "tikibarber",
    latestPost: {
      image: "/placeholder.svg?height=400&width=400",
      caption: "Game day vibes! Let's get it 💪",
      date: "2025-01-10",
    },
  },

  // Eagles Players
  {
    id: "hurts",
    name: "Jalen Hurts",
    teamId: "eagles",
    position: "QB",
    number: "1",
    image: "/placeholder.svg?height=400&width=300",
    college: "Alabama/Oklahoma",
    stateOfBirth: "Texas",
    height: "6'1\"",
    weight: "223 lbs",
    age: 26,
    instagramHandle: "jalenhurts",
    twitterHandle: "JalenHurts",
    latestPost: {
      image: "/placeholder.svg?height=400&width=400",
      caption: "Stay focused, stay humble 🦅",
      date: "2025-01-12",
    },
  },
  {
    id: "brown",
    name: "A.J. Brown",
    teamId: "eagles",
    position: "WR",
    number: "11",
    image: "/placeholder.svg?height=400&width=300",
    college: "Ole Miss",
    stateOfBirth: "Mississippi",
    height: "6'1\"",
    weight: "226 lbs",
    age: 27,
    instagramHandle: "1702aj",
    twitterHandle: "1702aj_",
    latestPost: { image: "/placeholder.svg?height=400&width=400", caption: "Work never stops 💯", date: "2025-01-08" },
  },

  // Lakers Players
  {
    id: "lebron",
    name: "LeBron James",
    teamId: "lakers",
    position: "SF",
    number: "23",
    image: "/placeholder.svg?height=400&width=300",
    college: "N/A (HS)",
    stateOfBirth: "Ohio",
    height: "6'9\"",
    weight: "250 lbs",
    age: 40,
    instagramHandle: "kingjames",
    twitterHandle: "KingJames",
    latestPost: {
      image: "/placeholder.svg?height=400&width=400",
      caption: "Year 22. Still hungry. 👑",
      date: "2025-01-14",
    },
  },
  {
    id: "davis",
    name: "Anthony Davis",
    teamId: "lakers",
    position: "PF",
    number: "3",
    image: "/placeholder.svg?height=400&width=300",
    college: "Kentucky",
    stateOfBirth: "Illinois",
    height: "6'10\"",
    weight: "253 lbs",
    age: 31,
    instagramHandle: "antdavis23",
    twitterHandle: "AntDavis23",
    latestPost: {
      image: "/placeholder.svg?height=400&width=400",
      caption: "Defense wins championships 🛡️",
      date: "2025-01-11",
    },
  },

  // Celtics Players
  {
    id: "tatum",
    name: "Jayson Tatum",
    teamId: "celtics",
    position: "SF",
    number: "0",
    image: "/placeholder.svg?height=400&width=300",
    college: "Duke",
    stateOfBirth: "Missouri",
    height: "6'8\"",
    weight: "210 lbs",
    age: 26,
    instagramHandle: "jaytatum0",
    twitterHandle: "jaaborr",
    latestPost: { image: "/placeholder.svg?height=400&width=400", caption: "Boston strong! ☘️", date: "2025-01-13" },
  },
  {
    id: "jbrown",
    name: "Jaylen Brown",
    teamId: "celtics",
    position: "SG",
    number: "7",
    image: "/placeholder.svg?height=400&width=300",
    college: "California",
    stateOfBirth: "Georgia",
    height: "6'6\"",
    weight: "223 lbs",
    age: 28,
    instagramHandle: "faborr",
    twitterHandle: "FCHWPO",
    latestPost: {
      image: "/placeholder.svg?height=400&width=400",
      caption: "Blessed and focused 🙏",
      date: "2025-01-09",
    },
  },

  // Yankees Players
  {
    id: "judge",
    name: "Aaron Judge",
    teamId: "yankees",
    position: "RF",
    number: "99",
    image: "/placeholder.svg?height=400&width=300",
    college: "Fresno State",
    stateOfBirth: "California",
    height: "6'7\"",
    weight: "282 lbs",
    age: 32,
    instagramHandle: "thejudge44",
    twitterHandle: "TheJudge44",
    latestPost: {
      image: "/placeholder.svg?height=400&width=400",
      caption: "Ready for the season! ⚾",
      date: "2025-01-06",
    },
  },

  // Dodgers Players
  {
    id: "ohtani",
    name: "Shohei Ohtani",
    teamId: "dodgers",
    position: "DH/P",
    number: "17",
    image: "/placeholder.svg?height=400&width=300",
    college: "N/A (Japan)",
    stateOfBirth: "Japan",
    height: "6'4\"",
    weight: "210 lbs",
    age: 30,
    instagramHandle: "shoheiohtani",
    twitterHandle: "shoaborrtani",
    latestPost: { image: "/placeholder.svg?height=400&width=400", caption: "Dream big 🌟", date: "2025-01-07" },
  },

  // Bruins Players
  {
    id: "pastrnak",
    name: "David Pastrnak",
    teamId: "bruins",
    position: "RW",
    number: "88",
    image: "/placeholder.svg?height=400&width=300",
    college: "N/A (Czech)",
    stateOfBirth: "Czech Republic",
    height: "6'0\"",
    weight: "194 lbs",
    age: 28,
    instagramHandle: "davidpastrnak",
    twitterHandle: "DavidPastrnak",
    latestPost: { image: "/placeholder.svg?height=400&width=400", caption: "Pasta time! 🍝", date: "2025-01-05" },
  },

  // Inter Miami Players
  {
    id: "messi",
    name: "Lionel Messi",
    teamId: "intermiami",
    position: "RW",
    number: "10",
    image: "/placeholder.svg?height=400&width=300",
    college: "N/A (Argentina)",
    stateOfBirth: "Argentina",
    height: "5'7\"",
    weight: "159 lbs",
    age: 37,
    instagramHandle: "leomessi",
    twitterHandle: "leomessi",
    latestPost: {
      image: "/placeholder.svg?height=400&width=400",
      caption: "Enjoying every moment ⚽",
      date: "2025-01-04",
    },
  },

  // Aces Players
  {
    id: "aja",
    name: "A'ja Wilson",
    teamId: "aces",
    position: "PF",
    number: "22",
    image: "/placeholder.svg?height=400&width=300",
    college: "South Carolina",
    stateOfBirth: "South Carolina",
    height: "6'5\"",
    weight: "195 lbs",
    age: 28,
    instagramHandle: "aja22wilson",
    twitterHandle: "AjaWilson22",
    latestPost: {
      image: "/placeholder.svg?height=400&width=400",
      caption: "Chasing greatness! 🏀",
      date: "2025-01-03",
    },
  },

  // Fever Players
  {
    id: "clark",
    name: "Caitlin Clark",
    teamId: "fever",
    position: "PG",
    number: "22",
    image: "/placeholder.svg?height=400&width=300",
    college: "Iowa",
    stateOfBirth: "Iowa",
    height: "6'0\"",
    weight: "152 lbs",
    age: 23,
    instagramHandle: "caitlinclark22",
    twitterHandle: "CaitlinClark22",
    latestPost: { image: "/placeholder.svg?height=400&width=400", caption: "Love this game! 🔥", date: "2025-01-02" },
  },
]

export function getSportById(id: string): Sport | undefined {
  return sports.find((sport) => sport.id === id)
}

export function getTeamsBySport(sportId: string): Team[] {
  return teams.filter((team) => team.sportId === sportId)
}

export function getTeamById(id: string): Team | undefined {
  return teams.find((team) => team.id === id)
}

export function getPlayersByTeam(teamId: string): Player[] {
  return players.filter((player) => player.teamId === teamId)
}

export function getPlayerById(id: string): Player | undefined {
  return players.find((player) => player.id === id)
}

export function searchPlayers(query: string): Player[] {
  const lowercaseQuery = query.toLowerCase()
  return players.filter(
    (player) =>
      player.name.toLowerCase().includes(lowercaseQuery) ||
      player.position.toLowerCase().includes(lowercaseQuery) ||
      player.college?.toLowerCase().includes(lowercaseQuery) ||
      player.stateOfBirth?.toLowerCase().includes(lowercaseQuery),
  )
}

export function filterPlayers(filters: { college?: string; state?: string; sport?: string }): Player[] {
  return players.filter((player) => {
    const team = getTeamById(player.teamId)
    const matchesCollege = !filters.college || player.college?.toLowerCase().includes(filters.college.toLowerCase())
    const matchesState = !filters.state || player.stateOfBirth?.toLowerCase().includes(filters.state.toLowerCase())
    const matchesSport = !filters.sport || team?.sportId === filters.sport
    return matchesCollege && matchesState && matchesSport
  })
}

export const colleges = [...new Set(players.map((p) => p.college).filter(Boolean))] as string[]
export const states = [...new Set(players.map((p) => p.stateOfBirth).filter(Boolean))] as string[]
