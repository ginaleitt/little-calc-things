'use client'

import { useState } from 'react'
// At the top of your component, define the shape

interface FormErrors {
  endDateBeforeStart?: string;
}



// app/tools/birthday-countdown/page.js
export default function BirthdayCalculator() {
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const [selectedEndDate, setSelectedEndDate] = useState('');
    const [includeTime, setIncludeTime] = useState(false);
    const [intervals, setIntervals] = useState('4');
    

    // Current date and time
    const now = new Date()
    const currentYear = now.getFullYear()
    const minDate = `${currentYear - 100}-01-01` // 100 years ago
    const maxDate = `${currentYear + 100}-12-31` //100 years in future
    
    const [errors, setErrors] = useState<FormErrors>({})
    //state for results
    const [intervalDates, setIntervalDates] = useState<Date[]>([]);


    //find dates
    const performDateCalculation = () => {
        const formData = {
            selectedStartDate: selectedStartDate,
            selectedEndDate: selectedEndDate,
            intervals: intervals,
        }
        
        const parsed = {
            selectedStartDate: new Date(formData.selectedStartDate),
            selectedEndDate: new Date(formData.selectedEndDate),
            intervals: parseFloat(formData.intervals) || 4
        }

        if (parsed.selectedEndDate <= parsed.selectedStartDate) {
            return { error: 'End Date must be after Start Date' }
        }

        if (!includeTime) {
            parsed.selectedStartDate.setHours(0, 0, 0, 0);
            parsed.selectedEndDate.setHours(23, 59, 59, 999);
        }
        
        // calculate the different intervals in time between
        const totalMs = parsed.selectedEndDate.getTime() - parsed.selectedStartDate.getTime();
        const intervalMs = totalMs / (parsed.intervals);

        const newIntervalDates = [];
        if (!includeTime) {
            // After calculating each timestamp, round to nearest day
            for (let i = 0; i <= parsed.intervals; i++) {
                const timestamp = parsed.selectedStartDate.getTime() + (intervalMs * i);
                const intervalDate = new Date(timestamp);
                
                // Round to nearest midnight
                intervalDate.setHours(0, 0, 0, 0);
                
                newIntervalDates.push(intervalDate);
            }
        } else {
            // Keep exact times
            for (let i = 0; i <= parsed.intervals; i++) {
                const timestamp = parsed.selectedStartDate.getTime() + (intervalMs * i);
                const intervalDate = new Date(timestamp);
                newIntervalDates.push(intervalDate);
            }
        }

        setIntervalDates(newIntervalDates);
        return { success: true }
        
    }

    const calculateBreakEven = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors({})
        setIntervalDates([]) //reset previous results

        const result = performDateCalculation()
        if (result.error) {
            setErrors({ endDateBeforeStart: result.error })
        }
    }



  return (
    <main className="min-h-screen bg-app-primary">
      <div className="mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Time Splitter</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Split two time durations by equal intervals (e.g. divide two days into 4 chunks)
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
              <h2 className="text-2xl font-semibold mb-6">Time Splitter</h2>
              
              <form onSubmit={calculateBreakEven} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                        type="datetime-local"
                        className = "form-input"
                        value={selectedStartDate}
                        onChange={(e) => setSelectedStartDate(e.target.value)}
                        min={minDate}
                        max={maxDate}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                        type="datetime-local"
                        value={selectedEndDate}
                        onChange={(e) => setSelectedEndDate(e.target.value)}
                        className={`form-input ${errors.endDateBeforeStart ?'border-red-500' : ''}`}
                        min={minDate}
                        max={maxDate}
                      required
                    />
                    {errors.endDateBeforeStart && (
                          <p className="text-red-500 text-sm mt-1">{errors.endDateBeforeStart}</p>
                      )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Intervals
                    </label>
                    <input
                      type="number"
                      step="1"
                      min="1"
                      value={intervals}
                      onChange={(e) => setIntervals(e.target.value)}
                      className = "form-input"
                      placeholder="4"
                      required
                    />
                    
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Include Time of Day
                    </label>
                    <input
                      type="checkbox"
                      checked={includeTime}
                      className = "h-4 w-4"
                      onChange={(e) => setIncludeTime(e.target.checked)}
                      placeholder="4"
                      
                    />
                  </div>
                </div>
                  

                {/* Submit button */}
                <button type="submit" 
                disabled={!selectedStartDate || !selectedEndDate}
                className={`w-full px-6 py-3 rounded-lg transition-colors duration-200 ${
                        !selectedStartDate || !selectedEndDate || Object.keys(errors).length > 0
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-app-darknavy hover:bg-app-darknavy-hover'
                    } text-white`}> 
                {!selectedStartDate || !selectedEndDate ? (
                    'Select Your Dates First'
                    ) : (
                        Object.keys(errors).length > 0 ? (
                            'Fix Errors to Calculate'
                        ) : (
                            'Calculate Intervals'
                        )
                    )}
                </button>
              </form>

              {/* Results */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">
                    Your Interval Calculation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                    {intervalDates.length > 0 && Object.keys(errors).length === 0 && intervalDates.map((date, index) => (
                        <div key={index}>
                            {date.toLocaleString()}
                        </div>
                    ))}
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