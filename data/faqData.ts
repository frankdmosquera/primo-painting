export type FaqItem = {
  title: string;
  content: string;
  bookOption?: boolean;
};

export const faqItems: FaqItem[] = [
  {
    title: "Do you repair walls before painting?",
    content:
      "Yes. We repair everything from nail holes, dents, and cracks to larger drywall damage before painting. Minor repairs are often included, while extensive repairs or large holes may require additional time and materials and will be reflected in your estimate. Proper surface preparation is essential for achieving a smooth, professional finish.",
  },
  {
    title: "How much does interior painting cost?",
    content:
      "The cost of interior painting depends on the size of your home, the condition of the walls, the number of rooms, ceiling height, and the amount of preparation required. We provide free, no-obligation estimates for all interior painting projects in Calgary.",
    bookOption: true,
  },
  {
    title: "How long does an interior painting project take?",
    content:
      "Most interior painting projects take between one and five days, depending on the size of the job. Surface preparation, drying times, repairs, and the number of coats required can all affect the schedule.",
  },
  {
    title: "What type of paint do you use?",
    content:
      "We use premium-quality, low-VOC paints from trusted brands such as Benjamin Moore, Sherwin-Williams, and Cloverdale Paint. These products provide excellent coverage, durability, and a beautiful finish while helping maintain healthier indoor air quality.",
  },
  {
    title: "Do I need to move my furniture before you arrive?",
    content:
      "Yes. We ask that all furniture, decorations, electronics, and other personal belongings be moved before we arrive. If a large or heavy item requires a small adjustment, we're happy to lend a hand when possible, but moving furniture is not included as part of our painting service.",
  },

  {
    title: "How do I book an interior painting estimate?",
    content:
      "Booking is easy. Simply use our online booking system or contact us by phone or email to schedule your free interior painting estimate in Calgary.",
    bookOption: true,
  },
  {
    title: "Do I need to leave my home while it's being painted?",
    content:
      "In most cases, no. Many homeowners remain at home while we work. We take care to keep the work area clean and use premium low-VOC paints to minimize odors. Depending on the size and location of the project, we'll help you determine the most comfortable arrangement for your family.",
  },

  // ...rest of your questions
];
