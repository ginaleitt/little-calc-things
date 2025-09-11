// app/components/Navbar.js
'use client'

import Link from 'next/link'
import { tools } from '../data/tools'

// app/components/Footer.tsx
export default function Footer() {
const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand/About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Quick Calc Tools</h3>
            <p className="text-gray-300 mb-4">
              Simple, fast calculators and tools to solve everyday problems. 
              No signup required, completely free to use.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                    <li key={index}>
                    <Link href={tool.href} className="text-gray-300 hover:text-white transition-colors"> 
                    {tool.title}
                    </Link>
                    </li>
                ))}
              
            </ul>
          </div>


          {/* Site Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Site</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Quick Calc Tools. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}