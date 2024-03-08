import React from "react"
import Image from "next/image"
import Link from "next/link"
import { allAuthors, allBlogs } from "@/../.contentlayer/generated"

import { cn, formatDate } from "@/libs/utils"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/heading"

interface IProps {
  isPage?: boolean
  tags?: string[]
  title?: string
  des?: string
  noTitle?: boolean
  noDescription?: boolean
  horizontal?: boolean
  limit?: number
  noMargin?: boolean
}

export default function BlogsComponent(props: IProps) {
  const isPage = props.isPage ?? false
  const posts = allBlogs.filter((post) => {
    if (!props.tags) return true
    if (props.tags.length === 0) return true
    return post.tags?.some((tag) => props.tags?.includes(tag))
  })
  if (posts.length === 0) return <></>
  if (props.limit) posts.splice(props.limit)
  return (
    <div
      id="blogs"
      className={cn("mx-auto", { "max-w-5xl  pb-6 pt-8": !props.noMargin })}
    >
      <div className="col-span-1 sm:col-span-2">
        {!props.noTitle && (
          <Heading variant={isPage ? "h1" : "h2"} className="capitalize">
            {props.title ?? "Latest Articles"}
          </Heading>
        )}
        {!props.noDescription && (
          <p className="text-lg text-muted-foreground">
            {props.des ?? "Learn more about how to use  app"}
          </p>
        )}
      </div>
      <div
        className={cn("my-6 ", {
          "my-0": props.noTitle && props.noDescription && props.noMargin,
          "grid gap-y-4 sm:gap-y-10 my-6 sm:my-12": !props.horizontal,
          "flex flex-wrap my-1.5 sm:my-3":
            props.horizontal,
        })}
      >
        {posts.map((post, index) => {
          const authors = post.authors.map((author) =>
            allAuthors.find(({ slug }) => slug === `/authors/${author}`)
          )
          return (
            <article
              key={post._id}
              className={cn(
                "group relative flex gap-1 sm:flex-row sm:gap-x-3 sm:gap-y-4 p-3",
                {
                  "flex-col sm:flex-col w-full md:w-[50%]": props.horizontal,
                  "flex-col sm:flex-row ": !props.horizontal,
                }
              )}
            >
              {post.image && (
                <Image
                  title={post.title}
                  loading="lazy"
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={209.33}
                  className="rounded-md object-cover object-top transition-colors"
                />
              )}
              <div className="flex flex-col gap-y-1.5 sm:gap-y-2.5">
                <h2
                  className={cn("font-extrabold", {
                    "text-sm line-clamp-1 max-w-sm": props.horizontal,
                    "text-2xl": !props.horizontal,
                  })}
                >
                  {post.title}
                </h2>
                {!props.horizontal && authors?.length ? (
                  <div className="hidden space-x-4 sm:flex ">
                    {authors.map((author) =>
                      author ? (
                        <Link
                          key={author._id}
                          href={`https://twitter.com/${author.twitter}`}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <Image
                            title={author.title}
                            loading="lazy"
                            src={author.avatar}
                            alt={author.title}
                            width={28}
                            height={28}
                            className="rounded-full bg-white"
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
                ) : null}
                {!props.horizontal && post.description && (
                  <p className="text-muted-foreground">{post.description}</p>
                )}
                {post.date && (
                  <p className="text-sm text-muted-foreground">
                    <b>{formatDate(post.date)}</b>
                  </p>
                )}
                <Link href={post.slug}>
                  <Button
                    variant={"outline"}
                    size={"sm"}
                    className="rounded-full"
                  >
                    <span>View Article</span>
                  </Button>
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
