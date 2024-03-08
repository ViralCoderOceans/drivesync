"use client"

import React, { useEffect, useState } from 'react'
import '@/styles/mdx.css'
import { allDocs } from '@/../.contentlayer/generated';
import { format, parseISO } from 'date-fns'
import BackToHomeButton from '@/components/BackToHomeButton';
import { useParams, usePathname } from 'next/navigation';

interface Doc {
  _id?: any;
  _raw?: any;
  type?: "Docs";
  title?: any;
  date?: any;
  thumbnail?: any;
  body?: any;
  url?: any;
}

const DocsPage = () => {
  const { doc } = useParams()
  const active_path = usePathname()
  const [crrDoc, setCrrDoc] = useState<Doc | null>(null);

  useEffect(() => {
    setCrrDoc({ ...allDocs.find((elm: any) => elm.url === `/docs/${doc}`) })
  }, [allDocs, doc])

  if (crrDoc === null) return null

  return (
    <>
      <head>
        <link rel='canonical' href={`${process.env.NEXT_PUBLIC_SITE_URL}${active_path}`} />
        <title>{`${crrDoc?.title} | Documentation`}</title>
      </head>
      <div className="w-full md:max-w-3xl relative mx-auto p-0 md:p-10 rounded-xl">
        {
          crrDoc?.title?.length > 0 &&
          <h1 className="mb-8 text-4xl font-bold">{crrDoc?.title}</h1>
        }
        <div className="mdx-editor-container" dangerouslySetInnerHTML={{ __html: crrDoc?.body?.html }} />
        {
          crrDoc?.date?.length > 0 &&
          <time dateTime={crrDoc?.date}>
            <span className="mr-1 font-semibold">Last updated:</span>{format(parseISO(crrDoc?.date), 'LLLL d, yyyy')}
          </time>
        }
        <hr className="my-6 bg-zinc-400 h-[1px] border-0" />
        <BackToHomeButton />
      </div>
    </>
  );
}

export default DocsPage