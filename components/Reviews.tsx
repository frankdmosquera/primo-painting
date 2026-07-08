import "./ReviewsCarousel.css";
import ServiceSection from "./service-section";
import GoogleReviews from "./GoogleReviews";
import ScrollingBannerA from "./scrolling-banner-a";

const Reviews = () => {
  return (
    <>
      <div className="bg-blue-50 py-12">
        {/* <ReviewsCarousel newestGoogleReviews={newestGoogleReviews} /> */}
        <div className=" px-8 lg:px-24 pb-6 lg:mb-20 lg:mt-20 ">
          <ServiceSection
            title="What Our Clients Say"
            description="Reviews from Our Satisfied <br /> Customers"
            buttonText="Read More Reviews"
            isButton={true}
          />
          <p className="container max-w-7xl mx-auto px-4 text-black py-5">
            See why Primo Painting is a trusted choice for professional interior
            painting in Calgary.
            <span className="hidden">
              Our happy customers share their experiences, praising our quality
              work and great service. From detailed interior painting to full
              exterior projects, these testimonials show the skill and
              dedication of our Calgary painters.
            </span>
          </p>
        </div>
        <div className="max-w-[1600px] mx-auto">
          <GoogleReviews />
        </div>
      </div>
      <ScrollingBannerA />
    </>
  );
};

export default Reviews;
