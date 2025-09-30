// page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image'
import { books } from '../../data/books';

// Type definitions
interface Category {
  value: string
  label: string
}

interface Book {
  isbn: string;
  category: string;
  title: string;
  author: string;
  cover_image: string;
  description: string;
  rating: number;
  ratings_count: number;
  page_count: number;
  published_date: string;
  bookshop_link: string;
}

export default function BookRecommender() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedMinLength, setSelectedMinLength] = useState('100');
    const [selectedMaxLength, setSelectedMaxLength] = useState('1000');
    const [generatedBook, setGeneratedBook] = useState<Book | null>(null);

    
    const categories: Category[] = [
        // Fiction
        { value: 'fantasy', label: 'Fantasy' },
        { value: 'science-fiction', label: 'Science Fiction' },
        { value: 'mystery', label: 'Mystery' },
        { value: 'thriller', label: 'Thriller' },
        { value: 'romance', label: 'Romance' },
        { value: 'contemporary-fiction', label: 'Contemporary Fiction' },
        { value: 'historical-fiction', label: 'Historical Fiction' },
        { value: 'horror', label: 'Horror' },
        { value: 'literary-fiction', label: 'Literary Fiction' },
        { value: 'adventure', label: 'Adventure' },
        { value: 'humor', label: 'Humor' },
        
        // Nonfiction
        { value: 'biography', label: 'Biography' },
        { value: 'memoir', label: 'Memoir' },
        { value: 'self-help', label: 'Self-Help' },
        { value: 'business', label: 'Business' },
        { value: 'psychology', label: 'Psychology' },
        { value: 'history', label: 'History' },
        { value: 'science', label: 'Science' },
        { value: 'health-wellness', label: 'Health & Wellness' },
        { value: 'cooking', label: 'Cooking' },
        { value: 'travel', label: 'Travel' },
        { value: 'true-crime', label: 'True Crime' },
        { value: 'politics', label: 'Politics' },
        { value: 'philosophy', label: 'Philosophy' },
        { value: 'personal-development', label: 'Personal Development' },
    ]

    const handleCategoryChange = (categoryValue: string) => {
        setSelectedCategories((prev: string[]) => {
            if (prev.includes(categoryValue)) {
                return prev.filter(cat => cat !== categoryValue)
            } else {
                return [...prev, categoryValue]
            }
        })
    }

    const handleGenerateBook = () => {
        if (selectedCategories.length === 0) {
            alert('Please select at least one category');
            return;
        }
        
        const minLength = parseInt(selectedMinLength) || 0;
        const maxLength = parseInt(selectedMaxLength) || Infinity;
        const randomCategory = selectedCategories[Math.floor(Math.random() * selectedCategories.length)];
        
        const filteredBooks = books.filter(book => 
            book.category === randomCategory && 
            book.page_count >= minLength && 
            book.page_count <= maxLength
        );

        if (filteredBooks.length === 0) {
            alert(`No books found for ${randomCategory} with ${minLength}-${maxLength} pages`);
            return;
        }
        
        const randomBook = filteredBooks[Math.floor(Math.random() * filteredBooks.length)];
        setGeneratedBook(randomBook);
    };

    const generateBook = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleGenerateBook();
    };

    return (
        <main className="min-h-screen bg-app-primary">
            <div className="mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Next Book Recommender</h1>
                    <p className="text-gray-600 max-w-4xl mx-auto">
                        Find your next great read! Select your favorite genres and page length preferences.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Ad space - left side */}
                    <div className="ad-space lg:col-span-1">
                        {/* <p>Ad Space</p> */}
                    </div>

                    {/* Main form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-semibold mb-6">Find Your Book</h2>
                            
                            <form onSubmit={generateBook} className="space-y-6">
                                {/* Categories as clickable pills */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Select Categories (choose at least one)
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {categories.map((category) => (
                                                <button
                                                    key={category.value}
                                                    type="button"
                                                    onClick={() => handleCategoryChange(category.value)}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                                        selectedCategories.includes(category.value)
                                                            ? 'bg-blue-600 text-white shadow-md scale-105'
                                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                    }`}
                                                >
                                                    {category.label}
                                                    {selectedCategories.includes(category.value) && (
                                                        <span className="ml-2">✓</span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-500 mt-3">
                                            {selectedCategories.length === 0 
                                                ? 'Select at least one category' 
                                                : `${selectedCategories.length} selected`
                                            }
                                        </p>
                                    </div>

                                {/* Page Length Range */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Minimum Pages
                                        </label>
                                        <input
                                            type="number"
                                            value={selectedMinLength}
                                            onChange={(e) => setSelectedMinLength(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="100"
                                            min="0"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Maximum Pages
                                        </label>
                                        <input
                                            type="number"
                                            value={selectedMaxLength}
                                            onChange={(e) => setSelectedMaxLength(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="1000"
                                            min="0"
                                        />
                                    </div>
                                </div>

                                {/* Submit button */}
                                <button 
                                    type="submit" 
                                    disabled={selectedCategories.length === 0}
                                    className="w-full px-6 py-3 rounded-lg transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    Find Me a Book!
                                </button>
                            </form>

                            {/* Results */}
                            {generatedBook && (
                                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                                    <h3 className="text-2xl font-bold mb-4">Your Book Recommendation</h3>
                                    
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Book Cover */}
                                        {generatedBook.cover_image && (
                                            <div className="flex-shrink-0">
                                                <Image 
                                                    src={generatedBook.cover_image} 
                                                    alt={`Book cover of ${generatedBook.title} by ${generatedBook.author}`}
                                                    width={192}  // w-48 = 192px
                                                    height={288} // roughly 3:4 aspect ratio for book covers
                                                    className="rounded-lg shadow-md"
                                                    unoptimized  // Important: external URLs need this
                                                />
                                            </div>
                                        )}
                                        
                                        {/* Book Details */}
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold mb-2">{generatedBook.title}</h4>
                                            <p className="text-gray-600 mb-2">by {generatedBook.author}</p>
                                            
                                            <div className="flex gap-4 mb-4 text-sm text-gray-600">
                                                <span>📚 {generatedBook.page_count} pages</span>
                                                {generatedBook.rating > 0 && (
                                                    <span>⭐ {generatedBook.rating} ({generatedBook.ratings_count} reviews)</span>
                                                )}
                                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                                                    {categories.find(c => c.value === generatedBook.category)?.label}
                                                </span>
                                            </div>
                                            
                                            <p className="text-gray-700 mb-4 line-clamp-4">
                                                {generatedBook.description}
                                            </p>
                                            
                                            <a 
                                                href={generatedBook.bookshop_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                            >
                                                Buy on Bookshop.org
                                            </a>
                                            
                                            <button 
                                                onClick={handleGenerateBook}
                                                className="ml-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                Find Another Book
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <p className="text-xs text-gray-500">
                            We earn a commission when you purchase through our Bookshop.org link, 
                            at no extra cost to you. This helps keep our tools free.
                            </p>
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