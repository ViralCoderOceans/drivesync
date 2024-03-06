"use client"

import React from "react"
import { env } from "../../../../env.mjs"
import { GoogleAnalytics } from "nextjs-google-analytics"

export default function GoogleAnalyticsProvider() {
  return (
    <GoogleAnalytics
      trackPageViews
      gaMeasurementId={env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
      strategy="lazyOnload"
    />
  )
}
