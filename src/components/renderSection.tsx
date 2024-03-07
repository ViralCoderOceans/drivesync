import React from 'react'
import ShowcaseSection from "@/components/sections/showcaseSection";
import CardsSection from "@/components/sections/cardsSection";
import PartnersSection from './sections/partnersSection';
import data from "../config/webData.json"
import CostSavingCalculator from './sections/costSavingCalculator';
import FAQsSection from './sections/faqsSection';

const RenderSection = () => {
  // if (error !== null) return (
  //   <div className='mt-[-84px] h-screen w-full flex justify-center items-center'>
  //     <div className="flex flex-col items-center gap-4">
  //       <h1 className='text-3xl font-bold text-center'>503 - Server error</h1>
  //       <p className='text-lg font-medium text-center'>Oops something went wrong, try to refresh this page</p>
  //       <Button><Link href="/">Refresh page</Link></Button>
  //     </div>
  //   </div>
  // )

  return (
    <div className="w-full flex flex-col">
      {
        data?.landingPageData?.sectionsController?.map((elm: any) => (
          <div
            key={`section-${elm.order}`}
            id={elm.id}
            style={{ order: elm.order }}
          >
            {
              elm.type === "showcase" && <ShowcaseSection data={elm} />
            }
            {
              elm.type === "cards" && <CardsSection data={elm} />
            }
            {
              elm.type === "calculator" && <CostSavingCalculator data={elm} />
            }
            {
              elm.type === "partners" && <PartnersSection data={elm} />
            }
            {
              elm.type === "faqs" && <FAQsSection data={elm} />
            }
          </div>
        ))
      }

    </div>
  )
}

export default RenderSection

// {/*{
//   elm.type === "caseStudies" && <CaseStudiesSection data={elm} themeColor={data?.landingPageData?.themeColor} />
// }
// {
//   elm.type === "stats" && <StatsSection data={elm} />
// }
// {
//   elm.type === "partners" && <PartnersSection data={elm} />
// }
// {
//   elm.type === "testimonial" && <TestimonialSection data={elm} />
// }
// {
//   elm.type === "form" && <FormSection data={elm} />
// } */}