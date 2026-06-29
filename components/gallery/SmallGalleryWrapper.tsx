"use client";

import React, { useRef, useState, ReactNode } from "react";
// import { GalleryHomeImages } from "@/data/images";
import Image from "next/image";

// interface SmallGalleryWrapperProps {
//   children: ReactNode;
// }
type SmallGalleryWrapperProps = {
  GalleryImages: {
    src: string;
    alt: string;
  }[];
  children: ReactNode;
};

export default function SmallGalleryWrapper({
  children,
  GalleryImages,
}: SmallGalleryWrapperProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // const numberOfImages = GalleryHomeImages.length;
  const numberOfImages = GalleryImages.length;

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const totalScrollWidth = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;

    const scrollPercent = (currentScroll / totalScrollWidth) * 100;
    const stepSize = 100 / numberOfImages;

    const step = Math.min(
      Math.floor(scrollPercent / stepSize),
      numberOfImages - 1,
    );

    setCurrentStep(step);
  };

  return (
    <>
      <div className="relative">
        {/* Images directly rendered */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          tabIndex={0} // Make focusable
          onKeyDown={(e) => {
            if (!scrollRef.current) return; // Null check

            if (e.key === "ArrowRight") {
              scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
              e.preventDefault();
            } else if (e.key === "ArrowLeft") {
              scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });
              e.preventDefault();
            }
          }}
          className="overflow-x-auto flex snap-x snap-mandatory scroll-smooth lg:hidden cursor-grab active:cursor-grabbing"
        >
          {children}
        </div>

        {/* Progress Bar */}
        {/* <div className="absolute bottom-0 left-0 w-full lg:hidden h-2 sm:h-3 flex mt-2 overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`h-full flex-1 transition-colors duration-300 ${
              index === currentStep ? "bg-[#0D378D]" : "bg-gray-300"
            }`}
          />
        ))}
      </div> */}
      </div>
      {/* thumbnails */}
      <div className="bg-[#0D378D] w-full lg:hidden  flex  justify-center py-1 gap-2 xsm:gap-3 md:gap-4 overflow-hidden">
        {GalleryImages.map((img, index) => (
          <div
            className="relative h-10.5 w-10.5 xsm:h-11.5 xsm:w-11.5"
            key={index}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover transition-opacity duration-300 rounded-xl ${
                index === currentStep ? "opacity-100" : "opacity-50"
              }`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
