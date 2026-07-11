import TrustBadges from "../trust-badges";
import Image from "next/image";

import "./hero.css";
import HeroCallToAction from "./HeroCallToAction";
import { HeroHomeImg } from "@/data/images";
import HeroPhoneMobile from "./HeroPhoneMobile";

const HomeHero = () => {
  return (
    <section className="relative h-[28rem] tn:h-[32rem] xsm:h-[34rem] md:h-[36rem] lg:h-[38rem]">
      <Image
        src={HeroHomeImg.src}
        alt={HeroHomeImg.alt}
        fill
        className="object-cover brightness-70 w-full h-auto"
        priority
        //sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/20"></div>
      {/* here center the content */}
      <div className=" absolute px-4 py-4 tn:py-6 sm:py-8 md:py-10 lg:py-12  xl:py-20 inset-0 flex  flex-col items-center justify-between text-center ">
        <div className="">
          <h1 className="  text-3xl xsm:text-4xl  md:text-5xl lg:text-6xl font-bold text-white ">
            CALGARY'S
            <span className="bg-reveal ml-2">INTERIOR HOUSE PAINTERS</span>{" "}
          </h1>
          <p className="block mt-3 text-white  font-medium tn:text-lg xsm:text-xl">
            Clean workmanship, premium finishes, and attention to every detail.
          </p>
        </div>
        <div className="">
          <HeroCallToAction />
          <HeroPhoneMobile />
        </div>
        <div className="">
          <TrustBadges />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
