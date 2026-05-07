"use client";
import React, { useState } from "react";
// import "swiper/css";
import "./ReviewsCarousel.css";
import ServiceSection from "./service-section";
import ReviewsToggler from "./ReviewsToggler";
import ReviewsGoogle from "./ReviewsGoogle";
import { ReviewsGoogleType } from "@/types/review";
import ReviewsHomestars from "./ReviewsHomestars";

const ReviewsCarousel = ({
  newestGoogleReviews,
}: {
  newestGoogleReviews: ReviewsGoogleType;
}) => {
  const [activeTab, setActiveTab] = useState<"google" | "homestars">("google");

  return (
    <div className="lg:mb-20 lg:mt-20 mb-10 px-8 lg:px-24">
      <ServiceSection
        title="What Our Clients Say"
        description="Reviews from Our Satisfied <br /> Customers"
        buttonText="Read More Reviews"
        isButton={true}
      />
      <p className="container max-w-7xl mx-auto px-4 text-black py-5">
        See why Primo Painters is a trusted choice for professional
        painting in Calgary. Our happy customers share their experiences,
        praising our quality work and great service. From detailed interior
        painting to full exterior projects, these testimonials show the skill
        and dedication of our Calgary painters.
      </p>

      <ReviewsToggler activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "google" && (
        <ReviewsGoogle newestGoogleReviews={newestGoogleReviews} />
      )}

      {activeTab === "homestars" && <ReviewsHomestars />}
    </div>
  );
};

export default ReviewsCarousel;

// const handleReviewsRequest = async () => {
//   try {
//     const myCookieValue = Cookies.get('reviews')
//     if (myCookieValue) {
//       const review: any = localStorage?.getItem('reviews')
//       setPlaceDetails(JSON.parse(review))
//       return
//     }
//     await axios
//       .get('/api/getReviews')
//       .then((response: any) => {
//         if (response?.data) {
//           setPlaceDetails(response?.data?.data)
//           localStorage?.setItem(
//             'reviews',
//             JSON.stringify(response?.data?.data)
//           )
//           Cookies.set('reviews', 'Added', { expires: 15 })
//         }
//       })
//       .catch((error: any) => {
//         console.log('Erro: ', error)
//       })
//   } catch (error) {
//     console.log('Error: ', error)
//   }
// }

// useEffect(() => {
//   handleReviewsRequest()
// }, [])
