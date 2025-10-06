import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patent Generator - Find your next idea? | Little Calc Things',
  description: 'Randomly generate three patents, so that you can think about combining those three ideas.',
  keywords: [
    'pagent generator',
    'patent idea generator',
  ],
  openGraph: {
    title: 'Patent Generator - Find your next idea?',
    description: 'Randomly generate three patents, so that you can think about combining those three ideas.',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/tools/patent-generator',
    siteName: 'Little Calc Things',
  },
  twitter: {
    card: 'summary',
    title: 'Patent Generator',
    description: 'Randomly generate three patents, so that you can think about combining those three ideas.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://little-calc-things.vercel.app/tools/patent-generator',
  },
}

export default function PatentGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children
}