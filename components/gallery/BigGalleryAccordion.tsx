// import { GalleryHomeImages } from "@/data/images";
import Image from "next/image";

export default function BigGalleryAccordion({
  GalleryImages,
}: {
  GalleryImages: { src: string; alt: string }[];
}) {
  return (
    <div>
      <div className="container-fluid md:mt-20 mt-10 mx-8 hidden lg:block 2xl:hidden">
        <div className="gallery-slide-start flex overflow-x-auto space-x-4 hidden">
          {GalleryImages.slice(0, 4)?.map((slide, i) => (
            <div key={i} className="gallery-slide relative h-[30rem] w-[30rem]">
              <Image
                src={slide.src}
                className=" absolute object-cover"
                fill
                alt={slide.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid md:mt-20 mt-10 mx-8 hidden 2xl:block ">
        <div className="gallery-slide-start flex overflow-x-auto space-x-4 hidden">
          {GalleryImages.slice(0, 6)?.map((slide, i) => (
            <div key={i} className="gallery-slide relative h-[30rem] w-[30rem]">
              <Image
                src={slide.src}
                className=" absolute object-cover"
                fill
                alt={slide.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
