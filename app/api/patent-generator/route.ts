import { NextResponse } from 'next/server';

// Store your API key in .env.local as PATENTSVIEW_API_KEY
const API_KEY = process.env.PATENTSEARCH_API_KEY;

// CPC categories for consumer-facing, tangible tech
const CPC_CATEGORIES = [
  'A47B', // Furniture
  'A63B', // Sports equipment
  'A63F', // Games, toys
  'B60R', // Vehicle accessories
  'A41D', // Clothing, wearables
  'A43B', // Footwear
  'H04M', // Telephonic communication
  'G06F', // Computing devices
  'A61B', // Medical diagnosis devices
  'B25J', // Manipulators, tools
];

interface Patent {
  patent_id: string;
  patent_title: string;
  patent_abstract: string;
  patent_date: string;
  cpc_current?: Array<{ cpc_group_id: string }>;
}

interface PatentsViewResponse {
  patents: Patent[];
  count: number;
  total_hits: number;
}

async function fetchPatentsFromCategory(category: string, count: number = 50): Promise<Patent[]> {
  // Use cpc_current.cpc_group_id which is the correct nested field name
  const query = {
    _and: [
      { "cpc_current.cpc_group_id": category },
      { _gte: { patent_date: "2000-01-01" } },
      { _lte: { patent_date: "2025-12-31" } }
    ]
  };

  const fields = [
    "patent_id",
    "patent_title", 
    "patent_abstract",
    "patent_date",
    "cpc_current.cpc_group_id"
  ];

  const url = `https://search.patentsview.org/api/v1/patent/?q=${encodeURIComponent(JSON.stringify(query))}&f=${encodeURIComponent(JSON.stringify(fields))}&o=${encodeURIComponent(JSON.stringify({ size: count }))}`;

  console.log(`Fetching patents for category ${category}...`);

  const response = await fetch(url, {
    headers: {
      'X-Api-Key': API_KEY || '',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('API Error for category', category, ':', response.status, errorText);
    // Don't throw, just return empty array so we can try other categories
    return [];
  }

  const data: PatentsViewResponse = await response.json();
  console.log(`Found ${data.count} patents in category ${category}`);
  return data.patents || [];
}

function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export async function GET() {
  try {
    if (!API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured. Please add PATENTSVIEW_API_KEY to .env.local' },
        { status: 500 }
      );
    }

    // Pick 2-3 random categories
    //const numCategories = Math.random() > 0.5 ? 3 : 2;
    const numCategories = 3;
    const selectedCategories = getRandomItems(CPC_CATEGORIES, numCategories);

    console.log('Selected categories:', selectedCategories);

    // Fetch patents from each category
    const patentPromises = selectedCategories.map(category => 
      fetchPatentsFromCategory(category, 20)
    );

    const patentsByCategory = await Promise.all(patentPromises);

    // Pick one random patent from each category that has results
    const selectedPatents = patentsByCategory
      .filter(patents => patents.length > 0)
      .map(patents => getRandomItems(patents, 1)[0]);

    console.log('Selected', selectedPatents.length, 'patents');

    if (selectedPatents.length === 0) {
      // Fallback to basic query if CPC filtering didn't work
      console.log('No patents found with CPC filtering, using fallback...');
      const fallbackQuery = { _gte: { patent_date: "2020-01-01" } };
      const fallbackFields = ["patent_id", "patent_title", "patent_abstract", "patent_date"];
      const fallbackUrl = `https://search.patentsview.org/api/v1/patent/?q=${encodeURIComponent(JSON.stringify(fallbackQuery))}&f=${encodeURIComponent(JSON.stringify(fallbackFields))}&o=${encodeURIComponent(JSON.stringify({ size: 10 }))}`;
      
      const fallbackResponse = await fetch(fallbackUrl, {
        headers: { 'X-Api-Key': API_KEY || '' }
      });
      
      if (fallbackResponse.ok) {
        const fallbackData: PatentsViewResponse = await fallbackResponse.json();
        // const numToSelect = Math.random() > 0.5 ? 3 : 2;
        const numToSelect = 3;
        return NextResponse.json({
          patents: getRandomItems(fallbackData.patents || [], numToSelect),
          count: numToSelect,
        });
      }
      
      return NextResponse.json(
        { error: 'No patents found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      patents: selectedPatents,
      count: selectedPatents.length,
    });

  } catch (error) {
    console.error('Error fetching patents:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to fetch patents',
        details: 'Check server logs for more information'
      },
      { status: 500 }
    );
  }
}