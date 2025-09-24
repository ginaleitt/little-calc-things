'use client'

// page.tsx
'use client';

import { useState } from 'react';
import { games, GameEntry, Games } from '../../data/games';

type GameType = 'board' | 'video';

export default function GameIdeaGenerator() {
    
    const [gameType, setGameType] = useState('board');
    const [mechanismCount, setMechanismCount] = useState('1');

    const [generatedGame, setGeneratedGame] = useState<{
        mechanisms: GameEntry[];
        rule: GameEntry;
        setting: GameEntry;
        theme: GameEntry;
        limitation: GameEntry;
    } | null>(null);

    const gameTypeOptions = [
        { value: 'board', label: 'Board Game' },
        { value: 'video', label: 'Video Game' }
    ]
    
    // Filter entries by game type
    const filterByType = (entries: GameEntry[], type: GameType): GameEntry[] => {
        return entries.filter(entry => 
            entry.tags.includes(type) || entry.tags.includes('both')
        );
    };

    // Get random entry
    const getRandomEntry = (array: GameEntry[]): GameEntry => {
        return array[Math.floor(Math.random() * array.length)];
    };

    // Get multiple unique random entries
    const getUniqueRandomEntries = (array: GameEntry[], count: number): GameEntry[] => {
        if (count >= array.length) return [...array];
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const generateGames = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Add this line to prevent form submission
        const formData = {
            gameType: gameType,
            mechanismCount: mechanismCount,
            
        }
        
        const parsed = {
            gameType: (formData.gameType || 'board') as GameType,
            mechanismCount: parseFloat(formData.mechanismCount) || 1,
        }

        const filteredMechanisms = filterByType(games.mechanisms, parsed.gameType);
        const filteredRules = filterByType(games.rules, parsed.gameType);
        const filteredSettings = filterByType(games.settings, parsed.gameType);
        const filteredThemes = filterByType(games.themes, parsed.gameType);
        const filteredLimitations = filterByType(games.limitations, parsed.gameType);

        setGeneratedGame({
        mechanisms: getUniqueRandomEntries(filteredMechanisms, parsed.mechanismCount),
        rule: getRandomEntry(filteredRules),
        setting: getRandomEntry(filteredSettings),
        theme: getRandomEntry(filteredThemes),
        limitation: getRandomEntry(filteredLimitations)
        });

    }

    // Re-roll individual categories
    const rerollCategory = (category: keyof Games) => {
        const formData = {
            gameType: gameType,
            mechanismCount: mechanismCount,
            
        }
        
        const parsed = {
            gameType: (formData.gameType || 'board') as GameType,
            mechanismCount: parseFloat(formData.mechanismCount) || 1,
        }
        if (!generatedGame) return;
        
        const filtered = filterByType(games[category], parsed.gameType);
        
        if (category === 'mechanisms') {
        setGeneratedGame({
            ...generatedGame,
            mechanisms: getUniqueRandomEntries(filtered, parsed.mechanismCount)
        });
        } else {
        setGeneratedGame({
            ...generatedGame,
            [category]: getRandomEntry(filtered)
        });
        }
    };



  return (
    <main className="min-h-screen bg-app-primary">
      <div className="mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-2">
          <h1 className="text-4xl font-bold mb-4">Game Idea Generator</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Get a video game or a board game idea from mechanisms, themes, limitations and more.
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
              <h2 className="text-2xl font-semibold mb-6">Game Idea Generator</h2>
              
              <form onSubmit={generateGames} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Game Type
                    </label>
                    <select
                        value={gameType}
                        onChange={(e) => setGameType(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required>
                        {gameTypeOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mechanism Amount
                    </label>

                    <select 
                        value={mechanismCount} 
                        onChange={(e) => setMechanismCount(e.target.value)}
                        className="form-input border p-2 rounded"
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <button 
                    type="submit" 
                    className="w-full px-6 py-3 rounded-lg transition-colors duration-200 bg-app-darknavy hover:bg-app-darknavy-hover text-white"
                >
                    Generate Game Idea
                
                </button>
                    
              </form>

              {/* Results */}
              {generatedGame && (
                <div className="space-y-4 mt-8 p-6">
                <div className="border p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">Mechanisms:</h3>
                    <button 
                        onClick={() => rerollCategory('mechanisms')}
                        className="text-blue-500 text-sm"
                    >
                        Re-roll
                    </button>
                    </div>
                    <p>{generatedGame.mechanisms.map(m => m.name).join(', ')}</p>
                </div>

                <div className="border p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">Rule:</h3>
                    <button 
                        onClick={() => rerollCategory('rules')}
                        className="text-blue-500 text-sm"
                    >
                        Re-roll
                    </button>
                    </div>
                    <p>{generatedGame.rule.name}</p>
                </div>

                <div className="border p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">Setting:</h3>
                    <button 
                        onClick={() => rerollCategory('settings')}
                        className="text-blue-500 text-sm"
                    >
                        Re-roll
                    </button>
                    </div>
                    <p>{generatedGame.setting.name}</p>
                </div>

                <div className="border p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">Theme:</h3>
                    <button 
                        onClick={() => rerollCategory('themes')}
                        className="text-blue-500 text-sm"
                    >
                        Re-roll
                    </button>
                    </div>
                    <p>{generatedGame.theme.name}</p>
                </div>

                <div className="border p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">Limitation:</h3>
                    <button 
                        onClick={() => rerollCategory('limitations')}
                        className="text-blue-500 text-sm"
                    >
                        Re-roll
                    </button>
                    </div>
                    <p>{generatedGame.limitation.name}</p>
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