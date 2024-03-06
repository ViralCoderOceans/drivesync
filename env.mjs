import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

const removeTrailingSlash = (url) => {
  const result = url.replace(/\/$/, "")
  return result
}

export const env = createEnv({
  /*
   * ServerSide Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  isServer: typeof window === "undefined",
  shared: {
    //   // server config
    NODE_ENV: z.enum(["development", "production", "test"]),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url().transform(removeTrailingSlash),
    // analytics
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().min(1)
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    // client config
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  },
  onValidationError: (error) => {
    throw error
  },
})
