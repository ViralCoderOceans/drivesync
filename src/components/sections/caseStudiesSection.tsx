import React from "react";
import BreakLine from "@/components/breakLine";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import QuickActionButton from "../quickActionButton";

const CaseStudiesSection = ({ data: { miniHeadingText, headingText, subText, cards }, themeColor }: { data: any, themeColor: any }) => {
  return (
    <article className="flex flex-col gap-[20px] sm:gap-[30px] items-center">
      <span className="text-sm text-[#0e7dc2] font-medium uppercase">{miniHeadingText ?? ''}</span>
      <h2 className="text-center sm:text-left text-2xl sm:text-4xl lg:text-5xl font-semibold text-neutral">
        <BreakLine text={headingText} />
      </h2>
      {
        subText?.length > 0 &&
        <>
          <p className="sm:hidden text-neutral max-w-[330px] text-sm text-center">
            {subText.join(' ') ?? ''}
          </p>
          <p className="hidden sm:block text-neutral text-sm text-center sm:text-lg">
            <BreakLine text={subText} />
          </p>
        </>
      }
      <section className="relative w-full place-content-center grid grid-cols-4 gap-[10px] md:gap-[20px]">
        {
          cards && <>
            {
              cards.map((elm: any) => (
                <div key={`case-study-card-${elm.number}`} className="w-full flex justify-center col-span-4 md:col-span-2">
                  <Card className="w-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="flex flex-col items-center gap-y-4">
                        <img
                          className="h-[150px] md:h-[200px] lg:h-[250px]"
                          src={elm.imgSource}
                        />
                        <h3 className="w-full text-2xl text-left">{elm.heading}</h3>
                      </CardTitle>
                      <CardDescription className="text-lg">{elm.subText}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-end gap-y-4">
                      <Link href={elm.redirect} className="flex self-stretch gap-1 items-center cursor-pointer text-[#0e7dc2] hover:text-[#268ac8] transition-all group">
                        Read the case study
                        <ArrowRight className="h-4 w-4 group-hover:ml-1 transition-all" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))
            }
          </>
        }
      </section>
      <QuickActionButton
        themeColor={themeColor}
        text="Let's talk about your case"
      />
    </article>
  );
};

export default CaseStudiesSection;
