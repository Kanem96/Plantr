import Image from "next/image";
import React from "react";

const PlantCard = ({ name, watering, imgUrl }) => {
  return (
    <div className="flex flex-col items-center justify-evenly p-2 bg-white w-60 h-60 rounded shadow-sm hover:bg-neutral-50 cursor-pointer">
      <Image
        src={imgUrl}
        alt={`Image of ${name}`}
        width={200}
        height={200}
        className="rounded h-[200px] w-[200px]"
      />
      <p>{name}</p>
      <p>{watering}</p>
    </div>
  );
};

export default PlantCard;
