import Image from 'next/image'

interface ProjectSlidesProps {
  images: { src: string; alt: string }[]
}

export default function ProjectSlides({ images }: ProjectSlidesProps) {
  return (
    <>
      {images.map((img, i) => (
        <div key={i} className='w-full h-full relative'>
          <Image
            src={img.src}
            alt={img.alt}
            className='object-cover'
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            width={400} height={300} priority
          />
        </div>
      ))}
    </>
  )
}
