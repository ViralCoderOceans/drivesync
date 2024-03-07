import Link from "next/link";
import { cn } from "@/libs/utils";
import MobileNav from "./nav-mobile";
import data from "../config/webData.json"
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <>
      <MobileNav />
      <div
        className="fixed inset-x-0 top-0 z-30 w-full h-[70px] md:h-[100px] lg:h-[120px] transition-all flex items-center border-b border-white/50"
        style={{ backgroundColor: data?.landingPageData?.navbar?.bgColor }}
      >
        <div className="w-full container">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href={"/#home"} className="flex items-center gap-2 md:gap-3">
                <img
                  width="64"
                  height="64"
                  className="w-[31px] h-[31px] md:w-[64px] md:h-[64px]"
                  src={data?.landingPageData?.logo?.imgSource ?? "/assets/icons/driveSync.svg"}
                  alt={data?.shortName}
                  title={`${data?.shortName}'s logo`}
                  loading="eager"
                />
                <h2
                  className="text-xl font-medium md:text-2xl md:font-semibold"
                  style={{ color: data?.landingPageData?.navbar?.textColor }}
                >
                  {data?.landingPageData?.logo?.name ?? 'DriveSync'}
                </h2>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="hidden items-center space-x-3 lg:flex">
                {
                  data?.landingPageData?.navbar?.menus && <>
                    {data?.landingPageData?.navbar?.menus?.map(({ id, name, slug }: { id: any, name: any, slug: any }) => (
                      <Link
                        key={id}
                        href={slug}
                        className="z-10 rounded-full px-4 py-1.5 text-sm font-medium capitalize text-white transition-colors ease-out hover:text-gray-200"
                      >
                        {name}
                      </Link>
                    ))}
                  </>
                }
                {
                  data?.landingPageData?.navbar?.button?.text?.length > 0 &&
                  <Link
                    href={data?.landingPageData?.navbar?.button?.redirect}
                  >
                    <Button
                      className="h-12 py-2 px-6 text-base"
                      style={{
                        backgroundColor: data?.landingPageData?.navbar?.button?.bgColor,
                        color: data?.landingPageData?.navbar?.button?.textColor
                      }}
                      variant="default"
                    >
                      {
                        data?.landingPageData?.navbar?.button?.text
                      }
                    </Button>
                  </Link>
                }
                {
                  data?.landingPageData?.navbar?.partnersLogo?.length > 0 &&
                  <div className="flex items-center gap-6 pl-4 border-l">
                    {
                      data?.landingPageData?.navbar?.partnersLogo.map((partner) => (
                        <Link
                          key={partner.id}
                          href={partner.redirect}
                        >
                          <img
                            height="50px"
                            width="150px"
                            className="h-[50px]"
                            src={partner.logoSrc}
                            alt={partner.alt}
                          />
                        </Link>
                      ))
                    }
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
