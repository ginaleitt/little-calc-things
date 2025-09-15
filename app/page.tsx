
import Link from "next/link";
import { tools } from './data/tools'

export const metadata = {
  title: 'Little Calc Things - Free Online Calculators',
  description: 'Simple, fast calculators for everyday problems. Coffee break-even, birthday countdown, recurring events and more.',
  keywords: 'calculator, coffee calculator, birthday countdown, event finder, free tools',
}
// app/page.js
export default function Home() {




  return (
    <main className="min-h-screen bg-app-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Little Calc Things
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast calculators and tools to solve everyday problems. 
            No signup required, completely free to use.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tools.map((tool, index) => (
            <Link key={index} href={tool.href} className="tool-card group">
              {/* Card Image/Header */}
              <div className={`h-48 bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
                <span className="text-6xl">{tool.image}</span>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tool.description}
                </p>
                <div className="text-blue-600 font-medium">
                  Try it now →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Content Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Use Little Calc Things?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get instant calculations without the bloat</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">Purpose Built</h3>
              <p className="text-gray-600">Each tool solves one problem really well</p>
            </div>
            <div>
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-gray-600">Works perfectly on any device</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}