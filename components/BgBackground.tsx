import { BgBackgroundImg } from "@/data/images";
import Image from "next/image";

export default function BgBackground() {
  return <Image src={BgBackgroundImg.src} alt={BgBackgroundImg.alt} fill />;
}
