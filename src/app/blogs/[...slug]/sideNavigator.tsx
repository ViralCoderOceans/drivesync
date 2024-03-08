"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import SiteConfig from "@/siteConfig"
import { ChevronRight } from "lucide-react"

import { cn } from "@/libs/utils"
import { Icons } from "@/components/icons"

import { Blogs } from "@/../.contentlayer/generated/types"

interface SideNavigatorProps {
  post: Blogs
}

export default function SideNavigator(props: SideNavigatorProps) {
  const { post } = props
  const [headings, setHeadings] = React.useState<
    {
      id: string
      textContent: string
    }[]
  >([])

  const [activeHeading, setActiveHeading] = React.useState<string | null>(null)
  useEffect(() => {
    const onScroll = () => {
      const article = document.querySelector("article")
      if (!article) return
      const headings = Array.from(
        article.querySelectorAll("h1, h2, h3")
      ) as HTMLElement[]
      const activeHeading = Array.from(headings).find((heading) => {
        const { top } = heading.getBoundingClientRect()
        return top > 0
      })
      setActiveHeading(activeHeading?.id ?? null)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const article = document.querySelector("article")
    if (!article) return
    const headings = Array.from(
      article.querySelectorAll("h1, h2, h3")
    ) as HTMLElement[]
    // remove sr-only headings
    const nav = headings
      .map((heading) => {
        const anchor = heading.querySelector("a")
        if (!anchor) {
          return {
            id: "",
            textContent: "",
          }
        }
        const href = anchor.getAttribute("href")
        if (!href)
          return {
            id: "",
            textContent: "",
          }
        const content = anchor.textContent
        return {
          id: href?.slice(1) + "",
          textContent: content + "",
        }
      })
      .filter((e) => e.id)
    setHeadings(nav)
  }, [])
  return (
    <div
      className="sticky"
      style={{
        top: "100px",
      }}
    >
      {headings.length > 0 && (
        <nav>
          <div className="text-xl font-semibold mb-4">On this page</div>
          <ul className="space-y-4">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={cn({
                  "text-sm text-foreground": true,
                  "text-foreground font-semibold underline":
                    activeHeading === heading.id,
                })}
              >
                <div className="flex gap-x-1">
                  <div>
                    <ChevronRight size={20} />
                  </div>
                  <a href={`#${heading.id}`}>{heading.textContent}</a>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {/* social sharing buttons */}
      <div className="mt-6 text-xl font-semibold mb-4">Share on</div>
      <div className="flex gap-1">
        <div className="flex items-center space-x-1.5 sm:space-x-3 text-muted-foreground">
          <Link
            href={`https://twitter.com/intent/tweet?text=${post.title}&url=${SiteConfig.baseUrl}${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all rounded-full border border-border p-1.5 hover:scale-110 text-[#1d9bf0] hover:text-white hover:bg-[#1d9bf0]"
          >
            <Icons.twitter className="h-6 w-6" />
          </Link>
          <Link
            href={`
            http://www.linkedin.com/shareArticle?mini=true&url=${SiteConfig.baseUrl}${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all rounded-full border border-border p-1.5 hover:scale-110 text-[#0077b5] hover:text-white hover:bg-[#0077b5]"
          >
            <Icons.linkedIn className="h-6 w-6" />
          </Link>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${SiteConfig.baseUrl}${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all rounded-full border border-border p-1.5 hover:scale-110 text-[#4267B2] hover:text-white hover:bg-[#4267B2]"
          >
            <Icons.facebook className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}
