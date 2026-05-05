// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html>
//       <Head>
//         {/* Meta robots tag */}
//         <meta name="robots" content="index, follow" />

//         {/* GTM in <head> */}
//         <link
//           rel="preload"
//           href="/fonts/your-font.woff2"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
      
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','GTM-M85752KG');
//             `,
//           }}
//         />
//       </Head>
//       <body>
//         {/* GTM <noscript> fallback right after <body> */}
//         <noscript
//           dangerouslySetInnerHTML={{
//             __html: `
//               <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M85752KG"
//               height="0" width="0" style="display:none;visibility:hidden"></iframe>
//             `,
//           }}
//         />
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }


import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO: Robots meta */}
        <meta name="robots" content="index, follow" />

        {/* Preload font: Make sure this font is actually being used */}
        <link
          rel="preload"
          href="/fonts/your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* GTM script should ideally be loaded using next/script in _app.tsx (see below) */}
      </Head>
      <body>
        {/* GTM noscript fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M85752KG"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
