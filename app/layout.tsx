import { siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";
import { jsonLd } from "@/data/jsonLd";
import ScrollingBannerA from "@/components/scrolling-banner-a";
import { Header } from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Calgary Interior Painters | Primo Painters",
//   description:
//     "Primo Painters provides professional interior painting services in Calgary. We paint walls, ceilings, trim, doors, cabinets and more for homeowners, delivering clean workmanship and free estimates.",
// };

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.business.website),

  title: "Calgary Interior Painters | Primo Painters",

  description:
    "Primo Painters provides professional interior painting services in Calgary. We paint walls, ceilings, trim, doors, cabinets and more for homeowners, delivering clean workmanship and free estimates.",

  applicationName: siteConfig.business.applicationName,

  category: "Home Services",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Calgary Interior Painters | Primo Painters",

    description:
      "Professional interior house painting services in Calgary for walls, ceilings, trim, doors and more.",

    url: "/",

    siteName: siteConfig.business.name,

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: siteConfig.branding.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.business.name} - Calgary Interior Painters`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Calgary Interior Painters | Primo Painters",

    description:
      "Professional interior house painting services in Calgary for walls, ceilings, trim, doors and more.",

    images: [siteConfig.branding.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <meta name="msvalidate.01" content="DBD9A18509B447FAF5F19EC3C4B5BFC4" /> */}
        <meta name="robots" content="index, follow" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
      >
        <main className="text-[17px] 3xl:text-base ">
          <ScrollingBannerA />
          <Header />
          {children}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
