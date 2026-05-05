import './style.css'

import ServiceSection from '../service-section'
import OurGalleryContent from './OurGalleryContent'
import BigGalleryAccordion from './BigGalleryAccordion'
import SmallGalleryWrapper from './SmallGalleryWrapper'
import GallerySlides from './GallerySlides'

const GallerySection = () => {
  return (
    <section className='gallery-carousel'>
      <div className='lg:mt-20 lg:mb-16 my-10 '>
        <ServiceSection
          title='Our Gallery'
          description='See the Magic of Transformation  <br />  with Our Painting Work'
          buttonText='View All'
        />
      </div>
      <OurGalleryContent />
      <SmallGalleryWrapper>
        <GallerySlides />
      </SmallGalleryWrapper>
      <BigGalleryAccordion />
    </section>
  )
}

export default GallerySection
