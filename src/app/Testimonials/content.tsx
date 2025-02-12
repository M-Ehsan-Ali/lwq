"use client";

import clsx from "clsx"; // For dynamic className merging
import { useState } from "react";

interface Testimonial {
  title: string;
  designation: string;
  review: string;
  logo: {
    mediaItemUrl: string;
  };
}

interface ContentProps {
  testimonials: Testimonial[];
}

export default function Content({ testimonials }: ContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Handlers for carousel navigation
  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setTransitioning(false);
    }, 300); // Match transition duration
  };

  const handlePrevious = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTransitioning(false);
    }, 300); // Match transition duration
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <div className="py-8 md:py-12 px-6 md:px-8 bg-color_0166C8 w-full relative  md:min-h-[450px]">
        {/* Grid Layout for LinkedIn Image, Testimonial Logo, Title, Designation */}
        <div
          className={clsx(
            "grid grid-cols-5 items-center transition-opacity duration-300",
            transitioning ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Static LinkedIn Image */}
          <div>
            <img
              src="/testimonials/linkedin.png"
              alt="LinkedIn"
              className="w-[50px] h-[50px] md:w-[120px] md:h-[120px]"
            />
          </div>

          {/* Dynamic Title and Designation */}
          <div className="col-span-3">
            <div className="flex flex-col items-center">
              <div className="text-[12px] md:text-[30px] font-bold text-white text-center">
                {currentTestimonial.title}
              </div>
              <div className="text-[12px] md:text-[30px] font-bold text-white text-center">
                {`(${currentTestimonial.designation})`}
              </div>
            </div>
            <div className="w-full flex justify-center mt-3 md:mt-8">
              <div className="h-[2px] w-[104px] md:w-[320px] bg-white" />
            </div>
          </div>

          {/* Dynamic Testimonial Logo */}
          <div className="flex justify-end">
            <img
              src={currentTestimonial.logo.mediaItemUrl}
              alt={`${currentTestimonial.title} Logo`}
              className="w-[40px] h-[40px] md:w-[90px] md:h-[90px]"
            />
          </div>
        </div>

        {/* Dynamic Review */}
        <div
          className={clsx(
            "mt-4 md:mt-8 text-center px-6 md:px-16 font-medium text-[11px] md:text-[22px] text-white transition-opacity duration-300",
            transitioning ? "opacity-0" : "opacity-100"
          )}
        >
          {currentTestimonial.review}
        </div>

        {/* Left Arrow */}
        <div
          className="absolute left-4 top-[50%] transform -translate-y-1/2 cursor-pointer"
          onClick={handlePrevious}
        >
          <img
            src="/testimonials/left_arrow.svg"
            className="w-[24px] md:w-[60px]"
            alt="Previous"
          />
        </div>

        {/* Right Arrow */}
        <div
          className="absolute right-4 top-[50%] transform -translate-y-1/2 cursor-pointer"
          onClick={handleNext}
        >
          <img
            src="/testimonials/right_arrow.svg"
            className="w-[24px] md:w-[60px]"
            alt="Next"
          />
        </div>

        {/* Navigation Balls */}
      </div>

      <div className="pt-10 pb-4 md:pt-20 md:pb-0">
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={clsx(
                "w-[16px] h-[16px] rounded-full cursor-pointer",
                index === currentIndex ? "bg-black" : "bg-color_0166C8"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
