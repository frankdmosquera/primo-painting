import Image from "next/image";

import BgBackground from "@/public/about-background-vector-line.svg";

// import WorkmanshipIcon from './WorkmanshipIcon'
// import MaterialsIcon from './MaterialsIcon'
import TeamIcon from "./TeamIcon";
import FivestarIcon from "./FivestarIcon";
import WorkmanshipIcon from "./WorkmanshipIcon";
import LicensedIcon from "./LicensedIcon";
import { AboutUsImg } from "@/data/images";

export default function AboutusHome() {
  return (
    <div className="w-full lg:my-24 my-10 relative">
      <div className="absolute top-[-390px] z-[-1]">
        <Image src={BgBackground} alt="bg-Image" />
      </div>
      <div className=" flex flex-col lg:flex-row  lg:h-[38rem]">
        {/* Left side with image */}
        <div className="relative w-full lg:w-[50%]">
          <div className="absolute top-10 left-0 z-50 bg-blue-900 text-white py-3 px-4">
            <p className="text-[16px] font-semibold">10 Years of Experience</p>
          </div>
          <Image
            src={AboutUsImg.src}
            alt={AboutUsImg.alt}
            width={600}
            height={600}
            className="w-full h-[400px] lg:h-[650px] max-sm:pr-[20px] object-cover lg:absolute z-10"
          />
        </div>

        {/* Right side with text */}
        <div className="w-full xl:max-w-2xl   bg-white lg:px-16 px-4 py-8 flex flex-col justify-center ">
          <p className="text-black text-[22px]  font-semibold mb-2">About Us</p>
          <p className="lg:text-[36px] text-[26px] font-bold text-[#0D378D] mb-4">
            EXPERT CALGARY PAINTERS
            <br />
            TRUSTED BY LOCALS
          </p>
          <p className="text-black mb-6 text-[14px] lg:text-[16px]">
            We started with a vision that something as simple as a paint job should be nothing short of extraordinary. Because the space you live or work in should reflect your vibe. And just "okay" doesn't cut it. Rookies can't  give you that same touch of perfection that only experience can bring. That's why, at Primo Painting, we take pride in our team of expert Calgary painters with years of hands-on experience handling projects of every size and style.
          </p>

          <p className="text-black mb-6 text-[14px] lg:text-[16px]">
          Our mission is simple: We don't treat walls like walls, we treat them like canvases. Every stroke we make is intentional, every colour choice is meaningful, and every result? A reflection of your style brought to life. With years of experience and expertise, we offer a wide range of painting services in Calgary for both interior and exterior spaces, turning them into eye-catching standouts.
          </p>
          <p className="text-black mb-6 text-[14px] lg:text-[16px]">
            Bonus? We're one of the few licensed and certified painting companies in Calgary. So when you hire us, you're not just getting paint, you're getting pro results that make people say - Whoa, who did this? 
          </p>

          {/* <button className="learn-more-button">Learn More</button> */}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#E2E7F1] py-20 lg:px-4 px-10 relative">
        <div className="absolute top-[-490px]">
          <Image src={BgBackground} alt="bg-Image" />
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="lg:text-[36px] text-[25px] font-bold text-[#0D378D] text-center mb-12">
            WHY CHOOSE US?
          </h2>
          <p className="lg:text-[24px] text-[20px] font-bold text-[#0D378D] text-center mb-12">
            What Makes Us One of the Best Painting Companies in Calgary?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-24">
            {/* Workmanship */}
            <div className="flex flex-col  text-start">
              <div className="text-[#0D378D] mb-4">
                <div className="flex text-start">
                  <WorkmanshipIcon />
                </div>
              </div>
              <h3 className=" lg:text-[24px]  text-[20px] font-semibold text-[#0D378D] mb-3 ">
                Premium Materials
              </h3>
              <p className=" lg:text-[16px] text-[14px] text-black">
                We use only high-quality paints and materials, combined with
                skilled techniques, to ensure a stunning finish.
              </p>
            </div>

            {/* Quality Materials */}
            <div className="flex flex-col ">
              <div className="text-[#0D378D] mb-4">
                <TeamIcon />
              </div>
              <h3 className="lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
                Attention to Detail
              </h3>
              <p className="lg:text-[16px] text-[14px] text-black">
                From crisp lines to smooth coatings, our painters in Calgary
                focus on every little detail to deliver perfection in every
                project.
              </p>
            </div>

            {/* Team */}
            <div className="flex flex-col ">
              <div className="text-[#0D378D] mb-4">
                <FivestarIcon />
              </div>
              <h3 className="lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
                Proven Customer Satisfaction
              </h3>
              <p className="lg:text-[16px] text-[14px] text-black">
                Our clients love our work, and it shows in our glowing reviews,
                repeat business, and word-of-mouth referrals.
              </p>
            </div>

            {/* Customer Satisfaction */}
            <div className="flex flex-col ">
              <div className="text-blue mb-4">
                <LicensedIcon />
              </div>
              <h3 className="lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
                Licensed & Trusted
              </h3>
              <p className="lg:text-[16px] text-[14px] text-black">
                As one of the few fully licensed and certified painting
                companies in Calgary, we back our work with professionalism and
                credibility.
              </p>
            </div>
          </div>
        </div>

        {/* Background decorative element */}
      </div>
    </div>
  );
}
