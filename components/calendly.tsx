'use client'

import { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'

export default function Calendly() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className='relative h-[calc(100vh-4rem)] calendly-widget'>
      {loading && (
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10 bg-white text-gray-800'>
          <div className='animate-spin text-3xl mb-4'>⏳</div>
          <p className='text-lg font-medium'>Loading calendar, please wait…</p>
        </div>
      )}

      <InlineWidget
        url='https://calendly.com/alberta-colour-painting/booking?hide_gdpr_banner=1'
        styles={{ minWidth: '320px', height: '100%' }}
      />
    </div>
  )
}
