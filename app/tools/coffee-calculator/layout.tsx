import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coffee Machine Break-Even Calculator | Little Calc Things',
  description: 'Calculate how long it takes for your coffee machine to pay for itself vs buying coffee from cafes. Free coffee cost calculator with detailed breakdown of savings.',
  keywords: [
    'coffee calculator',
    'coffee machine break even',
    'coffee cost calculator',
    'home coffee vs cafe',
    'coffee savings calculator',
    'espresso machine calculator',
  ],
  openGraph: {
    title: 'Coffee Machine Break-Even Calculator',
    description: 'Find out when your coffee machine pays for itself compared to buying from cafes',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/tools/coffee-calculator',
    siteName: 'Little Calc Things',
  },
  twitter: {
    card: 'summary',
    title: 'Coffee Machine Break-Even Calculator',
    description: 'Calculate when your coffee machine pays for itself',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://little-calc-things.vercel.app/tools/coffee-calculator',
  },
}

export default function CoffeeCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}