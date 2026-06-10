import { chapters } from "@/src/constants/chapters";
import { siteUrl } from "@/src/constants/seo";

const staticUrls = ["", "sobre", "acervo", "extras", "creditos", "capitulos"];

export async function GET() {
  const now = new Date().toISOString();
  const urls = [
    ...staticUrls.map((path) => `${siteUrl}/${path}`),
    ...chapters.map((chapter) => `${siteUrl}/capitulos/${chapter.id}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) =>
      `  <url>\n    <loc>${url}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
