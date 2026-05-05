"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HelpCircle } from "lucide-react";
import ourServices from "@/public/our-services.webp";
export default function FullWidthCarousel() {
  return (
    <div className="w-full bg-black">
      <Carousel className="relative">
        <CarouselContent>
          {/* Slide 1: 2 for 1 Deal */}
          <CarouselItem>
            <div className="flex flex-col md:flex-row text-white">
              <div className="relative w-full md:w-1/2 h-80 md:h-96">
                <div className="absolute top-6 left-6 z-10">
                  <div className="bg-blue-600 text-white font-bold py-2 px-6 transform rotate-0 skew-x-[-10deg]">
                    2 for 1 Deal
                  </div>
                </div>
                <Image
                  src={ourServices}
                  alt="Interior painting"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6">
                  <p className="text-sm font-medium">
                    Offer Starts from Oct 30, 2025
                    <br />
                    You must call for this offer.
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    Pay for one bedroom, get the
                    <br />
                    second one half price!
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious className="h-10 w-10 rounded-full bg-white/30 text-white border-none" />
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext className="h-10 w-10 rounded-full bg-white/30 text-white border-none" />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            For a limited time, Alberta Colour Painting is offering exclusive
            discounts to help you refresh your space at an unbeatable price!
          </h2>
          <p className="mb-6">
            Discover a variety of discounts and special deals at Alberta Colour
            Painting, tailored to help you save on your Calgary house painting
            projects throughout the year. Explore our ongoing promotions for
            both standard and specialty wall painting services, and ensure you
            get the best value by visiting our offers page.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
            Explore Discounts <HelpCircle className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
