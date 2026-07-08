"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const FaqSection = () => {
  const [selected, setSelected] = useState(null);
  const faqItems = [
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
  ];
  return (
    <div className=" max-w-7xl container mx-auto py-11 max-sm:py-0 px-5 max-sm:px-5 flex-grow max-sm:mb-10">
      <div className="grid xl:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1  items-center">
        <p className="text-[18px] text-black font-medium lg:text-[22px]">
          Frequently Asked Questions (FAQs)
        </p>
        <h2 className="text-[#0D378D] text-[26px] font-semibold lg:text-[36px] max-w-2xl uppercase ">
          Everything You Need to Know About Our Painting Services
        </h2>
        <div className="grid xl:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-5 items-start justify-center mt-12 max-sm:mt-5">
          <div
            style={{ boxShadow: "0px 7px 45px 0px rgba(0, 15, 44, 0.12)" }}
            className="bg-white  p-6"
          >
            <Accordion variant="splitted" className="">
              {faqItems.map((item, index) => (
                <AccordionItem
                  onClick={() =>
                    selected !== index ? setSelected(index) : setSelected(null)
                  }
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <Minus className="w-8 h-8 p-1  text-[#0D378D] border-2 border-[#0D378D66] rounded-full text-2xl" />
                    ) : (
                      <Plus className="w-8 h-8 p-1 text-[#0D378D] border-2 border-[#0D378D66] rounded-full text-2xl" />
                    )
                  }
                  key={index}
                  aria-label={`Accordion ${index}`}
                  title={
                    <span
                      className={`mb-3 font-normal max-sm:text-[16px] text-[16px] 
                         text-black`}
                    >
                      {item.title}
                    </span>
                  }
                  className="bg-[#F2F2F2] font-normal mt-3 py-3 max-sm:py-0 rounded-none"
                >
                  <p className="text-[16px] font-normal  max-sm:text-[16px]  text-[#2c2323]">
                    {item?.content}
                  </p>
                  {item?.bookOption && (
                    <div className="mt-4">
                      <Link
                        href="/booking"
                        className="inline-block bg-[#0D378D] text-white py-2 px-4 rounded-full hover:bg-[#0A2A6B] transition-colors"
                      >
                        Book Your Estimate
                      </Link>
                    </div>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
