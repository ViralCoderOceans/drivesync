import { clsx, type ClassValue } from "clsx"
import { parseISO } from "date-fns"
import { twMerge } from "tailwind-merge"
import SiteConfig from "@/siteConfig"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatDate = (dateString: string) => {
  return parseISO(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export const getFullUrl = (path: string) => {
  if (path.includes("http")) return path
  //remove front slash if it exists
  path = path.replace(/^\//, "")
  return `${SiteConfig.baseUrl}/${path}`
}
