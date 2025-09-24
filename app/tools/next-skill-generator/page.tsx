'use client'

// page.tsx
'use client';

import { useState } from 'react';
import {  learningPaths } from '../../data/learningPaths';


// Type definitions
interface Category {
  value: string
  label: string
}

export default function GameIdeaGenerator() {
    
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    

    const [generatedSkill, setGeneratedSkill] = useState<{
        category: string;
        skill: string;
        project: string;
    } | null>(null);

    const categories: Category[] =  [
        { value: 'webdevelopment', label: 'Web Development' },
        { value: 'datascience', label: 'Data Science' },
        { value: 'cybersecurity', label: 'Cybersecurity' },
        { value: 'digitalart', label: 'Digital Art' },
        { value: 'traditionalart', label: 'Traditional Art' },
        { value: 'photography', label: 'Photography' },
        { value: 'videoediting', label: 'Video Editing' },
        { value: 'threedmodeling', label: '3D Modeling' },
        { value: 'textilecrafts', label: 'Textile Crafts' },
        { value: 'woodworking', label: 'Woodworking' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'instruments', label: 'Instruments' },
        { value: 'musicproduction', label: 'Music Production' },
        { value: 'languages', label: 'Languages' },
        { value: 'projectmanagement', label: 'Project Management' },
        { value: 'cooking', label: 'Cooking' },
    ]

    const handleCategoryChange = (categoryValue: string) => {
        setSelectedCategories((prev: string[]) => {
        if (prev.includes(categoryValue)) {
            // If already selected, remove it
            return prev.filter(cat => cat !== categoryValue)
        } else {
            // If not selected, add it
            return [...prev, categoryValue]
        }
        })
    }
    // get random entry
    const generateSuggestion = (e: React.FormEvent): void => {
    e.preventDefault();
    if (selectedCategories.length === 0) return
    
    // Step 1: Pick a random category from selected ones
    const randomCategoryIndex = Math.floor(Math.random() * selectedCategories.length)
    const selectedCategory = selectedCategories[randomCategoryIndex]
    
    // Step 2: Get the learning paths for that category
    const categoryPaths = learningPaths[selectedCategory as keyof typeof learningPaths]
    
    // Guard clause - make sure the category exists in our data
    if (!categoryPaths || categoryPaths.length === 0) {
        console.error(`No learning paths found for category: ${selectedCategory}`)
        return
    }
    
    // Step 3: Pick a random skill from that category
    const randomSkillIndex = Math.floor(Math.random() * categoryPaths.length)
    const selectedSkillPath = categoryPaths[randomSkillIndex]
    
    // Step 4: Pick a random project from that skill
    const randomProjectIndex = Math.floor(Math.random() * selectedSkillPath.projects.length)
    const selectedProject = selectedSkillPath.projects[randomProjectIndex]
    
    // Step 5: Find the category label for display
    const categoryLabel = categories.find(cat => cat.value === selectedCategory)?.label || selectedCategory
    
    // Step 6: Update state with the result
    setGeneratedSkill({
        category: categoryLabel,
        skill: selectedSkillPath.skill,
        project: selectedProject
    })
    }



  return (
    <main className="min-h-screen bg-app-primary">
      <div className="mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="text-4xl font-bold mb-4">Next Skill Generator</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Discover what skills should you learn next. Get a starting project.
          </p>
        </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Ad space - left side */}
          <div className="ad-space lg:col-span-1">
            {/* <p>Ad Space</p> */}
          </div>

          {/* Main calculator */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Next Skill Generator</h2>
              
              <form onSubmit={generateSuggestion} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Categories You&apos;re Interested In
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((category: Category) => (
                        <label 
                        key={category.value} 
                        className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                        >
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.value)}
                            onChange={() => handleCategoryChange(category.value)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">{category.label}</span>
                        </label>
                    ))}
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button 
                    type = "submit"
                    disabled={selectedCategories.length === 0}
                    className={`w-full px-6 py-3 rounded-lg text-white transition-colors duration-200 ${
                    selectedCategories.length === 0 
                        ? 'opacity-50 cursor-not-allowed bg-gray-700' 
                        : 'bg-app-darknavy hover:bg-app-darknavy-hover  hover:shadow-lg'
                    }`}
                >
                    {selectedCategories.length === 0 
                    ? 'Select at least one category to generate suggestion'
                    : `Generate Next Skill`
                    }
                </button>
                    
              </form>

              {/* Results */}
              {generatedSkill && (
                <div className="space-y-4 mt-8 p-6">

                    <div className="border p-4 rounded">
                        <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold">Category:</h3>
                        </div>
                        <p>{generatedSkill.category}</p>
                    </div>

                    <div className="border p-4 rounded">
                        <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold">Skill:</h3>
                        </div>
                        <p>{generatedSkill.skill}</p>
                    </div>
                    <div className="border p-4 rounded">
                        <div className="flex justify-between items-center mb-2">
                        <h3 className="font-bold">Project:</h3>
                        </div>
                        <p>{generatedSkill.project}</p>
                    </div>               
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