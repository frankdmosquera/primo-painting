import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { Roboto } from "next/font/google";
import { jsonLd } from "@/data/jsonLd";
import ScrollingBannerA from "@/components/scrolling-banner-a";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Primo Painting",
  description: "Primo Painting - Calgary's Premier Painting Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* GOOGLE ANALITICS  */}
      {/* <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DVMYRWNF3T');
      `,
        }}
      /> */}

      {/* GOOGLE TAG MANAGER SCRIPT  */}
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KVGBLC5B');
       `,
        }}
      />

      <head>
        <meta name="msvalidate.01" content="DBD9A18509B447FAF5F19EC3C4B5BFC4" />
        {/* <meta
          name="google-site-verification"
          content="FPojVs3HSBJsLE3Sh7FzP_jczlilyjePuAJEo7VeAo4"
        /> */}

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
        {/* Google Tag Manager (noscript)  */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVGBLC5B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}
        {/* End Google Tag Manager (noscript) */}
        <main>
          <ScrollingBannerA />
          {/* <div className="h-10 bg-blue-600" /> */}
          <Navbar />
          {children}
          {/* It's better to place the script tag at the bottom of the body for performance */}
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
