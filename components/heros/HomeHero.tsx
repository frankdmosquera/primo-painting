import TrustBadges from "../trust-badges";
import HeroPhoneMobile from "./HeroPhoneMobile";
import Image from "next/image";

import "./hero.css";
import HeroCallToAction from "./HeroCallToAction";
import { HeroHomeImg } from "@/data/images";

const HomeHero = () => {
  return (
    <div>
      {/* <section className="relative h-[600px] md:h-[850px] lg:h-[850px]"> */}
      <section className="">
        <div className="lg:hidden absolute top-34 tn:top-36    right-[-70] tn:right-[-64] transform -translate-x-1/2 z-10">
          <HeroPhoneMobile />
        </div>
        <div className="relative h-[calc(100vh-50px)] tn:h-150 xsm:h-168 sm:h-140">
          {/* <div className="relative h-full w-full"> */}
          <Image
            src={HeroHomeImg.src}
            alt={HeroHomeImg.alt}
            fill
            className="object-cover brightness-75 w-full h-auto"
            priority
            //sizes="100vw"
          />

          <div className="absolute inset-0 bg-black/20"></div>
          {/* here center the content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mb-9 tn:mb-16 xsm:mb-24">
            <h1 className="  text-3xl xsm:text-4xl  md:text-6xl font-bold text-white mb-2 tn:mb-16">
              EXPERT <span className="bg-reveal">CALGARY PAINTERS</span> <br />
              <span className="text-xl md:text-2xl text-white mb-8 font-medium">
                for Interior and Exterior House Painting Services
              </span>
            </h1>
            <HeroCallToAction />
          </div>
        </div>
      </section>
      <TrustBadges />
    </div>
  );
};

export default HomeHero;
