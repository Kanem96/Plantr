"use client";
import getUser from "@/actions/getUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Plants = () => {
  const [usersPlants, setUsersPlants] = useState([]);

  useEffect(() => {
    const fetchUsersPlants = async () => {
      const user = await getUser(1);
      const plants = user.plants;
      setUsersPlants(plants);
    };

    fetchUsersPlants();
  }, []);

  return (
    <div className="flex flex-col mt-20 p-8 mx-auto">
      <h2 className="text-black text-2xl">Your plants</h2>
      {usersPlants ? (
        <div className="flex flex-row flex-wrap gap-8 p-8 mx-auto">
          {usersPlants.map((plant) => (
            <p key={plant.id}>{plant.name}</p>
          ))}
        </div>
      ) : (
        <div className="flex flex-col mt-4 gap-2  items-center">
          <p>
            Look at all these empty pots. It looks like you have no plants,
            visit the{" "}
            <a href="/explore" className="underline text-green-600">
              explore
            </a>{" "}
            page to fill them up!
          </p>
          <Image
            src="/images/emptyPots.jpg"
            alt="empty pots"
            width={800}
            height={0}
            className="rounded opacity-90 shadow-md mt-2"
          />
        </div>
      )}
    </div>
  );
};

export default Plants;
