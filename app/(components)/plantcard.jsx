import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoWater } from "react-icons/io5";

const PlantCard = ({ id, name, watering, imgUrl }) => {
  return (
    <Link
      href={{
        pathname: "/plant",
        query: { id: id },
      }}
    >
      <div className="flex flex-col items-center justify-evenly p-2 bg-white w-[360px] h-[360px] md:w-60 md:h-60 rounded shadow-sm hover:bg-neutral-50 cursor-pointer">
        <Image
          src={imgUrl}
          alt={`Image of ${name}`}
          width={200}
          height={200}
          className="rounded h-[200px] w-[200px] overflow-hidden opacity-90 pb-2"
        />
        <p className="text-green-900 font-semibold text-2xl md:text-sm text-center">
          {name}
        </p>
        <div className="flex flex-row text-center justify-center">
          <IoWater className="text-blue-300 mr-1" />
          <p className="text-neutral-600 font-semibold text-2xl md:text-sm">
            {watering}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PlantCard;
