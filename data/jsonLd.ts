import { siteConfig } from "./siteConfig";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HousePainter"],

  "@id": `${siteConfig.business.website}/#business`,

  name: siteConfig.business.name,

  url: siteConfig.business.website,

  logo: `${siteConfig.business.website}${siteConfig.branding.logo}`,

  image: [`${siteConfig.business.website}${siteConfig.branding.logo}`],

  description:
    "Primo Painters provides professional interior house painting services in Calgary. We specialize in painting walls, ceilings, trim, doors, cabinets and other interior spaces with clean workmanship, attention to detail, and free estimates.",

  telephone: siteConfig.business.phone,

  email: siteConfig.business.email,

  priceRange: siteConfig.business.priceRange,

  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.location.address.street,
    addressLocality: siteConfig.location.address.city,
    addressRegion: siteConfig.location.address.province,
    postalCode: siteConfig.location.address.postalCode,
    addressCountry: siteConfig.location.address.country,
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.location.coordinates.latitude,
    longitude: siteConfig.location.coordinates.longitude,
  },

  hasMap: siteConfig.location.googleMaps,

  areaServed: [
    {
      "@type": "City",
      name: siteConfig.location.serviceArea,
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
    ratingValue: String(siteConfig.reviews.rating),
    reviewCount: String(siteConfig.reviews.reviewCount),
  },

  sameAs: [siteConfig.social.googleBusiness, siteConfig.social.youtube].filter(
    Boolean,
  ),

  serviceType: [
    "Interior House Painting",
    "Interior Painting",
    "Residential Interior Painting",
    "Wall Painting",
    "Ceiling Painting",
    "Trim Painting",
    "Door Painting",
    "Garage Painting",
    "Cabinet Painting",
    "Built-in Cabinet Painting",
    "Baseboard Painting",
    "Railing Painting",
  ],

  knowsAbout: [
    "Interior House Painting",
    "Interior Painting",
    "Wall Painting",
    "Ceiling Painting",
    "Trim Painting",
    "Door Painting",
    "Garage Painting",
    "Cabinet Painting",
    "Built-in Cabinet Painting",
    "Baseboard Painting",
    "Railing Painting",
    "Residential Painting",
  ],

  inLanguage: "en-CA",

  currenciesAccepted: "CAD",

  paymentAccepted: ["Cash", "Credit Card", "Debit Card", "E-Transfer"],
};
