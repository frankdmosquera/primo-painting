import TrustBadges from "../trust-badges";
import HeroPhoneMobile from "./HeroPhoneMobile";
import Image from "next/image";

import "./hero.css";
import HeroCallToAction from "./HeroCallToAction";
import { HeroHomeImg } from "@/data/images";

const HomeHero = () => {
  return (
    <section className="relative h-120 xsm:h-168 sm:h-140">
      {/* <div className="lg:hidden absolute top-4 tn:top-6    right-[-70] tn:right-[-64] transform -translate-x-1/2 z-10">
        <HeroPhoneMobile />
      </div> */}

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
      <div className="absolute inset-0 flex gap-12 flex-col items-center justify-center text-center px-4">
        <h1 className="  text-3xl xsm:text-4xl  md:text-6xl font-bold text-white ">
          EXPERT <span className="bg-reveal ml-2">CALGARY PAINTERS</span> <br />
          <span className="block my-4 text-2xl md:text-2xl text-white  font-medium">
            for Interior House Painting Services
          </span>
        </h1>
        <HeroCallToAction />
        <div className="">
          <TrustBadges />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
