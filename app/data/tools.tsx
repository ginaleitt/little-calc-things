export interface Tool {
  title: string;
  description: string;
  href: string;
  image: string;
  color: string;
}

export const tools = [
      {
        title: "Coffee Break-Even Calculator",
        description: "Calculate when your coffee machine pays for itself vs buying coffee",
        href: "/tools/coffee-calculator",
        image: "☕", // We'll use emojis for now, replace with images later
        color: "from-amber-400 to-orange-500"
      },
      {
        title: "Birthday Countdown", 
        description: "Count down to your next birthday in various time units",
        href: "/tools/birthday-countdown",
        image: "🎂",
        color: "from-pink-400 to-purple-500"
      },
      {
        title: "Subscription Calculator", 
        description: "Calculate the total worth of a subscription by comparing cost vs usage",
        href: "/tools/subscription-calculator",
        image: "💵",
        color: "from-emerald-600 to-sky-200"
      },
      {
        title: "Time Splitter", 
        description: "Split two time durations by equal intervals",
        href: "/tools/time-splitter",
        image: "🕔",
        color: "from-teal-400 to-yellow-200"
      },
      {
        title: "Saving Goal Calculator", 
        description: "Calculate how much to save regularly to reach your financial goal with compound interest",
        href: "/tools/saving-goal-calculator",
        image: "💰",
        color: "from-green-400 to-blue-500"
      },
      {
        title: "Game Idea Generator", 
        description: "Get a video game or a board game idea from mechanisms, themes, limitations and more",
        href: "/tools/game-idea-generator",
        image: "🎲",
        color: "from-purple-300 to-indigo-600"
      },
      {
        title: "Next Skil Generator", 
        description: "Discover what skills should you learn next and a starting project",
        href: "/tools/next-skill-generator",
        image: "🧠",
        color: "from-fuchsia-600 to-rose-300"
      },
      {
        title: "Next Book Generator",
        description: "Find your next great read by filtering books by genre and page count",
        href: "/tools/next-book-generator",
        image: "📚",
        color: "from-blue-400 to-indigo-500"
      },
      {
        title: "Art Idea Generator",
        description: "Discover your next art idea based on images, color scheme, and a sentence",
        href: "/tools/art-idea-generator",
        image: "🎨",
        color: "from-rose-400 to-pink-500"
      },
      {
        title: "Budget Allocation Calculator",
        description: "Figure out what you can afford and distribute your budget.",
        href: "/tools/art-idea-generator",
        image: "💳",
        color: "from-violet-600 to-indigo-600"
      },
    ]