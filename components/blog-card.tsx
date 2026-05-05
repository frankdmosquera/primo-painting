import type { BlogPost } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-[#E2E7F1] p-5 overflow-hidden  transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64 ">
        <Image
          src={post.imageUrl || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div >
       
        <p className="text-[16px] text-[#0D378D] font-bold uppercase  mt-3 bg-[#CEE4E1]  lg:w-30 w-30 text-center   p-1.5  ">
            {post.date}
          </p>
        

        
        <h2 className="lg:text-[28px] text-[18px] font-bold text-[#0D378D] mt-2">{post.title}</h2>

        <p className="text-black mt-3 font-medium line-clamp-3 text-[18px]">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className=" flex   items-center gap-2.5 mt-4 text-[#0D378D] font-bold hover:underline"
        >
          Read More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
          >
            <g clipPath="url(#clip0_125_268)">
              <path
                d="M1.625 13.3428L7.625 7.34277L1.625 1.34277"
                stroke="#0D378D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_125_268">
                <rect
                  width="8"
                  height="14"
                  fill="white"
                  transform="translate(0.625 0.342773)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>
    </div>
  );
}
