import { faqItems } from "./faqData";

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.title,

    acceptedAnswer: {
      "@type": "Answer",
      text: item.content,
    },
  })),
};
