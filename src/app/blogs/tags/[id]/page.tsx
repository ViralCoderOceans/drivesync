import React from "react"
import { Metadata } from "next"
import { allBlogs, allTags } from "@/../.contentlayer/generated"
import SiteConfig from "@/siteConfig"

import { getFullUrl } from "@/libs/utils"
import BlogsComponent from "@/components/blogs"
import BackToHomeButton from '@/components/BackToHomeButton';

interface PostPageProps {
  params: {
    id?: string
  }
}

const hideTags = ["home"]
export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  const tags = allBlogs
    .map((post) => post?.tags)
    .flat()
    .map((e) => e)
    .filter((e) => {
      return !hideTags.includes(e!.toLowerCase())
    })
  // remove home
  // remove duplicates
  return tags.map((tag) => ({ id: tag }))
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const tag = allTags.find((_tag) => _tag.slugAsParams === params.id)
  if (!tag) {
    return {}
  }

  const url = SiteConfig.baseUrl
  const ogUrl = new URL(`${url}${tag.image}`)

  return {
    title: tag.title,
    description: tag.description,
    alternates: {
      canonical: `/blogs/tags/${tag.slugAsParams}`,
    },
    openGraph: {
      title: tag.title,
      description: tag.description,
      type: "website",
      url: getFullUrl(`/blogs/tags/${tag.slugAsParams}`),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: tag.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tag.title,
      description: tag.description,
      images: [ogUrl.toString()],
    },
  }
}

export default function BlogsByTag(props: PostPageProps) {
  const tag = decodeURI(props.params.id || "")
  const tagData = allTags.find((_tag) => _tag.slugAsParams === props.params.id)
  if (!tagData) {
    return null
  }
  return (
    <div className="relative mx-auto max-w-3xl p-0 md:p-6 md:py-10 rounded-xl">
      <BlogsComponent title={tagData.title} isPage tags={[tag]} />
      <BackToHomeButton />
    </div>
  )
}
