"use client"

import React, { useState } from "react";
import BreakLine from "@/components/breakLine";
import { Card } from "../ui/card";
import { cn } from "@/libs/utils";
import * as Slider from '@radix-ui/react-slider';

const CostSavingCalculator = ({
  data: {
    order,
    headingText,
    subText,
    bgColor,
    textColor,
    subTextColor,
    cards,
    cardTextColor,
    cardBgColor,
    cardBorderColor,
    defaultSelectedFileCount,
    steps
  }
}: { data: any }) => {
  const [selectedFileCount, setSelectedFileCount] = useState(defaultSelectedFileCount)

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
          className={`text-center text-[32px] md:text-[45px] lg:text-6xl font-semibold text-neutral ${subText?.length > 0 ? "mb-5" : "mb-0"}`}
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
            <div className="flex justify-center items-center gap-[14px] md:gap-[30px] lg:gap-[60px]">
              {
                cards.map((elm: any) => (
                  <div key={`card-${elm.id}`} className="flex justify-center">
                    <Card
                      className="flex-col p-4 md:p-5 lg:p-6 flex rounded-[8px] lg:rounded-[12px] shadow-none w-[100px] md:w-[150px] lg:w-[250px]"
                      style={{ backgroundColor: cardBgColor, borderColor: cardBorderColor }}
                    >
                      <div className="w-full flex justify-center items-center gap-2 md:gap-3 lg:gap-4">
                        <img
                          className="object-cover h-[16px] lg:h-[38px]"
                          src={elm.iconSrc}
                          alt={elm.imgAlt}
                        />
                        <h3
                          className="text-[20px] md:text-[30px] lg:text-[40px] font-semibold"
                          style={{ color: textColor }}
                        >
                          {
                            selectedFileCount === 0
                              ? "0"
                              : <>
                                {
                                  elm.id === 'cost' &&
                                  steps[selectedFileCount - 1].costSaving
                                }
                                {
                                  elm.id === 'saveHours' &&
                                  steps[selectedFileCount - 1].hoursSaving
                                }
                              </>
                          }
                        </h3>
                      </div>
                      <div className="flex-1 flex justify-center gap-y-3 lg:gap-y-4">
                        <p
                          className="text-[12px] md:text-[18px] lg:text-[24px] text-[#4A4C56]"
                          style={{ color: cardTextColor }}
                        >
                          {elm.title}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))
              }
            </div>
          }
        </section>
        <div className="w-full flex justify-center items-center my-6 md:my-8 lg:my-[60px]">
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full lg:w-[900px] h-5"
            value={[selectedFileCount]}
            max={steps.length}
            step={1}
            onValueChange={(e) => setSelectedFileCount(e[0])}
          >
            <Slider.Track className="bg-[#4A4C56] relative grow rounded-full h-[8px] md:h-[11px]">
              <div className="absolute w-full flex justify-between items-center">
                {Array(steps.length + 1).fill(null).map((_: any, index: any) => (<div key={'marks-' + index} className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-[#FFFFFF]" />))}
              </div>
              <Slider.Range className="absolute bg-[#ffffff]/80 rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block cursor-pointer w-3 h-3 md:w-6 md:h-6 bg-white rounded-full hover:bg-violet3 focus:outline-none border border-[#A5A5AB] md:border-[#07080B] shadow-md md:shadow-none"
              aria-label="Volume"
            />
          </Slider.Root>
        </div>
        <div
          className="w-full lg:w-[900px] flex justify-evenly items-center gap-2.5 md:gap-5 lg:gap-10"
          style={{ color: textColor }}
        >
          {steps.map((elm: any, index: any) => (
            <div key={'count-description -' + index} className="text-center flex flex-col justify-center">
              <p className="mb-1 lg:mb-2 text-xs md:text-sm lg:text-lg font-normal md:font-medium lg:font-semibold">
                {elm.fileCountString}
              </p>
              <p className="text-xs md:text-base lg:text-2xl font-semibold">
                {elm.title.length > 0 ? elm.title : "Folder Creation Or File Sync"}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default CostSavingCalculator;
