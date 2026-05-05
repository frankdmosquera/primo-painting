import BgBackground2 from '@/public/above-gallery-bg-line.svg'
import Image from 'next/image'
export default function BgLines() {
  return (
    <div className='absolute top-[400px]'>
      <Image src={BgBackground2} alt='bg-Image' />
    </div>
  )
}
