"use client";
import PlantCard from "@/app/(components)/plantcard";
import { usePlants } from "@/providers/plantprovider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Spinner from "../../_components/spinner";

const Home = () => {
  const { plants, loading } = usePlants();
  const router = useRouter();

  const sliceOfPlants = plants.slice(0, 10);

  return (
    <div className="flex flex-col sm:flex-row px-6 gap-4">
      <section className="h-screen pr-6 sm:border-r pt-[100px] border-neutral-150 w-[70%]">
        <div>
          <h3 className="text-2xl font-bold">Welcome Back!</h3>
          <p>Lets see how your plants are doing</p>
          <div className="flex w-[100%] h-[250px] rounded-md">
            <Image
              src="/images/homeBanner.jpg"
              alt="page banner showing plants"
              width={1000}
              height={250}
              style={{ objectFit: "cover" }}
              className="rounded shadow-md opacity-80 my-4 w-[100%]"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold mt-4">Find a new plant</h3>
          <div className="flex flex-row flex-wrap gap-8 pt-4">
            {loading ? (
              <div className="w-full">
                <Spinner></Spinner>
              </div>
            ) : (
              sliceOfPlants.map((plant) => (
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
          <button
            className="bg-orange-600 text-neutral-50 p-2 rounded shadow-sm my-8 w-[150px] hover:text-white hover:bg-orange-500"
            onClick={() => router.push("/explore")}
          >
            Find plants
          </button>
        </div>
      </section>
      <section className="pt-[100px]">Your Plants</section>
    </div>
  );
};

export default Home;
