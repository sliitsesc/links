import EventCard from "@/components/EventCard";
import HeaderAnimation from "@/components/HeaderAnimation/HeaderAnimation";
import { AgendaData } from "@/data/AgendaData";
import { CalendarFold, MapPin } from "lucide-react";
import { Chakra_Petch, Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const chakra = Chakra_Petch({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="relative bg-[#13131317]">
      <HeaderAnimation />
      <div className="flex flex-col w-full h-screen justify-center items-center white-glow">
        <Image
          src={"/logo/sesc-logo.svg"}
          width={400}
          height={400}
          alt=""
          className=""
        />
        <h1
          className={`tracking-wide text-white white-glow-1 animate-pulse font-semibold text-center text-[36px] mt-10`}>
          Starting Soon!
        </h1>
      </div>
    </main>
  );
}
