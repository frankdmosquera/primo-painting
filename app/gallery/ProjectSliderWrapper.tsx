"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

import {
  PlayIcon,
  PauseIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

interface ProjectSliderWrapperProps {
  children: ReactNode[];
}

export default function ProjectSliderWrapper({
  children,
}: ProjectSliderWrapperProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const playIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const numberOfSlides = children.length;

  // Mobile vs Desktop Detector
  function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024); // Up to iPad width can drag
      };

      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
  }

  const isMobile = useIsMobile();

  // Drag scrolling for mobile
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const totalScrollWidth = container.scrollWidth - container.clientWidth;
    const scrollLeft = container.scrollLeft;

    const scrollPercent = (scrollLeft / totalScrollWidth) * 100;
    const stepSize = 100 / numberOfSlides;

    const step = Math.min(
      Math.floor(scrollPercent / stepSize),
      numberOfSlides - 1
    );

    setCurrentStep(step);
  };

  const scrollToStep = (step: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const slideWidth = container.scrollWidth / numberOfSlides;
    container.scrollTo({
      left: slideWidth * step,
      behavior: "smooth",
    });
  };

  // Play / Pause for desktop
  const togglePlay = () => {
    if (isPlaying) {
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
      }
      setIsPlaying(false);
    } else {
      const interval = setInterval(() => {
        handleNext();
      }, 4000); // every 4 seconds
      playIntervalRef.current = interval;
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    if (isMobile) {
      // Mobile: scroll previous
      scrollToStep(Math.max(currentStep - 1, 0));
    } else {
      // Desktop: fade previous
      setCurrentStep((prev) => (prev - 1 + numberOfSlides) % numberOfSlides);
    }
  };

  const handleNext = () => {
    if (isMobile) {
      // Mobile: scroll next
      scrollToStep(Math.min(currentStep + 1, numberOfSlides - 1));
    } else {
      // Desktop: fade next
      setCurrentStep((prev) => (prev + 1) % numberOfSlides);
    }
  };

  return (
    <div className="relative">
      {isMobile ? (
        <>
          {/* MOBILE DRAGGING VERSION */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            tabIndex={0}
            onKeyDown={(e) => {
              if (!scrollRef.current) return;
              if (e.key === "ArrowRight") {
                scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
                e.preventDefault();
              } else if (e.key === "ArrowLeft") {
                scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
                e.preventDefault();
              }
            }}
            className="overflow-x-auto flex snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing lg:overflow-x-hidden"
          >
            {children.map((child, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-start relative h-[20rem] sm:h-[25rem] md:h-[30rem]"
              >
                {child}
              </div>
            ))}
          </div>

          {/* MOBILE Progress bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 flex h-2 bg-gray-300 rounded overflow-hidden">
            {Array.from({ length: numberOfSlides }).map((_, idx) => (
              <div
                key={idx}
                className={`flex-1 transition-colors duration-300 ${
                  idx === currentStep ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          {/* DESKTOP FADE VERSION */}
          <div className="relative w-full h-[22rem] sm:h-[28rem] md:h-[34rem] overflow-hidden">
            {children.map((child, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentStep ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {child}
              </div>
            ))}
          </div>

          {/* DESKTOP CONTROLS */}
          <div className="">
            <div className="flex justify-center gap-4 mt-6">
              <ArrowLeftIcon
                onClick={handlePrev}
                className="w-10 h-10 text-[#0D378D] hover:text-blue-800 cursor-pointer"
              />
              {isPlaying ? (
                <PauseIcon
                  onClick={togglePlay}
                  className="mx-6 w-10 h-10 text-[#0D378D] hover:text-blue-800 cursor-pointer"
                />
              ) : (
                <PlayIcon
                  onClick={togglePlay}
                  className="mx-6 w-10 h-10 text-[#0D378D] hover:text-blue-800 cursor-pointer"
                />
              )}
              <ArrowRightIcon
                onClick={handleNext}
                className="w-10 h-10 text-[#0D378D] hover:text-blue-800 cursor-pointer"
              />
            </div>
          </div>

          {/* <div className=''>
            <div className='flex justify-center gap-4 mt-6'>
              <ArrowLeftCircle
                className='w-8 h-8  hover:text-blue-800 cursor-pointer'
                color='#0D378D'
              />
              {isPlaying ? (
                <PauseCircle
                  className='w-8 h-8 text- hover:text-blue-800 cursor-pointer'
                  color='#0D378D'
                />
              ) : (
                <PlayCircle
                  className='w-8 h-8  hover:text-blue-800 cursor-pointer'
                  color='#0D378D'
                />
              )}
              <ArrowRightCircle
                className='w-8 h-8 text-[#0D378D] hover:text-blue-800 cursor-pointer'
                // color='#0D378D'
              />
            </div>
          </div> */}
        </>
      )}
    </div>
  );
}
