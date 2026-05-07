import type { Metadata, Viewport } from "next";
import Image from "next/image";
import BgBackground from "@/public/about-background-vector-line.svg";
import OurServices from "@/components/our-services";
import { CalgaryPainting } from "@/components/calgary-painting";
import ContactFormSection from "@/components/ContactFormSection";
import BlogGrid from "@/components/blog-grid";
import HomeBanner from "@/components/HomeBanner/home-banner";
import Link from "next/link";
import HomeHero from "@/components/heros/HomeHero";
import AboutusHome from "@/components/AboutUs/AboutusHome";
import GallerySection from "@/components/gallery/GallerySection";
import SpecialOfferWrapper from "@/components/SpecialOfferWrapper";
import FaqSection from "@/components/Faq";
import { blogPosts } from "@/lib/blog-data";
import Reviews from "@/components/Reviews";
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
    "painting companies calgary",
    "painting companies calgary alberta",
    "calgary painting companies",
    "house painting calgary",
    "painting services calgary",
    "painters in calgary alberta",
    "painting contractors calgary",
    "alberta painting contractors calgary",
  ],
  alternates: {
    canonical: "https://www.primopainting.ca",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Need Calgary Painters?",
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
  // const res = await fetch(process.env.GOOGLE_REVIEWS_URL!, {
  //   next: { revalidate: 604800 }, //Oncde a week week <==
  // });
  // let newestGoogleReviews;
  // const data = await res.json();
  // const allGoogleReviews: ReviewsGoogleType = await data.result?.reviews;
  // newestGoogleReviews = allGoogleReviews.slice(0, 6);

  return (
    <>
      <HomeHero />
      <AboutusHome />
      <OurServices />
      <div className="flex flex-col ">
        <Reviews />
        <div className="relative">
          <div className="absolute top-[-30px]">
            <Image src={BgBackground} alt="bg-Image" />
          </div>
          <HomeBanner />
        </div>
        <SpecialOfferWrapper />
        <GallerySection />
        <CalgaryPainting />
        <FaqSection />
        <section className="container mx-auto px-4 py-8 ">
          <div className="text-center  mb-10">
            <h2 className="text-[22px] font-semibold text-black ont-medium">
              Our Blog
            </h2>
            <h3 className="text-[#0D378D] lg:text-[36px]  text-[26px] font-medium">
              Expert Advice, Trends & DIY Tips
            </h3>
          </div>
          <BlogGrid posts={blogPosts?.slice(0, 3)} />
          <div className="flex justify-center my-7">
            <div className="bg-[#0D378D] px-2 py-2 w-30 text-center rounded-3xl cursor-pointer">
              <Link href="/blogs">View All</Link>
            </div>
          </div>
        </section>
        <ContactFormSection />
      </div>
    </>
  );
}
