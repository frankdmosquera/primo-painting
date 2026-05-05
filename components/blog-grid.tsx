import type { BlogPost } from "@/lib/blog-data"
import BlogCard from "./blog-card"

interface BlogGridProps {
  posts: BlogPost[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}



// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Autoplay} from 'swiper/modules';
// import "swiper/css";
// import type { BlogPost } from "@/lib/blog-data";
// import BlogCard from "./blog-card";

// interface BlogGridProps {
//   posts: BlogPost[];
// }

// export default function BlogGrid({ posts }: BlogGridProps) {
//   return (
//     <Swiper
//       slidesPerView={1} // Default for small screens
//       spaceBetween={20} // Space between slides
//       loop={true} // Loop through slides
//       breakpoints={{
//         768: {
//           slidesPerView: 1, // 1 slide for small screens
//         },
//         1024: {
//           slidesPerView: 2, // 2 slides for medium screens (tablets)
//         },
//         1280: {
//           slidesPerView: 3, // 3 slides for large screens (desktops)
//         },
//       }}
//     >
//       {posts.slice(0, 3).map((post) => (
//         <SwiperSlide key={post.slug}>
//           <BlogCard post={post} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }
