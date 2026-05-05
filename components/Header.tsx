"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import ScrollingBanner from "./scrolling-banner";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [currentPath, setCurrentPath] = React.useState("");

  const path = usePathname();

  React.useEffect(() => {
    if (path) {
      setCurrentPath(path);
    }
  }, [path]);

  return (
    <>
      <header className="bg-white py-2 px-4 md:px-8 sticky top-0 z-[99999] shadow-lg">
        <div className=" mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Alberta Color Painting"
                title="Alberta Color Painting"
                width={150}
                height={40}
                className="h-auto"
              />
            </Link>
          </div>

          <div className="flex max-xl:absolute   justify-center left-0 right-0 m-auto max-xl:hidden">
            <nav
              className="hidden lg:flex lg:justify-between items-center space-x-14    bg-[#0D378D1F] rounded-4xl px-5.5 py-3.5 menubar"
              aria-label="Primary navigation"
            >
              <Link
                href="/"
                className={` ${
                  currentPath == "/" ? "text-[#0D378D]" : "text-black"
                } hover:text-[#0D378D]  font-medium`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={` ${
                  currentPath == "/about" ? "text-[#0D378D]" : "text-black"
                } hover:text-[#0D378D]  font-medium`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={` ${
                  currentPath == "/services" ? "text-[#0D378D]" : "text-black"
                } hover:text-[#0D378D]  font-medium`}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className={` ${
                  currentPath == "/gallery" ? "text-[#0D378D]" : "text-black"
                } hover:text-[#0D378D]  font-medium`}
              >
                Gallery
              </Link>
              <Link
                href="/blogs"
                className={` ${
                  currentPath == "/blogs" ? "text-[#0D378D]" : "text-black"
                } hover:text-[#0D378D]  font-medium`}
              >
                Blog
              </Link>
              <Link
                href="/booking "
                className={` ${
                  currentPath == "/booking " ? "text-[#0D378D]" : "text-black"
                } hover:text-[#0D378D]  font-medium`}
              >
                Booking
              </Link>
              <Link
                href="/contact"
                className={` ${
                  currentPath == "/contact" ? "text-[#0D378D]" : "text-black"
                } hover:text-[#0D378D]  font-medium`}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4 btn-img-nav max-xl:hidden">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-2 border-2 shadow-2xl">
                <Link
                  href="tel:+1587-466-6647"
                  aria-label="Call Alberta Global Painting at 587-466-6647"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                  >
                    <path
                      d="M10.7177 1.23076C10.7177 0.827174 11.0448 0.5 11.4484 0.5C13.4512 0.5 15.3718 1.29557 16.788 2.7117C18.2041 4.12783 18.9997 6.04851 18.9997 8.05122C18.9997 8.45481 18.6725 8.78198 18.2689 8.78198C17.8653 8.78198 17.5382 8.45481 17.5382 8.05122C17.5382 6.43613 16.8966 4.8872 15.7545 3.74516C14.6125 2.60312 13.0635 1.96153 11.4484 1.96153C11.0448 1.96153 10.7177 1.63435 10.7177 1.23076Z"
                      fill="#0D378D"
                    />
                    <path
                      d="M10.7177 5.12817C10.7177 4.72458 11.0448 4.3974 11.4484 4.3974C12.4175 4.3974 13.3469 4.78236 14.0321 5.46758C14.7173 6.15281 15.1023 7.08217 15.1023 8.05122C15.1023 8.45481 14.7751 8.78198 14.3715 8.78198C13.9679 8.78198 13.6407 8.45481 13.6407 8.05122C13.6407 7.46979 13.4098 6.91217 12.9986 6.50104C12.5875 6.0899 12.0299 5.85893 11.4484 5.85893C11.0448 5.85893 10.7177 5.53176 10.7177 5.12817Z"
                      fill="#0D378D"
                    />
                    <path
                      d="M6.58094 1.63635C6.02282 0.84722 5.25201 0.491652 4.43245 0.500149C3.65569 0.508201 2.89904 0.839809 2.26796 1.28219C1.62972 1.7296 1.06 2.33126 0.652774 2.97561C0.25307 3.60806 -0.0356122 4.35541 0.00355745 5.08495C0.192036 8.59535 2.16636 12.3467 4.94059 15.1226C7.7125 17.8963 11.4147 19.8236 15.1524 19.4548C15.8842 19.3826 16.5771 19.0102 17.1438 18.5343C17.7171 18.0529 18.2147 17.4219 18.5494 16.7417C18.8814 16.0671 19.0789 15.2898 18.9699 14.5326C18.8562 13.7427 18.4155 13.0378 17.6031 12.5704C17.43 12.4708 17.2748 12.3741 17.1047 12.268C16.9588 12.1771 16.8019 12.0793 16.6131 11.9669C16.2479 11.7494 15.8326 11.5219 15.3967 11.3637C14.9607 11.2054 14.463 11.1009 13.9439 11.1723C13.4078 11.246 12.9094 11.4992 12.4778 11.9534C12.1451 12.3036 11.6561 12.4137 10.9684 12.2145C10.2688 12.0118 9.48148 11.5087 8.79711 10.8294C8.1134 10.1508 7.59531 9.35862 7.37477 8.64202C7.15643 7.93258 7.2524 7.41099 7.59381 7.05167C8.05454 6.56676 8.30038 6.02636 8.35223 5.45565C8.40266 4.90068 8.26428 4.3784 8.06622 3.92206C7.77064 3.24104 7.2667 2.56383 6.87378 2.03582C6.76551 1.89032 6.66567 1.75615 6.58094 1.63635Z"
                      fill="#0D378D"
                    />
                  </svg>
                </Link>
              </div>
              <Link
                href="tel:+1587-466-6647"
                aria-label="Call Alberta Global Painting at 587-466-6647"
              >
                <span className="text-black font-medium">587-966-6547</span>
              </Link>
            </div>
            <Link
              href="/booking"
              className="bg-[#0D378D] aj-button text-white border-4 border-[#CADBFF] px-8 py-1 rounded-4xl font-medium hover:bg-[#0D378D] transition-colors cursor-pointer"
            >
              Book Now
            </Link>
          </div>

          <MobileMenu />
        </div>
      </header>
    </>
  );
}
