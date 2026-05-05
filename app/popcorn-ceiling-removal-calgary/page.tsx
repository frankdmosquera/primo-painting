import ContactFormSection from "@/components/ContactFormSection";
import ServiceHero from "@/components/heros/ServiceHero";
import HomeBanner from "@/components/HomeBanner/home-banner";
import Image from "next/image";
import blogsBanner from "@/public/blogs-banner.webp";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import AboutUs from "@/public/services/popcornAbout.webp";
import DotFranks from "@/components/ui/DotFranks";
import { PopcornRemvalServiceImg } from "@/data/images";
import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  title: "Calgary Popcorn Ceiling Removal and Repair Services",
  description:
    "Want ceiling popcorn removal services in Calgary? We transform popcorn ceilings into smooth surfaces. Contact us today to schedule your home renovation consultation!",
  alternates: {
    canonical:
      "https://www.albertacolourpainting.com/popcorn-ceiling-removal-calgary",
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
    url: "https://www.albertacolourpainting.com/popcorn-ceiling-removal-calgary",
    siteName: "Alberta Colour Painting",
    type: "website",
  },
};

export default function popcornCeilingRemovalPage() {
  return (
    <>
      <ServiceHero
        title=""
        title2="Popcorn Ceiling Removal in Calgary"
        title3="Made Quick & Hassle-Free
"
        imageSrc={blogsBanner}
      />
      {/* Background Image Section */}
      <div className="relative">
        <div className="absolute top-[-100px] z-[-2]">
          <Image src={BgBackground2} alt="bg-Image" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
        <div className="mb-6">
          <h1 className="text-[26px] font-semibold text-[#0D378D]">
            Popcorn Ceiling Removal Calgary
          </h1>
        </div>

        <div className="space-y-6 ">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
            <Image
              src={PopcornRemvalServiceImg.src}
              alt={PopcornRemvalServiceImg.alt}
              fill
              className="md:object-cover sm:object-contain"
              priority
            />
          </div>

          <div className="space-y-4 text-[16px] text-black">
            <p>
              Popcorn ceilings were once trendy, but let's be real, they're
              outdated, hard to clean, and can make your space feel old and
              dull. If you're ready to give your home a modern, sleek upgrade,
              our popcorn ceiling removal in Calgary is exactly what you need!
            </p>
            <p>
              At Alberta Colour Painting, we specialise in safe and mess-free
              popcorn ceiling removal, leaving your space with a smooth, stylish
              finish that quickly transforms the overall look. Whether you're
              renovating, selling your home, or just tired of the bumpy,
              textured look, we've got you covered.
            </p>
            <p>
              At Alberta Colour Painting, we provide complete popcorn ceiling
              removal services in Calgary, handling everything from start to
              finish. Our process includes removing the textured ceiling,
              applying multiple coats of mud for a smooth finish, followed by
              sanding, priming, and painting. Our skilled team ensures a
              dust-free, mess-free experience, using top-quality products and
              expert techniques to eliminate outdated textures safely. We make
              the entire process smooth, efficient, and completely hassle-free.
            </p>
            <p>
              We are dedicated to delivering services that exceed your
              expectations. Contact Alberta Colour Painting today to transform
              your space with a brand new ceiling.
            </p>
          </div>
        </div>
      </div>
      <HomeBanner />
      <div className=" flex flex-col  lg:flex-row w-[90%] gap-16 mx-auto py-16 lg:items-center">
        {/* Left side with image */}
        <div className="relative w-full  h-[45vw] lg:w-2/5">
          <Image
            src={AboutUs}
            alt="popcorn ceiling removal calgary"
            fill
            className="max-sm:pr-[20px] object-cover lg:absolute  "
          />
        </div>

        {/* Right side with text */}
        <div
          className="w-full lg:w-3/5 text-[16px] font-normal  
"
        >
          <h3 className="lg:text-[32px] text-[24px] font-bold text-[#0D378D] mb-4">
            A Quick Popcorn Ceiling Self-Test
          </h3>
          <p className="text-black mb-6  ">
            Here are a few questions for you to help you determine if it's time
            for popcorn ceiling removal services. This quick self-test is
            designed to help you decide when your ceilings are due for an
            upgrade
          </p>
          <div className="flex gap-4 w-8/9 text-[15px]">
            <DotFranks />
            <p className="text-black  ">
              <span className="font-bold text-[#0D378D] mr-1">
                Does your ceiling look like cottage cheese or popcorn kernels?
              </span>
              <span className="text-black mb-3  ">
                From preparation to cleanup, we handle every step of the
                painting process with efficiency. We take the time to properly
                prepare surfaces, ensuring a smooth and even application,
                leaving your space spotless once the job is done. Our goal is
                not just to meet your expectations but to exceed them, providing
                you with an interior that feels perfectly tailored to your
                style.
              </span>
            </p>
          </div>
          <br />
          <div className="flex gap-4 w-8/9 text-[15px]">
            <DotFranks />
            <p className="text-black  ">
              <span className="font-bold text-[#0D378D] mr-1">
                Do you notice discoloration, stains, or shadows?
              </span>
              <span className="text-black mb-3  ">
                Popcorn ceilings might have been a past trend, but they are
                infamous for trapping dust and moisture. Look at your ceiling,
                if you notice brown patches or yellow spots, it could mean
                trapped water, leaks, mold or grime. With time, the damage can
                worsen, and if you're having a hard time hiding those blemishes,
                it's a strong sign that it's time to consider our Calgary
                popcorn ceiling repair services before the problem gets bigger.
              </span>
            </p>
          </div>
          <br />

          <div className="flex gap-4 w-8/9 text-[15px]">
            <DotFranks />
            <p className="text-black  ">
              <span className="font-bold text-[#0D378D] mr-1">
                Was your home built before 1990?
              </span>
              <span className="text-black mb-3  ">
                Many older ceilings used materials that contained asbestos—a
                known health hazard. If your popcorn ceiling hasn’t been tested,
                it’s not worth the risk to leave it unchecked. The best move?
                Reach out to our skilled professionals. We're experts in popcorn
                ceiling repair and ready to provide the right solution to give
                your home the clean, modern look it deserves.
              </span>
            </p>
          </div>
          <br />
          <div className="flex gap-4 w-8/9 text-[15px]">
            <DotFranks />
            <p className="text-black  ">
              <span className="font-bold text-[#0D378D] mr-1">
                Is your lighting dull or uneven?
              </span>
              <span className="text-black mb-3  ">
                Popcorn ceilings are notorious for weirdly scattering light and
                absorbing the brightness of a room, creating shadows and dull
                spots, making the room appear darker and smaller. The ceiling
                could be to blame if your lighting feels off, no matter how many
                bulbs you change. Removing the textured surface allows light to
                reflect more evenly, instantly brightening up your space and
                enhancing its overall look.
              </span>
            </p>
          </div>
          <br />
          <div className="flex gap-4 w-8/9 text-[15px]">
            <DotFranks />
            <p className="text-black  ">
              <span className="font-bold text-[#0D378D] mr-1">
                Are you planning to sell or renovate?
              </span>
              <span className="text-black mb-3  ">
                Textured ceilings can instantly date a space and turn off
                potential buyers or guests as today's market favors clean
                finishes, and popcorn ceilings simply don't fit that look.
                Leaving the old texture behind in a renovation can clash with
                your new design, making even the most beautiful updates feel
                incomplete. Plus, if your ceilings are damaged or hiding
                underlying issues, now is the perfect time to get the popcorn
                ceiling removal in Calgary.
              </span>
            </p>
          </div>
          <br />
          <p className="text-black mb-6  ">
            From a resale perspective, smooth ceilings improve aesthetics and
            increase your home’s resale value. Buyers see them as one less thing
            to update, giving you a competitive edge. Whether revamping your
            forever home or getting ready to list, our
            <a
              href="https://www.albertacolourpainting.com/popcorn-ceiling-removal-calgary"
              className="text-blue"
            >
              {" "}
              popcorn ceiling removal service in Calgary{" "}
            </a>
            ensures a clean, modern finish that aligns and adds lasting value.
          </p>
        </div>
      </div>
      <ContactFormSection />
    </>
  );
}
