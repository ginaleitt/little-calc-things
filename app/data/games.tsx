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
    // Action Systems
    { name: "Action Points", tags: ["both"] },
    { name: "Action Drafting", tags: ["board", "both"] },
    { name: "Action Queue", tags: ["both"] },
    { name: "Multi-Use Cards", tags: ["board", "both"] },
    { name: "Command Cards", tags: ["both"] },
    { name: "Follow", tags: ["board"] },
    
    // Movement & Positioning
    { name: "Grid Movement", tags: ["both"] },
    { name: "Point to Point Movement", tags: ["both"] },
    { name: "Area Movement", tags: ["both"] },
    { name: "Programmed Movement", tags: ["both"] },
    { name: "Movement Points", tags: ["both"] },
    { name: "Line of Sight", tags: ["both"] },
    { name: "Zone of Control", tags: ["both"] },
    
    // Collection & Building
    { name: "Network Building", tags: ["both"] },
    { name: "Pattern Building", tags: ["both"] },
    { name: "Tech Trees", tags: ["both"] },
    { name: "Modular Board", tags: ["board", "both"] },
    { name: "Map Addition", tags: ["both"] },
    
    // Economic Systems
    { name: "Income", tags: ["both"] },
    { name: "Market", tags: ["both"] },
    { name: "Stock Holding", tags: ["board", "both"] },
    { name: "Commodity Speculation", tags: ["board", "both"] },
    { name: "Loans", tags: ["board", "both"] },
    { name: "Victory Points as Resource", tags: ["both"] },
    
    // Bidding & Auction Variants
    { name: "Dutch Auction", tags: ["board"] },
    { name: "Sealed Bid Auction", tags: ["board"] },
    { name: "Turn Order Auction", tags: ["board"] },
    { name: "Bids as Wagers", tags: ["board"] },
    
    // Social & Interactive
    { name: "Hidden Roles", tags: ["both"] },
    { name: "Voting", tags: ["both"] },
    { name: "Alliances", tags: ["both"] },
    { name: "Contracts", tags: ["both"] },
    { name: "Bribery", tags: ["board"] },
    { name: "Communication Limits", tags: ["both"] },
    
    // Information & Deduction
    { name: "Deduction", tags: ["both"] },
    { name: "Hidden Information", tags: ["both"] },
    { name: "Targeted Clues", tags: ["both"] },
    { name: "Questions and Answers", tags: ["both"] },
    
    // Turn Order & Timing
    { name: "Variable Turn Order", tags: ["both"] },
    { name: "Simultaneous Action Selection", tags: ["both"] },
    { name: "Real-Time", tags: ["both"] },
    { name: "Speed Matching", tags: ["both"] },
    { name: "Action Timer", tags: ["video"] },
    
    // Advanced Strategy
    { name: "Rondel", tags: ["board"] },
    { name: "Chaining", tags: ["both"] },
    { name: "Connections", tags: ["both"] },
    { name: "Layering", tags: ["both"] },
    { name: "End Game Bonuses", tags: ["both"] },
    
    // Resource Systems
    { name: "Automatic Resource Growth", tags: ["both"] },
    { name: "Resource Queue", tags: ["both"] },
    { name: "Random Production", tags: ["both"] },
    { name: "Increase Value of Unchosen Resources", tags: ["board"] },
    
    // Card Systems
    { name: "Deck Construction", tags: ["board", "both"] },
    { name: "Trick-taking", tags: ["board"] },
    { name: "Closed Drafting", tags: ["board"] },
    { name: "Open Drafting", tags: ["board"] },
    { name: "Hand Limit", tags: ["both"] },
    
    // Spatial & Physical
    { name: "Line Drawing", tags: ["both"] },
    { name: "Measurement Movement", tags: ["board"] },
    { name: "Slide/Push", tags: ["both"] },
    { name: "Stacking", tags: ["both"] },
    { name: "Physical Removal", tags: ["both"] },
    
    // Video Game Specific
    { name: "Level Progression", tags: ["video"] },
    { name: "Skill Trees", tags: ["video"] },
    { name: "Crafting", tags: ["video", "both"] },
    { name: "Base Building", tags: ["video", "both"] },
    { name: "Exploration", tags: ["video", "both"] },
    { name: "Minigames", tags: ["video"] },
    { name: "Boss Battles", tags: ["video"] },
    { name: "Unlockables", tags: ["video"] },
    
    // Game State Modifiers
    { name: "Variable Player Powers", tags: ["both"] },
    { name: "Variable Setup", tags: ["both"] },
    { name: "Variable Phase Order", tags: ["both"] },
    { name: "Events", tags: ["both"] },
    { name: "Legacy Elements", tags: ["both"] },
    
    // Scoring & Victory
    { name: "Multiple Victory Paths", tags: ["both"] },
    { name: "Hidden Victory Points", tags: ["both"] },
    { name: "Majority Control", tags: ["both"] },
    { name: "Race", tags: ["both"] },
    { name: "King of the Hill", tags: ["both"] },
    
    // Interactive Conflict
    { name: "Take That", tags: ["both"] },
    { name: "Player Elimination", tags: ["both"] },
    { name: "Tug of War", tags: ["both"] },
    { name: "Catch the Leader", tags: ["both"] },
    { name: "Kill Steal", tags: ["video"] },
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
    { name: "Modular Difficulty", tags: ["both"] },

    // Advanced Design Rules
    { name: "Emergent Gameplay Only", tags: ["both"] },
    { name: "No Scripted Events", tags: ["both"] },
    { name: "Player-Driven Narrative", tags: ["both"] },
    { name: "Meaningful Failure States", tags: ["both"] },
    { name: "Cascading Consequences", tags: ["both"] },
    { name: "Irreversible Actions", tags: ["both"] },
    { name: "Information Asymmetry", tags: ["both"] },
    { name: "Tension Through Scarcity", tags: ["both"] },
    
    // Social Design Rules
    { name: "Forced Cooperation", tags: ["both"] },
    { name: "Betrayal is Possible", tags: ["both"] },
    { name: "No Communication", tags: ["both"] },
    { name: "Public Information Only", tags: ["both"] },
    { name: "Shared Responsibility", tags: ["both"] },
    
    // Progression Rules
    { name: "No Upgrades or Progression", tags: ["both"] },
    { name: "Skills Decay Over Time", tags: ["both"] },
    { name: "Horizontal Progression Only", tags: ["both"] },
    { name: "Unlock Through Discovery", tags: ["both"] },
    
    // Game Flow Rules
    { name: "Simultaneous Resolution", tags: ["both"] },
    { name: "Actions Have Cooldowns", tags: ["both"] },
    { name: "Limited Action Economy", tags: ["both"] },
    { name: "No Take-Backs", tags: ["both"] }
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
    { name: "Underground City", tags: ["both"] },

    // Mythological/Religious
    { name: "Norse Mythology", tags: ["both"] },
    { name: "Greek Pantheon", tags: ["both"] },
    { name: "Hindu Cosmos", tags: ["both"] },
    { name: "Underworld/Hell", tags: ["both"] },
    { name: "Celestial Realm", tags: ["both"] },
    
    // Professional/Workplace
    { name: "Restaurant Kitchen", tags: ["both"] },
    { name: "Emergency Room", tags: ["both"] },
    { name: "News Broadcast Station", tags: ["both"] },
    { name: "Space Mission Control", tags: ["both"] },
    { name: "Film Set", tags: ["both"] },
    { name: "Archaeological Dig", tags: ["both"] },
    
    // Transportation Hubs
    { name: "Cargo Ship", tags: ["both"] },
    { name: "Train Station", tags: ["both"] },
    { name: "Airport Terminal", tags: ["both"] },
    { name: "Submarine", tags: ["both"] },
    { name: "Space Shuttle", tags: ["both"] },
    
    // Social Environments
    { name: "Prison Complex", tags: ["both"] },
    { name: "Boarding School", tags: ["both"] },
    { name: "Retirement Home", tags: ["both"] },
    { name: "Music Festival", tags: ["both"] },
    { name: "Sports Stadium", tags: ["both"] },
    
    // Extreme Environments
    { name: "Active Volcano", tags: ["both"] },
    { name: "Tornado Alley", tags: ["both"] },
    { name: "Frozen Wasteland", tags: ["both"] },
    { name: "Acid Rain City", tags: ["both"] },
    { name: "Zero Gravity Station", tags: ["both"] },
    
    // Cultural/Historical
    { name: "Renaissance Italy", tags: ["both"] },
    { name: "Industrial Revolution", tags: ["both"] },
    { name: "Cold War Berlin", tags: ["both"] },
    { name: "Ancient Library", tags: ["both"] }
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
    { name: "Knowledge vs Ignorance", tags: ["both"] },

    // Modern Social Issues
    { name: "Climate Change", tags: ["both"] },
    { name: "Social Media Influence", tags: ["both"] },
    { name: "Income Inequality", tags: ["both"] },
    { name: "Digital Privacy", tags: ["both"] },
    { name: "Cultural Preservation", tags: ["both"] },
    { name: "Immigration", tags: ["both"] },
    { name: "Generational Conflict", tags: ["both"] },
    
    // Professional/Career
    { name: "Work-Life Balance", tags: ["both"] },
    { name: "Corporate Ethics", tags: ["both"] },
    { name: "Creative Expression", tags: ["both"] },
    { name: "Professional Rivalry", tags: ["both"] },
    { name: "Mentorship", tags: ["both"] },
    
    // Human Experiences
    { name: "Parenthood", tags: ["both"] },
    { name: "Aging", tags: ["both"] },
    { name: "Mental Health", tags: ["both"] },
    { name: "Cultural Identity", tags: ["both"] },
    { name: "Physical Disability", tags: ["both"] },
    { name: "Neurodiversity", tags: ["both"] },
    
    // Philosophical/Ethical
    { name: "Moral Relativism", tags: ["both"] },
    { name: "Justice vs Mercy", tags: ["both"] },
    { name: "Individual vs Collective", tags: ["both"] },
    { name: "Nature vs Nurture", tags: ["both"] },
    { name: "Truth vs Comfort", tags: ["both"] },
    { name: "Tradition vs Innovation", tags: ["both"] },
    
    // Economic/Resource
    { name: "Scarcity vs Abundance", tags: ["both"] },
    { name: "Wealth Distribution", tags: ["both"] },
    { name: "Resource Conservation", tags: ["both"] },
    { name: "Economic Sustainability", tags: ["both"] }
  ],

  limitations: [
    // Board Game - Budget Constraints
    { name: "Production cost under $15", tags: ["board"] },
    { name: "Production cost under $25", tags: ["board"] },
    { name: "Print-and-play only", tags: ["board"] },
    { name: "Single sheet of components", tags: ["board"] },
    { name: "No custom dice allowed", tags: ["board"] },
    { name: "Standard deck of cards only", tags: ["board"] },
    { name: "Rules can be summarized in 10 bullet points", tags: ["board"] },
    
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
    { name: "Accessible to hearing impaired", tags: ["both"] },

    // Board Game - Advanced Constraints
    { name: "Components must fit in pocket", tags: ["board"] },
    { name: "Playable outdoors", tags: ["board"] },
    { name: "Playable in moving vehicle", tags: ["board"] },
    { name: "Maximum 3 different component types", tags: ["board"] },
    
    // Video Game - Platform Constraints
    { name: "Playable during video calls", tags: ["video"] },
    { name: "Works with screen reader", tags: ["video"] },
    { name: "Playable while multitasking", tags: ["video"] },
    
    // Universal Social Constraints
    { name: "Suitable for workplace play", tags: ["both"] },
    { name: "Playable by strangers", tags: ["both"] },
    { name: "No winners or losers", tags: ["both"] },
    
    // Creative Constraints
    { name: "Uses only geometric shapes", tags: ["both"] },
    { name: "Educational value required", tags: ["both"] }
  ]
};