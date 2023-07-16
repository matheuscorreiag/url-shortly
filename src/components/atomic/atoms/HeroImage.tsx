import PrincipalHero from "@/assets/undraw_mindfulness.svg";
import Image from "next/image";

export default function HeroImage() {
  return <Image alt="hero" src={PrincipalHero} className="w-96 h-96" />;
}
