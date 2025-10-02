import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saving Goal Calculator - How Much to Save Per Month | Little Calc Things',
  description: 'Calculate how much you need to save each week, month, or year to reach your financial goals. Free savings calculator with compound interest calculator included.',
  keywords: [
    'saving goal calculator',
    'savings calculator',
    'how much to save per month',
    'savings goal planner',
    'compound interest calculator',
    'financial goal calculator',
    'money savings calculator',
    'monthly savings calculator',
  ],
  openGraph: {
    title: 'Saving Goal Calculator - Plan Your Financial Goals',
    description: 'Calculate how much to save by each interval to reach your goals with compound interest',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/tools/saving-goal-calculator',
    siteName: 'Little Calc Things',
  },
  twitter: {
    card: 'summary',
    title: 'Saving Goal Calculator',
    description: 'Calculate your savings goals with compound interest',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://little-calc-things.vercel.app/tools/saving-goal-calculator',
  },
}

export default function SavingGoalCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}