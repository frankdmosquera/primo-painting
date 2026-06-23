import "./style.css";

import ServiceSection from "../service-section";
import OurGalleryContent from "./OurGalleryContent";
import BigGalleryAccordion from "./BigGalleryAccordion";
import SmallGalleryWrapper from "./SmallGalleryWrapper";
import GallerySlides from "./GallerySlides";

const GallerySection = ({
  GalleryImages,
}: {
  GalleryImages: { src: string; alt: string }[];
}) => {
  return (
    <section className="gallery-carousel">
      {/* <OurGalleryContent /> */}
      <SmallGalleryWrapper>
        <GallerySlides GalleryImages={GalleryImages} />
      </SmallGalleryWrapper>
      <BigGalleryAccordion GalleryImages={GalleryImages} />
    </section>
  );
};

export default GallerySection;
