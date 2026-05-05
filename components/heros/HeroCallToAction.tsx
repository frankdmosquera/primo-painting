'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

export default function HeroCallToAction() {
  const pathname = usePathname()

  return (
    <div className='flex flex-col justify-center justify-items-center sm:flex-row gap-4'>
      <Link
        href='/booking'
        className='bg-[#0D378D] hover:bg-primary/90 text-white px-4 py-2 border-2 border-white rounded-full font-medium flex items-center justify-center'>
        Get a Free Quote
        <span className='ml-2 bg-white rounded-full p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='14'
            viewBox='0 0 15 14'
            fill='none'>
            <path
              d='M14.5 0.999999C14.5 0.447714 14.0523 -8.61581e-07 13.5 -1.11446e-06L4.5 -3.13672e-07C3.94772 -6.50847e-07 3.5 0.447715 3.5 0.999999C3.5 1.55228 3.94772 2 4.5 2L12.5 2L12.5 10C12.5 10.5523 12.9477 11 13.5 11C14.0523 11 14.5 10.5523 14.5 10L14.5 0.999999ZM2.20711 13.7071L14.2071 1.70711L12.7929 0.292893L0.792893 12.2929L2.20711 13.7071Z'
              fill='#0D378D'
            />
          </svg>
        </span>
      </Link>
      {pathname !== '/contact' && (
        <Link
          href='/contact'
          className='bg-transparent border-2 border-white text-white px-10 py-3 rounded-full font-medium hover:bg-white hover:text-gray-800 transition-colors cursor-pointer'>
          Questions?
        </Link>
      )}
    </div>
  )
}
