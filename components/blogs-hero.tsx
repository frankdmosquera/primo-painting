'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Highlight } from '../components/ui/hero-highlight'
import TrustBadges from '../components/trust-badges'

interface HeroProps {
  title: string
  title2: string
  subtitle: string
  imageSrc: any
  quoteLink: string
  bookLink: string
  quoteText: string
  bookText: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  title2,
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
        <div className='md:hidden absolute top-4  right-[-70] transform -translate-x-1/2 z-10'>
          <a
            href='tel:587-966-6547'
            className='flex items-center   text-white rounded-full p-2'>
            <svg
              width='54'
              height='54'
              viewBox='0 0 54 54'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g filter='url(#filter0_d_117_413)'>
                <rect
                  x='6'
                  y='6.64708'
                  width='41.7782'
                  height='40.8498'
                  rx='20.4249'
                  fill='#0D378D'
                  fillOpacity='0.24'
                  shapeRendering='crispEdges'
                />
                <rect
                  x='6.4642'
                  y='7.11128'
                  width='40.8498'
                  height='39.9214'
                  rx='19.9607'
                  stroke='white'
                  strokeWidth='0.928405'
                  shapeRendering='crispEdges'
                />
                <path
                  d='M28.0197 18.9306C28.0197 18.5559 28.3234 18.2521 28.6981 18.2521C30.5575 18.2521 32.3406 18.9908 33.6554 20.3055C34.9701 21.6202 35.7087 23.4034 35.7087 25.2627C35.7087 25.6374 35.405 25.9412 35.0303 25.9412C34.6556 25.9412 34.3518 25.6374 34.3518 25.2627C34.3518 23.7633 33.7562 22.3252 32.6959 21.265C31.6356 20.2047 30.1976 19.609 28.6981 19.609C28.3234 19.609 28.0197 19.3053 28.0197 18.9306Z'
                  fill='white'
                />
                <path
                  d='M28.0197 22.549C28.0197 22.1743 28.3234 21.8705 28.6981 21.8705C29.5978 21.8705 30.4606 22.2279 31.0968 22.8641C31.733 23.5002 32.0904 24.3631 32.0904 25.2627C32.0904 25.6374 31.7866 25.9412 31.4119 25.9412C31.0372 25.9412 30.7335 25.6374 30.7335 25.2627C30.7335 24.7229 30.519 24.2052 30.1373 23.8235C29.7556 23.4418 29.2379 23.2274 28.6981 23.2274C28.3234 23.2274 28.0197 22.9236 28.0197 22.549Z'
                  fill='white'
                />
                <path
                  d='M24.1791 19.3071C23.6609 18.5745 22.9453 18.2444 22.1844 18.2523C21.4633 18.2598 20.7608 18.5676 20.1749 18.9783C19.5824 19.3937 19.0534 19.9523 18.6754 20.5505C18.3043 21.1377 18.0363 21.8315 18.0726 22.5088C18.2476 25.7679 20.0806 29.2506 22.6562 31.8279C25.2297 34.4029 28.6668 36.1923 32.1369 35.8499C32.8163 35.7828 33.4596 35.4371 33.9857 34.9953C34.518 34.5483 34.9799 33.9625 35.2907 33.331C35.5989 32.7047 35.7823 31.9831 35.6811 31.28C35.5755 30.5468 35.1663 29.8923 34.4121 29.4583C34.2514 29.3659 34.1074 29.2761 33.9494 29.1776C33.814 29.0933 33.6683 29.0024 33.4931 28.8981C33.154 28.6961 32.7684 28.4849 32.3637 28.338C31.9589 28.1911 31.4968 28.0941 31.0149 28.1603C30.5172 28.2288 30.0545 28.4639 29.6538 28.8855C29.3449 29.2107 28.8909 29.3129 28.2525 29.1279C27.603 28.9397 26.872 28.4726 26.2366 27.842C25.6019 27.212 25.1209 26.4765 24.9161 25.8112C24.7134 25.1526 24.8025 24.6683 25.1195 24.3347C25.5472 23.8845 25.7754 23.3828 25.8236 22.853C25.8704 22.3378 25.7419 21.8529 25.5581 21.4292C25.2836 20.7969 24.8158 20.1682 24.451 19.678C24.3505 19.5429 24.2578 19.4184 24.1791 19.3071Z'
                  fill='white'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_117_413'
                  x='0.336731'
                  y='0.98381'
                  width='53.1049'
                  height='52.1763'
                  filterUnits='userSpaceOnUse'
                  colorInterpolationFilters='sRGB'>
                  <feFlood floodOpacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation='2.83163' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0.0509804 0 0 0 0 0.215686 0 0 0 0 0.552941 0 0 0 0.48 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_117_413'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_117_413'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg>

            <span className='font-medium'>587-966-6547</span>
          </a>
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
            {title} <Highlight className='text-white'>{title2}</Highlight>
          </motion.h1>

          <p className='text-xl md:text-2xl text-white mb-8'>{subtitle}</p>

          <div className='flex flex-col sm:flex-row gap-4'>
            <Link
              href='/'
              className='bg-[#0D378D]  text-white px-4 py-2 border-2 border-white rounded-full font-medium hover:bg-primary/90 flex items-center justify-center'>
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
              href='/contact'
              className='bg-transparent border-2 flex justify-center items-center border-white text-white px-10 py-2 rounded-full font-medium hover:bg-white hover:text-gray-800 transition-colors'>
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
