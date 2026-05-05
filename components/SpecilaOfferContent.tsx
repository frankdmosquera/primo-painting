// import { Image } from "lucide-react";
// import Link from "next/link";

// export default function SpecilaOfferContent() {
//   return (
//     <div className="container mx-auto px-4 max-w-7xl">
//       <h6 className="text-center text-black lg:text-[22px] text-[18px] font-semibold mb-2">
//         Special Offer
//       </h6>
//       <h2 className="text-center lg:text-[36px] text-[26px]  font-semibold text-[#0D378D] uppercase mb-8">
//         Top Calgary House Painting Offers and Discounts
//       </h2>
//       <div className="offer_bg">
//         {/* Grid layout for content */}
//         <div className=" flex flex-col lg:flex-row gap-6 lg:gap-10">
//           {/* Swiper slider section */}
//           <div className="w-full lg:w-3/5">
//             <div className="swiper mySwiper offer_slider">
//               <div className="swiper-wrapper">
//                 {/* Slide 1 */}
//                 <div className="swiper-slide">
//                   <div className="offer-card relative h-[25rem] w-full">
//                     <Image
//                       src="/slider-image-1.webp"
//                       className="absolute object-cover"
//                       alt="Offer 1"
//                       fill
//                     />
//                     <div className="ribbon absolute  bg-red-500 text-white p-2">
//                       <p>10% Off on Interior</p>
//                     </div>
//                     <div className=" absolute bottom-6 left-0 right-0 ">
//                       <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
//                         Offer Starts from Oct 30, 2025. You
//                         must call for this offer.
//                       </h6>
//                       <p className="text-white p-4">
//                         10% OFF - Interior Painting
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Slide 2 */}
//                 <div className="swiper-slide">
//                   <div className="offer-card relative h-[25rem] w-full">
//                     <Image
//                       src="/special-Offer-2.png"
//                       className="absolute object-cover"
//                       alt="Offer 2"
//                       fill
//                     />
//                     <div className="ribbon absolute  bg-red-500 text-white p-2">
//                       <p>2 for 1 Deal</p>
//                     </div>
//                     <div className="offer-card-content absolute bottom-0 left-0 right-0  ">
//                       <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
//                         Offer Starts from Oct 30, 2025. You
//                         must call for this offer.
//                       </h6>
//                       <p className="text-white">
//                         Pay for one bedroom, get the second one half price!
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Slide 3 */}
//                 <div className="swiper-slide">
//                   <div className="offer-card relative h-[25rem] w-full">
//                     <Image
//                       src="/slider-image-1.webp"
//                       className="absolute object-cover"
//                       alt="Offer 1"
//                       fill
//                     />
//                     <div className="ribbon absolute  bg-red-500 text-white p-2">
//                       <p>20% Off on Interior</p>
//                     </div>
//                     <div className=" absolute bottom-6 left-0 right-0 ">
//                       <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
//                         Offer Starts from Oct 30, 2025. You
//                         must call for this offer.
//                       </h6>
//                       <p className="text-white p-4">
//                         10% OFF - Interior Painting
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Slide 4 */}
//                 <div className="swiper-slide">
//                   <div className="offer-card relative h-[25rem] w-full">
//                     <Image
//                       src="/special-Offer-2.png"
//                       className="absolute object-cover"
//                       alt="Offer 4"
//                       fill
//                     />
//                     <div className="ribbon absolute  bg-red-500 text-white p-2">
//                       <p>2 for 1 Deal</p>
//                     </div>
//                     <div className="offer-card-content absolute bottom-0 left-0 right-0 ">
//                       <h6 className="text-white bg-[rgba(13,55,141,0.24)] backdrop-blur-[7.85px] p-4">
//                         Offer Starts from Oct 30, 2025. You
//                         must call for this offer.
//                       </h6>
//                       <p className="text-white">
//                         Pay for one bedroom, get the second one half price!
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Navigation Buttons */}
//               <div className="swiper-button-prev image3  custom-prev-button offer_slider_prev" />
//               <div className="swiper-button-next image4 custom-prev-button  offer_slider_next" />
//             </div>
//           </div>
//           {/* Text content section */}
//           <div className="w-full pr-5 flex flex-col justify-center ">
//             <h5 className=" lg:text-xl  text-[20px]  mb-5">
//               For a limited time, Alberta Colour Painting is offering exclusive
//               discounts to help you refresh your space at an unbeatable price!
//             </h5>
//             <p className="text-[14px] lg:text-[16px] font-light">
//               Discover a variety of discounts and special deals at Alberta
//               Colour Painting, tailored to help you save on your Calgary house
//               painting projects throughout the year. Explore ongoing promotions
//               for both standard and specialty wall painting services, and ensure
//               you get the best value by visiting our offers page.
//             </p>

//             <Link href="/contact" className="cursor-pointer z-30">
//               <button className="flex items-center w-45 mt-3.5 gap-4 border-2 border-white rounded-full pl-5 pr-1.5  py-2 text-sm md:text-base font-medium bg-[#0D378D]  cursor-pointer transition-colors">
//                 contact US
//                 <svg
//                   width="32"
//                   height="30"
//                   viewBox="0 0 32 30"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect x="0.5" width="31" height="30" rx="15" fill="white" />
//                   <path
//                     d="M23 9C23 8.44771 22.5523 8 22 8L13 8C12.4477 8 12 8.44771 12 9C12 9.55228 12.4477 10 13 10L21 10L21 18C21 18.5523 21.4477 19 22 19C22.5523 19 23 18.5523 23 18L23 9ZM10.7071 21.7071L22.7071 9.70711L21.2929 8.29289L9.29289 20.2929L10.7071 21.7071Z"
//                     fill="#0D378D"
//                   />
//                 </svg>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
