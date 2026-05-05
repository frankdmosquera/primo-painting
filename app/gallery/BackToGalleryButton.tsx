'use client'

import Link from 'next/link'

export default function BackToGalleryButton() {
  return (
    <div className='mt-10 flex justify-center'>
      <Link href='/gallery'>
        <button className='flex items-center gap-2 px-6 py-3  bg-[#0D378D] hover:bg-blue-800 text-white rounded cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-5 h-5'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 19l-7-7 7-7'
            />
          </svg>
          Back to Gallery
        </button>
      </Link>
    </div>
  )
}
