"use client"

import React from 'react'
import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { StarFilledIcon } from '@radix-ui/react-icons';

import BreakLine from "@/components/breakLine";
import { isMobile } from 'react-device-detect';

const TestimonialSection = ({ data: { miniHeadingText, headingText, subText, reviews } }: { data: any }) => {
  const Testimonial = ({ testimonial }: { testimonial: any }) => {
    const rating = Array.from({ length: testimonial?.rating }, (_, index) => (
      <>
        {
          testimonial?.rating && (
            <div key={`star-${index}`}>
              <StarFilledIcon className="text-amber-400 w-[20px] h-[20px]" />
            </div>
          )
        }
      </>
    ));

    return (
      <div className="w-full p-8 bg-zinc-50 border border-zinc-200 rounded">
        <div className="flex items-center mt-auto mb-4">
          <div
            className="rounded-full bg-zinc-500 w-[64px] h-[64px] overflow-hidden"
          >
            <img width="64" height="64" className="object-cover w-full h-full" src={testimonial?.imgSource ?? "/assets/images/testimonials/dp.jpeg"} alt="Profile picture" title="Reviewer's profile picture" loading="eager" />
          </div>
          <p className="ms-3 mb-0">
            <strong className="block font-medium text-lg">{testimonial?.name ?? ""}</strong>
            <span className="text-zinc-400 text-sm font-light">{testimonial?.subText ?? ""}</span>
          </p>
        </div>
        <p className="font-normal mb-4">
          “{testimonial?.review ?? ""}”
        </p>
        <div className="flex">
          {rating}
        </div>
      </div>
    )
  }

  return (
    <article className="flex flex-col gap-[20px] md:gap-[30px] items-center">
      <span className="text-sm text-[#0e7dc2] font-medium uppercase">{miniHeadingText ?? ''}</span>
      <h2 className="text-center sm:text-left text-2xl sm:text-4xl lg:text-5xl font-semibold text-neutral">
        <BreakLine text={headingText} />
      </h2>
      {
        subText.length > 0 &&
        <p className="block text-neutral text-sm text-center md:text-lg">
          <BreakLine text={subText} />
        </p>
      }
      <div className='w-full'>
        <Splide
          options={{
            perPage: `${isMobile ? 1 : 3}`,
            focus: 1,
            gap: '1rem',
            type: 'loop',
          }}
          aria-label="Testimonial"
          className="p-0 md:p-4 lg:p-10"
        >
          {
            reviews &&
            reviews.map((elm: any, index: any) => (
              <SplideSlide key={`testimonial-${index}`}>
                <Testimonial key={`testimonial-content-${index}`} testimonial={elm} />
              </SplideSlide>
            ))
          }
        </Splide>
      </div>
    </article>
  )
}

export default TestimonialSection