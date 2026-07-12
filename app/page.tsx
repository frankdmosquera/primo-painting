import { siteConfig } from "@/data/siteConfig";
import { faqJsonLd } from "@/data/faqJsonLd";
import type { Metadata, Viewport } from "next";
import OurServices from "@/components/our-services";
import { CalgaryPainting } from "@/components/calgary-painting";
import ContactFormSection from "@/components/ContactFormSection";
import HomeHero from "@/components/heros/HomeHero";
import FaqSection from "@/components/Faq";
import Reviews from "@/components/Reviews";
import ServiceBanner from "@/components/ServiceBanner/service-banner";
import BgLines from "@/components/BgLines";
import WhyChooseUs from "@/components/whyChooseUs";
import FinalCTA from "@/components/FinalCTA";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  title: "Calgary Interior House Painters | Primo Painters",

  description:
    "Primo Painters provides professional interior house painting in Calgary, specializing in walls, ceilings, trim, doors, garages, and more. Free estimates.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Calgary Interior House Painters | Primo Painters",

    description:
      "Professional interior house painting in Calgary for walls, ceilings, trim, doors, garages, and more.",

    url: "/",

    siteName: siteConfig.business.name,

    type: "website",

    locale: "en_CA",

    images: [
      {
        url: siteConfig.branding.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.business.name} - Calgary Interior House Painters`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Calgary Interior House Painters | Primo Painters",

    description:
      "Professional interior house painting in Calgary for walls, ceilings, trim, doors, cabinets, and more.",

    images: [siteConfig.branding.ogImage],
  },
};

export default async function Home() {
  return (
    <>
      <HomeHero />
      <OurServices />
      <WhyChooseUs />
      <div className="flex flex-col ">
        <Reviews />
        <div className="relative top-[100px]">
          <BgLines />
        </div>
        <ServiceBanner />
        <CalgaryPainting />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
        <FaqSection />
        <div className="relative ">
          <BgLines />
        </div>
        {/* <ContactFormSection /> */}
        <FinalCTA />
      </div>
    </>
  );
}
