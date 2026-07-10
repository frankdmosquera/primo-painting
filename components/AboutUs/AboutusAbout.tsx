import Image from "next/image";

import TeamIcon from "./TeamIcon";
import FivestarIcon from "./FivestarIcon";
import WorkmanshipIcon from "./WorkmanshipIcon";
import LicensedIcon from "./LicensedIcon";
import { AboutUsImg } from "@/data/images";

import HeroPhoneMobileBlue from "../heros/HeroPhoneMobileBlue";
import BgBackground from "../BgBackground";

export default function AboutusHome() {
  return (
    <div className="w-full  mb-10 lg:my-12 relative">
      <div className="absolute top-[-390px] z-[-1]">
        <BgBackground />
      </div>
      <div className=" flex flex-col xl:flex-row xl:items-center xl:justify-center lg:gap-8 lg:px-4 w-full  mx-auto">
        {/* Left side with image */}
        <div className="relative w-full h-60 md:h-70  xl:w-2/5 bg-black">
          <div className="lg:hidden absolute top-4 right-4 z-20">
            <HeroPhoneMobileBlue />
          </div>
          <div className="absolute bottom-8 left-0 z-20 bg-blue-900 text-white py-3 px-4">
            <p className=" font-semibold">Over 10 Years of Experience</p>
          </div>
          <Image
            src={AboutUsImg.src}
            alt={AboutUsImg.alt}
            fill
            className="absoloute object-cover  z-10"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full xl:max-w-2xl   bg-white xl:w-4/5 px-4 py-8 flex flex-col justify-center ">
          <p className="text-black text-[22px]  font-semibold mb-2">
            About Primo Painters
          </p>
          <p className="lg:text-[36px] text-[26px] font-bold text-[#0D378D] mb-4">
            INTERIOR PAINTING SPECIALISTS
            <br />
            TRUSTED BY LOCALS
          </p>
          <p className="text-black mb-6">
            Primo Painters is a locally owned painting company specializing
            exclusively in interior residential painting throughout Calgary. By
            focusing on one thing and doing it well, we're able to deliver
            consistent results, cleaner workmanship, and a smoother experience
            from start to finish.
          </p>

          <p className="text-black mb-6">
            As a small team, we keep our overhead low and our standards high.
            That means competitive pricing, clear communication, efficient
            scheduling, and careful attention to every room we paint. Whether
            you're refreshing a single bedroom or repainting your entire home,
            our goal is simple: quality work that's done right the first time.
          </p>

          {/* <button className="learn-more-button">Learn More</button> */}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#E2E7F1] py-20 lg:px-4 px-10 relative">
        <div className="absolute top-[-490px]">
          <BgBackground />
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="lg:text-[36px] text-[25px] font-bold text-[#0D378D] text-center mb-12">
            WHY HOMEOWNERS CHOOSE PRIMO PAINTERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-24">
            {/* Local owned */}
            <div className="flex flex-col  text-start">
              <div className="text-[#0D378D] mb-4">
                <div className="flex text-start">
                  <WorkmanshipIcon />
                </div>
              </div>
              <h3 className=" lg:text-[24px]  text-[20px] font-semibold text-[#0D378D] mb-3 ">
                Small Local Team
              </h3>
              <p className=" text-black">
                As a locally owned Calgary business, we take on a limited number
                of projects so every home receives the attention it deserves.
              </p>
            </div>

            {/* Honest Pricing */}
            <div className="flex flex-col ">
              <div className="text-[#0D378D] mb-4">
                <TeamIcon />
              </div>
              <h3 className="lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
                Honest Competitive Pricing
              </h3>
              <p className=" text-black">
                No inflated estimates or unnecessary upselling. We provide fair
                pricing, detailed quotes, and excellent value for professional
                interior painting.
              </p>
            </div>

            {/* Quality Workmanship*/}
            <div className="flex flex-col ">
              <div className="text-[#0D378D] mb-4">
                <FivestarIcon />
              </div>
              <h3 className=" lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
                Quality Workmanship
              </h3>
              <p className="text-black">
                From careful preparation to clean lines and smooth finishes, we
                take pride in delivering results that look great and last.
              </p>
            </div>

            {/* Customer Satisfaction */}
            <div className="flex flex-col ">
              <div className="text-blue mb-4">
                <LicensedIcon />
              </div>
              <h3 className="lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
                Reliable & Professional
              </h3>
              <p className=" text-black">
                We show up on time, protect your home, keep the workspace clean,
                and complete projects efficiently with clear communication
                throughout.
              </p>
            </div>
          </div>
        </div>

        {/* Background decorative element */}
      </div>
    </div>
  );
}
