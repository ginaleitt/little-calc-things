'use client';

import { useState } from 'react';

interface Patent {
  patent_id: string;
  patent_title: string;
  patent_abstract: string;
  patent_date: string;
  cpcs?: Array<{ cpc_group_id: string }>;
}

interface ApiResponse {
  patents: Patent[];
  count: number;
}

export default function PatentGenerator() {
  const [patents, setPatents] = useState<Patent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateCombination = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/patent-generator');
      
      if (!response.ok) {
        throw new Error('Failed to fetch patents');
      }

      const data: ApiResponse = await response.json();
      setPatents(data.patents);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-app-primary p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Patent Mashup Generator
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Discover creative combinations by merging random patents from different categories
        </p>

        <div className="text-center mb-8">
          <button
            onClick={generateCombination}
            disabled={loading}
            className="bg-app-darknavy hover:bg-app-darknavy disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 disabled:transform-none"
          >
            {loading ? 'Generating...' : 'Generate Patent Mashup'}
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {patents.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              What if you combined...
            </h2>

            {patents.map((patent, index) => (
              <div
                key={patent.patent_id}
                className="bg-white rounded-lg shadow-md p-6 border-l-4"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 flex-1">
                    {index + 1}. {patent.patent_title}
                  </h3>
                  <span className="text-sm text-gray-500 ml-4">
                    {patent.patent_id}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  Granted: {new Date(patent.patent_date).toLocaleDateString()}
                  {patent.cpcs && patent.cpcs.length > 0 && (
                    <span className="ml-3">
                      Category: {patent.cpcs[0].cpc_group_id}
                    </span>
                  )}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {patent.patent_abstract || 'No abstract available'}
                </p>

                <a
                  href={`https://patents.google.com/patent/US${patent.patent_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium"
                >
                  View full patent →
                </a>
              </div>
            ))}

            <div className="bg-indigo-50 rounded-lg p-6 mt-6">
              <h3 className="font-semibold mb-2">
                💡 Your Creative Challenge:
              </h3>
              <p className="text-gray-700">
                How would you combine these {patents.length} inventions into one innovative product? 
                What problems could this mashup solve? What would you call it?
              </p>
            </div>
          </div>
        )}

        {!loading && patents.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            Click the button above to generate your first patent combination!
          </div>
        )}
      </div>
    </div>
  );
}