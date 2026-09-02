"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroCalendarImage() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="mx-auto relative w-36  flex flex-col items-center animate-book-pulse "
      >
        <Image
          src={"/svgs/calendar-rounded-0d378d-final.svg"}
          width={100}
          height={100}
          alt=""
          unoptimized
          className="h-auto w-full"
        />
        <div
          className={cn(
            buttonVariants(),
            " absolute bottom-1   text-white text-lg ",
          )}
        >
          Book Now
        </div>
      </button>

      {mounted && (
        <PopupModal
          url="https://calendly.com/primo-painting/30min"
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
          rootElement={document.body}
        />
      )}
    </>
  );
}
