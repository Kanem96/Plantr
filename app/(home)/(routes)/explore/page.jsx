"use client";
import getPlants from "@/actions/getPlants";
import PlantCard from "@/app/(components)/plantcard";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ExplorePlants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const allPlants = await getPlants();
        setPlants(allPlants);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching plants:", error);
        setPlants([]);
        setLoading(false);
      }
    };

    fetchPlants();
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-8 mt-20 p-8 mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : Array.isArray(plants) ? (
        plants.map((plant) => (
          <React.Fragment key={plant.id}>
            <PlantCard
              name={plant["common_name"]}
              watering={plant.watering}
              imgUrl={
                plant.default_image
                  ? plant.default_image.original_url
                  : plant.default_image?.licence_url
              }
            />
          </React.Fragment>
        ))
      ) : (
        <p>Plants data is not an array</p>
      )}
    </div>
  );
};

export default ExplorePlants;
