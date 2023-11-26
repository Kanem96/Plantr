"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import getPlant from "@/actions/getPlant";
import Image from "next/image";
import PlantCard from "@/app/(components)/plantcard";

const Plant = () => {
  const [plant, setPlant] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const plant = await getPlant(id);
        setPlant(plant);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching plants:", error);
        setPlant([]);
        setLoading(false);
      }
    };

    fetchPlant();
  }, []);

  return (
    <div className="flex flex-row flex-wrap gap-8 mt-20 p-8 mx-auto">
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
};

export default Plant;
