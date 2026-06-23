import ContactFormSection from "@/components/ContactFormSection";
import ServiceHero from "@/components/heros/ServiceHero";
import HomeBanner from "@/components/HomeBanner/home-banner";
import Image from "next/image";
import blogsBanner from "@/public/blogs-banner.webp";
import BgBackground2 from "@/public/above-gallery-bg-line.svg";
import AboutUs from "@/public/services/comerical.webp";
import DotFranks from "@/components/ui/DotFranks";
import { CommercialPaintingServiceImg } from "@/data/images";
import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Top Commercial Painters in Calgary | Best Painting Company",
  description:
    "Primo Painting is one of the leading commercial painting companies in Calgary, providing expert interior & exterior painting with the best results.",
  alternates: {
    canonical: "https://www.primopainting.ca/commercial-painting-calgary",
  },
  openGraph: {
    title: "Need Calgary Painters?",
    description:
      "Book your free estimate today with Primo Painting, the top-rated painting company in Calgary.",
    images: [
      {
        url: "https://res.cloudinary.com/primo-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp",
      },
    ],
    url: "https://www.primopainting.ca/commercial-painting-calgary",
    siteName: "Primo Painting",
    type: "website",
  },
};
export default function commercialPaintingCalgary() {
  return (
    <>
      <ServiceHero
        title="Commercial"
        title2="Painting in Calgary for Office & Retail"
        // title3=" & Industrial Spaces"
        imageSrc={blogsBanner}
      />
      {/* Background Image Section */}
      <div className="relative">
        <div className="absolute top-[-100px] z-[-2]">
          <Image
            src={BgBackground2}
            alt="bg-Image"
            width={400}
            height={300}
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
        <header className="mb-6">
          <h1 className="text-[26px] font-semibold text-[#0D378D]">
            Commercial Painting Calgary
          </h1>
        </header>

        <div className="space-y-6">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden">
            <Image
              src={CommercialPaintingServiceImg.src}
              alt={CommercialPaintingServiceImg.alt}
              fill
              className="md:object-cover sm:object-contain"
              priority
            />
          </div>

          <div className="space-y-4 text-[16px] text-black">
            <p>
              Did you know people judge your business by how your space looks?
              Just think about it! What gets your brand noticed and makes your
              business stand out? A well-maintained space that tells people you
              mean business! First impressions matter; a fresh, stylish paint
              job can make all the difference. If you want people to feel
              welcomed and your company to look its best, then commercial
              <a href="https://www.primopainting.ca/" className="text-blue">
                {" "}
                painting in Calgary
              </a>{" "}
              is exactly what you need.
            </p>
            <p>
              Are you a business owner looking to elevate your commercial space
              with a paint job that brings life to your brand? No matter the
              nature of your business, a well-designed and freshly painted space
              feels more welcoming, professional, and credible to your potential
              customers. Your commercial space reflects your business ideology,
              and the right colors and finishes can create an atmosphere that
              inspires trust, boosts productivity, and gives your brand a unique
              identity.
            </p>
            <p>
              At Primo Painting, we've worked with numerous businesses of
              different sizes, helping them bring their brand vision to life
              through high-quality commercial painting. Whether it's an office,
              retail store, restaurant, or warehouse, our commercial painters in
              Calgary use premium, long-lasting paints to create a space that
              not only looks great but also stands the test of time.
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
            alt="commercial painting companies"
            className="max-sm:pr-[20px] object-cover lg:absolute  "
            width={400}
            height={300}
            priority
          />
        </div>

        {/* Right side with text */}
        <div className="w-full text-[16px]   lg:w-3/5 flex flex-col gap-3 ">
          <h3 className="lg:text-[32px] text-[24px] font-bold text-[#0D378D]">
            Colour Psychology, for Commercial Spaces
          </h3>

          <p className="text-black  ">
            If you’re a business owner, your office or commercial space is like
            your second home. It's where ideas grow, goals are set, and your
            team comes together every day. That's why taking care of your walls
            and overall environment is just as important as any other part of
            your business.
          </p>
          <p className="text-black  ">
            Vibrant colours can boost mood, motivation, and set the tone for
            productivity. The right shades don’t just brighten walls, but they
            also energize the people working within them.
          </p>
          <p className="text-black  ">
            Our{" "}
            <a
              href="https://www.primopainting.ca/commercial-painting-calgary"
              className="text-blue"
            >
              commercial painters in Calgary
            </a>{" "}
            have shared a few fun facts about how different colours can affect
            the vibe and energy of your space. Check them out below!
          </p>
          <div className="flex gap-4 ">
            <DotFranks />
            <p className="text-black text-[15px] w-8/9 max-sm:w-full">
              <span className="font-bold text-[#0D378D] mr-1">
                Blues and greens:
              </span>
              promote focus and calm — great for offices.
            </p>
          </div>

          <div className="flex gap-4 ">
            <DotFranks />
            <p className="text-black text-[15px] w-8/9 max-sm:w-full">
              <span className="font-bold text-[#0D378D] mr-1">
                Warm tones like reds and oranges:
              </span>
              can energize retail or dining spaces.
            </p>
          </div>

          <div className="flex gap-4 ">
            <DotFranks />
            <p className="text-black text-[15px]  w-8/9 max-sm:w-full ">
              <span className="font-bold text-[#0D378D] mr-1">
                Neutral palettes:
              </span>
              give a clean, professional feel in medical or legal settings.
            </p>
          </div>

          <div className="flex gap-4 ">
            <DotFranks />
            <p className="text-black text-[15px] w-8/9 max-sm:w-full">
              <span className="font-bold text-[#0D378D] mr-1">
                Accent walls:
              </span>
              can highlight branding or guide customer flow in showrooms or
              stores.
            </p>
          </div>

          <p className="text-black  ">
            If you’re looking to add a touch of luxury with a cozy, welcoming
            vibe to your commercial space but want something unique, we’ve got
            you
          </p>
          <p className="text-black  ">
            Get in touch with our commercial painting company in Calgary, and
            we’ll take the time to understand your vision. Our experts will
            assess your space, listen to your needs, and recommend creative,
            standout options that make your office pop while also boosting
            productivity in the long run.
          </p>
          <h3 className="lg:text-[32px] text-[24px] font-bold text-[#0D378D]">
            Our Minimal Disruption Promise!
          </h3>

          <p className="text-black   ">
            We keep your business running while we get the job done. Now there’s
            no need to wrap everything up and take days off so that you can get
            your space revamped. We understand that time is money, especially
            for businesses. That’s why our commercial painting services are
            built around efficiency and flexibility, so you don't have to choose
            between improving your space and staying operational.
          </p>
          <p className="text-black   ">
            Our commercial{" "}
            <a
              href="https://www.primopainting.ca/commercial-painting-calgary"
              className="text-blue"
            >
              painting services in Calgary
            </a>{" "}
            offer:
          </p>
          <div className="flex gap-4 ">
            <DotFranks />
            <p className="text-black text-[15px] w-8/9 max-sm:w-full">
              <span className="font-bold text-[#0D378D] mr-1">
                Flexible Scheduling:
              </span>
              We offer evenings, weekends, and off-hours painting to avoid
              interrupting your daily operations.
            </p>
          </div>

          <div className="flex gap-4 ">
            <DotFranks />
            <p className="text-black text-[15px] w-8/9 max-sm:w-full">
              <span className="font-bold text-[#0D378D] mr-1">
                Fast, Clean Work:
              </span>
              Our crew works quickly and keeps the site clean—no mess, no
              stress.
            </p>
          </div>

          <div className="flex gap-4 ">
            <DotFranks />
            <p className="text-black text-[15px]  w-8/9 max-sm:w-full ">
              <span className="font-bold text-[#0D378D] mr-1">
                Discreet Service:
              </span>
              Need us to work in sections or maintain a quiet environment? No
              problem. We adapt to your needs.
            </p>
          </div>

          <p className="text-black   ">
            Getting that dream space you’ve been putting off is easier than ever
            with us. At Alberta Colour Painting, we take the time to understand
            your needs and carefully plan a schedule that fits your routine so
            your business can keep running smoothly without any disruptions.
          </p>
          <p className="text-black   ">
            To learn more about our commercial painting services in Calgary,
            reach out to our team of experts. We’ll recommend the best possible
            solution tailored to your business and your vision.
          </p>
        </div>
      </div>

      <ContactFormSection />
    </>
  );
}
