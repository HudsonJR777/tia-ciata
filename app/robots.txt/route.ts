import { siteUrl } from "@/src/constants/seo";

export async function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
