import React from 'react'
import { allBlogs } from '@/../.contentlayer/generated';
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SiteConfig from "@/siteConfig"
import { compareDesc } from "date-fns"
import { TwitterIcon } from "lucide-react"

import { formatDate } from "@/libs/utils"
import { Heading } from "@/components/heading"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import BackToHomeButton from '@/components/BackToHomeButton';
import { openGraphMetaData, twitterMetaData } from "../shared-metadata"

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "App Blog: Explore Tips, Techniques, and Inspiration for Visual Content Creation.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    ...openGraphMetaData,
    url: "/blogs",
    images: [`/images/blogs/blog-meta-data.png`],
    title: "Blogs",
    description:
      "App Blog: Explore Tips, Techniques, and Inspiration for Visual Content Creation",
  },
  twitter: {
    ...twitterMetaData,
  },
}

const SeeAllBlogsBtn = () => {
  return (
    <div className="flex justify-center items-center">
      <Link href="/blogs">
        <Button
          className="flex gap-2 animate-fade-in w-full md:w-fit rounded-lg px-4 py-1.5 text-base text-black font-medium bg-transparent hover:bg-transparent"
        >
          <ChevronLeft className="h-5 w-5" />
          See all blogs
        </Button>
      </Link>
    </div>
  )
}

export default async function BlogPage() {
  const posts: any = allBlogs
    .filter((post) => post?.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="relative mx-auto max-w-3xl p-0 md:p-6 md:py-10 rounded-xl">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <Heading variant={"h2"}>
            Blogs : Tips, Techniques, and Inspiration{" "}
          </Heading>
          <p className="text-muted-foreground">
            Explore Tips, Techniques, and Inspiration with our blog posts.
          </p>
          <div className="flex items-center justify-end gap-x-1">
            Subscribe to updates →
            <Link
              href={SiteConfig.twitter.url}
              className=" p-2 transition-colors rounded-full border border-[#1d9bf0] hover:bg-[#1d9bf0] text-[#1d9bf0] hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="h-4 w-4 " />
            </Link>
            {/* <Link href="/blogs/rss" className="rounded-full bg-muted p-2">
              <RssIcon size={16} color="#f26522" />
            </Link> */}
          </div>
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post: any) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  title={post.title}
                  loading="lazy"
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={209.33}
                  className="rounded-md border bg-muted transition-colors"
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
      <BackToHomeButton />
    </div>
  )
}
