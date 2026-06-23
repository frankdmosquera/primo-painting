import "./style.css";

import ServiceSection from "../service-section";
import OurGalleryContent from "./OurGalleryContent";
import BigGalleryAccordion from "./BigGalleryAccordion";
import SmallGalleryWrapper from "./SmallGalleryWrapper";
import GallerySlides from "./GallerySlides";

const GallerySectionHome = ({
  GalleryHomeImages,
}: {
  GalleryHomeImages: { src: string; alt: string }[];
}) => {
  return (
    <section className="gallery-carousel">
      <div className="lg:mt-20 lg:mb-16 my-10 ">
        <ServiceSection
          title="Our Gallery"
          description="See the Magic of Transformation  <br />  with Our Painting Work"
          buttonText="View All"
        />
      </div>
      <OurGalleryContent />
      <SmallGalleryWrapper>
        <GallerySlides GalleryImages={GalleryHomeImages} />
      </SmallGalleryWrapper>
      <BigGalleryAccordion GalleryImages={GalleryHomeImages} />
    </section>
  );
};

export default GallerySectionHome;
