"use client";
import Image from "next/image";
import gallery1 from "../public/gallery1.webp";
import gallery3 from "../public/gallery3.webp";
import gallery4 from "../public/gallery4.webp";
import gallery5 from "../public/gallery5.webp";

const OurGallery = () => {
  return (
    <div className="album">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 responsive-container-block bg">
        {/* Image Container Block 1 (Standard Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="w-full">
            <Image
              src={gallery1}
              className="w-full h-auto object-cover"
              alt="gallery"
            />
          </div>
          <div className="w-full">
            <Image
              src={gallery3}
              className="w-full h-auto object-cover"
              alt="gallery"
            />
          </div>
          <div className="w-full">
            <Image
              src={gallery3}
              className="w-full h-auto object-cover"
              alt="gallery"
            />
          </div>
        </div>

        {/* Image Container Block 2 (Custom Masonry Layout with Tailwind CSS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 lg:grid-cols-[320px_580px_1fr] md:grid-cols-[1fr_1fr_1fr]">
          {/* Left Image (Cell 1) */}
          <div className="col-span-1 w-[340px] h-[400px] md:w-[310px]">
            <Image
              src={gallery4}
              className="h-full object-cover"
              alt="gallery"
            />
          </div>

          {/* Stack of Images in the middle (Cell 2 & 3) */}
          <div className="col-span-1 flex flex-col gap-4 h-[400px]">
            <div className="w-full h-[190px]">
              <Image
                src={gallery5}
                className="w-full h-full object-cover"
                alt="gallery"
              />
            </div>
            <div className="w-full h-[190px]">
              <Image
                src={gallery3}
                className="w-full h-full object-cover"
                alt="gallery"
              />
            </div>
          </div>

          {/* Right Image (Cell 4) */}
          <div className="col-span-1 w-full h-[400px]">
            <Image
              src={gallery1}
              className="w-full h-full object-cover"
              alt="gallery"
            />
          </div>
        </div>

        {/* Image Container Block 3 (Standard Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="w-full">
            <Image
              src={gallery3}
              className="w-full h-auto object-cover"
              alt="gallery"
            />
          </div>
          <div className="w-full">
            <Image
              src={gallery1}
              className="w-full h-auto object-cover"
              alt="gallery"
            />
          </div>
          <div className="w-full">
            <Image
              src={gallery3}
              className="w-full h-auto object-cover"
              alt="gallery"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
