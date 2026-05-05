"use client";

import offer1 from "@/public/mobile-OURGallery1.webp";
import offer3 from "@/public/mobile-OURGallery3.webp";
import offer4 from "@/public/mobile-OURGallery4.webp";
import offer5 from "@/public/mobile-OURGallery5.webp";
import offer7 from "@/public/mobile-OURGallery7.webp";

import Image from "next/image";

const OurGalleryMobile: React.FC = () => {
  return (
    <div className="gallery-carousel">
      <div className="container-fluid mx-4">
        <div className="grid grid-cols-2 gap-1 mb-3">
          <div>
            <Image src={offer1} className="w-full" alt="Offer 1" />
          </div>
          <div>
            <Image src={offer5} className="w-full" alt="Offer 2" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-3">
          <div className="flex justify-center">
            <Image src={offer3} className="w-full" alt="Offer 3" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-3">
          <div className="flex justify-center">
            <Image src={offer4} className="w-full" alt="Offer 4" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 mb-3">
          <div>
            <Image src={offer5} className="w-full" alt="Offer 5" />
          </div>
          <div>
            <Image src={offer1} className="w-full" alt="Offer 1" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-3">
          <div className="flex justify-center">
            <Image src={offer7} className="w-full" alt="Offer 4" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mb-3">
          <div className="flex justify-center">
            <Image src={offer4} className="w-full" alt="Offer 4" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1 mb-6">
          <div>
            <Image src={offer5} className="w-full" alt="Offer 5" />
          </div>
          <div>
            <Image src={offer5} className="w-full" alt="Offer 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGalleryMobile;
