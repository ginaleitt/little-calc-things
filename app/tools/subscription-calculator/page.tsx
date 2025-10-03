'use client'

import { useState } from 'react'
// At the top of your component, define the shape of your errors
interface FormErrors {
   subscriptionCost?: string;
   usageAmount?: string;
}



// app/tools/subscription-calculator/page.js
export default function SubscriptionCalculator() {
    
    const [subscriptionCost, setSubscriptionCost] = useState('49.99');
    const [subscriptionFrequency, setSubscriptionFrequency] = useState('Monthly');
    const [usageAmount, setUsageAmount] = useState('2');
    const [usageFrequencyType, setUsageFrequencyType] = useState('Sessions'); //Hourly, Sessions
    const [usageFrequency, setUsageFrequency] = useState('Weekly');
    const [isCalculating, setIsCalculating] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})
    //state for results
    const [normalizedSubscriptionCostPerUsage, setNormalizedSubscriptionCostPerUsage] = useState('');

    // Array of frequency options - makes it easy to add/remove options
    const frequencyOptions = [
        { value: 'Daily', label: 'Daily' },
        { value: 'Weekly', label: 'Weekly' },
        { value: 'Monthly', label: 'Monthly' },
        { value: 'Yearly', label: 'Yearly' }
    ]
    const usageTypeOptions = [
        { value: 'Hours', label: 'Hours' },
        { value: 'Sessions', label: 'Sessions' }
    ]


    const performCalculation = () => {
        
        const formData = {
            subscriptionCost: subscriptionCost,
            subscriptionMonths: subscriptionFrequency,
            usageAmount: usageAmount,
            usageFrequencyType: usageFrequencyType,
            usageType: usageFrequency
        }
        
        const parsed = {
            subscriptionCost: parseFloat(formData.subscriptionCost) || 49.99,
            subscriptionMonths: formData.subscriptionMonths || "Monthly",
            usage: parseFloat(formData.usageAmount) || 2,
            usageFrequencyType: formData.usageFrequencyType || "Sessions",
            usageAmount: formData.usageType || "Weekly"
        }

        let normalizedSubscriptionCost = parsed.subscriptionCost; //per day Cost
        let normalizedUsage = parsed.usage; //hours or use count used per usageAmount
        
        if (parsed.subscriptionMonths === "Yearly") {
            normalizedSubscriptionCost = parsed.subscriptionCost/365 
        } else if (parsed.subscriptionMonths === "Monthly") {
            normalizedSubscriptionCost = parsed.subscriptionCost/30.436785
        } else if (parsed.subscriptionMonths === "Weekly") {
            normalizedSubscriptionCost = parsed.subscriptionCost/7
        }

        if (parsed.usageAmount === "Weekly") {
            normalizedUsage = parsed.usage/7
        } else if (parsed.usageAmount === "Monthly") {
            normalizedUsage = parsed.usage/30.436785
        } else if (parsed.usageAmount === "Yearly") {
            normalizedUsage = parsed.usage/365
        }
      
       
        
        setNormalizedSubscriptionCostPerUsage((normalizedSubscriptionCost/normalizedUsage || 0).toFixed(2))
        return { success: true }
        
    }

    const calculateBreakEven = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsCalculating(true)
        setErrors({})
        // Validation 
        const newErrors: FormErrors = {} 
        if (!subscriptionCost || parseFloat(subscriptionCost) < 0) {
            newErrors.subscriptionCost = "Subscription Cost must be greater than 0"
        }

        if (!usageAmount || parseFloat(usageAmount) <= 0) {
            newErrors.usageAmount = "Usage must be greater than 0"
        }
        
        
        // If there are errors, set them and return early
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setIsCalculating(false)
            return
        }
        await new Promise(resolve => setTimeout(resolve, 500))
        performCalculation()
        setIsCalculating(false)
    }



  return (
    <main className="min-h-screen bg-app-primary">
      <div className="mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="text-4xl font-bold mb-4">Subscription Calculator</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Calculate the real cost per session of your subscription services. This is particularly useful for things like:
          </p>
        </div>
        <div className="mb-8">
          <ul className="list-disc list-inside text-gray-600 max-w-4xl mx-auto pl-8">  
            <li className="text-gray-600 max-w-4xl mx-auto">Gym memberships (ex. $50/month but only go twice = $25 per visit)</li>
            <li className="text-gray-600 max-w-4xl mx-auto">Streaming services (ex. $15/month and I watch 3 times in a month = $5 per sessions)</li>
            <li className="text-gray-600 max-w-4xl mx-auto">Software subscriptions (ex. $99/year and 1 use monthly = $8.25 per use)</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Ad space - left side */}
          <div className="ad-space lg:col-span-1">
            {/* <p>Ad Space</p> */}
          </div>

          {/* Main calculator */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Subscription Calculator</h2>
              
              <form onSubmit={calculateBreakEven} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subscription Cost ($)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      value={subscriptionCost}
                      onChange={(e) => setSubscriptionCost(e.target.value)}
                      className={`form-input ${errors.subscriptionCost ? 'border-red-500' : ''}`}
                      placeholder="49.99"
                      required
                    />
                    {errors.subscriptionCost && (
                          <p className="text-red-500 text-sm mt-1">{errors.subscriptionCost}</p>
                      )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subscription Frequency
                    </label>
                    <select
                        value={subscriptionFrequency}
                        onChange={(e) => setSubscriptionFrequency(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required>
                        {frequencyOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Usage Frequency
                    </label>
                    <select
                        value={usageFrequency}
                        onChange={(e) => setUsageFrequency(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required>
                        {frequencyOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Usage Frequency Type
                    </label>
                    <select
                        value={usageFrequencyType}
                        onChange={(e) => setUsageFrequencyType(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required>
                        {usageTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </select>
                    
                    </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Usage Amount ({usageFrequencyType.toLowerCase()}) Per {usageFrequency}
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={usageAmount }
                      onChange={(e) => setUsageAmount(e.target.value)}
                      className={`form-input ${errors.usageAmount  ? 'border-red-500' : ''}`}
                      placeholder="20"
                      required
                    />
                    {errors.usageAmount  && (
                          <p className="text-red-500 text-sm mt-1">{errors.usageAmount }</p>
                      )}
                  </div>

                  
                </div>

                {/* Submit button */}
                <button 
                    type="submit" 
                    disabled={isCalculating}
                    className={`w-full px-6 py-3 rounded-lg transition-colors duration-200 ${
                        isCalculating 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-app-darknavy hover:bg-app-darknavy-hover'
                    } text-white`}
                    >
                    {isCalculating ? (
                        <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Calculating...
                        </span>
                    ) : (
                        'Calculate Subscription Cost per Usage'
                    )}
                    </button>
                    
              </form>

              {/* Results */}
              {normalizedSubscriptionCostPerUsage && Object.keys(errors).length === 0 && (
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-slate-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">
                        Your Subscription Analysis
                    </h3>
                    
                    <div className=" bg-white p-4 rounded border border-blue-200 shadow-sm">
                        <p className="text-sm text-slate-700">
                            Subscription Cost per {usageFrequencyType === 'Hours' ? 'Hour' : 'Session'}
                        </p>
                        <div className="text-2xl font-bold text-blue-600">
                            ${normalizedSubscriptionCostPerUsage}
                        </div>
                        
                        
                    </div>
                    <p className="text-xs text-slate-700 mt-2">
                            Based on ${subscriptionCost} {subscriptionFrequency.toLowerCase()} subscription
                        </p>
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