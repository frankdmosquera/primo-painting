import TrustBadges from "../trust-badges";
import Image from "next/image";

import "./hero.css";
import HeroCallToAction from "./HeroCallToAction";
import { HeroHomeImg } from "@/data/images";
import HeroPhoneMobile from "./HeroPhoneMobile";

const HomeHero = () => {
  return (
    <section className="relative h-[33rem] tn:h-[34rem] xsm:h-[36rem] md:h-[38rem] lg:h-[40rem] xl:h-[calc(100vh-9.1rem)]">
      <Image
        src={HeroHomeImg.src}
        alt={HeroHomeImg.alt}
        fill
        className="object-cover brightness-70 w-full h-auto "
        priority
        // sizes="100vw"
      />
      <div className=" absolute hidden top-0 right-2  z-2 flex flex-col gap-2">
        <HeroPhoneMobile />
      </div>
      <div className="absolute inset-0 bg-black/30"></div>
      {/* here center the content */}
      <div className=" absolute px-4 gap-16  xl:gap-20  top-12 inset-0 flex  flex-col items-center justify-center text-center ">
        <div className="">
          <h1 className="  text-3xl xsm:text-4xl  md:text-5xl lg:text-6xl font-bold text-white ">
            CALGARY'S
            <span className="bg-reveal ml-2">INTERIOR HOUSE PAINTERS</span>{" "}
          </h1>
          <p className="block mt-3 text-white  font-medium tn:text-lg xsm:text-xl ">
            Clean workmanship, premium finishes, and attention to every detail.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <HeroCallToAction />
        </div>
        <div className="">
          <TrustBadges />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
