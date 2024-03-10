import Image from "next/image";

interface Props {
  title: string;
  time: string;
  description?: string;
  imageURL?: string;
  name?: string;
  position?: string;
}

export default function EventCard({
  title,
  description,
  time,
  imageURL,
  name,
  position,
}: Props) {
  return (
    <div className="bg-white rounded-xl w-full flex flex-row p-4">
      <div className="w-[100px] flex-shrink-0 mr-4">{time}</div>
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <h2 className="text-xl font-medium">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        {imageURL && (
          <div className="flex items-center">
            <div>
              <Image
                src={imageURL}
                width={50}
                height={50}
                alt="profile"
                className="rounded-full mr-4 object-cover min-w-[50px] w-[50px] h-[50px] border-[2px] border-orange-400"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold">{name}</p>
              <p>{position}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
