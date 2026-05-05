import ContactFormSection from "@/components/ContactFormSection";
import ServiceHero from "@/components/heros/ServiceHero";
import HomeBanner from "@/components/HomeBanner/home-banner";
import Image from "next/image";
import blogsBanner from "@/public/blogs-banner.webp";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import AboutUs from "@/public/AboutUs.webp";
import { InteriorPaintingServiceImg } from "@/data/images";
import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  title: "Calgary's Top Interior Painters: Interior House Painting Services",
  description:
    "Looking for expert interior painting in Calgary? We offer professional interior house painting in Calgary for flawless home transformations.",
  alternates: {
    canonical:
      "https://www.albertacolourpainting.com/interior-painting-calgary",
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
    url: "https://www.albertacolourpainting.com/interior-painting-calgary",
    siteName: "Alberta Colour Painting",
    type: "website",
  },
};

export default function interiorPaintingCalgary() {
  return (
    <>
      <ServiceHero
        title="Expert "
        title2="Interior Painting Services in Calgary"
        title3="for Homes & Businesses"
        imageSrc={blogsBanner}
      />
      {/* Background Image Section */}
      <div className="relative">
        <div className="absolute top-[-100px] z-[-2]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
        <header className="mb-6">
          <h1 className="text-[26px] font-semibold text-[#0D378D]">
            Interior Painting Calgary
          </h1>
        </header>

        <div className="space-y-6">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
            <Image
              src={InteriorPaintingServiceImg.src}
              alt={InteriorPaintingServiceImg.alt}
              fill
              className="md:object-cover sm:object-contain"
              priority
            />
          </div>

          <div className="space-y-4 text-[16px] text-black">
            <p>
              Let's be honest, your home is more than just walls and a roof.
              It's where you spend your life, create memories, and feel safest
              being yourself. That's why it deserves the utmost care and
              attention. At Alberta Colour Painting, we bring your vision to
              life by offering stunning designs that make your walls speak!
              Whether you're looking for a bold statement or a modern refresh,
              our expert team delivers high-quality finishes every time.
            </p>
            <p>
              Are you thinking about giving your home a fresh new look? A simple
              coat of paint can make all the difference and transform your
              space, making it look brighter and feel cozier. At Alberta Colour
              Painting, we offer the highest-quality interior painting services
              in Calgary, ensuring that your space not only looks aesthetic but
              also feels magnetic
            </p>
            <p>
              Whether you're updating your living space, revamping your dining
              hall, or want to infuse a new feel into your bedroom, our skilled
              <a
                href="https://www.albertacolourpainting.com/interior-painting-calgary"
                className="text-blue"
              >
                {" "}
                interior house painters in Calgary{" "}
              </a>
              use premium, long-lasting paints to deliver a sleek and polished
              look. We help you choose the perfect colors and finishes to
              reflect your style and create the atmosphere you want.
            </p>
            <p>
              Our process is quick and hassle-free, and we handle everything
              from prep work and priming to the final coat, so you can sit back
              and enjoy the transformation. Get in touch with us today, and
              let's give your house the makeover it's been waiting for!
            </p>
          </div>
        </div>
      </div>
      <HomeBanner />
      <div className="font-normal flex flex-col  lg:flex-row w-[90%] gap-16 mx-auto py-16 lg:items-center">
        {/* Left side with image */}
        <div className="relative w-full  h-[28vw] lg:w-2/5">
          <Image
            src={AboutUs}
            alt="interior painter calgary"
            fill
            className="max-sm:pr-[20px] object-cover lg:absolute  "
          />
        </div>

        {/* Right side with text */}
        <div className="w-full lg:w-3/5 text-[16px] ">
          <h3 className="lg:text-[32px] text-[24px] font-bold text-[#0D378D] mb-4">
            Beyond Just Paint, We Elevate Your Space
          </h3>

          <p className="text-black mb-4   ">
            At our
            <a
              href="https://www.albertacolourpainting.com"
              className="text-blue"
            >
              {" "}
              painting company in Calgary
            </a>
            , interior painting is more than just changing the shade or color of
            a space; it's about transforming the entire atmosphere and creating
            a feeling of comfort and style. A fresh coat of paint can breathe
            new life into a room, making it feel more inviting, spacious, or
            even more sophisticated, depending on the colors and finishes
            chosen.
          </p>
          <p className="text-black mb-4   ">
            We understand that choosing the right colors and finishes can be a
            bit of a task, which is why we’re here to make it easy for you.
            Whether you want to refresh your cozy living room that's been the
            same for a long time or give your bedroom a fresh, welcoming feel,
            our interior painting services in Calgary have got you covered. Our
            expert painters help bring your vision to life with top-quality
            paints and professional techniques that ensure a flawless finish.
            With a strong commitment to quality, we use only the best materials,
            giving you long-lasting, durable results that stand the test of
            time. So, whether it's your house or your workplace, we make sure
            every brushstroke adds beauty, warmth, and personality to your space
            just the way you want it.
          </p>
          <p className="text-black mb-4   ">
            From preparation to cleanup, we handle every step of the painting
            process with efficiency. We take the time to properly prepare
            surfaces, ensuring a smooth and even application, leaving your space
            spotless once the job is done. Our goal is not just to meet your
            expectations but to exceed them, providing you with an interior that
            feels perfectly tailored to your style.
          </p>
        </div>
      </div>
      <ContactFormSection />
    </>
  );
}
