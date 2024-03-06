import React from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

import MaxWidthWrapper from "@/components/maxWidthWrapper"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"

import NotFoundAnimation from "./NotFoundAnimation"

interface IProps {
  title?: string
  link?: {
    title: string
    href: string
  }
  message?: string
  children?: React.ReactNode
}

export default function Custom404(props: IProps) {
  return (
    <MaxWidthWrapper>
      <div className="h-screen w-full flex flex-col items-center justify-center gap-y-4 py-12">
        <div className="text-center flex flex-col gap-y-4">
          <NotFoundAnimation />
          <Heading variant={"h1"}>{props.title ?? "Page Not Found"}</Heading>
          <p>
            {props.message ??
              "The page you are looking for might have been removed or is not available."}
          </p>
        </div>
        {props.children && <div>{props.children}</div>}
        {!props.children && (
          <div className="flex items-center justify-center flex-col gap-y-3">
            <Link href={props.link?.href ?? "/"}>
              <Button startIcon={<ChevronLeft />} size={"lg"}>
                {props.link?.title ?? "Go Home Page"}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </MaxWidthWrapper>
  )
}
