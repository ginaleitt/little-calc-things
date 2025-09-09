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
      }
    ]