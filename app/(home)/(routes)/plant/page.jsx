"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import getPlant from "@/actions/getPlant";
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
        <React.Fragment key={plant.plantId}>
          <PlantCard
            id={plant.plantId}
            name={plant["common_name"]}
            watering={plant.watering}
            imgUrl={
              plant.default_image
                ? plant.default_image.original_url
                : plant.default_image?.licence_url
            }
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Plant;
