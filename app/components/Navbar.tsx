// app/components/Navbar.js
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const tools = [
    { name: 'Coffee Break-Even Calculator', href: '/tools/coffee-calculator' },
    { name: 'Birthday Countdown', href: '/tools/birthday-countdown' }
  ]

  // Update the navbar JSX
return (
  <nav className="bg-gray-800 shadow-xl">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <Link href="/" className="font-bold text-xl text-light">
         Little Calc Things
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 font-semibold text-light">About</Link>
          
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 font-semibold text-light"
            >
              Tools
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
                    <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border-0 ring-1 ring-gray-200 z-20">
                <div className="py-2">
                  {tools.map((tool, index) => (
                    <Link
                      key={index}
                      href={tool.href}
                      className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                       onClick={(e) => {
                          e.stopPropagation()  // ← Add this line
                          setIsDropdownOpen(false)
                        }}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-light"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="py-2 space-y-1">
            <Link href="/" className="block px-4 py-2 text-light hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-light hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <div className="px-4 py-2 text-light font-medium">Tools:</div>
            {tools.map((tool, index) => (
              <Link
                key={index}
                href={tool.href}
                className="block px-8 py-2 text-sm text-light hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {tool.name}
              </Link>
            ))}
          </div>
        </div>
      )}


    </div>
    
    {/* Dropdown overlay */}
    {isDropdownOpen && (
      <div 
        className="fixed inset-0 z-10" 
        onClick={() => setIsDropdownOpen(false)}
      />
    )}
  </nav>
)
}