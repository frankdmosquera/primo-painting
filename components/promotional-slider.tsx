"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import slider1 from "@/public/slider1.webp"; // Ensure you are importing the image correctly.
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function PromotionalSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   const slides = [
  //     {
  //       id: 1,
  //       image: slider1,
  //       ribbon: "2 for 1 Deal",
  //       title: "Offer Starts from Oct 30, 2025.",
  //       subtitle: "You must call for this offer.",
  //       description: "Pay for one bedroom, get the second one half price!",
  //     },
  //     {
  //       id: 2,
  //       image: slider1,
  //       ribbon: "10% Off on Interior",
  //       title: "Offer Starts from Oct 30, 2025.",
  //       subtitle: "You must call for this offer.",
  //       description: "10% OFF - Interior Painting",
  //     },
  //   ];

  //   const nextSlide = () => {
  //     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   };

  //   const prevSlide = () => {
  //     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  //   };

  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-6xl mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-2 md:gap-10">
        {/* Slider Section */}
        <div className=" md:w-1/2">
          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={slider1} alt="Promo Image 1" />

                <Image src={slider1} alt="Promo Image 2" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            For a limited time, Alberta Colour Painting is offering exclusive
            discounts to help you refresh your space at an unbeatable price!
          </h2>

          <p className="text-sm md:text-base mb-6">
            Discover a variety of discounts and special deals at Alberta Colour
            Painting, tailored to help you save on your Calgary house painting
            projects throughout the year. Explore ongoing promotions for both
            standard and specialty wall painting services, and ensure you get
            the best value by visiting our offers page.
          </p>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 px-6 self-start flex items-center gap-2 w-fit">
            Explore Discounts
            <div className="bg-white rounded-full p-1">
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
