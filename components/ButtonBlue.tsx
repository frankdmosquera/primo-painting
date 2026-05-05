import Link from 'next/link'

export default function ButtonBlue({
  href,
  linkText,
}: {
  href: string
  linkText: string
}) {
  return (
    <Link href={href} className='cursor-pointer z-30'>
      <button className='bg-blue-900  cursor-pointer text-white rounded-full w-fit pl-4 pr-1.5 py-1 flex items-center gap-2 '>
        {linkText}
        <svg
          width='31'
          height='30'
          viewBox='0 0 31 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect width='31' height='30' rx='15' fill='white' />
          <path
            d='M22.5 9C22.5 8.44771 22.0523 8 21.5 8L12.5 8C11.9477 8 11.5 8.44771 11.5 9C11.5 9.55228 11.9477 10 12.5 10L20.5 10L20.5 18C20.5 18.5523 20.9477 19 21.5 19C22.0523 19 22.5 18.5523 22.5 18L22.5 9ZM10.2071 21.7071L22.2071 9.70711L20.7929 8.29289L8.79289 20.2929L10.2071 21.7071Z'
            fill='#0D378D'
          />
        </svg>
      </button>
    </Link>
  )
}
