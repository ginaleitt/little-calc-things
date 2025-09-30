// app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GoogleAnalytics from './GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Little Calc Things',
  description: 'Useful calculators and tools for everyday problems',
  verification: {
    google: 'Fg9lVsPHY5mbfKNx9DoWpxX-naamWHJjHnhODyIrqZE"', // Replace with YOUR actual code
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics measurementId={process.env.GA_MEASUREMENT_ID!} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}