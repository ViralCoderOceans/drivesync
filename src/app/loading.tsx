"use client"

import React from 'react'
import { isMobile } from 'react-device-detect'
import { Player as LottiePlayer } from "@lottiefiles/react-lottie-player"

export default function Loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div>
        <div className=''>
          <LottiePlayer
            autoplay
            loop
            src="/assets/gifs/loading.json"
            style={{ width: `${isMobile ? "75px" : "100px"}` }}
          />
        </div>
      </div>
    </div>
  )
}
