"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import TrustBadges from "../components/trust-badges";
import { Navbar } from "./Header";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: any;
}

const BlogNestedHero: React.FC<HeroProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <div>
      <section className="relative h-[280px] lg:h-[600px] md:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt="Hero Image"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
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
            className="lg:text-6xl md:text-5xl text-1xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
        </div>
      </section>
      <TrustBadges />
    </div>
  );
};

export default BlogNestedHero;
