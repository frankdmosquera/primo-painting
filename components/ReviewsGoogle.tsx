"use client";
import Reviews1 from "@/public/Reviews1.png";
import Reviews2 from "@/public/Reviews2.webp";
import Reviews3 from "@/public/Reviews3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ReviewsGoogleType } from "@/types/review";
import Image from "next/image";

export default function ReviewsGoogle({
  newestGoogleReviews,
}: {
  newestGoogleReviews: ReviewsGoogleType;
}) {
  return (
    <div className="rounded-0 lg:px-10 mx-auto px-2 relative">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          657: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          601: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {newestGoogleReviews?.map((review: any, index: any) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col bg-[#E2E7F1] justify-center p-0 shadow-lg lg:p-4 pl-10 relative review_card lg:min-h-80 h-auto mx-auto">
              {/* Adjusted the images to be inside the flex container without absolute positioning */}
              <div className="">
                <Image
                  src={Reviews1}
                  alt="Review Image"
                  className="w-15 absolute left-1 lg:left-[-20px] lg:mt-0 lg:top-4 lg:w-20 mt-6 mx-auto top-[-20px]"
                />
                <Image
                  src={Reviews2}
                  alt="Review Image"
                  className="h-[120px] absolute bottom-[20px] left-[28px] mx-auto"
                />
                <Image
                  src={Reviews3}
                  alt="Review Image"
                  className="absolute h-[10px] w-[120px]  bottom-[20px] lg:right-[-28px] mx-auto right-[-20]"
                />
              </div>
              <div className="p-[20px] lg:p-[25px] md:p-[10px]">
                <p className="text-[11px] text-base text-black font-normal lg:pl-[30px] lg:text-[15px] mb-4 pb-0 pt-[40px] review-text sm:pl-[20px] sm:pr-[-40px]">
                  {review?.text?.length > 150
                    ? review?.text.slice(0, 150) + "..."
                    : review.text}
                </p>
                <span className="text-[#202020] text-sm font-bold lg:pl-[22px] md:pl-[12px] sm:pl-[-20px] sm:text-lg">
                  {review?.author_name}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
