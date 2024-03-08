"use client"

import Link from "next/link"

import data from "../config/webData.json"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: data.landingPageData.footer.bgColor,
        color: data.landingPageData.footer.textColor
      }}
    >
      <div className="container px-4 pb-4 lg:pb-9 max-w-[1320px] pt-[60px]">
        <div className="flex justify-between items-center gap-8">
          <div className="space-y-[12px] md:space-y-[20px] lg:space-y-[30px]">
            <Link href="/" className="flex gap-x-2 items-center">
              <span className="sr-only">{`${data?.shortName} logo`}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-8 md:h-12 lg:h-16"
                src={data?.logo}
                alt={data?.title}
              />
              <h2 className="text-base font-semibold md:text-2xl md:font-bold">{data?.shortName}</h2>
            </Link>
            {/* <div className="flex items-center gap-3 lg:gap-4">
              {
                data.landingPageData.footer.socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.redirect}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full p-1.5 bg-[#EEE4F5]/20 flex justify-center items-center"
                  >
                    <span className="sr-only">{social.id}</span>
                    <img
                      height="24px"
                      width="24px"
                      className="h-[12px] w-[12px] md:h-[18px] md:w-[18px] lg:h-[24px] lg:w-[24px]"
                      src={social.iconSrc}
                      alt={social.alt}
                    />
                  </a>
                ))
              }
            </div> */}
          </div>
          <div className="flex justify-end">
            <div className="space-y-[12px] md:space-y-[20px] lg:space-y-[30px]">
              <h2 className="text-base font-semibold md:text-2xl md:font-bold">Powered by</h2>
              <Link href="/" target="_blank" className="flex gap-x-2 items-center">
                <span className="sr-only">{`${data.landingPageData.footer.powerBy.logo} logo`}</span>
                <img
                  className="h-6 lg:h-8"
                  src={data.landingPageData.footer.powerBy.logo}
                  alt={data.landingPageData.footer.powerBy.companyName}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 lg:mt-9 pt-6 lg:pt-9 flex justify-center items-center gap-2">
          {
            data.landingPageData.footer.menus.length > 0 &&
            <div className="flex flex-wrap justify-end items-center gap-3 lg:gap-6">
              {
                data.landingPageData.footer.menus.map((menu) => (
                  <Link key={menu.id} href={menu.slug} target="_blank" className="text-[10px] lg:text-base font-normal">
                    {menu.name}
                  </Link>
                ))
              }
            </div>
          }
        </div>
        <div className="mt-6 lg:mt-9 border-t-[0.5px] border-[#E9E9EA]/50 pt-4 lg:pt-9 flex justify-center items-center gap-2">
          <p className={`text-[10px] lg:text-base text-gray-300 font-thin ${!(data.landingPageData.footer.menus.length > 0) && "w-full text-center"}`}>
            © {new Date().getFullYear()} {data?.organization?.name}. {data.landingPageData.footer.copyRightText}
          </p>
        </div>
      </div>
    </footer>
  )
}
