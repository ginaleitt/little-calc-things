import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Budget Allocation Calculator - Decide What to Buy With Restricted Budget | Little Calc Things',
  description: 'Figure out what you can afford and distribute your budget.',
  keywords: [
    'budget allocation calculator',
    'budget planner',
    'spending calculator',
    'financial planning',
    'budget distribution',
    'expense allocation',
    'budget management',
  ],
  openGraph: {
    title: 'Budget Allocation Calculator - Decide What to Buy With Restricted Budget',
    description: 'Figure out what you can afford and distribute your budget.',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/tools/budget-allocation-calculator',
    siteName: 'Little Calc Things',
  },
  twitter: {
    card: 'summary',
    title: 'Budget Allocation Calculator - Decide What to Buy With Restricted Budget',
    description: 'Figure out what you can afford and distribute your budget.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://little-calc-things.vercel.app/tools/budget-allocation-calculator',
  },
}

export default function BudgetAllocationCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}