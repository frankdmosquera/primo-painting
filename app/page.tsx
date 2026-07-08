import type { Metadata, Viewport } from "next";
import OurServices from "@/components/our-services";
import { CalgaryPainting } from "@/components/calgary-painting";
import ContactFormSection from "@/components/ContactFormSection";
import HomeHero from "@/components/heros/HomeHero";
import AboutusHome from "@/components/AboutUs/AboutusHome";
import FaqSection from "@/components/Faq";
import Reviews from "@/components/Reviews";
import ServiceBanner from "@/components/ServiceBanner/service-banner";
import BgBackground from "@/components/BgBackground";
import BgLines from "@/components/BgLines";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  title:
    "Expert Calgary Painters for Exteriod and Interior House Painting Services",
  description:
    "Looking for affordable Calgary painters? Our top-rated house painting company in Calgary offers professional exterior and  interior painting services to meet all your needs.",
  keywords: [
    "calgary painters",
    "interior painting",
    "interior calgary painters",
    "calgary interior painters",
    "calgary interior painting",
    "painting company calgary alberta",
    "calgary painting companies",
    "house painting calgary",
    "interior house painting calgary",
    "painting services calgary",
    "painters in calgary alberta",
    "interior painting contractors calgary",
  ],
  alternates: {
    canonical: "https://www.primopainting.ca",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Need Calgary Interior Painters?",
    description:
      "Book your free estimate today with Primo Painting, the top-rated painting company in Calgary.",
    images: [
      {
        url: "https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp",
      },
    ],
    url: "https://www.primopainting.ca",
    siteName: "Primo Painting",
    type: "website",
  },
};

export default async function Home() {
  return (
    <>
      <HomeHero />
      {/* <AboutusHome /> */}
      {/* <div className="relative ">
        <BgLines />
      </div> */}
      <OurServices />
      <div className="flex flex-col ">
        <Reviews />
        <div className="relative top-[100px]">
          <BgLines />
        </div>
        <ServiceBanner />
        <CalgaryPainting />
        <FaqSection />
        <div className="relative ">
          <BgLines />
        </div>
        <ContactFormSection />
      </div>
    </>
  );
}
