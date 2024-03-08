"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react';

const BackToHomeButton = () => {
  const router = useRouter()
  return (
    <>
      <div className="hidden xl:block absolute top-14 left-[-200px]">
        <div className="flex justify-center items-center">
          <Button
            onClick={() => router.back()}
            className="flex gap-2 animate-fade-in w-full md:w-fit rounded-lg px-4 py-1.5 text-base text-black font-medium bg-transparent hover:bg-transparent"
          >
            <ChevronLeft className="h-5 w-5" />
            Go back
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          onClick={() => router.back()}
          className="flex gap-2 animate-fade-in w-full md:w-fit rounded-lg px-4 py-1.5 text-base text-black font-medium bg-transparent hover:bg-transparent"
        >
          <ChevronLeft className="h-5 w-5" />
          Go back
        </Button>
      </div>
    </>
  )
}

export default BackToHomeButton