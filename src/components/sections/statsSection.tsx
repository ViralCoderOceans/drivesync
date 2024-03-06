import React from "react";
import BreakLine from "@/components/breakLine";

const StatsSection = ({ data: { headingText, subText, stats } }: { data: any }) => {
  return (
    <section className="flex flex-col lg:flex-row gap-[80px] lg:gap-0 lg:justify-between items-center">
      <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-y-[30px]">
        {
          headingText.length > 0 &&
          <h1 className="text-3xl sm:leading-[40px] lg:text-5xl lg:leading-[60px] font-bold text-neutral">
            <BreakLine text={headingText} />
          </h1>
        }
        {
          subText.length > 0 &&
          <p className="text-neutral text-sm text-center lg:text-left sm:text-[17px] leading-normal xl:text-xl">
            {subText}
          </p>
        }
        <div className="w-full self-center flex flex-wrap items-center justify-center gap-10">
          {
            stats.map((stat: any) => (
              <div key={`stat-${stat.id}`} className=" flex flex-col gap-y-3 items-center">
                <img
                  className="h-[60px] w-[60px]"
                  src={stat.imgSrc}
                />
                <h5 className="text-4xl font-semibold text-[#0e7dc2]">{stat.numbers}</h5>
                <p className="text-lg text-[#324a51]">{stat.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default StatsSection;