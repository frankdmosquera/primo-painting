export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HousePainter",

  "@id": "https://www.primopainting.ca/#business",

  name: "Primo Painting",

  url: "https://www.primopainting.ca/",

  image: [
    "https://www.primopainting.ca/logo.svg",
    // "https://www.primopainting.ca/images/best-of-the-best-homestars-award-winner-2024-white-version.png",
    // "https://www.primopainting.ca/images/bbb-A+-alberta-colour-painting.webp",
    // "https://www.primopainting.ca/images/google-reviews-4.9-rating.png",
  ],

  logo: "https://www.primopainting.ca/logo.svg",

  description:
    "Primo Painting provides professional interior and exterior painting services in Calgary and surrounding areas.",

  telephone: "+1-403-903-7517",

  email: "info@primopainting.ca",

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",
    streetAddress: "370 Brightonstone Green SE",
    addressLocality: "Calgary",
    addressRegion: "AB",
    postalCode: "T2Z 0H1",
    addressCountry: "CA",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.9240786,
    longitude: -113.9533784,
  },

  hasMap:
    "https://www.google.com/maps/place/Primo+Painting/@50.924082,-113.9533784,17z/",

  areaServed: [
    {
      "@type": "City",
      name: "Calgary",
    },
    {
      "@type": "City",
      name: "Airdrie",
    },
    {
      "@type": "City",
      name: "Chestermere",
    },
    {
      "@type": "City",
      name: "Okotoks",
    },
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "16:00",
    },
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "122",
  },

  sameAs: [
    // "https://www.instagram.com/albertacolourpaintingltd/",
    // "https://www.facebook.com/albertacolourpainting/",
    "https://www.youtube.com/@Primo-Painting",
  ],

  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
  },

  serviceType: [
    "Interior Painting",
    "Exterior Painting",
    "Residential Painting",
    "Commercial Painting",
    "Cabinet Painting",
    "Drywall Repair",
  ],
};
