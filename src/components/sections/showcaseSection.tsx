import React from "react";
import BreakLine from "@/components/breakLine";
import { cn } from "@/libs/utils"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CustomIframe from "@/components/customIframe";
import Marquee from "react-fast-marquee";

const ShowcaseSection = ({
  data: {
    order,
    logo,
    headingText,
    subText,
    bottomText,
    youtubeVideoLink,
    securityBadges,
    clients,
    bgGradient,
    textColor,
    subTextColor,
    marqueeSpeed,
    isMarqueePauseOnHover
  }
}: {
  data: any
}) => {
  return (
    <>
      <section
        className={cn("pt-[60px] md:pt-[100px] lg:pt-[120px] flex flex-col gap-[80px] lg:gap-0 items-center justify-center", {
          "lg:pt-[8vw]": order === 1
        })}
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${bgGradient[0]} 0%, ${bgGradient[1]} 100%)` }}
      >
        <div
          className="container max-w-[1152px] flex flex-col items-center text-center gap-y-[30px]"
          style={{ color: textColor }}
        >
          <Link
            href={logo.redirect}
            target="_blank"
          >
            <Button
              className="h-auto p-[10px] md:p-[20px] lg:py-[20px] lg:px-[40px] text-base"
              style={{
                backgroundColor: logo.bgColor,
              }}
              variant="default"
            >
              <img
                height="33px"
                width="150px"
                className="h-[20px] md:h-[33px]"
                src={logo.src}
                alt={logo.imgAlt}
              />
            </Button>
          </Link>
          <h1 className="text-[28px] sm:leading-[36px] lg:text-[64px] lg:leading-[83.2px] font-semibold">
            <BreakLine text={headingText} />
          </h1>
          <p
            className="text-neutral text-xs text-center lg:text-base lg:leading-[25.6px]"
            style={{ color: subTextColor }}
          >
            {subText}
          </p>
          <div className="mt-4 md:mt-6 lg:mt-10 p-[10px] md:p-[20px] lg:p-[30px] border border-[#FFFFFF]/50 bg-[#FFFFFF]/30 rounded-[12px] lg:rounded-[24px] w-full">
            <CustomIframe youtubeVideoLink={youtubeVideoLink} />
          </div>
          <p
            className="text-neutral text-xs text-center lg:text-base lg:leading-[25.6px]"
            style={{ color: subTextColor }}
          >
            {bottomText}
          </p>
          {
            securityBadges.length > 0 &&
            <div className="w-full pb-10 pt-0 md:py-8 lg:py-14 flex items-center justify-evenly">
              {
                securityBadges.map((badges: any) => (
                  <div key={badges.id}>
                    <img
                      height="1024px"
                      width="1024px"
                      className="w-[74px] h-[74px] lg:w-[150px] lg:h-[150px]"
                      src={badges.src}
                      alt={badges.imgAlt}
                    />
                  </div>
                ))
              }
            </div>
          }
        </div>
      </section>
      <section className="bg-black border-t border-[#FFFFFF]/50">
        {
          clients.length > 0 &&
          <Marquee
            speed={marqueeSpeed}
            pauseOnHover={isMarqueePauseOnHover}
          >
            <div className="w-full p-6 md:py-8 lg:py-14 flex flex-wrap items-center gap-8 lg:gap-10 justify-center bg-[#FFFFFF]/10">
              {
                clients.map((client: any) => (
                  <div key={client.id}>
                    <img
                      height="45px"
                      className="h-[26px] lg:h-[45px]"
                      src={client.src}
                      alt={client.imgAlt}
                    />
                  </div>
                ))
              }
            </div>
          </Marquee>
        }
      </section>
    </>
  );
};

export default ShowcaseSection;