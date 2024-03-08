import { Metadata } from "next"
import SiteConfig from "@/siteConfig"

export const robotsMetaData: Metadata["robots"] = {
  index: process.env.NODE_ENV === "production",
  follow: process.env.NODE_ENV === "production",
}

export const openGraphMetaData: Metadata["openGraph"] = {
  title: SiteConfig.meta.title,
  description: SiteConfig.meta.description,
  url: SiteConfig.baseUrl,
  type: "website",
  images: [
    {
      url: "/images/open-graph/og.png",
      width: 1200,
      height: 630,
      alt: SiteConfig.meta.title,
    },
  ],
}

export const twitterMetaData: Metadata["twitter"] = {
  card: "summary_large_image",
  site: SiteConfig.twitter.username,
  creator: SiteConfig.creator.twitter.username,
  title: SiteConfig.meta.title,
  description: SiteConfig.meta.description,
  images: [
    {
      url: "/images/twitter/twitter.png",
      width: 1200,
      height: 630,
      type: "image/png",
      alt: SiteConfig.meta.title,
    },
  ],
}
