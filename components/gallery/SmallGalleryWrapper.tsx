"use client";

import React, { useRef, useState, ReactNode } from "react";
import { GalleryHomeImages } from "@/data/images";

interface SmallGalleryWrapperProps {
  children: ReactNode;
}

export default function SmallGalleryWrapper({
  children,
}: SmallGalleryWrapperProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const numberOfImages = GalleryHomeImages.length;

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const totalScrollWidth = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;

    const scrollPercent = (currentScroll / totalScrollWidth) * 100;
    const stepSize = 100 / numberOfImages;

    const step = Math.min(
      Math.floor(scrollPercent / stepSize),
      numberOfImages - 1
    );

    setCurrentStep(step);
  };

  return (
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
      <div className="absolute bottom-0 left-0 w-full lg:hidden h-2 sm:h-3 flex mt-2 overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`h-full flex-1 transition-colors duration-300 ${
              index === currentStep ? "bg-[#0D378D]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
