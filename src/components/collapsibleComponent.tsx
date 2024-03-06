"use client"

import React, {useState} from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const CollapsibleComponent = ({faq} : {faq: any }) => {
  const [open, setOpen] = useState(false)
  return (
    <Collapsible className="w-full" open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="w-full lg:min-h-[56px] flex">
        <div className="w-full flex justify-between item-center gap-2">
          <h3 className="font-semibold text-gray-900 text-base lg:text-lg text-left">
            {faq.question}
          </h3>
          <span className="min-w-[24px]">{open ? <ChevronUp/> :<ChevronDown />}</span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="lg:min-h-[115px]">
        <p className="text-[15px] leading-normal text-justify mt-3 text-zinc-500">
          {faq.answer}
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleComponent;
