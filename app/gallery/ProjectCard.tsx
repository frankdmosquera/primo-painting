// 'use client'

import Link from "next/link";
import Image from "next/image";
import ButtonBlueWithBorder from "@/components/ButtonBlueWithBorder";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  location: string;
  href: string;
}

export default function ProjectCard({
  title,
  imageSrc,
  location,
  href,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg shadow hover:shadow-lg transition"
    >
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Text and "View Project" area */}
      <div className="p-4 bg-black flex flex-col gap-2 h-full">
        <div>
          <h2 className="text-lg text-gray-200 font-semibold">{title}</h2>
          {location?.length > 0 && (
            <p className="text-gray-300 text-sm">{location}</p>
          )}
        </div>

        <div className="flex items-center z-10">
          <span className="flex items-center bg-[#0D378D] text-white pl-4 pr-2 py-1 mt-2 rounded-full text-base font-medium border-2 border-[#cadbff]">
            <span className="mr-2 lg:text-[16px] text-[14px] md:text-[10px]">
              View Project
            </span>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.40918" width="31" height="30" rx="15" fill="white" />
              <path
                d="M22.5 9.40918C22.5 8.85689 22.0523 8.40918 21.5 8.40918L12.5 8.40918C11.9477 8.40918 11.5 8.85689 11.5 9.40918C11.5 9.96146 11.9477 10.4092 12.5 10.4092L20.5 10.4092L20.5 18.4092C20.5 18.9615 20.9477 19.4092 21.5 19.4092C22.0523 19.4092 22.5 18.9615 22.5 18.4092L22.5 9.40918ZM10.2071 22.1163L22.2071 10.1163L20.7929 8.70207L8.79289 20.7021L10.2071 22.1163Z"
                fill="#0D378D"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

// import Image from 'next/image'
// import Link from 'next/link'

// interface ProjectCardProps {
//   title: string
//   imageSrc: string
//   location?: string
//   href: string
// }

// export default function ProjectCard({
//   title,
//   imageSrc,
//   location,
//   href,
// }: ProjectCardProps) {
//   return (
//     <Link
//       href={href}
//       className='block rounded-lg bg-[#0D378D] shadow-md overflow-hidden hover:scale-105 transition-transform'>
//       <div className='relative w-full h-48'>
//         <Image
//           src={imageSrc}
//           alt={title}
//           fill
//           className='object-cover'
//           sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
//         />
//       </div>
//       <div className='p-4'>
//         <h2 className='text-lg font-semibold'>{title}</h2>
//         {location && <p className='text-sm text-white'>{location}</p>}
//       </div>
//     </Link>
//   )
// }
