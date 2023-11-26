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
      ) : (
        plants.map((plant) => (
          <React.Fragment key={plant.id}>
            <PlantCard
              id={plant.id}
              name={plant.commonName}
              watering={plant.watering}
              imgUrl={
                plant.images && plant.images[0]
                  ? plant.images[0].original_url
                  : "https://perenual.com/storage/species_image/1_abies_alba/regular/1536px-Abies_alba_SkalitC3A9.jpg"
              }
            />
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default ExplorePlants;
