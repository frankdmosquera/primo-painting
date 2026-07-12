import WorkmanshipIcon from "./AboutUs/WorkmanshipIcon";
import TeamIcon from "./AboutUs/TeamIcon";
import LicensedIcon from "./AboutUs/LicensedIcon";
import BgBackground from "./BgBackground";
import FivestarIcon from "./AboutUs/FivestarIcon";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#E2E7F1] py-20 lg:px-4 px-10 relative">
      <div className="absolute top-[-490px]">
        <BgBackground />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="lg:text-[36px] text-[25px] font-bold text-[#0D378D] text-center ">
          WHY HOMEOWNERS CHOOSE PRIMO PAINTERS
        </h2>
        <p className="text-[#0D378D] mb-12 mt-4">
          We're committed to delivering a painting experience that's as
          exceptional as the finished result.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 xl:gap-24">
          {/* Local owned */}
          <div className="flex flex-col  text-start">
            <div className="text-[#0D378D] mb-4">
              <div className="flex text-start">
                <WorkmanshipIcon />
              </div>
            </div>
            <h3 className=" lg:text-[24px]  text-[20px] font-semibold text-[#0D378D] mb-3 ">
              Small Local Team
            </h3>
            <p className=" text-black">
              As a locally owned Calgary business, we take on a limited number
              of projects so every home receives the attention it deserves.
            </p>
          </div>

          {/* Quality Workmanship*/}
          <div className="flex flex-col ">
            <div className="text-[#0D378D] mb-4">
              <FivestarIcon />
            </div>
            <h3 className=" lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
              Superior Workmanship
            </h3>
            <p className="text-black">
              From careful preparation to clean lines and smooth finishes, we
              take pride in delivering results that look great and last.
            </p>
          </div>

          {/* Customer Satisfaction */}
          <div className="flex flex-col ">
            <div className="text-blue mb-4">
              <LicensedIcon />
            </div>
            <h3 className="lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
              Reliable & Professional
            </h3>
            <p className=" text-black">
              We show up on time, protect your home, keep the workspace clean,
              and complete projects efficiently with clear communication
              throughout.
            </p>
          </div>

          {/* Honest Pricing */}
          {/* <div className="flex flex-col ">
            <div className="text-[#0D378D] mb-4">
              <TeamIcon />
            </div>
            <h3 className="lg:text-[24px]  text-[20px]  font-semibold text-[#0D378D] mb-3">
              Honest Competitive Pricing
            </h3>
            <p className=" text-black">
              No inflated estimates or unnecessary upselling. We provide fair
              pricing, detailed quotes, and excellent value for professional
              interior painting.
            </p>
          </div> */}

          {/* Respect for Your Home */}
          <div className="flex flex-col ">
            <div className="text-[#0D378D] mb-4">
              <TeamIcon />
            </div>

            <h3 className="lg:text-[24px] text-[20px] font-semibold text-[#0D378D] mb-3">
              Respect for Your Home
            </h3>

            <p className="text-black">
              We protect your floors, furniture, and belongings while
              maintaining a clean workspace from start to finish, treating your
              home with the care it deserves.
            </p>
          </div>
        </div>
      </div>

      {/* Background decorative element */}
    </div>
  );
}
