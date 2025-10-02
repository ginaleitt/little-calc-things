import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Art Idea Generator - Random Art Prompts & Inspiration | Little Calc Things',
  description: 'Generate creative art ideas with random images, color schemes, and prompts. Perfect for artists, illustrators, and designers looking for inspiration and drawing challenges.',
  keywords: [
    'art idea generator',
    'art prompt generator',
    'drawing ideas',
    'art inspiration',
    'creative prompts',
    'color scheme generator',
    'art challenge generator',
    'illustration ideas',
    'random art prompts',
  ],
  openGraph: {
    title: 'Art Idea Generator - Creative Art Prompts & Inspiration',
    description: 'Generate art ideas with random images, color schemes, and creative prompts',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/tools/art-idea-generator',
    siteName: 'Little Calc Things',
  },
  twitter: {
    card: 'summary',
    title: 'Art Idea Generator',
    description: 'Generate creative art prompts with images and color schemes',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://little-calc-things.vercel.app/tools/art-idea-generator',
  },
}

export default function ArtIdeaGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children
}