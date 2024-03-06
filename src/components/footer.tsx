"use client"

import Link from "next/link"

import MaxWidthWrapper from "@/components/maxWidthWrapper"
import { usePathname } from "next/navigation"
import data from "../config/webData.json"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

interface IItem {
  name: string
  href: string
}

const navigation: {
  [key: string]: { name: string; href: string }[]
} = {
  product: [
    // { name: "Pricing", href: "/pricing" },
    // { name: "Help Center", href: "/help" },
  ],
  company: [
    { name: "Blogs", href: "/blogs" },
    // { name: "About", href: "/about" },
  ],
  tools: [],
  legal: [
    { name: "Privacy Policy", href: "/docs/privacy-policy" },
    { name: "Terms Of Services", href: "/docs/terms-of-service" },
  ],
}

export default function Footer() {
  const pathname = usePathname()

  if (pathname === "/login" || pathname === "/register") return null

  const IItemList = (props: { title: string; items: IItem[] }) => {
    const { title, items } = props
    if (!items.length) return <></>
    return (
      <div>
        <h3 className="text-sm font-light text-muted-foreground">{title}</h3>
        <ul role="list" className="mt-4 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <footer className="border-t border-border bg-background py-8 backdrop-blur-lg">
      <MaxWidthWrapper className="pt-10">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8 xl:col-span-2">
            <Link href="/" className="flex gap-x-2 items-center">
              <span className="sr-only">{`${data?.shortName} logo`}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={data?.logo}
                style={{
                  height: "60px",
                }}
                alt={data?.title}
              />
              <h2 className="text-xl font-semibold md:text-2xl md:font-bold">{data?.shortName}</h2>
            </Link>
            <p className="max-w-xs text-sm text-foreground">
              {data?.seo.description}
            </p>
            <div className="flex items-center space-x-2">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-md p-2 transition-colors border border-transparent hover:border-border"
              >
                <span className="sr-only">Twitter</span>
                <TwitterLogoIcon className="h-5 w-5 " />
              </a>
              <div className="h-8 border-l border-muted-foreground" />
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-md p-2 transition-colors border border-transparent hover:border-border"
              >
                <span className="sr-only">Github</span>
                <GitHubLogoIcon className="h-5 w-5" />
              </a>
              <div className="h-8 border-l border-muted-foreground" />
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-md p-2 transition-colors border border-transparent hover:border-border"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedInLogoIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:col-span-3 xl:mt-0">
            <IItemList title="Product" items={navigation.product} />
            <IItemList title="Company" items={navigation.company} />
            <IItemList title="Tools" items={navigation.tools} />
            <IItemList title="Legal" items={navigation.legal} />
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-10 lg:mt-12">
          <p className="text-sm leading-5 w-full text-center">
            © {new Date().getFullYear()} {data?.organization?.name}. All rights
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
