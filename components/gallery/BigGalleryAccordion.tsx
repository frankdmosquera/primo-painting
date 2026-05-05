import { GalleryHomeImages } from '@/data/images'
import Image from 'next/image'

export default function BigGalleryAccordion() {
  return (
    <div className='container-fluid md:mt-20 mt-10 mx-8 hidden lg:block'>
      <div className='gallery-slide-start flex overflow-x-auto space-x-4'>
        {GalleryHomeImages.map((slide, i) => (
          <div key={i} className='gallery-slide relative h-[30rem] w-[30rem]'>
            <Image
              src={slide.src}
              className=' absolute object-cover'
              fill
              alt={slide.alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
