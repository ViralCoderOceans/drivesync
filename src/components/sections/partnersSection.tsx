import React from "react";
import BreakLine from "@/components/breakLine";
import { cn } from "@/libs/utils";
import Link from "next/link";

const PartnersSection = ({ data: { order, headingText, subText, partners, bgColor, textColor } }: { data: any }) => {
  return (
    <section
      style={{ backgroundColor: bgColor }}
    >
      <article
        className={cn("container px-4 max-w-[1320px] py-[60px] md:py-[100px] lg:py-[120px] flex flex-col items-center justify-center", {
          "lg:pt-[8vw]": order === 1
        })}
      >
        <h2
          className="text-center text-[32px] md:text-[45px] lg:text-6xl font-semibold text-neutral mb-5"
          style={{ color: textColor }}
        >
          <BreakLine text={headingText} />
        </h2>
        {
          subText?.length > 0 &&
          <>
            <p
              className="sm:hidden text-neutral max-w-[330px] text-sm text-center"
              style={{ color: textColor }}
            >
              {subText.join(' ') ?? ''}
            </p>
            <p
              className="hidden sm:block text-neutral text-sm text-center sm:text-lg"
              style={{ color: textColor }}
            >
              <BreakLine text={subText} />
            </p>
          </>
        }
        <section className="mt-[24px] md:mt-[36px] lg:mt-[60px] container relative w-full place-content-center flex flex-wrap items-center justify-center gap-[35px]">
          {
            partners && <>
              {
                partners.map((elm: any) => (
                  <div key={`partners-${elm.id}`} className="flex justify-center col-span-4 md:col-span-2">
                    {
                      elm.imgSrc.length > 0
                        ? <Link
                          href={elm.redirect}
                          target="_blank"
                        >
                          <img
                            className="object-cover h-[44px] md:h-[75px]"
                            src={elm.imgSrc}
                            alt={elm.imgAlt}
                          />
                        </Link>
                        : <h3 className="text-3xl font-bold text-[#0e7dc2]">COMPANY-LOGO</h3>
                    }

                  </div>
                ))
              }
            </>
          }
        </section>
      </article>
    </section>
  );
};

export default PartnersSection;
