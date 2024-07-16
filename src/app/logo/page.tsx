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
    <main className="relative bg-[#13131391]">
      <HeaderAnimation />
      <div className="flex w-full h-screen justify-center items-center">
        <Image
            src={"/logo/sesc-logo.svg"}
            width={500}
            height={500}
            alt=""
            className="mr-4  animate-pulse"
        />
          <h1>Starting Soon!</h1>
      </div>
    </main>
  );
}
