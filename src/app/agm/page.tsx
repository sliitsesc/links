import EventCard from "@/components/EventCard";
import { Calendar, CalendarFold, MapPin, PinIcon } from "lucide-react";
import { AgendaData } from "@/data/AgendaData";

export default function AGMPage() {
  return (
    <div className="max-w-[500px] mx-auto pb-20 px-4">
      <div className="text-center mt-10">
        <h1 className="text-[28px] text-white">Agenda</h1>
        <p className="text-white text-[18px] uppercase">
          Annual General Meeting
        </p>
        <p className="text-white text-[18px]">SESC - 2024/25</p>
      </div>
      <div className="classnaad  flex flex-row justify-evenly mt-6 mb-6">
        <div className="inline-flex text-white items-center">
          <CalendarFold size={24} />
          <span className="ml-2 uppercase text-[16px] leading-none">
            11th march 2024
            <br />
            3:30 PM
          </span>
        </div>
        <div className="w-[0.5px] h-10 bg-white"></div>
        <div className="inline-flex text-white items-center">
          <MapPin size={24} />
          <span className="ml-2 uppercase text-[16px] leading-none">
            A504
            <br />
            Main Building
          </span>
        </div>
      </div>
      {/* map agenda data and render the event cards with map method*/}
      <div className="flex flex-col gap-y-4">
        {AgendaData.map((event, index) => ({
          ...event,
          key: index,
        })).map((event) => (
          <EventCard
            key={event.key}
            title={event.title}
            description={event.description}
            time={event.time}
            imageURL={event.imageURL}
            name={event.name}
            position={event.position}
          />
        ))}
      </div>
    </div>
  );
}
