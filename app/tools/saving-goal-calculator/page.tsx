'use client'

import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// At the top of your component, define the shape of your errors
interface CalculationResults {
    contributeAmount: number;
    interestSaved: number;
    totalAmount: number;
}

interface FormErrors {
   goalDateTooEarly?: string;
   goalSaving?: string;
   initialSavingLarger?: string;
   interestRate?: string
}

//INPUT: Starting saving (0), Goal saving (1,000), Goal Date (2025-09-20), Saving Interval (Daily, Weekly, Biweekly, Monthly, Yearly)
// OPTIONAL INPUT: Coupounding (true,false), Estimated Interest Rate, Coupound Frequency (Annually, SemiAnnually, Monthly, Daily)
//OUTPUT: if you start today, you need to save X amount per {Saving Interval}. Y amount in interest. X+Y = Z amount
// Graph initial investment compounded, total savings, total  additions


// app/tools/subscription-calculator/page.js
export default function SubscriptionCalculator() {
    
    const [initialSaving, setInitialSaving] = useState('0');
    const [goalSaving, setGoalSaving] = useState('1000');
    const [goalDate, setGoalDate] = useState('');
    const [savingInterval, setSavingInterval] = useState('Daily'); 
    const [compoundingBool, setCompoundingBool] = useState(false);
    const [interestRate, setInterestRate] = useState('2.65')
    const [compoundFrequency, setCompoundFrequency] = useState('Annually')

    const [isCalculating, setIsCalculating] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})
    //state for results
    const [results, setResults] = useState<CalculationResults | null>(null);
    const [graphData, setGraphData] = useState<Array<{
        day: number,
        date: string,
        cumulativeSavings: number,
        cumulativeInterest: number,
        cumulativeTotal: number
    }>>([]);

     // Current date and time
    const now = new Date()
    const minDate = now.toISOString().split('T')[0] 
    const maxDate = `${now.getFullYear() + 100}-12-31` //100 years in future

    // Array of frequency options - makes it easy to add/remove options
    const compoundOption = [
        { value: 'Annually', label: 'Annually' },
        { value: 'Semiannually', label: 'Semiannually' },
        { value: 'Monthly', label: 'Monthly' },
        { value: 'Daily', label: 'Daily' }
    ]
    const savingOption = [
        { value: 'Annually', label: 'Annually' },
        { value: 'Semiannually', label: 'Semiannually' },
        { value: 'Bimonthly', label: 'Bimonthly' },
        { value: 'Monthly', label: 'Monthly' },
        { value: 'Weekly', label: 'Weekly' },
        { value: 'Daily', label: 'Daily' }
    ]
    // Convert frequency strings to numbers
    const getFrequencyNumber = (freq: string) => {
        switch(freq) {
            case 'Daily': return 365.25;
            case 'Weekly': return 52;
            case 'Monthly': return 12;
            case 'Bimonthly': return 24;
            case 'Semiannually': return 2;
            case 'Annually': return 1;
            default: return 12;
        }
    };

    const generateGraphData = (initialSaving: number, contributeAmount: number, totalDays: number, interestRate: number) => {
        const data = [];
        const periodsPerYear = getFrequencyNumber(savingInterval);
        const daysPerPeriod = 365.25 / periodsPerYear;
        const compoundFreq = getFrequencyNumber(compoundFrequency);
        const daysPerCompound = 365.25 / compoundFreq;
        
        let currentAmount = initialSaving;
        let totalContributed = 0;
        
        for (let period = 0; period * daysPerPeriod <= totalDays; period++) {
            const currentDay = Math.floor(period * daysPerPeriod);
            
            if (period > 0) {
                // Add contribution
                totalContributed += contributeAmount;
                currentAmount += contributeAmount;
            }
            
            // Apply interest only when we hit a compound period
            const compoundPeriodsPassed = Math.floor(currentDay / daysPerCompound);
            const lastCompoundDay = compoundPeriodsPassed * daysPerCompound;
            
            // Simple approximation: apply all accumulated interest
            if (interestRate > 0) {
                const yearsElapsed = currentDay / 365.25;
                const interestRate_per_compound = interestRate / compoundFreq;
                const totalCompoundPeriods = yearsElapsed * compoundFreq;
                
                // Calculate what the initial amount would be worth now
                const initialGrowth = initialSaving * Math.pow(1 + interestRate_per_compound, totalCompoundPeriods);
                
                // For simplicity, assume contributions earn proportional interest
                const avgContributionTime = yearsElapsed / 2; // rough average
                const contributionGrowth = totalContributed * Math.pow(1 + interestRate_per_compound, avgContributionTime * compoundFreq);
                
                currentAmount = initialGrowth + contributionGrowth;
            }
            
            const currentInterest = currentAmount - initialSaving - totalContributed;
            
            data.push({
                day: currentDay,
                date: new Date(now.getTime() + currentDay * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                cumulativeSavings: totalContributed,
                cumulativeInterest: Math.max(0, currentInterest),
                cumulativeTotal: currentAmount
            });
        }
        
        return data;
    };
    const performCompoundTable = (initialSaving:number, totalDays:number,savingsNeed:number,interestRate:number) => {
        
    // Convert days to years
        const years = totalDays / 365.25;
        
        
        
        const savingFreq = getFrequencyNumber(savingInterval);
        const compoundFreq = getFrequencyNumber(compoundFrequency);
        
        // Calculate how many times you'll contribute
        const totalContributions = years * savingFreq;
        
        // This is the tricky part - you need to solve for the payment amount
        // that will grow to meet your goal when combined with your initial savings
        
        // Future value of initial savings with compound interest
        const futureValueInitial = initialSaving * Math.pow(1 + interestRate/compoundFreq, compoundFreq * years);
        const goalSaving = initialSaving + savingsNeed;
        // How much more you need from contributions
        const needFromContributions = goalSaving - futureValueInitial;
        
        // Calculate payment needed using annuity formula (this is the complex part)
        const r = interestRate / savingFreq; // rate per contribution period
        const n = totalContributions;
        
        let contributeAmount;

        if (r === 0 || Math.abs(r) < 0.000001) {
            contributeAmount = needFromContributions / n;
        } else {
            contributeAmount = needFromContributions * r / (Math.pow(1 + r, n) - 1);
        }
        // Calculate total contributed and interest earned
        const totalContributed = contributeAmount * totalContributions;
        const interestSaved = goalSaving - initialSaving - totalContributed;
        
        setResults({
            contributeAmount: contributeAmount,
            interestSaved: interestSaved,
            totalAmount: goalSaving
        });
        const graphData = generateGraphData(initialSaving, contributeAmount, totalDays, interestRate);
        setGraphData(graphData);
        
        return { success: true };
    }

    const performBasic = (initialSaving: number, totalDays: number, savingsNeed: number) => {
        const years = totalDays / 365.25;
        const savingFreq = getFrequencyNumber(savingInterval);
        const totalPeriods = years * savingFreq;

        if (totalPeriods < 1) {
            return { error: "Goal date too soon for selected interval." }
        }

        const  contributeAmount = savingsNeed/totalPeriods;
        setResults({
            contributeAmount: contributeAmount,
            interestSaved: 0,
            totalAmount: savingsNeed+initialSaving})
        const simpleGraphData = generateGraphData(initialSaving, contributeAmount, totalDays, 0);
        setGraphData(simpleGraphData);
        return { success: true }
    }


    const performCalculation = () => {
        
        const formData = {
            initialSaving: initialSaving,
            goalSaving: goalSaving,
            goalDate: goalDate,
            savingInterval: savingInterval,
            compoundingBool: compoundingBool,
            interestRate: interestRate,
            compoundFrequency: compoundFrequency
        }
        
        const parsed = {
            initialSaving: parseFloat(formData.initialSaving) || 0,
            goalSaving: parseFloat(formData.goalSaving) || 1000,
            goalDate: goalDate ? new Date(goalDate) : (() => {
                const date = new Date();
                date.setFullYear(date.getFullYear() + 2);
                return date;
            })(),
            savingInterval: savingInterval || "Bimonthly",
            compoundingBool: compoundingBool || false,
            interestRate: parseFloat(formData.interestRate)/100 || 0.0265,
            compoundFrequency: compoundFrequency || "Monthly"
        }

        const savingsNeed = parsed.goalSaving - parsed.initialSaving;
        const diffInMs = parsed.goalDate.getTime() - now.getTime();
        const totalDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

        if (compoundingBool && parsed.interestRate != 0) {
             performCompoundTable(parsed.initialSaving,totalDays,savingsNeed, parsed.interestRate)
        } else {
            const result =  performBasic(parsed.initialSaving,totalDays,savingsNeed)
            if (result.error) {
            setErrors({ goalDateTooEarly: result.error })
            }
        }
    }

    const calculateSavings = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsCalculating(true)
        setErrors({})
        setResults(null)
        // Validation 
        const newErrors: FormErrors = {} 
        if (!goalSaving || parseFloat(goalSaving) < 0) {
            newErrors.goalSaving = "Goal must be greater than 0"
        }
        if (parseFloat(goalSaving) <= parseFloat(initialSaving)) {
            newErrors.initialSavingLarger = "You have already saved up to your goal!"
        }
        if (compoundingBool) {
             if (!interestRate || parseFloat(interestRate) < 0) {
            newErrors.interestRate = "If compounding, interest rate must be greater than 0"
            }
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
          <h1 className="text-4xl font-bold mb-4">Saving Calculator</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Calculate how much you should save at a regular interval to reach your goal!
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
              <h2 className="text-2xl font-semibold mb-6">Saving Calculator</h2>
              
              <form onSubmit={calculateSavings} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Initial Savings
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.00"
                      value={initialSaving}
                      onChange={(e) => setInitialSaving(e.target.value)}
                       className={`form-input ${errors.initialSavingLarger  ? 'border-red-500' : ''}`}
                      placeholder="0.00"
                      required
                    />
                    {errors.initialSavingLarger  && (
                          <p className="text-red-500 text-sm mt-1">{errors.initialSavingLarger }</p>
                      )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Saving Goal
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.00"
                      value={goalSaving}
                      onChange={(e) => setGoalSaving(e.target.value)}
                      className={`form-input ${errors.goalSaving  ? 'border-red-500' : ''}`}
                      placeholder="1000"
                      required
                    />
                    {errors.goalSaving  && (
                          <p className="text-red-500 text-sm mt-1">{errors.goalSaving }</p>
                      )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Saving Frequency
                    </label>
                    <select
                        value={savingInterval}
                        onChange={(e) => setSavingInterval(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required>
                        {savingOption.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Goal Date
                    </label>
                    <input
                        type="date"
                      
                        value={goalDate}
                        onChange={(e) => setGoalDate(e.target.value)}
                        className={`form-input ${errors.goalDateTooEarly ?'border-red-500' : ''}`}
                        min={minDate}
                        max={maxDate}
                      required
                    />
                    {errors.goalDateTooEarly  && (
                          <p className="text-red-500 text-sm mt-1">{errors.goalDateTooEarly }</p>
                      )}
                  </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Compounding Savings
                        </label>
                        <input
                        type="checkbox"
                        checked={compoundingBool}
                        className = "h-4 w-4"
                        onChange={(e) => setCompoundingBool(e.target.checked)}
                        placeholder="4"
                        
                        />
                    </div>


                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interest Rate
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={interestRate }
                      onChange={(e) => setInterestRate(e.target.value)}
                      className={`form-input ${errors.interestRate  ? 'border-red-500' : ''}`}
                      placeholder="2.65"
                      
                    />
                    {errors.interestRate  && (
                          <p className="text-red-500 text-sm mt-1">{errors.interestRate }</p>
                      )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Compound Frequency
                    </label>
                    <select
                        value={compoundFrequency}
                        onChange={(e) => setCompoundFrequency(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      >
                        {compoundOption.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </select>
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
                        'Calculate Your Saving Goal Amount'
                    )}
                    </button>
                    
              </form>

              {/* Results */}
              
                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-slate-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">
                        Your Saving Goals
                    </h3>
                    
                    <div className=" bg-white p-4 rounded border border-blue-200 shadow-sm">
                        {results && Object.keys(errors).length === 0 && (
                        <p>
                            You will hit your goal of {parseFloat(goalSaving).toLocaleString('en-US', {style: 'currency', currency: 'USD'})} by {goalDate}, 
                            if you contribute ${results.contributeAmount.toFixed(2)} {savingInterval}. 
                            {compoundingBool ? (
                                <span> Your compounding interest contributed: ${results.interestSaved.toFixed(2)}.</span>
                            ) : (
                                <span> No interest earned in this scenario.</span>
                            )}
                        </p>
                        )}
                    </div>

                    {/* Graph */}
                    {results && graphData.length > 0 && Object.keys(errors).length === 0 && (
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Savings Progress Over Time
                        </h3>
                        
                        <div className="h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={graphData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis 
                                dataKey="date" 
                                tickFormatter={(value) => new Date(value).toLocaleDateString()}
                            />
                            <YAxis tickFormatter={(value) => `$${value.toFixed(0)}`} />
                            <Tooltip 
                                formatter={(value, name) => [`$${value.toFixed(2)}`, name]}
                                labelFormatter={(value) => `Date: ${new Date(value).toLocaleDateString()}`}
                            />
                            <Legend />
                            <Line 
                                type="monotone" 
                                dataKey="cumulativeSavings" 
                                stroke="#3B82F6" 
                                name="Your Contributions"
                                strokeWidth={2}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="cumulativeInterest" 
                                stroke="#10B981" 
                                name="Interest Earned"
                                strokeWidth={2}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="cumulativeTotal" 
                                stroke="#8B5CF6" 
                                name="Total Amount"
                                strokeWidth={3}
                            />
                            </LineChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                    )}
                    

                    
                </div>
           
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