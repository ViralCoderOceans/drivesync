"use client"

import React from 'react'

const CustomIframe = ({ youtubeVideoLink }: { youtubeVideoLink: string }) => {
  return (
    <div className="rounded-[10px] lg:rounded-[20px] overflow-hidden w-full h-[200px] md:h-[400px] lg:h-[573px]">
      <iframe className='w-full h-full object-cover' src={youtubeVideoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default CustomIframe
