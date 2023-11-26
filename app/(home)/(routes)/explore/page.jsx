"use client";
import PlantCard from "@/app/(components)/plantcard";
import { usePlants } from "@/providers/plantprovider";
import React from "react";
import Spinner from "../../_components/spinner";

const ExplorePlants = () => {
  const { plants, loading } = usePlants();

  return (
    <div className="flex flex-row flex-wrap gap-8 mt-20 p-8 mx-auto h-full">
      {loading ? (
        <div className="w-full h-3/4 flex justify-center items-center">
          <Spinner></Spinner>
        </div>
      ) : (
        plants.map((plant) => (
          <React.Fragment key={plant.plantId}>
            <PlantCard
              id={plant.plantId}
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
