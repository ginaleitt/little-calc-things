import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subscription Cost Calculator - Is Your Membership Worth It? | Little Calc Things',
  description: 'Calculate the true cost per use of your subscriptions and memberships. Find out if your gym membership, streaming services, or software subscriptions are worth the price.',
  keywords: [
    'subscription calculator',
    'cost per use calculator',
    'gym membership calculator',
    'subscription value calculator',
    'membership cost calculator',
    'subscription worth it',
    'cost per visit calculator',
    'subscription analysis',
  ],
  openGraph: {
    title: 'Subscription Cost Calculator - Calculate Cost Per Use',
    description: 'Discover if your subscription usage justifies the cost - gym memberships, streaming, and more',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/tools/subscription-calculator',
    siteName: 'Little Calc Things',
  },
  twitter: {
    card: 'summary',
    title: 'Subscription Cost Calculator',
    description: 'Calculate the real cost per use of your subscriptions',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://little-calc-things.vercel.app/tools/subscription-calculator',
  },
}

export default function SubscriptionCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}