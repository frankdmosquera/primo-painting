"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { Plus, Minus } from "lucide-react";

const FaqSection = () => {
  const [selected, setSelected] = useState(null);
  const faqItems = [
    {
      title: "How much does a painting project cost?",
      content:
        "While we cannot provide a fixed estimate for our painting services, the cost depends on factors such as the size of the project, the type of paint, surface preparation requirements, and more. For more details about our painting services in Calgary, feel free to reach out to us through our registered contact details.",
    },
    {
      title: "How long does a typical painting job take?",
      content:
        "Most interior projects take a few days, while exterior jobs depend on weather conditions. We'll give you a timeline during our consultation.",
    },
    {
      title: "Is your company licensed and insured?",
      content:
        "Indeed, our painting company in Calgary is licensed and insured, ensuring undeniable trust and a strong commitment to quality, so you can feel confident and have peace of mind.",
    },
    {
      title: "What type of paint do you use?",
      content:
        "We use high-quality, durable paints from trusted brands. We can also recommend low-VOC and eco-friendly options.",
    },
    {
      title: "How do I book a painting service in Calgary?",
      content:
        "You can contact us by phone or email to schedule a consultation or simply fill out the form on our website. We’ll discuss your needs and provide a free estimate",
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
