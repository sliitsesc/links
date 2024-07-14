import Image from "next/image";

interface Props {
  title: string;
  time: string;
  description?: string;
  imageURL?: string;
  name?: string;
  position?: string;
  index: number;
}

export default function EventCard({
  title,
  description,
  time,
  imageURL,
  name,
  position,
  index,
}: Props) {
  return (
    <div className="text-white border-[2px] bg-black-background border-white w-full flex flex-row p-4">
      <div className="w-[100px] flex-shrink-0 mr-4">{time}</div>
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        {imageURL && (
          <div className="flex items-center">
            <div
              className={`overflow-x-clip relative w-[50px] h-[30px] ${
                index % 2 === 1 ? "bg-purple-100" : "bg-green-100"
              }`}>
              <Image
                src={imageURL}
                width={50}
                height={50}
                alt="profile"
                className="object-cover absolute -top-[26px] scale-125 grayscale object-top min-w-[50px] w-[50px] h-[50px]"
              />
            </div>
            <div className="ml-4 flex flex-col">
              <p className="font-bold">{name}</p>
              <p>{position}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
