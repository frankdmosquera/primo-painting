import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
const GoogleLogo = "/google-logo.svg";
const GoogleLogo2 = "/google-icon-download.svg";
import homeStars from "@/public/home-stars.svg";

export default function ReviewsTogglerOld({
  activeTab,
  setActiveTab,
}: {
  activeTab: "google" | "homestars";
  setActiveTab: React.Dispatch<React.SetStateAction<"google" | "homestars">>;
}) {
  return (
    <div className="">
      <div className="bg-[#B7CEFF] rounded-2xl shadow-lg -mt-20 lg:max-w-[30%] max-w-3xl mx-auto px-4 py-4 relative z-10">
        <div className="w-full max-w-3xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("google")}
              className={cn(
                "flex flex-col items-center justify-center cursor-pointer py-3 px-6 rounded-[20px] transition-colors w-full",
                activeTab === "google"
                  ? "bg-[#0D378D] text-white"
                  : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
              )}
            >
              <span className="relative  w-8 h-8 lg:w-12 lg:h-12 flex justify-center items-center ">
                <Image
                  src={GoogleLogo2}
                  alt="gooleLogo"
                  fill
                  className="object-contain"
                />
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
                <Image src={homeStars} alt="Home stars Logo" />
              </span>
              <span className="text-[10px] text-left font-medium lg:text-[19px]">
                HomeStars Reviews
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
