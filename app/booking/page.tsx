import Calendly from "@/components/calendly";
import type { Metadata, Viewport } from "next";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};
export const metadata: Metadata = {
  title: "Book Painting Services | Primo Painters",
  description:
    "Book your professional interior or exterior painting service in Calgary with Alberta Colour Painting. Easy scheduling and expert results.",
  keywords: [
    "calgary painters",
    "painting companies calgary",
    "painting companies calgary alberta",
    "calgary painting companies",
    "house painting calgary",
    "painting services calgary",
    "painters in calgary alberta",
    "painting contractors calgary",
    "alberta painting contractors calgary",
  ],
  alternates: {
    canonical: "https://www.primopainters.ca/booking",
  },
  openGraph: {
    title: "Need Calgary Painters?",
    description:
      "Book your free estimate today with Primo Painters, the top-rated painting company in Calgary.",
    images: [
      {
        url: "https://res.cloudinary.com/alberta-colour-painting/image/upload/v1672799089/home/awards/best-of-the-best-award-homestars-winner-2022-white-version_psaofg.webp",
      },
    ],
    url: "https://www.primopainters.ca",
    siteName: "Primo Painters",
    type: "website",
  },
};
export default function bookingPage() {
  return (
    <>
      <div className="bg-[#0d378d]">
        <Calendly />
      </div>
    </>
  );
}
