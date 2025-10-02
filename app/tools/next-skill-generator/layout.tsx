import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Skill Generator - Discover What Skills to Learn | Little Calc Things',
  description: 'Discover what skills you should learn next with personalized recommendations and starter project ideas. Perfect for career development, hobby exploration, and skill planning.',
  keywords: [
    'skill generator',
    'what skill should I learn',
    'skill ideas',
    'career development',
    'learning path generator',
    'skill recommendations',
    'project ideas',
    'professional development',
  ],
  openGraph: {
    title: 'Next Skill Generator - Discover What Skills to Learn',
    description: 'Get personalized skill recommendations and starter project ideas for your next learning journey',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/tools/next-skill-generator',
    siteName: 'Little Calc Things',
  },
  twitter: {
    card: 'summary',
    title: 'Next Skill Generator',
    description: 'Discover what skills you should learn next',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://little-calc-things.vercel.app/tools/next-skill-generator',
  },
}

export default function NextSkillGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children
}