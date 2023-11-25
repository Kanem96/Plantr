"use client";
import getPlants from "@/app/actions/getPlants";
import React, { useEffect } from "react";
import { useState } from "react";

const ExplorePlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const allPlants = await getPlants();
      setPlants(allPlants);
    };
    fetchPlants();
  }, []);

  return (
    <>
      {plants === undefined ? (
        <p>Loading...</p>
      ) : (
        plants.map((plant) => <p key={plant.id}>{plant.id}</p>)
      )}
    </>
  );
};

export default ExplorePlants;
