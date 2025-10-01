import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { downloadLocation } = await request.json()

    if (!downloadLocation) {
      return NextResponse.json(
        { error: 'Download location is required' },
        { status: 400 }
      )
    }

    // Trigger the download by calling Unsplash's download endpoint
    const response = await fetch(downloadLocation, {
      headers: {
        'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
      }
    })

    if (!response.ok) {
      throw new Error('Failed to trigger Unsplash download')
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Error triggering download:', error)
    return NextResponse.json(
      { error: 'Failed to trigger download' },
      { status: 500 }
    )
  }
}