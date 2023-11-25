"use client";
import getPlants from "@/actions/getPlants";
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
    <>
      {loading ? (
        <p>Loading...</p>
      ) : Array.isArray(plants) ? (
        plants.map((plant) => (
          <React.Fragment key={plant.id}>
            <p>{plant["common_name"]}</p>
          </React.Fragment>
        ))
      ) : (
        <p>Plants data is not an array</p>
      )}
    </>
  );
};

export default ExplorePlants;
