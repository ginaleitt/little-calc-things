import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Recommendation Tool - Find Your Next Great Read | Little Calc Things',
  description: 'Discover your next book with our free book recommender. Filter by genre (fantasy, mystery, romance, sci-fi & more), page count, and get personalized book recommendations with affiliate links to Bookshop.org.',
  keywords: [
    'book recommendations',
    'book finder',
    'what book should I read',
    'book recommendation tool',
    'find books by genre',
    'fantasy books',
    'mystery books',
    'romance books',
    'book discovery',
    'reading recommendations',
    'book suggestion tool',
    'Bookshop.org',
  ],
  authors: [{ name: 'Little Calc Things' }],
  openGraph: {
    title: 'Book Recommendation Tool - Find Your Next Great Read',
    description: 'Discover your next book! Filter by genre and page count to find personalized book recommendations.',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/tools/next-book-generator', // Replace with your actual URL
    siteName: 'Little Calc Things',
    images: [
      {
        url: 'https://yourdomain.com/og-image-books.jpg', // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Book Recommendation Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Recommendation Tool - Find Your Next Read',
    description: 'Discover your next book! Filter by genre and page count.',
    images: ['https://yourdomain.com/og-image-books.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://yourdomain.com/book-recommender',
  },
}

export default function NextBookGeneratorLayout({ children }: { children: React.ReactNode }) {
  return children
}