"use client"

import React from "react"
import { Player as LottiePlayer } from "@lottiefiles/react-lottie-player"

export default function NotFoundAnimation() {
  return (
    <div>
      <LottiePlayer
        autoplay
        loop
        src="/assets/gifs/notFound.json"
        style={{ width: "300px" }}
      />
    </div>
  )
}
