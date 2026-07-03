import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import ContactFormSection from "../../components/ContactFormSection";
import HomeBanner from "@/components/HomeBanner/home-banner";
import blogsBanner from "@/public/blogs-banner.webp";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import StandardHero from "@/components/heros/StandardHero";
import { services } from "@/data/serviceData";
import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: " Painting Services in Calgary | Primo Painting",
  description:
    "Explore top-quality residential & commercial painting services with Primo Painting. Interior, exterior & custom solutions tailored to your unique needs.",
  alternates: {
    canonical: "https://www.primopainting.ca/services",
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
    url: "https://www.primopainting.ca/services",
    siteName: "Primo Painting",
    type: "website",
  },
};

export default function Services() {
  return (
    <>
      <StandardHero
        title="Our"
        title2="Painting Services"
        subtitle="Transforming Homes & Businesses with Quality Painting"
        imageSrc={blogsBanner}
      />

      <div className="lg:mt-20 mx-4 mt-10">
        <div className="absolute ">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
        {/* Services Grid */}
        <div className="container mx-auto max-w-7xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            {services?.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden p-0 border-0 shadow-none space-y-3"
              >
                <CardTitle className="uppercase lg:text-[26px] text-[18px] p-0 font-bold text-[#0D378D] mb-[-10]">
                  {service.title}
                </CardTitle>
                <div className="relative h-[300px] w-full">
                  <Image
                    src={service.imageSrc}
                    alt={service.altText}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className=" p-0">
                  <CardTitle className="uppercase text-[20px] font-bold text-black mt-[-23]">
                    {service.title}
                  </CardTitle>
                  <CardDescription className=" text-black text-[16px]">
                    {service.description.split("\n")[0]}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="p-0 mt-[-20]">
                  <Link
                    href={"/" + service?.slug}
                    className="bg-[#0D378D] text-white pl-5 pr-2 py-1.5   border-2 border-white rounded-full font-medium  flex items-center justify-center"
                  >
                    {service.buttonText}
                    <span className="ml-2 bg-white rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                      >
                        <path
                          d="M14.5 0.999999C14.5 0.447714 14.0523 -8.61581e-07 13.5 -1.11446e-06L4.5 -3.13672e-07C3.94772 -6.50847e-07 3.5 0.447715 3.5 0.999999C3.5 1.55228 3.94772 2 4.5 2L12.5 2L12.5 10C12.5 10.5523 12.9477 11 13.5 11C14.0523 11 14.5 10.5523 14.5 10L14.5 0.999999ZM2.20711 13.7071L14.2071 1.70711L12.7929 0.292893L0.792893 12.2929L2.20711 13.7071Z"
                          fill="#0D378D"
                        />
                      </svg>
                    </span>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div className="absolute top-[2000px] z-[-9]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
        <div className="lg:mt-10 mt-5">
          <HomeBanner />
        </div>

        {/* Contact Form Section */}
        <div className="relative">
          <div className="absolute z-[-200]">
            <Image src={BgBackground2} alt="bg-Image" />
          </div>
          <ContactFormSection />
        </div>
      </div>
    </>
  );
}
