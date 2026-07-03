// import { GalleryHomeImages } from "@/data/images";
import ProjectSliderWrapper from "@/app/gallery/ProjectSliderWrapper";
import Image from "next/image";

export default function BigGalleryAccordion({
  GalleryImages,
}: {
  GalleryImages: { src: string; alt: string }[];
}) {
  return (
    <div className="hidden lg:block w-full h-full ">
      {/* Slider */}
      <ProjectSliderWrapper>
        {GalleryImages?.map((img, index) => (
          <div key={index} className="w-full h-full relative">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ))}
      </ProjectSliderWrapper>
    </div>
  );
}
