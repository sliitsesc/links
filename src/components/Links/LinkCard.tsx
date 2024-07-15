import React from "react";

interface Props {
  title: string;
  icon?: React.ReactNode;
  url: string;
  featured?: boolean;
}

export default function LinkCard({ title, icon, url, featured }: Props) {
  return (
    <a
      className={`text-white border-[2px] bg-black-background border-white w-full flex flex-row justify-between p-4 hover:bg-green-100 hover:border-black-background hover:text-black-background transition-all duration-[0.4s] ease-in-out hover:shadow-md ${
        featured ? "green-glow" : ""
      }`}
      href={url}
      target="_blank">
      <span className="text-xl">{title}</span>
      <span>{icon}</span>
    </a>
  );
}
