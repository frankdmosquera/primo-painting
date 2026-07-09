import Image from "next/image";
import { CalgaryPainting } from "@/components/calgary-painting";
import ContactFormSection from "../../components/ContactFormSection";
import HomeBanner from "@/components/HomeBanner/home-banner";
import Link from "next/link";
import blogsBanner from "@/public/banners/blogs-banner.webp";
import StandardHero from "@/components/heros/StandardHero";
import AboutusAbout from "@/components/AboutUs/AboutusAbout";
import EcofriendlySection from "@/components/AboutUs/EcofriendlySection";
import SkillPainters from "@/components/AboutUs/SkillPaintersSection";
import FinestPainters from "@/components/AboutUs/FinestPaintersSection";
import CommitmentQualitySection from "@/components/AboutUs/CommitmentQualitySection";
import type { Metadata, Viewport } from "next";
import BgBackground from "@/components/BgBackground";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "About Primo Painters: Your Trusted Calgary Painting Company",
  description:
    "Our expert Interior painters deliver top-quality interior services for your home or business. learn about primo painters, your trusted interior painting company in calgary",
  alternates: {
    canonical: "https://www.primopainters.ca/about",
  },
  openGraph: {
    title: "Need CalgaryInterior Painters?",
    description:
      "Book your free estimate today with Primo Painters, the top-rated painting company in Calgary.",
    images: [
      // {
      //   url: "https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp",
      // },
    ],
    url: "https://www.primopainters.ca/about",
    siteName: "Primo Painters",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      <AboutusAbout />
      <StandardHero
        title="About  "
        title2="Primo Painters"
        // subtitle='Your Trusted, Skilled, and Eco-Friendly Painting Experts'
        subtitle="Bringing Colour to Calgary with Flawless Paint Jobs! "
        imageSrc={blogsBanner}
      />
      <div className="relative">
        <div className="absolute">
          <BgBackground />
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
      <CalgaryPainting />
      <ContactFormSection />
    </>
  );
}
