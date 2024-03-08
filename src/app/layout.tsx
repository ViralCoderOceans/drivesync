import "@/styles/globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Footer from "@/components/footer"
import NavBar from "@/components/nav"
import AnalyticsProvider from "@/components/providers/AnalyticsProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"
import SiteConfig from "@/siteConfig"
import { robotsMetaData } from "./shared-metadata"

const inter = Inter({ subsets: ["latin"] })

export const dynamic = "auto"
export async function generateMetadata(): Promise<Metadata> {
  const icons: {
    rel: string
    type: string
    href: string
    sizes?: string
  }[] = []
  if (!SiteConfig) return {}
  return {
    title: SiteConfig.title,
    description: SiteConfig.description,
    applicationName: SiteConfig.applicationName,
    keywords: SiteConfig.keywords,
    metadataBase: new URL(SiteConfig.baseUrl),
    robots: robotsMetaData,
    alternates: {
      canonical: SiteConfig.baseUrl,
    },
    openGraph: {
      type: "website",
      url: SiteConfig.baseUrl,
      title: SiteConfig.seo.title,
      siteName: SiteConfig.title,
      description: SiteConfig.seo.description,
      images: SiteConfig.seo.images,
    },
    twitter: {
      title: SiteConfig.seo.title,
      description: SiteConfig.seo.description,
      images: SiteConfig.seo.images,
    },
    authors: SiteConfig.authors,
    // manifest: `${SiteConfig.baseUrl}/api/website/manifest.json`,
    icons: icons.map((icon) => {
      return {
        url: icon.href,
        type: icon.type,
        sizes: icon.sizes,
        rel: icon.rel,
      }
    }),
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        <body
          className={inter.className}
          style={{ backgroundColor: SiteConfig.wholeWebsiteBgColor }}
        >
          <AnalyticsProvider />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
