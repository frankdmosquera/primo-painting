import Image from "next/image";
import { CalgaryPainting } from "@/components/calgary-painting";
import ContactFormSection from "../../components/ContactFormSection";
import HomeBanner from "@/components/HomeBanner/home-banner";
import BlogGrid from "@/components/blog-grid";
import Link from "next/link";
import blogsBanner from "@/public/blogs-banner.webp";
import BgBackground from "@/public/about-background-vector-line.svg";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import StandardHero from "@/components/heros/StandardHero";
import OurGalleryAccordion from "@/components/gallery/GallerySection";
import AboutusAbout from "@/components/AboutUs/AboutusAbout";
import EcofriendlySection from "@/components/AboutUs/EcofriendlySection";
import SkillPainters from "@/components/AboutUs/SkillPaintersSection";

import FinestPainters from "@/components/AboutUs/FinestPaintersSection";
import CommitmentQualitySection from "@/components/AboutUs/CommitmentQualitySection";
import { blogPosts } from "@/lib/blog-data";
import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  title: "About Primo Painters: Your Trusted Calgary Painting Company",
  description:
    "Our expert painters deliver top-quality interior, exterior & wallpaper removal services for your home or business. We've got all your painting needs covered.",
  alternates: {
    canonical: "https://www.primopainters.ca/about",
  },
  openGraph: {
    title: "Need Calgary Painters?",
    description:
      "Book your free estimate today with Primo Painters, the top-rated painting company in Calgary.",
    images: [
      {
        url: "https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp",
      },
    ],
    url: "https://www.primopainters.ca/about",
    siteName: "Primo Painters",
    type: "website",
  },
};

export default function page() {
  return (
    <main>
      <StandardHero
        title="About  "
        title2="Primo Painters"
        // subtitle='Your Trusted, Skilled, and Eco-Friendly Painting Experts'
        subtitle="Bringing Colour to Calgary with Flawless Paint Jobs! "
        imageSrc={blogsBanner}
      />
      <AboutusAbout />
      <div className="relative">
        <div className="absolute">
          <Image src={BgBackground} alt="bg-Image" />
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-4">
        <SkillPainters />
        <FinestPainters />
      </div>
      <div className="max-sm:my-10">
        <HomeBanner />
      </div>
      <div className="container mx-auto max-w-7xl px-4">
        <CommitmentQualitySection />
        <EcofriendlySection />
      </div>
      <OurGalleryAccordion />
      <CalgaryPainting />
      <ContactFormSection />
      <section className="container mx-auto px-4 py-8 ">
        <div className="text-center  mb-10">
          <h4 className=" text-[22px] text-black font-semibold ont-medium">
            Our Blog
          </h4>
          <h2 className="text-[#0D378D] lg:text-[36px]  text-[26px] font-medium">
            Expert Advice, Trends & DIY Tips
          </h2>
        </div>
        <BlogGrid posts={blogPosts?.slice(0, 3)} />

        <div className="flex justify-center my-7">
          <div className="bg-[#0D378D] px-2 py-2 w-30 text-center rounded-3xl cursor-pointer">
            <Link href="/blogs">View All</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
