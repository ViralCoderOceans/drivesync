"use client";

import React from 'react'
import { format, parseISO } from 'date-fns'
import { useRouter } from 'next/navigation'

const BlogCard = ({ blog }: { blog: any }) => {
  const router = useRouter()
  return (
    <div
      key={`blog-${Math.random()}`}
      className="col-span-1 flex flex-col gap-y-3 cursor-pointer select-none"
      onClick={() => router.push(blog.url)}
    >
      <div className="w-full">
        <img width="1280" height="720" className="rounded-xl w-full" src={blog.thumbnail ?? "/images/blogs/blog-thumbnail.webp"} alt="Blog thumbnail" title="Blog thumbnail" loading="eager" />
      </div>
      <h2 className='w-full truncate'>{blog.title}</h2>
      <p>{blog.body.raw.slice(0, 150)}... Read more</p>
      <time dateTime={blog.date}>
        <p>{format(parseISO(blog.date), 'LLLL d, yyyy')}</p>
      </time>
    </div>
  )
}

export default BlogCard