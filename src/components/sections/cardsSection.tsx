import React from "react";
import BreakLine from "@/components/breakLine";
import { Card } from "../ui/card";
import { cn } from "@/libs/utils";

const CardsSection = ({
  data: {
    order,
    headingText,
    subText,
    cards,
    bgColor,
    textColor,
    subTextColor,
    cardSubTextColor,
    cardBgColor,
    cardBorderColor,
    cardsType,
    iconBgColor,
    iconBorderColor
  } }: {
    data: any
  }) => {
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
              className="sm:hidden text-neutral text-xs text-center lg:text-base lg:leading-[25.6px]"
              style={{ color: subTextColor }}
            >
              {subText.join(' ') ?? ''}
            </p>
            <p
              className="hidden sm:block text-neutral text-xs text-center lg:text-base lg:leading-[25.6px]"
              style={{ color: subTextColor }}
            >
              <BreakLine text={subText} />
            </p>
          </>
        }
        <section className="mt-[24px] md:mt-[36px] lg:mt-[60px] relative w-full flex flex-wrap flex-col items-center lg:items-stretch place-content-center lg:flex-row gap-[10px] md:gap-[20px]">
          {
            cards.length > 0 &&
            <>
              {
                cardsType === "largeImage" &&
                <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-10">
                  {
                    cards.map((elm: any) => (
                      <div key={`card-${elm.number}`} className={`col-span-2 ${elm.isFullWidth ? "lg:col-span-2" : "lg:col-span-1"} flex justify-center`}>
                        <Card
                          className={`w-full flex-col ${elm.isFullWidth ? "lg:flex-row gap-4 md:gap-6 lg:gap-10" : ""} p-4 md:p-5 lg:p-6 w-full flex rounded-[12px] lg:rounded-[24px] shadow-none`}
                          style={{ backgroundColor: cardBgColor, borderColor: cardBorderColor }}
                        >
                          <div className={`${elm.isFullWidth ? "lg:order-2 lg:w-1/2 lg:pl-10" : "order-1 pb-4 md:pb-5 lg:pb-6"}`}>
                            <img
                              className="rounded-[12px] lg:rounded-[24px] object-cover h-auto w-full lg:w-auto md:h-[280px] lg:h-[380px]"
                              src={elm.imgSource}
                              alt={elm.imgAlt}
                            />
                          </div>
                          <div className={`w-full justify-between ${elm.isFullWidth ? "lg:order-1 lg:justify-center lg:w-1/2" : "order-2"} flex-1 flex flex-col gap-y-3 lg:gap-y-4`}>
                            <h3
                              className="w-full text-[20px] md:text-[30px] lg:text-[40px] font-semibold"
                              style={{ color: textColor }}
                            >
                              {elm.number}. {elm.heading}
                            </h3>
                            <p
                              className="text-[12px] md:text-[18px] lg:text-[24px] text-[#4A4C56]"
                              style={{ color: cardSubTextColor }}
                            >
                              {elm.subText}
                            </p>
                          </div>
                        </Card>
                      </div>
                    ))
                  }
                </div>
              }
              {
                cardsType === "smallIcon" &&
                <div className="grid grid-cols-3 gap-[20px] lg:gap-[32px]">
                  {
                    cards.map((elm: any) => (
                      <div key={`card-${elm.number}`} className="col-span-3 lg:col-span-1 flex justify-center">
                        <Card
                          className="w-full flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 p-6 lg:p-8 flex rounded-[12px] lg:rounded-[16px] shadow-none"
                          style={{ backgroundColor: cardBgColor, borderColor: cardBorderColor }}
                        >
                          <div
                            className="rounded-[8px] p-4 w-fit"
                            style={{ backgroundColor: iconBgColor }}
                          >
                            <img
                              className="object-cover h-[24px] md:h-[36px] lg:h-[48px]"
                              src={elm.imgSource}
                              alt={elm.imgAlt}
                            />
                          </div>
                          <div className="w-full flex-1 flex flex-col gap-y-3 lg:gap-y-4">
                            <h3
                              className="w-full text-[20px] md:text-[24px] lg:text-[32px] font-semibold"
                              style={{ color: textColor }}
                            >
                              {elm.heading}
                            </h3>
                            <p
                              className="text-[12px] lg:text-[16px] text-[#4A4C56]"
                              style={{ color: cardSubTextColor }}
                            >
                              {elm.subText}
                            </p>
                          </div>
                        </Card>
                      </div>
                    ))
                  }
                </div>
              }
              {
                cardsType === "withoutBg" &&
                <div className="grid grid-cols-3 gap-[20px] lg:gap-[32px]">
                  {
                    cards.map((elm: any) => (
                      <div key={`card-${elm.number}`} className="col-span-3 lg:col-span-1">
                        <Card
                          className="w-full flex-col gap-y-4 md:gap-y-6 lg:gap-y-8 p-6 lg:p-8 flex rounded-[12px] lg:rounded-[16px] shadow-none border-none"
                        >
                          <div
                            className="rounded-[8px] py-3 px-4 w-fit border-[0.5px] self-center"
                            style={{ backgroundColor: iconBgColor, borderColor: iconBorderColor }}
                          >
                            <img
                              className="object-cover h-[24px] md:h-[36px] lg:h-[48px]"
                              src={elm.imgSource}
                              alt={elm.imgAlt}
                            />
                          </div>
                          <div className="w-full flex-1 flex flex-col gap-y-3 lg:gap-y-4">
                            <h3
                              className="w-full text-center text-[20px] md:text-[24px] lg:text-[32px] font-semibold"
                              style={{ color: textColor }}
                            >
                              {elm.heading}
                            </h3>
                            <p
                              className="text-center text-[12px] lg:text-[16px] text-[#4A4C56]"
                              style={{ color: cardSubTextColor }}
                            >
                              {elm.subText}
                            </p>
                          </div>
                        </Card>
                      </div>
                    ))
                  }
                </div>
              }
            </>
          }
        </section>
      </article>
    </section>
  );
};

export default CardsSection;
