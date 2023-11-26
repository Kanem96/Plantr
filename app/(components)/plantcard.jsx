import Image from "next/image";
import Link from "next/link";
import React from "react";

const PlantCard = ({ id, name, watering, imgUrl }) => {
  return (
    <Link
      href={{
        pathname: "/plant",
        query: { id: id },
      }}
    >
      <div className="flex flex-col items-center justify-evenly p-2 bg-white w-60 h-60 rounded shadow-sm hover:bg-neutral-50 cursor-pointer">
        <Image
          src={imgUrl}
          alt={`Image of ${name}`}
          width={200}
          height={200}
          className="rounded h-[200px] w-[200px] overflow-hidden opacity-90"
        />
        <p>{name}</p>
        <p>{watering}</p>
      </div>
    </Link>
  );
};

export default PlantCard;
