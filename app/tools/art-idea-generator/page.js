'use client'
import { useState } from 'react';
import Image from 'next/image'


export default function ArtIdeaGenerator() {
    
  const [theme, setTheme] = useState('abstract')
  const [colorTheory, setColorTheory] = useState('complementary')
  const [result, setResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

   const themes = [
    { value: 'nature', label: 'Nature' },
    { value: 'ocean', label: 'Ocean' },
    { value: 'forest', label: 'Forest' },
    { value: 'urban', label: 'Urban' },
    { value: 'architecture', label: 'Architecture' },
    { value: 'futuristic', label: 'Futuristic' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'cyberpunk', label: 'Cyberpunk' },
    { value: 'space', label: 'Space' },
    { value: 'abstract', label: 'Abstract' },
    { value: 'horror', label: 'Horror' },
    { value: 'animals', label: 'Animals' },
    { value: 'people', label: 'People' },
    { value: 'funny', label: 'Humor' },
    { value: 'cozy', label: 'Cozy' }
  ]
  const colorTheories = [
    { value: 'complementary', label: 'Complementary' },
    { value: 'analogous', label: 'Analogous' },
    { value: 'triadic', label: 'Triadic' },
    { value: 'tetradic', label: 'Tetradic' },
    { value: 'monochromatic', label: 'Monochromatic' }
  ]


    const handleGenerate = async (e) => {
      e.preventDefault()
      setIsLoading(true)

      try {
        const response = await fetch('/api/art-idea-generator', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ theme, colorTheory })
        })

        const data = await response.json()
        setResult(data)
      } catch (error) {
        console.error('Error:', error)
        alert('Failed to generate art idea')
      } finally {
        setIsLoading(false)
      }
    }



  return (
    <main className="min-h-screen bg-app-primary">
      <div className="mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="text-4xl font-bold mb-4">Art Idea Generator</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Generate color palettes, inspiration images, and creative prompts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Ad space - left side */}
          <div className="ad-space lg:col-span-1">
            {/* <p>Ad Space</p> */}
          </div>

          {/* Main generator */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Art Idea Generator</h2>
              
              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  
                  {/* Theme Selection - Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Theme
                    </label>
                    <select
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                      style={{ 
                        backgroundColor: 'white', 
                        color: 'black',
                        padding: '8px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        width: '100%'
                      }}
                    >
                      <option value="" style={{ color: 'black' }}>Choose Image theme.</option>
                      {themes.map((themeOption) => (
                        <option 
                          key={themeOption.value} 
                          value={themeOption.value}
                          style={{ color: 'black' }}
                        >
                          {themeOption.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Color Theory Selection - Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Color Theory
                    </label>
                    <select
                      value={colorTheory}
                      onChange={(e) => setColorTheory(e.target.value)}
                      style={{ 
                        backgroundColor: 'white', 
                        color: 'black',
                        padding: '8px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        width: '100%'
                      }}
                    >
                      <option value="" style={{ color: 'black' }}>Choose a color theory...</option>
                      {colorTheories.map((theory) => (
                        <option 
                          key={theory.value} 
                          value={theory.value}
                          style={{ color: 'black' }}
                        >
                          {theory.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Submit button */}
                <button 
                  type="submit"
                  disabled={!theme || isLoading}
                  className={`w-full px-6 py-3 rounded-lg text-white transition-colors duration-200 ${
                    !theme || isLoading
                      ? 'opacity-50 cursor-not-allowed bg-gray-700' 
                      : 'bg-app-darknavy hover:bg-app-darknavy-hover hover:shadow-lg'
                  }`}
                >
                  {!theme 
                    ? 'Select a theme to generate art idea'
                    : isLoading
                    ? 'Generating...'
                    : 'Generate Art Idea'
                  }
                </button>
              </form>

              {/* Results */}
              {result && (
                <div className="space-y-4 mt-8 p-6">
                  
                  {/* Creative Sentence */}
                  <div className="border p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">Creative Prompt:</h3>
                    </div>
                    <p className="text-lg italic">{result.sentence}</p>
                  </div>

                  {/* Color Palette */}
                  <div className="border p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">Color Palette:</h3>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {result.colors.map((color, index) => (
                        <div key={index} className="flex-1 min-w-[80px]">
                          <div
                            className="h-20 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-gray-400 transition-colors"
                            style={{ backgroundColor: color }}
                            title={`Click to copy ${color}`}
                            onClick={() => {
                              navigator.clipboard.writeText(color)
                              alert(`Copied ${color}`)
                            }}
                          />
                          <p className="text-center text-xs mt-1 font-mono">
                            {color}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Images (when you add Unsplash) */}
                  {result.images && result.images.length > 0 && (
                  <div className="border p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold">Inspiration Images:</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {result.images.map((img, index) => (
                        <div key={index}>
                          <Image
                            src={img}
                            alt={`Inspiration ${index + 1}`}
                            width={1080}
                            height={720}
                            className="w-full h-48 object-cover rounded-lg"
                            onLoad={() => {
                              if (result.attributions && result.attributions[index]) {
                                fetch('/api/trigger-download', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json'
                                  },
                                  body: JSON.stringify({
                                    downloadLocation: result.attributions[index].downloadLocation
                                  })
                                }).catch(err => console.error('Download trigger failed:', err))
                              }
                            }}
                          />
                          {result.attributions && result.attributions[index] && (
                            <p className="text-xs text-gray-600 mt-2">
                              Photo by{' '}
                              <a 
                                href={result.attributions[index].photographerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-gray-800"
                              >
                                {result.attributions[index].photographerName}
                              </a>
                              {' '}on{' '}
                              <a 
                                href={result.attributions[index].unsplashUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-gray-800"
                              >
                                Unsplash
                              </a>
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                </div>
              )}
            </div>
          </div>

          {/* Ad space - right side */}
          <div className="ad-space lg:col-span-1">
            {/* <p>Ad Space</p> */}
          </div>
        </div>
      </div>
    </main>
  )
}