import type { Metadata, Viewport } from "next";
import AboutHero from "@/components/AboutUs/AboutHero";
import OurStory from "@/components/AboutUs/OurStoy";
import OurProcess from "@/components/AboutUs/OurProcess";
import OurPromise from "@/components/AboutUs/OurPromise";
import ServingCalgary from "@/components/AboutUs/ServingCalgary";
import ServiceBanner from "@/components/ServiceBanner/service-banner";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "About Primo Painters | Calgary Interior Painting Company",

  description:
    "Learn about Primo Painters, a locally owned Calgary interior painting company dedicated to meticulous workmanship, honest pricing, and exceptional customer service.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Primo Painters | Calgary Interior Painting Company",

    description:
      "Learn about Primo Painters and why Calgary homeowners trust us for professional interior painting.",

    url: "/about",
  },

  twitter: {
    title: "About Primo Painters | Calgary Interior Painting Company",

    description:
      "Learn about Primo Painters and why Calgary homeowners trust us for professional interior painting.",
  },
};

export default function page() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurProcess />
      <OurPromise />
      <ServingCalgary />
      <div className="pb-8">
        <ServiceBanner />
      </div>
    </>
  );
}
