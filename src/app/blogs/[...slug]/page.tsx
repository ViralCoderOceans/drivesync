import { notFound } from "next/navigation"
import { allAuthors, allBlogs, allTags } from "@/../.contentlayer/generated"

import "@/styles/mdx.css"

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SiteConfig from "@/siteConfig"
import { ChevronLeft } from "lucide-react"

import { cn, formatDate } from "@/libs/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Mdx } from "@/components/mdx"
import BlogSEO from "@/components/seo/blog"

import SideNavigator from "./sideNavigator"

const hideTags = ["home"]

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allBlogs.find((post) => post?.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = SiteConfig.baseUrl

  const ogUrl = new URL(`${url}${post?.image}`)

  return {
    title: post?.title,
    description: post?.description,
    authors: post?.authors.map((author) => ({
      name: author,
    })),
    alternates: {
      canonical: `/blogs/${post?.slugAsParams}`,
    },
    openGraph: {
      title: post?.title,
      description: post?.description,
      type: "article",
      url: post?.slug,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
      authors: post?.authors,
      publishedTime: post?.date,
      modifiedTime: post?.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.description,
      images: [ogUrl.toString()],
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allBlogs.map((post) => ({
    slug: post?.slugAsParams.split("/"),
  }))
}

// hide the blogs tags that was designed to show in particular pages

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const authors = post?.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  )

  const tags = (post?.tags ?? [])
    .map((tag) => tag.toLowerCase())
    .filter((e) => {
      return !hideTags.includes(e!.toLowerCase())
    })
    .filter((e) => {
      return allTags.find((tag) => tag.slugAsParams === e)
    })
  const similarBlogs = allBlogs
    .filter((p) => {
      if (p.slugAsParams === post?.slugAsParams) return false
      const commonTags = p.tags?.filter((tag) => tags.includes(tag))?.length
      return commonTags
    })
    .slice(0, 2)

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

  return (
    <div className="relative mx-auto max-w-3xl p-0 md:p-6 md:py-10 rounded-xl">
      <article className="flex py-6 lg:py-10">
        <div className="py-8 w-full">
          <BlogSEO blog={post} />
          <div>
            {post?.date && (
              <time
                dateTime={post?.date}
                className="block text-sm text-muted-foreground"
              >
                Published on {formatDate(post?.date)}
              </time>
            )}
            <h1 className="font-heading mt-2 inline-block text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {post?.title}
            </h1>
            {authors?.length ? (
              <div className="w-full flex justify-between items-center">
                <div className="mt-4 flex space-x-4">
                  {authors.map((author: any) =>
                    author ? (
                      <Link
                        key={author._id}
                        target="_blank"
                        href={`https://twitter.com/${author.twitter}`}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Image
                          title={author.title}
                          src={author.avatar}
                          alt={author.title}
                          width={42}
                          height={42}
                          className="rounded-full border border-border"
                          priority
                        />
                        <div className="flex-1 text-left leading-tight">
                          <p className="font-medium">{author.title}</p>
                          <p className="text-[12px] text-muted-foreground">
                            @{author.twitter}
                          </p>
                        </div>
                      </Link>
                    ) : null
                  )}
                </div>
                <div className="hidden md:block">
                  <SideNavigator post={post} />
                </div>
              </div>
            ) : null}
          </div>
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap space-x-4">
              {tags.map((tag: any) => (
                <Link
                  key={tag}
                  href={`/blogs/tags/${tag}`}
                  className="cursor-pointer"
                >
                  <div className="text-base text-blue-800 dark:text-blue-400">
                    #{tag}
                  </div>
                </Link>
              ))}
            </div>
          )}
          {post?.image?.length && (
            <Image
              title={post?.title}
              loading="lazy"
              src={post?.image ?? ""}
              alt={post?.title}
              width={1200}
              height={628}
              className="my-4 rounded-md border bg-muted transition-colors sm:my-8"
            />
          )}
          {
            post?.body.code &&
            <Mdx code={post?.body.code} />
          }
          <hr className="mt-12" />
        </div>
      </article>
      {/* // show similar posts */}
      {similarBlogs.length > 0 && (
        <div className="max-w-5xl">
          <h2 className="font-heading text-2xl">You might also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {similarBlogs.map((post) => (
              <Link
                key={post?.slugAsParams}
                href={`/blogs/${post?.slugAsParams}`}
                as={`/blogs/${post?.slugAsParams}`}
              >
                <div className="flex flex-col space-y-2">
                  <Image
                    src={post?.image}
                    alt={post?.title}
                    width={1200}
                    height={628}
                  />
                  <time
                    dateTime={post?.date}
                    className="block text-sm text-muted-foreground"
                  >
                    Published on {formatDate(post?.date)}
                  </time>
                  <h3 className="font-heading text-xl">{post?.title}</h3>
                  <p className="text-muted-foreground">{post?.description}</p>
                </div>
                <div className="flex space-x-4 my-2">
                  {post?.authors.map((author) => {
                    const authorData = allAuthors.find(
                      ({ slug }) => slug === `/authors/${author}`
                    )
                    if (!authorData) return null
                    return (
                      <div
                        key={authorData._id}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Image
                          title={authorData.title}
                          src={authorData.avatar}
                          alt={authorData.title}
                          width={32}
                          height={32}
                          className="rounded-full bg-white"
                          priority
                        />
                        <div className="flex-1 text-left leading-tight">
                          <p className="font-medium ">{authorData.title}</p>
                          <p className="text-[12px] opacity-70">
                            @{authorData.twitter}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Link>
            ))}
          </div>
          <hr className="mt-12" />
        </div>
      )}
      <div className="hidden xl:block absolute top-14 left-[-200px]">
        <SeeAllBlogsBtn />
      </div>
      <div className="flex justify-center py-6 lg:py-10">
        <SeeAllBlogsBtn />
      </div>
    </div>
  )
}
