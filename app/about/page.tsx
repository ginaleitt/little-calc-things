import { tools } from '../data/tools'
// app/about/page.js
export default function About() {
  return (
    <main className="min-h-screen bg-app-primary">
      <div className="mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          About Little Calc Things
        </h1>
        
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Little Calc Things! This website provides useful calculators 
            and tools to help solve everyday problems.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Tools</h2>
          {tools.map((tool, index) => (
          <ul  key={index} className="list-disc list-inside text-gray-700 space-y-2">
            <li> {tool.title} - {tool.description}</li>
          </ul>
          ))}
          <h2 className="text-2xl font-semibold mb-4 mt-8">Built With</h2>
          <p className="text-gray-700">
            This site is built with Next.js 14, Tailwind CSS, and deployed on Vercel.
          </p>
        </div>
      </div>
    </main>
  )
}