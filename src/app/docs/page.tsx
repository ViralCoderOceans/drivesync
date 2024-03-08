"use client"

import React from 'react'
import { allDocs } from '@/../.contentlayer/generated';
import BackToHomeButton from '@/components/BackToHomeButton';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation'

const DocsPage = () => {
  const router = useRouter()
  return (
    <div className="w-full relative mx-auto max-w-3xl p-0 md:p-6 md:py-10 rounded-xl">
      <h1 className="mb-6 text-4xl font-bold">Legal</h1>
      <hr className="my-6 bg-zinc-400 h-[1px] border-0" />
      <div className="flex flex-col gap-y-6">
        {
          allDocs?.map((elm) => (
            <div
              onClick={() => router.push(elm.url)}
              key={elm._id}
              className="p-4 flex justify-between items-center hover:bg-zinc-200/30 rounded-xl hover:backdrop-blur-sm cursor-pointer transition-all"
            >
              <h2>
                {elm.title}
              </h2>
              <ChevronRight />
            </div>
          ))
        }
      </div>
      <hr className="my-6 bg-zinc-400 h-[1px] border-0" />
      <BackToHomeButton />
    </div>
  );
}

export default DocsPage