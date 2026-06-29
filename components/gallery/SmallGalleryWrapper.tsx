"use client";

import React, { useRef, useState, ReactNode } from "react";
import { GalleryHomeImages } from "@/data/images";
import Image from "next/image";

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
      </div>
      {/* thmbnails */}
      <div className=" w-full h-8 lg:hidden flex items-center justify-center gap-3  overflow-hidden  ">
        {GalleryHomeImages.map((img, i) => (
          <div className="relative w-8 h-8  rounded-xl " key={i}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover transition-opacity duration-300 rounded-xl ${
                i === currentStep ? "opacity-100" : "opacity-50"
              }`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
//  const numberOfImages = GalleryHomeImages.length;
