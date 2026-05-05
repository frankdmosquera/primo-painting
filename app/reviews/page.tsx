// This file is a server component (no "use client")

import ReviewsPage from "@/components/ReviewComponent";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Customer Reviews | Alberta Colour Painting Testimonials",
  description:
    "See what our happy clients are saying! Read real reviews & testimonials about Alberta Colour Painting’s top-rated residential & commercial painting services.",
  alternates: {
    canonical: "https://www.albertacolourpainting.com/reviews",
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
    url: "https://www.albertacolourpainting.com/reviews",
    siteName: "Alberta Colour Painting",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function Page() {
  return <ReviewsPage />;
}
