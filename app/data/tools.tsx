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
        title: "Savings Goal Calculator", 
        description: "Calculate how much to save regularly to reach your financial goal with compound interest",
        href: "/tools/savings-goal-calculator",
        image: "💰",
        color: "from-green-400 to-blue-500"
      }
    ]