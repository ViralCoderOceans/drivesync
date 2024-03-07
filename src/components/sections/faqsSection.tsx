"use client";

import React, { useMemo, useState } from "react";
import FAQsCollapsibleComponent from "../faqsCollapsibleComponent";
import Link from "next/link";
import { cn } from "@/libs/utils";
import BreakLine from "../breakLine";
import { Button } from "@/components/ui/button";

const FAQsSection = ({
  data: {
    order,
    headingText,
    subText,
    shinyText,
    FAQs,
    bgColor,
    textColor,
    subTextColor,
    accordionBgColor,
    activatedAccordionBorderColor,
    deactivatedAccordionBorderColor,
    loadMoreBtnText,
    loadMoreBtnBgColor,
    loadMoreBtnTextColor
  }
}: {
  data: any
}) => {
  const [isLoadMore, setIsLoadMore] = useState(false)

  const sortedFAQs = useMemo(() => {
    let leftSide = [] as any[]
    let rightSide = [] as any[]
    FAQs.map((elm: any, index: any) => {
      if ((index + 1) % 2 === 0) {
        rightSide.push(elm)
      } else {
        leftSide.push(elm)
      }
    })
    return {
      leftSide,
      rightSide
    }
  }, [FAQs]);

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
        <div className="flex w-full mt-6 md:mt-10 lg:mt-[60px] flex-col lg:flex-row gap-0 lg:gap-10">
          <div className="h-fit flex flex-wrap w-full lg:w-1/2">
            {sortedFAQs.leftSide.map((elm, index) => (
              <div className="w-full" key={`left-${sortedFAQs.leftSide.indexOf(elm)}`}>
                <FAQsCollapsibleComponent
                  textColor={textColor}
                  accordionBgColor={accordionBgColor}
                  activatedAccordionBorderColor={activatedAccordionBorderColor}
                  deactivatedAccordionBorderColor={deactivatedAccordionBorderColor}
                  faq={elm}
                  isLoadMore={isLoadMore}
                />
              </div>
            ))}
          </div>
          <div className="h-fit flex flex-wrap w-full lg:w-1/2">
            {sortedFAQs.rightSide.map((elm, index) => (
              <div className="w-full" key={`right-${sortedFAQs.rightSide.indexOf(elm)}`}>
                <FAQsCollapsibleComponent
                  textColor={textColor}
                  accordionBgColor={accordionBgColor}
                  activatedAccordionBorderColor={activatedAccordionBorderColor}
                  deactivatedAccordionBorderColor={deactivatedAccordionBorderColor}
                  faq={elm}
                  isLoadMore={isLoadMore}
                />
              </div>
            ))}
          </div>
        </div>
        <Button
          className="block lg:hidden mt-2 h-auto py-2.5 px-6 text-lg font-normal"
          style={{
            backgroundColor: loadMoreBtnBgColor,
            color: loadMoreBtnTextColor
          }}
          onClick={() => setIsLoadMore(!isLoadMore)}
          variant="default"
        >
          {isLoadMore ? loadMoreBtnText[1] : loadMoreBtnText[0]}
        </Button>
      </article>
    </section>
  );
};

export default FAQsSection;
