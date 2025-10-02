// page.tsx
'use client';

import { useState } from 'react';

// Type definitions
interface Item {
  id: number
  name: string
  priority: 'high' | 'medium' | 'low'
  price: number
}

interface Scenario {
  items: Item[]
  totalCost: number
  remaining: number
}

export default function BookRecommender() {
    const [budget, setBudget] = useState('1000')
    const [items, setItems] = useState<Item[]>([])
    const [nextId, setNextId] = useState(1)
    const [newItemName, setNewItemName] = useState('')
    const [newItemPriority, setNewItemPriority] = useState<'high' | 'medium' | 'low'>('high')
    const [newItemPrice, setNewItemPrice] = useState('')
    
    const [results, setResults] = useState<Scenario[] | null>(null)

    
    

    const addItem = () => {
        // Create new item object
        const item = {
            id: nextId,
            name: newItemName,
            priority: newItemPriority,
            price: parseFloat(newItemPrice)
        }
        
        // Add to items array
        setItems([...items, item])
        
        // Increment ID counter
        setNextId(nextId + 1)
        
        // Clear the form
        setNewItemName('')
        setNewItemPrice('')
    }

    // Remove an item from the list
    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id))
    }

    // Helper function (put this outside your component or above calculateAllocations)
    function getAllCombinations<T>(arr: T[]): T[][] {
    const result: T[][] = []
    
    // Recursive function to generate combinations
    function generate(current: T[], remaining: T[]) {
        // Add current combination if it's not empty
        if (current.length > 0) {
        result.push([...current])
        }
        
        // Try adding each remaining item
        for (let i = 0; i < remaining.length; i++) {
        generate(
            [...current, remaining[i]],  // Add this item
            remaining.slice(i + 1)       // Continue with rest
        )
        }
    }
    
    generate([], arr)
    return result
    }

    const calculateAllocations = (e: React.FormEvent) => {
        e.preventDefault()
        
        const budgetAmount = parseFloat(budget)
        
        if (isNaN(budgetAmount) || budgetAmount <= 0) {
            alert("Please enter a valid budget")
            return
        }
        
        if (items.length === 0) {
            alert("Please add at least one item")
            return
        }
        
        // Organize by priority
        const highPriority = items.filter(item => item.priority === 'high')
        const mediumPriority = items.filter(item => item.priority === 'medium')
        const lowPriority = items.filter(item => item.priority === 'low')
        
        const totalHighCost = highPriority.reduce((sum, item) => sum + item.price, 0)
        const scenarios: Scenario[] = []
        
        if (totalHighCost <= budgetAmount) {
            // Can afford all high priority
            const selectedItems = [...highPriority]
            let spent = totalHighCost
            let remaining = budgetAmount - spent
            
            for (const item of mediumPriority) {
            if (spent + item.price <= budgetAmount) {
                selectedItems.push(item)
                spent += item.price
                remaining -= item.price
            }
            }
            
            for (const item of lowPriority) {
            if (spent + item.price <= budgetAmount) {
                selectedItems.push(item)
                spent += item.price
                remaining -= item.price
            }
            }
            
            scenarios.push({
            items: selectedItems,
            totalCost: spent,
            remaining: remaining
            })
        } else {
            // Can't afford all high priority - find combinations
            const combinations = getAllCombinations(highPriority)
            
            const affordableCombos = combinations.filter(combo => {
            const cost = combo.reduce((sum, item) => sum + item.price, 0)
            return cost <= budgetAmount
            })
            
            affordableCombos.sort((a, b) => {
            const costA = a.reduce((sum, item) => sum + item.price, 0)
            const costB = b.reduce((sum, item) => sum + item.price, 0)
            return costB - costA
            })
            
            const topCombos = affordableCombos.slice(0, 5)
            
            for (const combo of topCombos) {
            const selectedItems = [...combo]
            let spent = combo.reduce((sum, item) => sum + item.price, 0)
            let remaining = budgetAmount - spent
            
            for (const item of mediumPriority) {
                if (spent + item.price <= budgetAmount) {
                selectedItems.push(item)
                spent += item.price
                remaining -= item.price
                }
            }
            
            for (const item of lowPriority) {
                if (spent + item.price <= budgetAmount) {
                selectedItems.push(item)
                spent += item.price
                remaining -= item.price
                }
            }
            
            scenarios.push({
                items: selectedItems,
                totalCost: spent,
                remaining: remaining
            })
            }
        }
        
        setResults(scenarios)
        }

    return (
        <main className="min-h-screen bg-app-primary">
            <div className="mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Budget Allocation Calculator</h1>
                    <p className="text-gray-600 max-w-4xl mx-auto">
                        Enter your budget and items you want to buy. We&apos;ll show you the best ways to allocate your money based on priority.
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
                            <h2 className="text-2xl font-semibold mb-6">Your Budget</h2>
                            
                            {/* SECTION 1: Budget Input */}
                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Total Budget ($)
                                </label>
                                <input
                                    type="number"
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                    placeholder="500"
                                    min="0"
                                    step="0.01"
                                />
                            </div>

                            {/* SECTION 2: Add Item Form */}
                            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                                <h3 className="text-lg font-semibold mb-4">Add Items</h3>
                                
                                <div className="space-y-4">
                                    {/* Item Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Item Name
                                        </label>
                                        <input
                                            type="text"
                                            value={newItemName}
                                            onChange={(e) => setNewItemName(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            placeholder="Coffee Maker"
                                        />
                                    </div>

                                    {/* Priority & Price in 2 columns */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Priority
                                            </label>
                                            <select
                                                value={newItemPriority}
                                                onChange={(e) => setNewItemPriority(e.target.value as 'high' | 'medium' | 'low')}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                            >
                                                <option value="high">High Priority</option>
                                                <option value="medium">Medium Priority</option>
                                                <option value="low">Low Priority</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Price ($)
                                            </label>
                                            <input
                                                type="number"
                                                value={newItemPrice}
                                                onChange={(e) => setNewItemPrice(e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                                placeholder="150.00"
                                                min="0"
                                                step="0.01"
                                            />
                                        </div>
                                    </div>

                                    {/* Add Item Button */}
                                    <button
                                        type="button"
                                        onClick={addItem}
                                        disabled={!newItemName || !newItemPrice}
                                        className="w-full px-6 py-3 rounded-lg transition-colors duration-200 bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        + Add Item
                                    </button>
                                </div>
                            </div>

                            {/* SECTION 3: Items List */}
                            {items.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold mb-4">
                                        Your Items ({items.length})
                                    </h3>
                                    
                                    <div className="space-y-3">
                                        {items.map((item) => (
                                            <div 
                                                key={item.id}
                                                className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                                            >
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3">
                                                        <h4 className="font-semibold">{item.name}</h4>
                                                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                            item.priority === 'high' 
                                                                ? 'bg-red-100 text-red-800'
                                                                : item.priority === 'medium'
                                                                ? 'bg-yellow-100 text-yellow-800'
                                                                : 'bg-green-100 text-green-800'
                                                        }`}>
                                                            {item.priority}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 text-sm mt-1">
                                                        ${item.price.toFixed(2)}
                                                    </p>
                                                </div>
                                                
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="ml-4 px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Total Cost Summary */}
                                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                        <div className="flex justify-between text-sm">
                                            <span>Total Cost of All Items:</span>
                                            <span className="font-bold">
                                                ${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* SECTION 4: Calculate Button */}
                            <button
                                onClick={calculateAllocations}
                                disabled={!budget || items.length === 0}
                                className="w-full px-6 py-3 rounded-lg transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                Calculate Best Options
                            </button>

                            {/* SECTION 5: Results Display */}
                            {results && results.length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-2xl font-bold mb-6">Your Allocation Options</h3>
                                    
                                    {results.map((scenario, index) => (
                                        <div 
                                            key={index}
                                            className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <h4 className="text-xl font-semibold">
                                                    Option {index + 1}
                                                </h4>
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold text-blue-600">
                                                        ${scenario.totalCost.toFixed(2)}
                                                    </div>
                                                    <div className="text-sm text-gray-600">
                                                        ${scenario.remaining.toFixed(2)} remaining
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Items in this scenario */}
                                            <div className="space-y-2">
                                                {scenario.items.map((item, itemIndex) => (
                                                    <div 
                                                        key={itemIndex}
                                                        className="flex justify-between items-center p-3 bg-white rounded border"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className="font-medium">{item.name}</span>
                                                            <span className={`px-2 py-1 rounded text-xs ${
                                                                item.priority === 'high'
                                                                    ? 'bg-red-100 text-red-800'
                                                                    : item.priority === 'medium'
                                                                    ? 'bg-yellow-100 text-yellow-800'
                                                                    : 'bg-green-100 text-green-800'
                                                            }`}>
                                                                {item.priority}
                                                            </span>
                                                        </div>
                                                        <span className="font-semibold text-gray-700">
                                                            ${item.price.toFixed(2)}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Summary */}
                                            <div className="mt-4 pt-4 border-t border-blue-200">
                                                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                                                    <div>
                                                        <div className="font-semibold text-gray-700">Items</div>
                                                        <div className="text-lg font-bold text-blue-600">
                                                            {scenario.items.length}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-gray-700">High Priority</div>
                                                        <div className="text-lg font-bold text-red-600">
                                                            {scenario.items.filter(i => i.priority === 'high').length}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-gray-700">Budget Used</div>
                                                        <div className="text-lg font-bold text-green-600">
                                                            {((scenario.totalCost / parseFloat(budget)) * 100).toFixed(0)}%
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Try Again Button */}
                                    <button
                                        onClick={() => setResults(null)}
                                        className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                                    >
                                        ← Adjust Items
                                    </button>
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