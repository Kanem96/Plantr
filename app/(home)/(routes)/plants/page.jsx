"use client";
import getUser from "@/actions/getUser";
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
      <div className="flex flex-row flex-wrap gap-8 p-8 mx-auto">
        {usersPlants.map((plant) => (
          <p key={plant.id}>{plant.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Plants;
