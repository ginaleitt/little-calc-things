import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game Idea Generator - Board Game & Video Game Ideas | Little Calc Things',
  description: 'Generate creative game ideas with random mechanisms, themes, settings, and limitations. Perfect for game jams, brainstorming, and game design inspiration.',
  keywords: [
    'game idea generator',
    'board game idea generator',
    'video game idea generator',
    'game jam ideas',
    'game design tool',
    'random game generator',
    'game mechanics generator',
  ],
  openGraph: {
    title: 'Game Idea Generator - Creative Game Design Tool',
    description: 'Generate unique game ideas with random mechanisms, themes, and settings',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/game-idea-generator',
    siteName: 'Little Calc Things',
  },
  twitter: {
    card: 'summary',
    title: 'Game Idea Generator',
    description: 'Generate creative game ideas for your next project',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://little-calc-things.vercel.app/game-idea-generator',
  },
}

export default function GameIdeaGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children
}