import ContactFormSection from "@/components/ContactFormSection";
import ServiceHero from "@/components/heros/ServiceHero";
import HomeBanner from "@/components/HomeBanner/home-banner";
import Image from "next/image";
import blogsBanner from "@/public/blogs-banner.webp";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import AboutUs from "@/public/garage1.webp";
import { GaragePaintingServiceImg } from "@/data/images";
import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Garage Painting in Calgary | Garage Door & Floor​ Painters",
  description:
    "Alberta Colour Painting provides professional garage painting in Calgary, including garage floor paint and garage door painting services. Contact us today.",
  alternates: {
    canonical: "https://www.albertacolourpainting.com/garage-painting-calgary",
  },
  keywords: [
    "Garage Painting Calgary",
    "Garage floor paint calgary",
    "Garage door painting calgary​",
  ],
  openGraph: {
    title: "Need Calgary Painters?",
    description:
      "Book your free estimate today with Alberta Colour Painting, the top-rated painting company in Calgary.",
    images: [
      {
        url: "https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp",
      },
    ],
    url: "https://www.albertacolourpainting.com/garage-painting-calgary",
    siteName: "Alberta Colour Painting",
    type: "website",
  },
};

export default function garagePaintingPage() {
  return (
    <>
      <ServiceHero
        title="Your Car Deserves a Sleek Space Too!"
        title2="Upgrade with Premium"
        title3="Garage Painting In Calgary"
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
            Garage Painting Calgary
          </h1>
        </div>

        <div className="space-y-6 ">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
            <Image
              src={GaragePaintingServiceImg.src}
              alt={GaragePaintingServiceImg.alt}
              fill
              className="md:object-cover sm:object-contain"
              priority
            />
          </div>

          <div className="space-y-4 text-[16px] text-black">
            <p>
              Just like your ride deserves the best care, it also needs a fresh,
              stylish space to call home! Whether you use it for storage, as a
              workshop, or simply as a space to keep your vehicles safe, a fresh
              coat of paint can make a huge difference. At Alberta Colour
              Painting, we specialize in garage painting in Calgary, helping
              homeowners refresh and protect their garage walls, ceilings, and
              floors with high-quality, durable paints.
            </p>
            <p>
              Your garage isn't just a parking spot; your car's personal space
              should look just as sleek and well-kept. With our garage painting
              in Calgary, we'll transform your garage into a clean, polished
              space that matches your style. At Alberta Colour Painting, quality
              comes first, and that is why our team of garage painters uses
              premium paints and durable finishes to keep your space looking
              fresh and protected for years to come.
            </p>
            <p>
              And the best part? Top-tier quality doesn't have to break the
              bank! We offer affordable pricing without compromising on quality.
              Give your car a home that looks just as good as it does! Let's
              upgrade your garage with our{" "}
              <a
                href="https://www.albertacolourpainting.com/cabinet-painting-calgary"
                className="text-blue"
              >
                {" "}
                garage painting in Calgary
              </a>
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
            alt="garage floor paint calgary"
            fill
            className="max-sm:pr-[20px] object-cover lg:absolute  "
          />
        </div>

        {/* Right side with text */}
        <div className="w-full lg:w-3/5 text-[16px] text-black  ">
          <h3 className="lg:text-[32px] text-[24px] font-bold text-[#0D378D] mb-4">
            Why Our Garage Painting in Calgary Is Worth It
          </h3>
          <p className="mb-6">
            It’s no secret that the garage is one of the most overlooked spaces
            in any home. While your ride might be sleek and stylish, parking it
            in a dull, dusty, or outdated space can seriously take away from its
            shine. No matter how impressive your car is, the surroundings
            matter, and a fresh, clean, and well-painted garage can make all the
            difference.
          </p>
          <p className="mb-6">
            At Alberta Colour Painting, we use high-quality, durable paints
            designed to withstand Calgary’s fluctuating temperatures, moisture,
            and daily wear. Painted garage walls and ceilings are easier to
            clean, reduce dust, and instantly brighten the space. But the
            transformation doesn’t stop there. Garage floor painting is the
            final touch that truly infuses life into the entire space. It not
            only restores damaged or stained flooring but also adds a durable,
            protective layer that can withstand oil spills, tire marks, and
            daily wear and tear.
          </p>
          <p className="mb-6">
            Whether you use your garage for parking, storage, or as a hobby
            space, a professionally painted floor gives it that crisp, finished
            look, almost like a showroom. It’s not just about aesthetics,
            either; it's about extending the life of your surfaces and creating
            a garage that feels as well cared for as the rest of your home.
          </p>
          <p className="mb-6">
            So whether you're going for a clean, showroom-style garage or just
            want to protect and refresh a hardworking space, we've got you
            covered. Alberta Colour Painting is your trusted partner for garage{" "}
            <a
              href="https://www.albertacolourpainting.com"
              className="text-blue"
            >
              painting in Calgary
            </a>
            , offering high-quality work with precision and great value.
          </p>
        </div>
      </div>
      <ContactFormSection />
    </>
  );
}
