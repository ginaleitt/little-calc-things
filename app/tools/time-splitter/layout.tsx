import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time Duration Splitter - Divide Time Into Equal Intervals | Little Calc Things',
  description: 'Split time durations into equal intervals. Divide hours, days, or weeks into evenly-spaced chunks. Perfect for scheduling, time blocking, and interval planning.',
  keywords: [
    'time splitter',
    'time interval calculator',
    'divide time calculator',
    'time chunks calculator',
    'interval calculator',
    'time blocking calculator',
    'schedule divider',
    'time division calculator',
  ],
  openGraph: {
    title: 'Time Duration Splitter - Divide Time Into Equal Intervals',
    description: 'Split two time durations by equal intervals - perfect for scheduling and time blocking',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/tools/time-splitter',
    siteName: 'Little Calc Things',
  },
  twitter: {
    card: 'summary',
    title: 'Time Duration Splitter',
    description: 'Divide time periods into equal intervals',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://little-calc-things.vercel.app/tools/time-splitter',
  },
}

export default function TimeSplitterLayout({ children }: { children: React.ReactNode }) {
  return children
}