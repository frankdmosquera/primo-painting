"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import homeHero from "@/public/home-hero.webp";
import homeHero2 from "@/public/galleryHome-2.webp";
import homeHero3 from "@/public/galleryHome-3.webp";
import homeHero4 from "@/public/galleryHome-5.webp";
import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import { motion } from "framer-motion";
import { Highlight } from "../ui/hero-highlight";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./hero.css";
import HeroCallToAction from "./HeroCallToAction";

const heroImages = [
  { src: homeHero, alt: "Interior painting", priority: true },
  // { src: homeHero2, alt: 'Interior painting', priority: true },
  // { src: homeHero3, alt: 'Interior painting', priority: true },
  // { src: homeHero4, alt: 'Interior painting', priority: true },
  { src: homeHero2, alt: "Interior painting" },
  { src: homeHero3, alt: "Interior painting" },
  { src: homeHero4, alt: "Interior painting" },
];
export default function HomeSwiper() {
  return (
    <Swiper
      style={{ height: "100%", width: "100%" }}
      slidesPerView={1}
      spaceBetween={0}
      centeredSlides={true}
      grabCursor={true}
      keyboard={{ enabled: true }}
      scrollbar={true}
      navigation={true}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          // Custom pagination to render lines instead of dots
          return `<span class="${className}" style="width: 60px; height: 4px; background-color: #0D378D; display: inline-block; margin-bottom:90px; border-radius: 2px;"></span>`;
        },
      }}
      modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {heroImages.map((image, index) => (
        <SwiperSlide key={index} className="relative custom-slide">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover brightness-75 w-full h-full"
            priority={image.priority}
          />

          {/* Text and buttons over the image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
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
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              EXPERT{" "}
              <Highlight className="text-white">CALGARY PAINTERS</Highlight>
            </motion.h1>

            <p className="text-xl md:text-2xl text-white mb-8">
              for Interior and Exterior House Painting Services
            </p>
            <HeroCallToAction />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
