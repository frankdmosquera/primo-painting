import Calendly from "@/components/calendly";
import type { Metadata, Viewport } from "next";

import { siteConfig } from "@/data/siteConfig";
import { CheckCircle2 } from "lucide-react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Book Your Free Interior Painting Estimate | Primo Painters",

  description:
    "Schedule your free interior painting estimate with Primo Painters. Serving Calgary homeowners with professional interior painting, honest pricing, and meticulous workmanship.",

  alternates: {
    canonical: "/booking",
  },

  openGraph: {
    title: "Book Your Free Interior Painting Estimate | Primo Painters",

    description:
      "Schedule a free in-home estimate with Calgary's trusted interior painting company.",

    url: "/booking",

    siteName: siteConfig.business.name,

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: siteConfig.branding.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.business.name} - Book Your Free Estimate`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Book Your Free Interior Painting Estimate | Primo Painters",

    description:
      "Schedule your free interior painting estimate with Primo Painters.",

    images: [siteConfig.branding.ogImage],
  },
};

const reminders = [
  "Your estimate is completely free with no obligation.",
  "Appointments typically take about 30 minutes.",
  "We'll discuss your project, colours, finishes, timeline, and answer any questions.",
  "You'll receive a detailed written estimate with honest, transparent pricing.",
];

export default function BookingPage() {
  return (
    <>
      <section className="bg-[#0D378D] text-white py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#CADBFF] font-semibold">
            Book Your Free Estimate
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold mt-3">
            Schedule Your Interior Painting Estimate
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-100 max-w-3xl mx-auto">
            Choose a convenient time using our online booking system. We'll
            visit your home, discuss your project, answer your questions, and
            provide a detailed, no-obligation estimate.
          </p>
        </div>
      </section>
      <section className="bg-[#0D378D] pb-12">
        <Calendly />
      </section>
    </>
  );
}
