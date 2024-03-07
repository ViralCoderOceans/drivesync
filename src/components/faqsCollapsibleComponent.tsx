"use client"

import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { isMobile } from "react-device-detect";

const FAQsCollapsibleComponent = ({ faq, isLoadMore, textColor, accordionBgColor, activatedAccordionBorderColor, deactivatedAccordionBorderColor }: { faq: any, isLoadMore: boolean, textColor: string, accordionBgColor: string, activatedAccordionBorderColor: string, deactivatedAccordionBorderColor: string }) => {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible
      className={`w-full rounded-[8px] lg:rounded-[12px] p-3 lg:p-4 border-[0.5px] mb-4 ${!isLoadMore ? faq.number <= 5 ? "block" : "hidden" : "block"} lg:block`}
      open={open}
      onOpenChange={setOpen}
      style={{ backgroundColor: accordionBgColor, borderColor: open ? activatedAccordionBorderColor : deactivatedAccordionBorderColor }}
    >
      <CollapsibleTrigger className="w-full flex">
        <div className="w-full flex justify-between item-center gap-2 lg:min-h-[48px]">
          <h3
            className="font-semibold text-xs md:text-base lg:text-[20px] text-left self-center leading-[16px] lg:leading-[24px]"
            style={{ color: textColor }}
          >
            {faq.question}
          </h3>
          <div className={`h-fit rounded-full p-[3px] lg:p-1 ${open ? "bg-[#D2D2D5]" : "bg-none"} border border-[#D2D2D5] self-center`}>
            {open
              ? <ChevronUp className="h-[10px] md:h-[15px] lg:h-[20px] w-[10px] md:w-[15px] lg:w-[20px]" />
              : <ChevronDown className="h-[10px] md:h-[15px] lg:h-[20px] w-[10px] md:w-[15px] lg:w-[20px]" />
            }
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="">
        <p className="text-xs lg:text-base font-normal leading-normal text-justify mt-3 text-zinc-500">
          {faq.answer}
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FAQsCollapsibleComponent;
