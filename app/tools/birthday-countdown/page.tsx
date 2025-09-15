'use client'

import { useState } from 'react'
// At the top of your component, define the shape
interface CalculationResults {
    countdownDays: number;
    countdownWeek: number;
    ageMonthsMonth: number;
    ageMonthsWeek: number;
    ageMonthsDay: number;
    ageYearsYear: number;
    ageYearsMonth: number;
    ageYearsWeek: number;
    ageYearsDay: number;
    ageWeeksWeek: number;
    ageWeeksDay: number;
    ageDays: number
}

interface FormErrors {
  birthdayPastToday?: string;
}



// app/tools/birthday-countdown/page.js
export default function BirthdayCalculator() {
    const [selectedDate, setSelectedDate] = useState('');

    // Current date and time
    const now = new Date()
    const currentYear = now.getFullYear()
    const minDate = `${currentYear - 120}-01-01` // 120 years ago
    const maxDate = `${currentYear}-12-31`       // Current year
    
    const [errors, setErrors] = useState<FormErrors>({})
    //state for results
    const [results, setResults] = useState<CalculationResults | null>(null);

    // Helper find years, months, weeks, days
    const calculatePreciseAge = () => {
        const birthDate = new Date(selectedDate)
        
        let years = now.getFullYear() - birthDate.getFullYear()
        let months = now.getMonth() - birthDate.getMonth()
        let days = now.getDate() - birthDate.getDate()
        
        // Adjust years and months
        if (months < 0 || (months === 0 && days < 0)) {
            years--
            months += 12
        }
        
        // Adjust months and days
        if (days < 0) {
            months--
            // Get days in the previous month
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0)
            days += prevMonth.getDate()
            
            // Handle if months becomes negative after adjustment
            if (months < 0) {
            years--
            months += 12
            }
        }
        // Calculate weeks from remaining days
        const weeks = Math.floor(days / 7)
        const remainingDays = days % 7
        return {
            years,
            months,
            weeks,
            remainingDays,
        }
    }

    //find dates
    const performDateCalculation = () => {
        
        // Convert strings to date
        const birthDate = new Date(selectedDate)
        
        if (birthDate >= now) {
            return { error: "Your birthday is today or in the future." }
        }


        // Find next birthday
        const nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate())
        if (nextBirthday < now) {
            nextBirthday.setFullYear(currentYear + 1)
        } // If birthday hasn't occurred yet this year, set to next year
        

        // Countdown calculations
        const diffInMstothisYear = nextBirthday.getTime() - now.getTime()
        const countdownDays = Math.ceil(diffInMstothisYear / (1000 * 60 * 60 * 24))


        const countdownWeek = Math.ceil(countdownDays / 7)



        // Age calculations
        const diffInMs = now.getTime() - birthDate.getTime()
        const ageDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24))

        const ageWeeksWeek = Math.floor(ageDays / 7)
        const ageWeeksDay = ageDays-Math.floor(ageDays / 7)*7
        
        const yearInformation = calculatePreciseAge()
        const ageYearsYear = yearInformation.years
        const ageYearsMonth = yearInformation.months
        const ageYearsWeek = yearInformation.weeks
        const ageYearsDay = yearInformation.remainingDays

        const ageMonthsMonth = ageYearsYear * 12 + ageYearsMonth
        const ageMonthsWeek = ageYearsWeek
        const ageMonthsDay = ageYearsDay

        setResults({
            countdownDays: countdownDays,
            countdownWeek: countdownWeek,
            ageMonthsMonth:ageMonthsMonth,
            ageMonthsWeek:ageMonthsWeek,
            ageMonthsDay:ageMonthsDay,
            ageYearsYear:ageYearsYear,
            ageYearsMonth:ageYearsMonth,
            ageYearsWeek:ageYearsWeek,
            ageYearsDay:ageYearsDay,
            ageWeeksWeek: ageWeeksWeek,
            ageWeeksDay: ageWeeksDay,
            ageDays: ageDays
            })
        return { success: true }
        
    }

    const calculateBreakEven = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors({})
        // Validation 

        const result = performDateCalculation()
        if (result.error) {
            setErrors({ birthdayPastToday: result.error })
        }
    }



  return (
    <main className="min-h-screen bg-app-primary">
      <div className="mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Birthday Countdown Calculator</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Find out how many days are left until your next birthday! Just enter your birth date. See the countdown in days, weeks, and months and how old you&apos;ll be turning in years, months, weeks, and days!
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
              <h2 className="text-2xl font-semibold mb-6">Birthday Countdown</h2>
              
              <form onSubmit={calculateBreakEven} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Birthday
                    </label>
                    <input
                        type="date"
                      
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className={`form-input ${errors.birthdayPastToday ?'border-red-500' : ''}`}
                        min={minDate}
                        max={maxDate}
                      required
                    />
                    {errors.birthdayPastToday  && (
                          <p className="text-red-500 text-sm mt-1">{errors.birthdayPastToday }</p>
                      )}
                  </div>
                </div>
                  

                {/* Submit button */}
                <button type="submit" 
                disabled={!selectedDate}
                className={`w-full px-6 py-3 rounded-lg transition-colors duration-200 ${
                        !selectedDate 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-app-darknavy hover:bg-app-darknavy-hover'
                    } text-white`}> 
                {!selectedDate ? (
                        'Select Your Birthday First'
                    ) : (
                        'Calculate Break-Even Time'
                    )}
                </button>
              </form>

              {/* Results */}
              {results && Object.keys(errors).length === 0 && (
                <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    Your Birthday Countdown
                  </h3>
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white p-4 rounded border">
                        <div className="text-sm text-gray-600">Days Remaining</div>
                        <div className="text-2xl font-bold text-green-600">{results.countdownDays} Days</div>
                        </div>
                        <div className="bg-white p-4 rounded border">
                        <div className="text-sm text-gray-600">Weeks Remaining</div>
                        <div className="text-2xl font-bold text-red-600">{results.countdownWeek} Weeks</div>
                        </div>
                        
                    </div>

                <div className="bg-white p-4 mb-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4 text-center">Your Age in Days</h4>
                    <div className="grid grid-cols-1 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-bold text-green-600">{results.ageDays}</div>
                            <div className="text-sm text-gray-600">Days</div>
                        </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 mb-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4 text-center">Your Age in Weeks</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-bold text-red-600">{results.ageWeeksWeek}</div>
                            <div className="text-sm text-gray-600">Weeks</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600">{results.ageWeeksDay}</div>
                            <div className="text-sm text-gray-600">Days</div>
                        </div>
                        
                    </div>
                  </div>

                  <div className="bg-white p-4 mb-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4 text-center">Your Age in Months</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600">{results.ageMonthsMonth}</div>
                            <div className="text-sm text-gray-600">Months</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-red-600">{results.ageMonthsWeek}</div>
                            <div className="text-sm text-gray-600">Weeks</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600">{results.ageMonthsDay}</div>
                            <div className="text-sm text-gray-600">Days</div>
                        </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 mb-6 rounded-lg border">
                    <h4 className="text-lg font-semibold mb-4 text-center">Your Age in Years</h4>
                    <div className="grid grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-bold text-gray-800">{results.ageYearsYear}</div>
                            <div className="text-sm text-gray-600">Years</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600">{results.ageYearsMonth}</div>
                            <div className="text-sm text-gray-600">Months</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-red-600">{results.ageYearsWeek}</div>
                            <div className="text-sm text-gray-600">Weeks</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600">{results.ageYearsDay}</div>
                            <div className="text-sm text-gray-600">Days</div>
                        </div>
                    </div>
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