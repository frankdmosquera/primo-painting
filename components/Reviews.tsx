import "./ReviewsCarousel.css";
import ServiceSection from "./service-section";

import GoogleReviews from "./GoogleReviews";
import HomestarsReviewsBig from "./HomestarsreviewsBig";
import HomestarsReviewsSmall from "./HomestarsReviewsSmall";

const Reviews = () => {
  return (
    <>
      {" "}
      {/* <ReviewsCarousel newestGoogleReviews={newestGoogleReviews} /> */}
      <div className="lg:mb-20 lg:mt-20 mt-10 px-8 lg:px-24">
        <ServiceSection
          title="What Our Clients Say"
          description="Reviews from Our Satisfied <br /> Customers"
          buttonText="Read More Reviews"
          isButton={true}
        />
        <p className="container max-w-7xl mx-auto px-4 text-black py-5">
          See why Primo Painting is a trusted choice for professional painting
          in Calgary.
          <span className="hidden">
            Our happy customers share their experiences, praising our quality
            work and great service. From detailed interior painting to full
            exterior projects, these testimonials show the skill and dedication
            of our Calgary painters.
          </span>
        </p>
      </div>
      <div className="max-w-[1600px] mx-auto">
        <GoogleReviews />
        <HomestarsReviewsBig />
        <HomestarsReviewsSmall />
      </div>
    </>
  );
};

export default Reviews;
