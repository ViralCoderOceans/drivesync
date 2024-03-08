import SiteConfig from "@/siteConfig";
import { allDocs } from "@/../.contentlayer/generated";
import { getServerSideSitemap } from "next-sitemap";

export async function GET(request: Request) {
  const siteUrl = SiteConfig.baseUrl;

  const siteMap = await getServerSideSitemap(
    allDocs.map((doc) => {
      return {
        loc: `${siteUrl}${doc.url}`,
        lastmod: new Date(doc.date).toISOString(),
        changefreq: "daily",
        priority: 0.7
      };
    })
  );

  return siteMap;
}
