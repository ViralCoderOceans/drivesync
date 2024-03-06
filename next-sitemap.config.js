/** @type {import('next-sitemap').IConfig} */

const disallow = []
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
const finalUrl = siteUrl.replace(/\/$/, "") // Remove trailing slash

// const additionalSitemaps = []

module.exports = {
  siteUrl: finalUrl,
  generateRobotsTxt: true, // (optional)
  exclude: [...disallow, ...additionalSitemaps], // <= exclude here
  robotsTxtOptions: {
    // additionalSitemaps: additionalSitemaps.map((sitemap) => {
    //   return `${finalUrl}${sitemap}`
    // }),
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallow,
      },
    ],
  },
}
