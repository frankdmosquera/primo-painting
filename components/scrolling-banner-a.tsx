"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
  ClipboardPen,
  Star,
  MapPin,
  TicketPercent,
} from "lucide-react";

const items = [
  {
    icon: TicketPercent,
    text: "15% OFF Interior Painting",
    highlight: true,
  },
  {
    icon: CalendarClock,
    text: "Offer Ends Aug 26th",
  },
  {
    icon: ClipboardPen,
    text: "Free Estimates",
  },
  {
    icon: TicketPercent,
    text: " 15% OFF Interior Painting",
    highlight: true,
  },
  {
    icon: Star,
    text: "5-Star Rated",
  },
  {
    icon: MapPin,
    text: "Serving Calgary & Area",
  },
];

export default function ScrollingBannerA() {
  return (
    <div className="overflow-hidden  border-y border-white/10 bg-[#0D378D]">
      <motion.div
        className="flex w-max "
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...Array(2)].map((_, repeat) => (
          <div key={repeat} className="flex">
            {items.map(({ icon: Icon, text, highlight }) => (
              <div
                key={`${repeat}-${text}`}
                className="mx-8 flex items-center gap-3 whitespace-nowrap py-3 sm:py-2.5"
              >
                <Icon
                  size={18}
                  className={highlight ? "text-[#FFD54A]" : "text-white/90"}
                />

                <span
                  className={
                    highlight
                      ? "font-semibold tracking-wide text-[#FFD54A]"
                      : "tracking-wide text-white"
                  }
                >
                  {text}
                </span>

                <span className="ml-4 text-white/30">•</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
      {/* <div className="">Book Now</div> */}
    </div>
  );
}
