import React from "react"
import { Blogs, allAuthors } from "@/../.contentlayer/generated"
import SiteConfig from "@/siteConfig"
import { ArticleJsonLd, ImageJsonLd, SocialProfileJsonLd } from "next-seo"

import { getFullUrl } from "@/libs/utils"

interface IProps {
  blog: Blogs
}

const publisherLogo = getFullUrl("/icon-rounded.png")

export default function BlogSEO(props: IProps) {
  const { blog } = props
  const url = getFullUrl("/blogs/" + blog.slugAsParams)
  const authors = []
  for (let i = 0; i < blog.authors.length; i++) {
    const authorName = blog.authors[i]
    const author = allAuthors.find((author) => {
      return author.slugAsParams === authorName
    })
    if (author) {
      authors.push(author)
    }
  }

  return (
    <>
      <ImageJsonLd
        images={[
          {
            contentUrl: getFullUrl(blog.image),
            creator: {
              "@type": "Organization" as any,
              name: SiteConfig.organization.name,
            },
            creditText: SiteConfig.twitter.username,
            copyrightNotice: SiteConfig.twitter.username,
            license: "https://creativecommons.org/licenses/by/4.0/",
            acquireLicensePage: getFullUrl("/"),
          },
        ]}
        useAppDir={true}
      />
      {authors.map((author) => {
        return (
          <div key={author._id}>
            <SocialProfileJsonLd
              scriptId={`jsonld-${author._id}`}
              key={author._id}
              useAppDir={true}
              type={author._type as any}
              name={author.title}
              url={author.url}
              sameAs={[]}
            />
          </div>
        )
      })}
      <ArticleJsonLd
        useAppDir={true}
        url={url}
        title={blog.title}
        images={[getFullUrl(blog.image)]}
        datePublished={blog.date}
        dateModified={blog.date}
        authorName={authors.map((author) => {
          return {
            "@type": author?.type,
            name: author?.title,
            url: author?.url,
          }
        })}
        publisherName={SiteConfig.publisher}
        publisherLogo={
          {
            "@type": "ImageObject" as any,
            creator: {
              "@type": "Organization" as any,
              name: SiteConfig.organization.name,
            },
            creditText: SiteConfig.twitter.username,
            copyrightNotice: SiteConfig.organization.name,
            license: "https://creativecommons.org/licenses/by/4.0/",
            acquireLicensePage: getFullUrl("/"),
            url: publisherLogo,
          } as any
        }
        description={blog.description}
        isAccessibleForFree={true}
      />
    </>
  )
}
