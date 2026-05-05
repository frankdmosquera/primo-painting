'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import TrustBadges from '../components/trust-badges'
import { Navbar } from './Header'

interface HeroProps {
  title: string
  subtitle?: string
  imageSrc: any
  quoteLink: string
  bookLink: string
  quoteText: string
  bookText: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  imageSrc,
  quoteLink,
  bookLink,
  quoteText,
  bookText,
}) => {
  return (
    <div>
      <section className='relative h-[500px] md:h-[600px]'>
        <div className='absolute inset-0'>
          <Image
            src={imageSrc}
            alt='Hero Image'
            fill
            className='object-cover brightness-75'
            priority
          />
        </div>

        <div className='relative h-full flex flex-col items-center justify-center text-center px-4'>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className='text-4xl md:text-6xl font-bold text-white mb-4'>
            {title}
          </motion.h1>

          <p className='text-xl md:text-2xl text-white mb-8'>{subtitle}</p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <Link
              href={quoteLink}
              className='bg-[#0D378D] text-white pl-5 pr-2 border-2 border-white rounded-full font-medium hover:bg-blue-700 flex items-center justify-center'>
              {quoteText}{' '}
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
            <Link
              href={bookLink}
              className='bg-transparent border-2 border-white text-white px-10 py-2 rounded-full font-medium hover:bg-white hover:text-gray-800 transition-colors'>
              {bookText}
            </Link>
          </div>
        </div>
      </section>
      <TrustBadges />
    </div>
  )
}

export default Hero
