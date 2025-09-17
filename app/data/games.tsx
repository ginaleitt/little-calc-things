export interface GameEntry {
  name: string;
  tags: string[];
}

export interface Games {
  mechanisms: GameEntry[];
  rules: GameEntry[];
  settings: GameEntry[];
  themes: GameEntry[];
  limitations: GameEntry[];
}

export const games = {
  mechanisms: [
    // Board Game Focused
    { name: "Worker Placement", tags: ["board", "both"] },
    { name: "Deck Building", tags: ["board", "both"] },
    { name: "Area Control", tags: ["board", "both"] },
    { name: "Resource Management", tags: ["board", "both"] },
    { name: "Tile Placement", tags: ["board", "both"] },
    { name: "Set Collection", tags: ["board", "both"] },
    { name: "Drafting", tags: ["board"] },
    { name: "Auction/Bidding", tags: ["board"] },
    { name: "Trading/Negotiation", tags: ["board", "both"] },
    { name: "Engine Building", tags: ["board", "both"] },
    { name: "Roll and Move", tags: ["board"] },
    { name: "Pattern Recognition", tags: ["board", "both"] },
    { name: "Hand Management", tags: ["board"] },
    { name: "Variable Player Powers", tags: ["board", "both"] },
    { name: "Route Building", tags: ["board", "both"] },
    
    // Video Game Focused
    { name: "Real-time Strategy", tags: ["video", "both"] },
    { name: "Platforming", tags: ["video"] },
    { name: "First-Person Combat", tags: ["video"] },
    { name: "Stealth", tags: ["video", "both"] },
    { name: "Rhythm/Timing", tags: ["video", "both"] },
    { name: "Physics Manipulation", tags: ["video"] },
    { name: "Character Progression", tags: ["video", "both"] },
    { name: "Inventory Management", tags: ["video", "both"] },
    { name: "Dialogue Trees", tags: ["video"] },
    { name: "Quick-Time Events", tags: ["video"] },
    { name: "Tower Defense", tags: ["video", "both"] },
    { name: "Match-3", tags: ["video", "both"] },
    { name: "Incremental/Idle", tags: ["video"] },
    
    // Universal Mechanisms
    { name: "Puzzle-Solving", tags: ["both"] },
    { name: "Cooperative Play", tags: ["both"] },
    { name: "Bluffing/Deduction", tags: ["both"] },
    { name: "Memory", tags: ["both"] },
    { name: "Territory Building", tags: ["both"] },
    { name: "Turn-based Combat", tags: ["both"] },
    { name: "Card Play", tags: ["both"] },
    { name: "Dice Rolling", tags: ["both"] },
    { name: "Risk/Reward", tags: ["both"] },
    { name: "Timing", tags: ["both"] }
  ],

  rules: [
    // Board Game Oriented
    { name: "Perfect Information", tags: ["board", "both"] },
    { name: "Limited Information", tags: ["board", "both"] },
    { name: "Simultaneous Actions", tags: ["board", "both"] },
    { name: "No Player Elimination", tags: ["board", "both"] },
    { name: "Catch-up Mechanisms", tags: ["board", "both"] },
    { name: "Multiple Victory Conditions", tags: ["board", "both"] },
    { name: "Fixed Turn Order", tags: ["board"] },
    { name: "Variable Turn Order", tags: ["board", "both"] },
    
    // Video Game Oriented
    { name: "Lives/Continues System", tags: ["video"] },
    { name: "Permanent Consequences", tags: ["video", "both"] },
    { name: "Real-time Pressure", tags: ["video", "both"] },
    { name: "Save Anywhere", tags: ["video"] },
    { name: "Checkpoint System", tags: ["video"] },
    { name: "Procedural Generation", tags: ["video", "both"] },
    { name: "Permadeath", tags: ["video", "both"] },
    
    // Universal Rules
    { name: "Resource Scarcity", tags: ["both"] },
    { name: "One Tool Many Uses", tags: ["both"] },
    { name: "Escalating Difficulty", tags: ["both"] },
    { name: "Player Choice Consequences", tags: ["both"] },
    { name: "Time Pressure", tags: ["both"] },
    { name: "Asymmetric Abilities", tags: ["both"] },
    { name: "Risk vs Safety", tags: ["both"] },
    { name: "Push Your Luck", tags: ["both"] },
    { name: "All or Nothing", tags: ["both"] },
    { name: "Collaboration Required", tags: ["both"] },
    { name: "Hidden Information", tags: ["both"] },
    { name: "Modular Difficulty", tags: ["both"] }
  ],

  settings: [
    // Fantasy/Medieval
    { name: "Medieval Fantasy", tags: ["both"] },
    { name: "Dark Medieval", tags: ["both"] },
    { name: "Fairy Tale Forest", tags: ["both"] },
    { name: "Dragon's Lair", tags: ["both"] },
    { name: "Wizard's Tower", tags: ["both"] },
    
    // Sci-Fi/Future
    { name: "Space Station", tags: ["both"] },
    { name: "Alien Planet", tags: ["both"] },
    { name: "Cyberpunk City", tags: ["both"] },
    { name: "Post Apocalyptic", tags: ["both"] },
    { name: "Robot Factory", tags: ["both"] },
    { name: "Mars Colony", tags: ["both"] },
    { name: "Time Travel Hub", tags: ["both"] },
    
    // Historical
    { name: "Ancient Rome", tags: ["both"] },
    { name: "Viking Village", tags: ["both"] },
    { name: "Wild West Town", tags: ["both"] },
    { name: "Pirate Ship", tags: ["both"] },
    { name: "Egyptian Tomb", tags: ["both"] },
    { name: "Samurai Japan", tags: ["both"] },
    { name: "Victorian London", tags: ["both"] },
    
    // Modern/Contemporary
    { name: "Modern City", tags: ["both"] },
    { name: "Suburban Neighborhood", tags: ["both"] },
    { name: "Corporate Office", tags: ["both"] },
    { name: "Shopping Mall", tags: ["both"] },
    { name: "University Campus", tags: ["both"] },
    { name: "Hospital", tags: ["both"] },
    
    // Natural/Wilderness
    { name: "Dense Jungle", tags: ["both"] },
    { name: "Arctic Tundra", tags: ["both"] },
    { name: "Desert Oasis", tags: ["both"] },
    { name: "Mountain Peak", tags: ["both"] },
    { name: "Ocean Depths", tags: ["both"] },
    { name: "Cave System", tags: ["both"] },
    
    // Abstract/Unique
    { name: "Dream World", tags: ["both"] },
    { name: "Inside a Computer", tags: ["both"] },
    { name: "Miniature World", tags: ["both"] },
    { name: "Floating Islands", tags: ["both"] },
    { name: "Underground City", tags: ["both"] }
  ],

  themes: [
    // Personal Growth
    { name: "Identity", tags: ["both"] },
    { name: "Coming of Age", tags: ["both"] },
    { name: "Self Discovery", tags: ["both"] },
    { name: "Overcoming Fear", tags: ["both"] },
    { name: "Redemption", tags: ["both"] },
    { name: "Loss of Innocence", tags: ["both"] },
    
    // Social/Political
    { name: "Power Corruption", tags: ["both"] },
    { name: "Class Struggle", tags: ["both"] },
    { name: "Revolution", tags: ["both"] },
    { name: "Political Intrigue", tags: ["both"] },
    { name: "Social Justice", tags: ["both"] },
    { name: "Propaganda", tags: ["both"] },
    
    // Relationships
    { name: "Community", tags: ["both"] },
    { name: "Betrayal", tags: ["both"] },
    { name: "Love and Romance", tags: ["both"] },
    { name: "Family Bonds", tags: ["both"] },
    { name: "Friendship", tags: ["both"] },
    { name: "Loyalty", tags: ["both"] },
    
    // Existential
    { name: "Survival", tags: ["both"] },
    { name: "Death and Mortality", tags: ["both"] },
    { name: "Purpose and Meaning", tags: ["both"] },
    { name: "Faith vs Doubt", tags: ["both"] },
    { name: "Free Will vs Destiny", tags: ["both"] },
    { name: "Reality vs Illusion", tags: ["both"] },
    
    // Human Nature
    { name: "Greed", tags: ["both"] },
    { name: "Addiction", tags: ["both"] },
    { name: "Jealousy", tags: ["both"] },
    { name: "Pride", tags: ["both"] },
    { name: "Compassion", tags: ["both"] },
    { name: "Sacrifice", tags: ["both"] },
    
    // Society/Technology
    { name: "Progress vs Tradition", tags: ["both"] },
    { name: "Technology Dependence", tags: ["both"] },
    { name: "Environmental Destruction", tags: ["both"] },
    { name: "Information Control", tags: ["both"] },
    { name: "Artificial Intelligence", tags: ["both"] },
    
    // Abstract Concepts
    { name: "Time and Memory", tags: ["both"] },
    { name: "Order vs Chaos", tags: ["both"] },
    { name: "Creation vs Destruction", tags: ["both"] },
    { name: "Light vs Darkness", tags: ["both"] },
    { name: "Knowledge vs Ignorance", tags: ["both"] }
  ],

  limitations: [
    // Board Game - Budget Constraints
    { name: "Production cost under $15", tags: ["board"] },
    { name: "Production cost under $25", tags: ["board"] },
    { name: "Print-and-play only", tags: ["board"] },
    { name: "Single sheet of components", tags: ["board"] },
    { name: "No custom dice allowed", tags: ["board"] },
    { name: "Standard deck of cards only", tags: ["board"] },
    
    // Board Game - Component Limits
    { name: "Fewer than 20 total pieces", tags: ["board"] },
    { name: "Fewer than 50 total pieces", tags: ["board"] },
    { name: "No miniatures or meeples", tags: ["board"] },
    { name: "Fits in a mint tin", tags: ["board"] },
    { name: "Single board maximum", tags: ["board"] },
    { name: "No tokens or counters", tags: ["board"] },
    { name: "Paper components only", tags: ["board"] },
    
    // Board Game - Design Constraints
    { name: "No text on components", tags: ["board"] },
    { name: "Playable by colorblind players", tags: ["board"] },
    { name: "One-handed play compatible", tags: ["board"] },
    { name: "Silent play (no talking)", tags: ["board"] },
    { name: "Plays in under 15 minutes", tags: ["board"] },
    { name: "Plays in under 30 minutes", tags: ["board"] },
    { name: "Setup in under 2 minutes", tags: ["board"] },
    { name: "Ages 6+ appropriate", tags: ["board"] },
    { name: "Single player only", tags: ["board"] },
    { name: "Exactly 2 players only", tags: ["board"] },
    
    // Video Game - Technical Constraints
    { name: "2 colors maximum", tags: ["video"] },
    { name: "Black and white only", tags: ["video"] },
    { name: "No sound effects", tags: ["video"] },
    { name: "8-bit graphics style", tags: ["video"] },
    { name: "Text-based interface only", tags: ["video"] },
    { name: "Single screen (no scrolling)", tags: ["video"] },
    { name: "16x16 pixel sprites maximum", tags: ["video"] },
    { name: "Under 1MB total file size", tags: ["video"] },
    { name: "Runs on 20-year-old hardware", tags: ["video"] },
    
    // Video Game - Control Constraints  
    { name: "One button control only", tags: ["video"] },
    { name: "Two buttons maximum", tags: ["video"] },
    { name: "Mouse-only control", tags: ["video"] },
    { name: "Keyboard-only control", tags: ["video"] },
    { name: "Touch/mobile only", tags: ["video"] },
    { name: "No diagonal movement", tags: ["video"] },
    { name: "Eye-tracking control", tags: ["video"] },
    { name: "Voice control only", tags: ["video"] },
    
    // Video Game - Content Constraints
    { name: "Playable in under 5 minutes", tags: ["video"] },
    { name: "Playable in under 15 minutes", tags: ["video"] },
    { name: "No violence allowed", tags: ["video"] },
    { name: "No text or dialogue", tags: ["video"] },
    { name: "Educational content only", tags: ["video"] },
    { name: "Single level/screen only", tags: ["video"] },
    { name: "Infinite/endless gameplay", tags: ["video"] },
    { name: "Local multiplayer only", tags: ["video"] },
    { name: "Asymmetric multiplayer required", tags: ["video"] },
    
    // Video Game - Development Constraints
    { name: "Created in 48 hours", tags: ["video"] },
    { name: "Created in 1 week", tags: ["video"] },
    { name: "Solo developer only", tags: ["video"] },
    { name: "No external libraries", tags: ["video"] },
    { name: "Browser-based only", tags: ["video"] },
    { name: "No internet required", tags: ["video"] },
    { name: "Procedurally generated only", tags: ["video"] },
    
    // Universal Constraints
    { name: "No random elements", tags: ["both"] },
    { name: "Perfect information only", tags: ["both"] },
    { name: "No player elimination", tags: ["both"] },
    { name: "Cooperative only", tags: ["both"] },
    { name: "Competitive only", tags: ["both"] },
    { name: "Real-time play required", tags: ["both"] },
    { name: "Turn-based only", tags: ["both"] },
    { name: "Wordless/universal symbols", tags: ["both"] },
    { name: "Accessible to vision impaired", tags: ["both"] },
    { name: "Accessible to hearing impaired", tags: ["both"] }
  ]
};