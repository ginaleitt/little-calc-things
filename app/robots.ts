import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://little-calc-things.com' // Update with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/data/'], // Add any routes you want to exclude
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}