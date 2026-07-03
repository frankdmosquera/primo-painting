import Image from "next/image";
import googleLogo from "@/public/googleLogo.svg";
import logo3 from "@/public/logo3.svg";

export default function TrustBadges() {
  return (
    <div className="bg-white py-4 px-9 rounded-2xl shadow-lg  flex gap-6 items-center justify-center ">
      <div className="flex flex-col items-center">
        <Image
          src={googleLogo}
          alt="Google Reviews"
          title="Google Reviews"
          width={120}
          height={50}
          priority
          className="h-auto"
        />
      </div>
      <div>
        <Image
          src={logo3}
          alt="Canadian Certified"
          title="Canadian Certified"
          width={120}
          height={50}
          className="h-auto"
          priority
        />
      </div>
    </div>
  );
}
