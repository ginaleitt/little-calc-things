'use client'

import { useState, useEffect } from 'react'
// At the top of your component, define the shape
interface CalculationResults {
  homeCostPerCup: string;
  cupSavings: string;
  dailySavings: string;
  breakEvenDays: number;
  totalMachineInvestment: number;
  cafeCostPerCup: number;
  daysCoffeeDrinking: number;
  savingsTotal: string;
}

interface FormErrors {
  general?: string;
  machinePrice?: string;
  beanPrice?: string;
  cupsPerBag?: string;
  cafePrice?: string;
  cupsPerDay?: string;
  daysCoffeeDrinking?: string;
}

// export const metadata = {
//   title: 'Coffee Break-Even Calculator | Little Calc Things',
//   description: 'Calculate how long it takes for your coffee machine to pay for itself compared to buying coffee from cafes.',
// }

// app/tools/coffee-calculator/page.js
export default function CoffeeCalculator() {
    const [machinePrice, setMachinePrice] = useState('299.99');
    const [beanPrice, setBeanPrice] = useState('12.99');
    const [cupsPerBag, setCupsPerBag] = useState('20');
    const [cafePrice, setCafePrice] = useState('4.50');
    const [cupsPerDay, setCupsPerDay] = useState('2');
    const [daysCoffeeDrinking, setDaysUsage] = useState('200');
    const [isCalculating, setIsCalculating] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})
    //state for results
    const [results, setResults] = useState<CalculationResults | null>(null);

    // Helper function goes here, after state but before other functions
    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
        }).format(amount || 0)
    }

    const performCalculation = () => {
        
        // Convert strings to numbers
        const machine = parseFloat(machinePrice) || 0
        const beans = parseFloat(beanPrice) || 0
        const cups = parseFloat(cupsPerBag) || 1
        const cafe = parseFloat(cafePrice) || 0
        const daily = parseFloat(cupsPerDay) || 1
        const daysCoffee = parseFloat(daysCoffeeDrinking) || 365

        // Calculate cost per cup at home
        const homeCostPerCup = beans / cups
        // Return validation result instead of setting errors
        if (homeCostPerCup >= cafe) {
            return { error: "Your home coffee costs more than cafe coffee! Consider different beans or a better deal." }
        }
        // Calculate daily savings
        const cupSavings = cafe - homeCostPerCup
        const dailySavings = cupSavings * daily
        
        // Calculate break-even days
        const breakEvenDays = machine / dailySavings
        

        // Calculate cost per day use
        const savingsTotal = (daysCoffee * cafe*daily)-(machine + (daysCoffee * homeCostPerCup*daily))
        
        setResults({
            homeCostPerCup: (homeCostPerCup || 0).toFixed(2),
            dailySavings: (dailySavings || 0).toFixed(2),
            cupSavings: (cupSavings || 0).toFixed(2),
            breakEvenDays: Math.ceil(breakEvenDays || 0),
            totalMachineInvestment: machine,
            cafeCostPerCup: cafe,
            daysCoffeeDrinking: daysCoffee,
            savingsTotal: formatCurrency(savingsTotal || 0),
            })
        return { success: true }
        
    }

    const calculateBreakEven = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsCalculating(true)
        setErrors({})
        // Validation 
        const newErrors: FormErrors = {} 
        if (!machinePrice || parseFloat(machinePrice) < 0) {
            newErrors.machinePrice = "Machine price must be equal or greater than 0"
        }
        
        if (!beanPrice || parseFloat(beanPrice) <= 0) {
            newErrors.beanPrice = "Bean price must be greater than 0"
        }
        
        if (!cupsPerBag || parseFloat(cupsPerBag) <= 0) {
            newErrors.cupsPerBag = "Cups per bag must be greater than 0"
        }
        
        if (!cafePrice || parseFloat(cafePrice) <= 0) {
            newErrors.cafePrice = "Cafe price must be greater than 0"
        }
        
        if (!cupsPerDay || parseFloat(cupsPerDay) <= 0) {
            newErrors.cupsPerDay = "Cups per day must be greater than 0"
        }
         if (!daysCoffeeDrinking || parseFloat(daysCoffeeDrinking) <= 0) {
            newErrors.daysCoffeeDrinking = "Cups per day must be greater than 0"
        }
        
        // If there are errors, set them and return early
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            setIsCalculating(false)
            return
        }
        await new Promise(resolve => setTimeout(resolve, 500))
        const result = performCalculation()
        if (result.error) {
            setErrors({ general: result.error })
        }
        setIsCalculating(false)
    }

    // Auto-calculate when component loads
    // useEffect (also calls the calculation)
    useEffect(() => {
    performCalculation()  // No fake event needed!
    }, [])


  return (
    <main className="min-h-screen bg-app-primary">
      <div className="mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Coffee Break-Even Calculator</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Find out how long it takes for your coffee machine investment to pay for itself 
            compared to buying coffee from cafes.
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
              <h2 className="text-2xl font-semibold mb-6">Coffee Calculator</h2>
              
              <form onSubmit={calculateBreakEven} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Coffee Machine Price ($)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      value={machinePrice}
                      onChange={(e) => setMachinePrice(e.target.value)}
                      className={`form-input ${errors.machinePrice ? 'border-red-500' : ''}`}
                      placeholder="299.99"
                      required
                    />
                    {errors.machinePrice && (
                          <p className="text-red-500 text-sm mt-1">{errors.machinePrice}</p>
                      )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Coffee Beans Price per Bag ($)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      value={beanPrice}
                      onChange={(e) => setBeanPrice(e.target.value)}
                      className={`form-input ${errors.beanPrice ? 'border-red-500' : ''}`}
                      placeholder="12.99"
                      required
                    />
                    {errors.machinePrice && (
                          <p className="text-red-500 text-sm mt-1">{errors.beanPrice}</p>
                      )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cups per Bag of Beans
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={cupsPerBag}
                      onChange={(e) => setCupsPerBag(e.target.value)}
                      className={`form-input ${errors.cupsPerBag ? 'border-red-500' : ''}`}
                      placeholder="20"
                      required
                    />
                    {errors.machinePrice && (
                          <p className="text-red-500 text-sm mt-1">{errors.cupsPerBag}</p>
                      )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cafe Coffee Price per Cup ($)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      value={cafePrice}
                      onChange={(e) => setCafePrice(e.target.value)}
                      className={`form-input ${errors.cafePrice ? 'border-red-500' : ''}`}
                      placeholder="4.50"
                      required
                    />
                    {errors.machinePrice && (
                          <p className="text-red-500 text-sm mt-1">{errors.cafePrice}</p>
                      )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cups of Coffee per Day
                    </label>
                    <input
                      type="number"
                      step="1"
                      min="1"
                      value={cupsPerDay}
                      onChange={(e) => setCupsPerDay(e.target.value)}
                      className={`form-input ${errors.cupsPerDay ? 'border-red-500' : ''}`}
                      placeholder="2"
                      required
                    />
                    {errors.machinePrice && (
                          <p className="text-red-500 text-sm mt-1">{errors.cupsPerDay}</p>
                      )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Days of Coffee Drinking
                    </label>
                    <input
                      type="number"
                      step="1"
                      min="1"
                      value={daysCoffeeDrinking}
                      onChange={(e) => setDaysUsage(e.target.value)}
                      className={`form-input ${errors.daysCoffeeDrinking ? 'border-red-500' : ''}`}
                      placeholder="200"
                      required
                    />
                    {errors.machinePrice && (
                          <p className="text-red-500 text-sm mt-1">{errors.machinePrice}</p>
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
                        'Calculate Break-Even Time'
                    )}
                    </button>
                    {errors.general && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700">{errors.general} 
                            {results && `. Your cost per cup at home is $${results.homeCostPerCup}`}
                        </p>
                    </div>
                    )}
              </form>

              {/* Results */}
              {results && Object.keys(errors).length === 0 && (
                <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    Your Break-Even Analysis
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded border">
                      <div className="text-sm text-gray-600">Home Cost per Cup</div>
                      <div className="text-2xl font-bold text-green-600">${results.homeCostPerCup}</div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <div className="text-sm text-gray-600">Cafe Cost per Cup</div>
                      <div className="text-2xl font-bold text-red-600">${results.cafeCostPerCup}</div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <div className="text-sm text-gray-600">Daily Savings</div>
                      <div className="text-2xl font-bold text-blue-600">${results.dailySavings}</div>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <div className="text-sm text-gray-600">Machine Investment</div>
                      <div className="text-2xl font-bold text-gray-800">${results.totalMachineInvestment}</div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-2 border-green-300">
                    <h4 className="text-lg font-semibold mb-4 text-center">Break-Even Timeline</h4>
                    <div className="grid  gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-green-600">{results.breakEvenDays}</div>
                        <div className="text-sm text-gray-600">Days</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center text-gray-600">
                    💡 After {results.breakEvenDays} days, every cup saves you ${results.cupSavings}! And after {results.daysCoffeeDrinking} days you will save {results.savingsTotal}.
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