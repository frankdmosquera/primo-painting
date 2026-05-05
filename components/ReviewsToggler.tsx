import { cn } from "@/lib/utils";
import GoogleLogo2 from "@/public/google-icon-download.svg";
import homeStars from "@/public/home-stars.svg";
import Image from "next/image";

export default function ReviewsToggler({
  activeTab,
  setActiveTab,
}: {
  activeTab: "google" | "homestars";
  setActiveTab: React.Dispatch<React.SetStateAction<"google" | "homestars">>;
}) {
  return (
    <div className="container m-auto flex  gap-4 mb-16">
      <button
        onClick={() => setActiveTab("google")}
        className={cn(
          "flex items-center gap-1  cursor-pointer  px-2 rounded-[20px] transition-colors w-full justify-center",
          activeTab === "google"
            ? "bg-[#0D378D] text-white"
            : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
        )}
      >
        <span className="h-10 w-10 relative">
          <Image src={GoogleLogo2} alt="gooleLogo" />
        </span>
        <span className="text-[10px] md:text-[15px]  text-left font-medium lg:text-[19px]">
          Google Reviews
        </span>
      </button>

      <button
        onClick={() => setActiveTab("homestars")}
        className={cn(
          "flex items-center gap-2 py-3 px-6 cursor-pointer rounded-[20px] transition-colors w-full justify-center",
          activeTab === "homestars"
            ? "bg-[#0D378D] text-white"
            : "bg-white text-[#0D378D] border-2 border-[#CADBFF]"
        )}
      >
        <span className="flex justify-center items-center relative">
          <Image src={homeStars} alt="gooleLogo" />
        </span>
        <span className="text-[10px] md:text-[15px] text-left font-medium lg:text-[19px]">
          HomeStars Reviews
        </span>
      </button>
    </div>
  );
}
