import { Metadata } from "next"

export const robotsMetaData: Metadata["robots"] = {
  index: process.env.NODE_ENV === "production",
  follow: process.env.NODE_ENV === "production",
}
