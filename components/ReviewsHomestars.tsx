"use client";
import Best2025 from "@/public//Best2025.svg";
import Awards2025 from "@/public/Awards2025.svg";
import IconVerified from "@/public/icon-verified.svg";
import Image from "next/image";
import Reviews1 from "@/public/Reviews1.png";
import Reviews2 from "@/public/Reviews2.webp";
import Reviews3 from "@/public/Reviews3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { homestarsReviewsData } from "@/data/homesatrsReviewData.ts";

export default function ReviewsHomestars() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-[#0D378D] text-[26px] font-bold mb-8 uppercase">
          Awards Earned
        </h2>

        <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-3">
          <div className="flex flex-col bg-[#F3F3F3] border-1 border-black/20 p-5 rounded-[14px] items-start">
            <Image src={Best2025} alt="homeStars" />
            <h3 className="text-[#0D378D] font-bold lg:text-lg">
              Best of the Best 2025
            </h3>
            <p className="text-black">Winner 4 times</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative">
              <Image
                className="w-40 lg:w-50"
                src={IconVerified}
                alt="homeStars"
              />
            </div>
          </div>

          <div className="flex flex-col bg-[#F3F3F3] border-1 border-black/20 p-5 rounded-[14px] items-start">
            <Image src={Awards2025} alt="homeStars" />
            <h3 className="text-[#0D378D] text-lg font-bold">
              Best of Awards 2025
            </h3>
            <p className="text-black">Winner 6 times</p>
          </div>
        </div>

        <div className="flex items-center my-10">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className="h-6 text-orange-400 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="text-[#0D378D] text-2xl font-bold ml-2">5.5</span>
          <span className="text-[18px] text-black ml-2">117 reviews</span>
        </div>
        {/* // Review container*/}
        <div className=" flex flex-col lg:flex-row gap-12 lg:gap-16 ">
          {homestarsReviewsData &&
            homestarsReviewsData.map((review, i) => (
              <div
                key={i}
                className="flex flex-col bg-[#E2E7F1] justify-center p-0 shadow-lg lg:p-4 pl-10 relative review_card lg:min-h-80 h-auto mx-auto"
              >
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
                    {review?.review?.length > 200
                      ? review?.review.slice(0, 300) + "..."
                      : review.review}
                  </p>
                  <span className="text-[#202020] text-sm font-bold lg:pl-[22px] md:pl-[12px] sm:pl-[-20px] sm:text-lg">
                    {review?.name}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
