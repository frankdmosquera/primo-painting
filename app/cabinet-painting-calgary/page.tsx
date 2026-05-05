import ContactFormSection from "@/components/ContactFormSection";
import ServiceHero from "@/components/heros/ServiceHero";
import HomeBanner from "@/components/HomeBanner/home-banner";
import Image from "next/image";
import blogsBanner from "@/public/blogs-banner.webp";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import AboutUs from "@/public/services/cabinet.webp";
import DotFranks from "@/components/ui/DotFranks";
import {
  cabinetPaintingServiceImg,
  ServicescabinetPaintingImg,
} from "@/data/images";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Head from "next/head";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Cabinet Painting in Calgary | Bathroom & Kitchen Cabinet Painters",
  description:
    "Alberta Colour Painting offers expert cabinet painting in Calgary. Our skilled painters transform kitchen or bathroom cabinets with style and precision.",
  keywords: [
    "cabinet painting calgary",
    "kitchen cabinet painting calgary",
    "kitchen cabinet painters calgary",
    "cabinet painters calgary",
  ],
  alternates: {
    canonical: "https://www.albertacolourpainting.com/cabinet-painting-calgary",
  },
  openGraph: {
    title: "Need Calgary Painters?",
    description:
      "Book your free estimate today with Alberta Colour Painting, the top-rated painting company in Calgary.",
    images: [
      {
        url: "https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp",
      },
    ],
    url: "https://www.albertacolourpainting.com/cabinet-painting-calgary",
    siteName: "Alberta Colour Painting",
    type: "website",
  },
};

export default function cabinetPaintingPage() {
  return (
    <>
      <ServiceHero
        title=""
        title2="Give Your Space a New Life with"
        title3="Custom Cabinet Painting in Calgary"
        imageSrc={blogsBanner}
      />
      {/* Background Image Section */}
      <div className="relative">
        <div className="absolute top-[-100px] z-[-2]">
          <Image src={BgBackground2} alt="bg-Image"width={400} height={300} priority />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
        <div className="mb-6">
          <h1 className="text-[26px] font-semibold text-[#0D378D]">
            Cabinet Painting Calgary
          </h1>
        </div>

        <div className="space-y-6 ">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
            <Image
              src={ServicescabinetPaintingImg.src}
              alt={ServicescabinetPaintingImg.alt}
              fill
              className="md:object-cover sm:object-contain"
              width={400} height={300}
              priority
            />
          </div>

          <div className="space-y-4 text-[16px] text-black">
            <p>
              Sick of looking at the same boring, outdated cabinets? It's time
              for a glow-up! Our cabinet painting in Calgary will give your
              kitchen, bathroom, or any cabinetry a fresh, modern vibe without
              the need for an expensive renovation. Just a quick, hassle-free
              transformation to make your space look FAB!
            </p>
            <p>
              We offer professional cabinet painting services for a wide range
              of cabinetry, including kitchen cabinets, bathroom cabinets,
              vanity painting, built-in shelving, closets, and more. Whether you
              want to add a touch of charm with a modern finish, refresh your
              vanity with a new look, or update any other cabinets in your home,
              we've got you covered!
            </p>
            <p>
              Your space should speak volumes of your style and vibe, and that
              is why we offer{" "}
              <a
                href="https://www.albertacolourpainting.com/cabinet-painting-calgary"
                className="text-blue"
              >
                {" "}
                custom cabinet painting in Calgary
              </a>
              , understanding your vision and bringing it to life. Our experts
              use a wide range of colours and finishes to match your style and
              home décor through a hassle-free process. Our team manages
              everything from cleaning and sanding to priming and painting,
              ensuring a durable and professional finish. By choosing our
              cabinet painting in Calgary, you save money and make an
              eco-friendly choice by repurposing existing materials.
            </p>
            <p>
              Don't settle for outdated, dull cabinets, and elevate your space's
              vibe and feel with our top-quality cabinet painting in Calgary.
              Contact Alberta Colour Painting today and give your space the
              makeover it deserves!
            </p>
          </div>
        </div>
      </div>
      <HomeBanner />
      <div className="font-normal flex flex-col  lg:flex-row w-[90%] gap-16 mx-auto py-16 lg:items-center">
        {/* Left side with image */}
        <div className="relative w-full  h-[50vw] lg:w-2/5">
          <Image
            src={AboutUs}
            alt="Elegant interior with staircase"
            fill
            className="max-sm:pr-[20px] object-cover lg:absolute  "
            width={400} height={300} priority
          />
        </div>

        {/* Right side with text */}
        <div className="w-full lg:w-3/5 text-[16px] text-black flex flex-col gap-5">
          <h3 className="lg:text-[32px] text-[24px] font-bold text-[#0D378D]">
            Cabinet Painting in Calgary
            <br />— A Local Touch That Makes All the Difference
          </h3>
          <p className=" ">
            Transforming your kitchen or bathroom cabinets doesn't have to mean
            a full renovation. In Calgary's dynamic housing market, cabinet
            painting has become the smart, affordable way to refresh your space
            while adding real value to your home. Whether you live in a cozy
            bungalow in Bridgeland, a modern condo downtown, or a family home,
            we understand the styles and finishes that resonate with Calgarians.
          </p>
          <p className=" ">
            From trendy two-toned cabinets to classic whites that brighten up
            our winter days, we tailor every project to fit your space, your
            taste, and our local vibe.
          </p>
          <p className=" ">
            And because we’re among the best{" "}
            <a
              href="https://www.albertacolourpainting.com"
              className="text-blue"
            >
              {" "}
              cabinet painting companies in Calgary
            </a>
            , you’re getting more than just a service — you're getting a team
            that knows the city, respects your home, and cares about delivering
            results that last through all four seasons.
          </p>

          <h3 className="lg:text-[32px] text-[24px] font-bold text-[#0D378D]">
            Why You Need Our
            <br />
            Cabinet Painting Services in Calgary
          </h3>

          <p className=" ">
            In a city where the cost of living keeps rising and full renovations
            can break the bank, our cabinet painting in Calgary is the
            budget-friendly solution.
          </p>

          <p className=" font-bold text-[#0D378D] ">Here’s why:</p>
          <div className="flex gap-4 w-8/9 max-sm:w-full text-[15px]">
            <DotFranks />
            <p className=" ">
              Painting your existing cabinets costs just a fraction of what
              you'd spend on a full kitchen remodel or cabinet replacement. At
              Alberta Colour Painting, our Calgary cabinet painters are highly
              experienced and experts at delivering stunning results that look
              and fit your budget, too.
            </p>
          </div>

          <div className="flex gap-4 w-8/9 max-sm:w-full text-[15px]">
            <DotFranks />
            <p className=" ">
              Now there is no need to wait weeks (or months) for custom
              cabinetry. Most of the projects we undertake are done in just a
              few days.
            </p>
          </div>

          <div className="flex gap-4 w-8/9 max-sm:w-full text-[15px]">
            <DotFranks />
            <p className=" ">
              Our Calgary cabinet painting services offer style flexibility
              where you can pick from downtown minimalism to cozy suburban charm
              and update your home's look to match your lifestyle and your
              personal taste.
            </p>
          </div>

          <div className="flex gap-4 w-8/9 max-sm:w-full text-[15px]">
            <DotFranks />
            <p className=" ">
              Whether you're planning to sell or just want to impress guests, a
              freshly painted cabinet instantly elevates the space. We offer a
              wide range of bathroom, vanity, closet, and kitchen cabinet
              painting in Calgary, all under one expert roof.
            </p>
          </div>
        </div>
      </div>
      <ContactFormSection />
    </>
  );
}
