export async function GET() {
  const baseUrl = "https://little-calc-things.vercel.app";

  const urls = [
    { url: baseUrl, changefreq: "weekly", priority: 1 },
    { url: `${baseUrl}/tools/next-book-recommender`, changefreq: "weekly", priority: 0.9 },
    { url: `${baseUrl}/tools/coffee-calculator`, changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/birthday-countdown`, changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/time-splitter`, changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/game-idea-generator`, changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/next-skill-generator`, changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/budget-allocation-calculator`, changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/saving-goal-calculator`, changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/subscription-calculator`, changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tools/art-idea-generator`, changefreq: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, changefreq: "monthly", priority: 0.5 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ url, changefreq, priority }) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
