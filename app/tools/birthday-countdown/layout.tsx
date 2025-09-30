import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Birthday Countdown Timer - Days Until Birthday | Little Calc Things',
  description: 'Count down to your next birthday! See days, hours, minutes, sleeps, weekends, and work days remaining. Free live birthday countdown calculator.',
  keywords: [
    'birthday countdown',
    'days until birthday',
    'birthday calculator',
    'how many days until my birthday',
    'birthday timer',
    'countdown to birthday',
  ],
  openGraph: {
    title: 'Birthday Countdown Timer - Days Until Birthday',
    description: 'Count down to your birthday in days, sleeps, weekends, and more!',
    type: 'website',
    url: 'https://little-calc-things.vercel.app/birthday-countdown',
    siteName: 'Little Calc Things',
  },
  twitter: {
    card: 'summary',
    title: 'Birthday Countdown Timer',
    description: 'Count down to your next birthday',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://little-calc-things.vercel.app/birthday-countdown',
  },
}

export default function BirthdayCountdownLayout({ children }: { children: React.ReactNode }) {
  return children
}