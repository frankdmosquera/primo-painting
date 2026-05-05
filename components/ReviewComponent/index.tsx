"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GoogleLogo2 from "@/public/google-icon-download.svg";
import homeStars from "@/public/home-stars.svg";
import Best2025 from "@/public//Best2025.svg";
import Awards2025 from "@/public/Awards2025.svg";
import IconVerified from "@/public/icon-verified.svg";
import { cn } from "@/lib/utils";
import GoogleLogo from "@/public/google-logo.svg";
import bg3 from "@/public/BG2.webp";

import Reviews1 from "@/public/Reviews1.png";
import Reviews2 from "@/public/Reviews2.webp";
import Reviews3 from "@/public/Reviews3.webp";

import axios from "axios";
import Cookies from "js-cookie";

const ReviewsPage = () => {
  const [activeTab, setActiveTab] = useState<"google" | "homestars">("google");
  const [placeDetails, setPlaceDetails] = useState([]);

  const handleReviewsRequest = async () => {
    try {
      const myCookieValue = Cookies.get("reviews");
      if (myCookieValue) {
        const review: any = localStorage?.getItem("reviews");
        setPlaceDetails(JSON.parse(review));
        return;
      }
      await axios
        .get("/api/getReviews")
        .then((response: any) => {
          if (response?.data) {
            setPlaceDetails(response?.data?.data);
            localStorage?.setItem(
              "reviews",
              JSON.stringify(response?.data?.data)
            );
            Cookies.set("reviews", "Added", { expires: 15 });
          }
        })
        .catch((error: any) => {
          console.log("Erro: ", error);
        });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    handleReviewsRequest();
  }, []);

  const homeReviews = [
    {
      name: "Interior House Repainted",
      review:
        "Had our house repainted from a grey to white. Alberta Colour Painting was ve...",
      rating: 5,
      date: "January 2025",
    },
    {
      name: "Wall painting & baseboards",
      review:
        "Frank did a great job of painting our carriage suite. He was very friendly an...",
      rating: 4,
      date: "December 2024",
    },
    {
      name: "Upstairs Refresh",
      review:
        "I just purchased a townhouse and wanted to refresh the bedrooms before gettin...",
      rating: 3,
      date: "November 2024",
    },
    {
      name: "House painting",
      review:
        "Frank and his brother did a great job painting our house we would highly reco...      ",
      rating: 5,
      date: "October 2024",
    },
    {
      name: "Paint",
      review:
        "Madan painted all the walls on the main floor. Very happy with his quality o...      ",
      rating: 5,
      date: "October 2024",
    },
  ];
  return (
    <div>
      <section className="h-[400px] md:h-[600px] relative">
        <div className="absolute inset-0">
          <Image
            src={bg3}
            alt="Hero Image"
            fill
            className="brightness-75 object-cover"
            priority
          />
        </div>

        <div className="flex flex-col h-full justify-center text-center items-center px-4 relative">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl text-white font-bold mb-4 md:text-6xl"
          >
            Reviews
          </motion.h1>
        </div>
      </section>
      <div className="container w-full mx-auto px-4">
        <div className="">
          <div className="bg-[#B7CEFF] rounded-2xl shadow-lg -mt-20 lg:max-w-[30%] max-w-3xl mx-auto px-4 py-4 relative z-10">
            <div className="w-full max-w-3xl mx-auto">
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab("google")}
                  className={cn(
                    "   cursor-pointer py-3 px-6 rounded-[20px] transition-colors w-full",
                    activeTab === "google"
                      ? "bg-[#0D378D] text-white"
                      : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
                  )}
                >
                  <span className="flex justify-center items-center relative">
                    <Image src={GoogleLogo2} alt="gooleLogo" />
                  </span>
                  <span className="text-[10px] text-left font-medium lg:text-[19px]">
                    Google Reviews
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab("homestars")}
                  className={cn(
                    "gap-2 py-3 px-6 cursor-pointer rounded-[20px] transition-colors w-full ",
                    activeTab === "homestars"
                      ? "bg-[#0D378D] text-white"
                      : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
                  )}
                >
                  <span className="flex justify-center items-center relative">
                    <Image src={homeStars} alt="gooleLogo" />
                  </span>
                  <span className="text-[10px] text-left font-medium lg:text-[19px]">
                    HomeStars Reviews
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-full lg:w-4xl mx-auto">
          <div className="mt-8">
            {activeTab === "google" && (
              <div className="flex flex-col items-center">
                <div className="container flex lg:justify-center lg:mb-20 lg:mx-auto mb-10 mt-10 px-4 sm:justify-start">
                  <Image
                    src={GoogleLogo}
                    className="w-40 lg:w-64"
                    alt="google-logo"
                  />
                </div>
              </div>
            )}

            {activeTab === "homestars" && (
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
                    <div className="">
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
                  <span className="text-[#0D378D] text-2xl font-bold ml-2">
                    5.5
                  </span>
                  <span className="text-[18px] text-black ml-2">
                    117 reviews
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="container w-full lg:w-5xl mb-24 mx-auto px-4">
          {activeTab === "google" && (
            <div className="grid gap-10 lg:gap-20 md:grid-cols-2 mt-8">
              {placeDetails?.map((review: any, index: any) => (
                <div
                  key={index}
                  className="bg-[#E2E7F1] p-0 shadow-lg relative"
                >
                  <div>
                    <Image
                      src={Reviews1}
                      alt="Review Image"
                      className="w-15 absolute left-1 lg:left-[-20px] lg:mt-0 lg:top-[-30px] lg:w-20  mx-auto top-[-20px]"
                    />
                    <Image
                      src={Reviews2}
                      alt="Review Image"
                      className="h-[150px] absolute bottom-[20px] left-[9px] lg:left-[28px] mx-auto"
                    />
                    <Image
                      src={Reviews3}
                      alt="Review Image"
                      className="absolute bottom-[20px] lg:right-[-28px] mx-auto right-[-20]"
                    />
                  </div>
                  <div className="p-[20px] lg:p-[25px] md:p-[10px]">
                    <p className="text-[11px] text-base text-black font-normal lg:pl-[30px] lg:text-[15px] mb-4 pb-0 pt-[40px] review-text sm:pl-[20px] sm:pr-[-40px]">
                      {review?.text?.length > 200
                        ? review?.text.slice(0, 300) + "..."
                        : review.text}
                    </p>
                    <span className="text-[#202020] text-sm font-bold lg:pl-[22px] md:pl-[12px] sm:pl-[-20px] sm:text-lg">
                      {review?.author_name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "homestars" && (
            <div className="grid gap-10 lg:gap-20 md:grid-cols-2 mt-8">
              {homeReviews?.map((review, index) => (
                <div
                  key={index}
                  className="bg-[#E2E7F1] p-0 shadow-lg relative"
                >
                  <div>
                    <Image
                      src={Reviews1}
                      alt="Review Image"
                      className="w-15 absolute left-1 lg:left-[-20px] lg:mt-0 lg:top-[-30px] lg:w-20  mx-auto top-[-20px]"
                    />
                    <Image
                      src={Reviews2}
                      alt="Review Image"
                      className="h-[100px] absolute bottom-[20px] left-[9px] lg:left-[28px] mx-auto"
                    />
                    <Image
                      src={Reviews3}
                      alt="Review Image"
                      className="absolute bottom-[20px] lg:right-[-28px] mx-auto right-[-20]"
                    />
                  </div>
                  <div className="p-[20px] lg:p-[25px] md:p-[10px]">
                    <p className="text-[11px] text-base text-black font-normal lg:pl-[30px] lg:text-[15px] mb-4 pb-0 pt-[40px] review-text sm:pl-[20px] sm:pr-[-40px]">
                      {review.review}
                    </p>
                    <span className="text-[#202020] text-sm font-bold lg:pl-[22px] md:pl-[12px] sm:pl-[-20px] sm:text-lg">
                      {review.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
