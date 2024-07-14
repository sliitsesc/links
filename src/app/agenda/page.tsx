import EventCard from "@/components/EventCard";
import { CalendarFold, MapPin, PinIcon } from "lucide-react";
import { AgendaData } from "@/data/AgendaData";
import Image from "next/image";
import { Chakra_Petch, Plus_Jakarta_Sans } from "next/font/google";

export default function AGMPage() {
  return (
    <>
      <div className="max-w-[500px] mx-auto pb-20 px-4">
        <div className={`${bebasNeue.className} text-center mt-10`}>
          <h1 className="text-[46px] leading-0 text-white">Agenda</h1>
          <p className="text-white leading-0 text-[25px] uppercase">
            SE Orientation
          </p>
          <p className="text-white leading-0 text-[25px]">SESC - 2024/25</p>
        </div>

        <div
          className={`${bebasNeue.className} flex flex-row justify-center mt-6 mb-6`}>
          <div className="inline-flex text-white items-center">
            <CalendarFold size={36} />
            <span className="ml-2 uppercase text-[19px] leading-none">
              17th July 2024
              <br />
              1:30 PM
            </span>
          </div>

          <div className="w-[0.5px] h-10 bg-white mx-[35px]"></div>

          <div className="inline-flex text-white items-center">
            <MapPin size={36} />
            <span className="ml-2 uppercase text-[19px] leading-none">
              Main
              <br />
              Auditorium
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          {AgendaData.map((event, index) => ({
            ...event,
            key: index,
          })).map((event) => (
            <EventCard
              key={event.key}
              title={event.title}
              //   description={event?.title}
              time={event.time}
              imageURL={event.imageURL}
              name={event.name}
              position={event.position}
            />
          ))}
        </div>
      </div>
      <div className=" bg-white">
        <div className="max-w-[500px] py-5 mx-auto flex flex-row items-center justify-center px-[150px] ">
          <Image
            src={"/logo/fcsc-logo.svg"}
            width={150}
            height={150}
            alt=""
            className="mr-4"
          />
          <div className="w-[0.5px] h-10 bg-black"></div>
          <Image src={"/logo/sesc-logo.svg"} width={150} height={150} alt="" />
        </div>
      </div>
    </>
  );
}
