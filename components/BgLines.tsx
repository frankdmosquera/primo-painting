import BgBackground2 from "@/public/SVGs/above-gallery-bg-line.svg";
import Image from "next/image";
export default function BgLines() {
  return (
    <div className="absolute ">
      <Image src={BgBackground2} alt="bg-Image" />
    </div>
  );
}
