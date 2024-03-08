import React from "react"
import { Metadata } from "next"
import { allTags } from "@/../.contentlayer/generated"

import { cn, getFullUrl } from "@/libs/utils"
import { buttonVariants } from "@/components/ui/button"
import BlogsComponent from "@/components/blogs"
import BackToHomeButton from '@/components/BackToHomeButton';

export const metadata: Metadata = {
  title: "Blogs Categories",
  description:
    "Image Generation App Blog: Explore Tips, Techniques, and Inspiration for Visual Content Creation",
  alternates: {
    canonical: "/blogs/tags",
  },
  openGraph: {
    type: "website",
    url: getFullUrl("/blogs/tags"),
    images: [`/og.png`],
    title: "Blogs",
    description:
      "Image Generation App Blog: Explore Tips, Techniques, and Inspiration for Visual Content Creation",
  },
}

export default function BlogTags() {
  const tags = allTags.map((tag) => tag.slugAsParams)
  return (
    <div className="relative mx-auto max-w-3xl p-0 md:pt-6 rounded-xl">
      {tags.map((tag) => (
        <section key={tag} className="my-4 overflow-visible sm:my-6">
          <div className="my-1.5 sm:mt-4">
            <div
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "rounded-full bg-gray-100 font-black capitalize"
              )}
            >
              {tag}
            </div>
          </div>
          <BlogsComponent
            noMargin
            noTitle
            horizontal
            noDescription
            tags={[tag]}
            limit={3}
          />
        </section>
      ))}
      <BackToHomeButton />
    </div>
  )
}
