'use client'

import { motion } from 'framer-motion'

export default function ScrollingBanner() {
  const bannerText = ` Special Discount 10% ; Offer Ends May 17th  <<<<<<<<`
  const repeatedText = bannerText.repeat(10)

  return (
    <div
      className='bg-[#0D378D] text-white py-1 overflow-hidden whitespace-nowrap'
      style={{ scrollBehavior: 'smooth' }}>
      <motion.div
        className='flex gap-4'
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        }}>
        <span className=' mx-4'>{repeatedText}</span>
        <span className=' mx-4'>{repeatedText}</span>
        <span className=' mx-4'>{repeatedText}</span>
        <span className=' mx-4'>{repeatedText}</span>
      </motion.div>
    </div>
  )
}
