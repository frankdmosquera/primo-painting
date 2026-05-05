import { GalleryHomeImages } from '@/data/images'
import Image from 'next/image'

export default function GallerySlides() {
  return (
    <>
      {GalleryHomeImages.map((slide, i) => (
        <div
          key={i}
          className='flex-shrink-0 snap-start w-[100vw] relative h-[15rem] sm:h-[20rem] md:h-[25rem] transition-transform duration-300 ease-in-out'>
          <Image
            src={slide.src}
            alt={slide.alt}
            className='object-cover'
            fill
            sizes='(max-width: 640px) 100vw, 30rem'
          />
        </div>
      ))}
    </>
  )
}
