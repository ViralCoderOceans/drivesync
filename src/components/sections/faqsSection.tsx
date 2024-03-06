"use client";

import React, { useMemo } from "react";
import CollapsibleComponent from "../collapsibleComponent";
import Link from "next/link";

const FAQsSection = ({ data: { headingText, subText, shinyText, FAQs } }: { data: any }) => {
  const sortedFAQs = useMemo(() => {
    let leftSide = [] as any[]
    let rightSide = [] as any[]
    FAQs.map((elm : any, index : any) => {
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
    <article className="flex items-center flex-col w-full gap-5">
      <h2 className="text-2xl sm:text-3xl text-center font-extrabold text-neutral">
        {headingText ?? "FAQs"}
      </h2>
      <p className="text-neutral text-sm text-center sm:text-base max-w-[550px] ">
        {subText ?? ""}
        <Link href={shinyText?.redirect ?? '/#home'}  className="ml-1.5 font-semibold animate-text cursor-pointer text-transparent bg-clip-text bg-[length:250%_100%] bg-[linear-gradient(110deg,#1e293b,45%,#e2e8f0,55%,#1e293b)] opacity-90">
          {shinyText?.text ?? "reach out"}
        </Link>
      </p>
      <div className="w-full mt-10 md:mt-16 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
        <div className="h-fit flex flex-wrap gap-y-6 w-full lg:w-1/2">
          {sortedFAQs.leftSide.map((elm) => (
            <div className="w-full" key={`left-${sortedFAQs.leftSide.indexOf(elm)}`}>
              <CollapsibleComponent faq={elm} />
            </div>
          ))}
        </div>
        <div className="h-fit flex flex-wrap gap-y-6 w-full lg:w-1/2">
          {sortedFAQs.rightSide.map((elm) => (
            <div className="w-full" key={`right-${sortedFAQs.rightSide.indexOf(elm)}`}>
              <CollapsibleComponent faq={elm} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default FAQsSection;
